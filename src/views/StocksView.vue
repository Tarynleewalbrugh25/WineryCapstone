<template>
  <div class="container">
    <div>
      <h2 id="userHeading" class="display-5 mt-4 mb-4">Stock</h2>
    </div>
      <AddProduct />

      <div class="container">
        <div class="table-responsive">
          <table class="table">
          <thead>
            <tr>
              <th> ID</th>
              <th> Name</th>
              <th>Brand</th>
              <th>Year</th> <!-- Changed to Year -->
              <th>Category</th>
              <th>Price</th>
              <th>Taste</th>
              <th>Product URL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="products">
            <tr v-for="product in products" :key="product.itemID">
              <td>{{ product.itemID }}</td>
              <td>{{ product.itemName }}</td>
              <td>{{ product.Brand }}</td>
              <td>R {{ product.itemYear }}</td>
              <td>{{ product.Categories }}</td>
              <td>{{ product.Price }}</td>
              <td>{{ product.Taste }}</td>
              <td>
                <img :src="product.itemUrl" style="max-width: 100px; max-height: 100px;" />
              </td>
              <td class="d-flex gap-2">
                <updateProduct :product="product" />
                <button
                  id="deleteBut"
                  class="btn btn-success deleteButton"
                  @click="(event) => deleteProduct(product.itemID)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
</template>

<script>

import AddProduct from "../components/AddProduct.vue";
import updateProduct from "../components/UpdateProduct.vue";
export default {
  components: {
    AddProduct,
    updateProduct,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    deleteProduct(itemID) {
      this.$store.dispatch("deleteProduct", { id: itemID });
    },
    },
    // updateProduct(product) {
    //   let editProduct = {
    //     itemID: product.itemID,
    //     itemName: product.itemName,
    //     itemUrl: product.itemUrl,
    //     Categories: product.Categories,
    //     Price: product.Price,
    //     Taste: product.Taste,
    //   };
    // },
  }
</script>

<style scoped>
/* #userHeading {
  margin-top: 100px;
  margin-bottom: 100px;
}

#productHeading {
  margin-top: 100px;
  margin-bottom: 100px;
} */
#deleteBut {
  height: 50px;
  /* margin-bottom: 10px;
  margin-top: 100px; */
  background-color: rgb(39, 142, 86);
  color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
}
#deleteBut:hover {
  background-color: rgb(35, 211, 105);
  color: white;
  transform: translateY(-2px);
}

#deleteUse {
  height: 50px;
  /* margin-bottom: 10px;
  margin-top: 100px; */
  background-color: rgb(39, 142, 86);
  color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
}

#deleteUse:hover {
  background-color: rgb(35, 211, 105);
  color: white;
  transform: translateY(-2px);
}

#prodImg {
  width: 160px;
  /* height:160px  */
  aspect-ratio: 1/1;
}

table{
  border: solid  rgb(39, 142, 86);
}
</style>
