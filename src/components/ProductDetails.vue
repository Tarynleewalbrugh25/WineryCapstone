<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#productDetailsModal">
      <i class="bi bi-eye"></i> 
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="productDetailsModal" tabindex="-1" aria-labelledby="productDetailsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="productDetailsModalLabel">Product Details</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <p><strong>ID:</strong> {{ product.prodID }}</p>
            </div>
            <div class="mb-3">
              <p><strong>Name:</strong> {{ product.prodName }}</p>
            </div>
            <div class="mb-3">
              <p><strong>Brand:</strong> {{ product.prodBrand }}</p>
            </div>
            <div class="mb-3">
              <p><strong>Category:</strong> {{ product.prodCat }}</p>
            </div>
            <div class="mb-3">
              <p><strong>Price:</strong> R{{ product.prodAmount }}</p>
            </div>
            <div class="mb-3">
              <p><strong>Quantity:</strong> {{ product.prodQuanity }}</p>
            </div>
            <div class="mb-3">
              <img :src="product.prodURL" style="max-width: 100px; max-height: 100px;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
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
  