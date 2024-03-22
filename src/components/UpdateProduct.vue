<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateProductModal">
        <i class="bi bi-pencil"></i>
    </button>
    <!-- Modal -->
    <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Details</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct">
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="prod ID" v-model="payload.prodID">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="prod Name" v-model="payload.prodName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="prod URL" v-model="payload.prodURL">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="prod Cat" v-model="payload.prodCat">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" required="required" placeholder="prod Quanity" v-model="payload.prodQuanity">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Amount" v-model="payload.prodAmount">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-success"
                >Update</button>
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
    name: 'UpdateProduct',
    data() {
      return {
        payload: {
          prodID: '',
          prodName: '',
          prodURL: '',
          prodCat: '',
          prodAmount: '',
          prodQuanity: ''
        }
      }
    },
    methods: {
  async updateProduct() {
    try {
      await this.$store.dispatch('updateProduct', { id: this.payload.prodID, data: this.payload } );
      Swal.fire({
            title: 'Update Successful',
            text: 'User has been updated successfully!',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
  
          setTimeout(() => {
            window.location.reload();
          }, 3000);
  
    } catch (error) {
      console.error(error);
      Swal.fire({
            title: 'Error',
            text: 'Failed to update user',
            icon: 'error',
            timer: 2000
          });
          
          setTimeout(() => {
            window.location.reload();
          }, 3000);
    }
  }
    }
  }
  </script>
  <style scoped>
  .modalButton {
  height: 52px;
    margin: auto;
    margin-bottom: 110px;
    background-color: burlywood;
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
  color:white;
  transform: translateY(-2px);
  }
  @media (max-width: 768px) {
  .modalButton {
    height: 40px; /* Reduce button height for smaller screens */
    font-size: 14px; /* Reduce font size for smaller screens */
  }
}

/* Media query for even smaller screens */
@media (max-width: 576px) {
  .modalButton {
    height: 30px; /* Further reduce button height for very small screens */
    font-size: 12px; /* Further reduce font size for very small screens */
    padding: 0 10px; /* Adjust padding for smaller screens */
  }
}

  </style>