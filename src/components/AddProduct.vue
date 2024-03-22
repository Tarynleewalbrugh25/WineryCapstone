
<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#addproductModal">
    <i class="bi bi-plus-lg"></i> Add Product
  </button>

  <!-- Modal -->
  <div class="modal fade" id="addproductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Product Details</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addProduct">
           <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Prod ID" v-model="payload.prodID">
           </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Product Name" v-model="payload.prodName">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Product Brand" v-model="payload.prodBrand">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Product Image" v-model="payload.prodURL">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Product Category" v-model="payload.prodCat">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Quantity" v-model="payload.prodQuanity">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Amount" v-model="payload.prodAmount">
        </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-success">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'AddProduct',
  data() {
    return {
      payload: {
        prodID: '',
        prodName: '',
        prodBrand: '',
        prodURL: '',
        prodCat: '',
        prodQuanity: '',
        prodAmount: ''
      }
    };
  },
  methods: {
    async addProduct() {
      try {
        await this.$store.dispatch('addProduct', this.payload);
        Swal.fire({
          title: 'Added Successful',
          text: 'Product has been added successfully!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        window.location.reload(); 
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to add product',
          icon: 'error',
          timer: 2000
        });
      }
    }
  }
};
</script>
<style scoped>
.modalButton {
  position: relative;
  height: 40px;
margin-bottom: 10px;
margin-top: 15px;
background-color:burlywood;
color: white;
border-radius: 5px;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
font-size: 16px;
font-weight: bold;
padding: 0 20px;
cursor: pointer;
}

.modalButton:hover {
  background-color: brown;
color: white;
transform: translateY(-2px);
}
</style>