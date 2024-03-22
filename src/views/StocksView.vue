<template>
  <div class="container">
    <div>
      <h2 id="userHeading" class="display-4 mt-4 mb-4 hed1">Products</h2>
    </div>
    <div class="mb-2">
      <input type="text" v-model="searchQuery" placeholder="Search products..." class="form-control">
    </div>
    <div class="mb-4 mt-4 d-flex justify-content-between">
      <button @click="sortByPriceAsc" class="btn btn-brown sortButton">Sort by Price (Low to High)</button>
      <button @click="sortByPriceDesc" class="btn btn-brown sortButton">Sort by Price (High to Low)</button>
    </div>
    <div class="container">
      <div class="table-responsive">
        <table class="table mb-4 lavanderia-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Categories</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody v-if="filteredProducts && filteredProducts.length > 0">
            <tr v-for="product in filteredProducts" :key="product.prodID">
              <td>{{ product.prodID }}</td>
              <td @click="showProductDetails(product)">{{ product.prodName }}</td>
              <td>{{ product.prodBrand }}</td>
              <td>{{ product.prodCat }}</td>
              <td>
                <span>{{ product.prodQuanity }}</span>
                <button type="button" class="btn btn-sm" @click="incrementQuantity(product)">+</button>
                <button type="button" class="btn btn-sm" @click="decrementQuantity(product)">-</button>
              </td>
              <td>R{{ product.prodAmount }}</td>
              <td>{{ calculateTotalPrice(product.prodQuanity, product.prodAmount) }}</td>
              <td @click="showProductDetails(product)">
                <img :src="product.prodURL" style="max-width: 100px; max-height: 100px;" />
              </td>
              <ProductDetails v-if="selectedProduct" :product="selectedProduct" />
            </tr>
          </tbody>
          <tbody v-else>
           <tr>
             <td colspan="8" class="text-center">No products found</td>
           </tr>
         </tbody>
        </table>
      </div>
    </div>
    <button @click="downloadPDF" class="btn btn-primary downloadButton">Download Report</button>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ProductDetails from '../components/ProductDetails.vue';

export default {
  components: {
    ProductDetails
  },
  data() {
    return {
      selectedProduct: null,
      searchQuery: '',
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      if (!this.searchQuery) {
        return this.products;
      } else {
        const query = this.searchQuery.toLowerCase();
        return this.products.filter(product =>
          product.prodName.toLowerCase().includes(query) ||
          product.prodBrand.toLowerCase().includes(query) ||
          product.prodCat.toLowerCase().includes(query)
        );
      }
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    // this.$store.dispatch('deleteUser')
  },
  methods: {
    calculateTotalPrice(quantity, amount) {
      return "R" + (quantity * amount).toFixed(2);
    },
    incrementQuantity(product) {
      product.prodQuanity++;
    },
    decrementQuantity(product) {
      if (product.prodQuanity > 0) {
        product.prodQuanity--;
      }
    },
    showProductDetails(product) {
      this.selectedProduct = product;
    },
    sortByPriceAsc() {
      this.filteredProducts.sort((a, b) => a.prodAmount - b.prodAmount);
    },

    // Method to sort products by price in descending order
    sortByPriceDesc() {
      this.filteredProducts.sort((a, b) => b.prodAmount - a.prodAmount);
    },
    downloadPDF() {
      const element = document.querySelector('.table-responsive');

      html2canvas(element).then(canvas => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 208;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('products_report.pdf');
      });
    }
  }
}
</script>

<style scoped>
.prodImg {
  max-width: 100%;
  height: auto;
}
.display-4 {
  font-size: 2.5rem; /* Base font size */
}
.downloadButton {
  height: 50px;
  background-color: burlywood;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: italic;
  padding: 0 20px;
  cursor: pointer;
}

.downloadButton:hover {
  background-color: brown;
  color: white;
  transform: translateY(-2px);
}
.sortButton {
  background-color: burlywood;
  color: black;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: italic;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  /* Reduce font size for smaller screens */
  .display-4 {
    font-size: 2rem;
  }
}

/* Media query for even smaller screens */
@media (max-width: 576px) {
  /* Further reduce font size for smaller screens */
  .display-4 {
    font-size: 1.5rem;
  }
}
</style>