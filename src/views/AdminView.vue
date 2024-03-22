<template>
   <div class="container">
    <div>
      <h2 id="userHeading" class="display-4 mt-4 mb-4 hed1">Users</h2>
    </div>
    <Signup />
    <AddUser :user="user" />
    <div class="container">
        <div class="table-responsive">
          <table class="table lavanderia-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Email</th>
            <th>User role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td class="d-flex gap-2">
              <updateUser :user="user" />
              <button
                id="deleteUse"
                class="btn btn-success deleteButton"
                @click="(event) => deleteUser(user.userID)"
              ><i class="bi bi-trash3"></i>
              </button>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
     <div class="mt-4">
      <div class="row">
        <h2 id="productHeading" class="display-4 mb-4 hed1">Products</h2>
      </div>
      <AddProduct />
      <div class="container">
        <div class="table-responsive">
          <table class="table lavanderia-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Categories</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Product URL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="products">
            <tr v-for="product in products" :key="product.prodID">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.prodBrand }}</td>
              <td>{{ product.prodCat }}</td>
              <td>{{ product.prodQuanity }}</td>
              <td>R{{ product.prodAmount }}</td>
              <td>
                <img :src="product.prodURL" style="max-width: 50px; max-height: 50px;" />
              </td>
              <td class="d-flex gap-2">
                <updateProduct :product="product"/>
              <button
                id="deleteBut"
                class="btn btn-success deleteButton"
                @click="(event) => deleteProd(product.prodID)"
              ><i class="bi bi-trash3"></i>
              </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div> 
</template>


<script>

import AddProduct from "../components/AddProduct.vue";
import updateUser from "../components/UpdateUserModal.vue";
import updateProduct from "../components/UpdateProduct.vue";
import Signup from "@/components/Signup.vue";
export default {
  components: {
    AddProduct,
    updateUser,
    updateProduct,
    Signup
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchProducts");
    // this.$store.dispatch('deleteUser')
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
    },
    deleteProd(prodID) {
      this.$store.dispatch("deleteProduct", { id: prodID });
    },
    updateUser(user) {
      let editUser = {
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        userRole: user.userRole,
        gender: user.gender,
        userAge: user.userAge,
      };
      this.$store.dispatch("updateUser", { id: user.userID, data: editUser });
    },
    updateProduct(product) {
      let editProduct = {
        prodID: product.prodID,
        prodName: product.prodName,
        prodBrand: product.prodBrand,
        prodURL: product.prodURL,
        prodCat: product.prodCat,
        prodQuanity: product.prodQuanity,
        prodAmount: product.prodAmount,
      };
      this.$store.dispatch("updateProduct", {id: product.prodID, data: editProduct});
    },
  },
};
</script>

<style scoped>

/* #deleteBut {
  height: 50px;
  background-color: burlywood;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
}
#deleteBut:hover {
  background-color: brown;
  color: white;
  transform: translateY(-2px);
}

#deleteUse {
  height: 50px;
  margin-bottom: 10px;
  margin-top: 100px;
  background-color: burlywood;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
  vertical-align: middle; 


#deleteUse:hover {
  background-color: brown;
  color: white;
  transform: translateY(-2px);
} */
 

#deleteBut {
  height: 50px;
  background-color: burlywood;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: italic;
}
#deleteBut:hover {
  background-color: brown;
  color: white;
  transform: translateY(-2px);
}

#deleteUse {
  height: 50px;
  background-color: burlywood;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: italic;
}

#deleteUse:hover {
  background-color: brown;
  color: white;
  transform: translateY(-2px);
}

table, th, td {
    margin: auto;
    border: 1.5px solid #3F291C;
  }
  .table td,
.table th {
  padding: 10px; /* Adjust padding for cells */
  vertical-align: middle; /* Align content vertically centered */
  font-size: 14px; /* Adjust font size for cells */
}
.display-4 {
  font-size: 2.5rem; /* Base font size */
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
@media (max-width: 768px) {
  #deleteBut {
    height: 40px; /* Reduce button height for smaller screens */
    font-size: 14px; /* Reduce font size for smaller screens */
  }
}

/* Media query for even smaller screens */
@media (max-width: 576px) {
  #deleteBut {
    height: 30px; /* Further reduce button height for very small screens */
    font-size: 12px; /* Further reduce font size for very small screens */
    padding: 0 10px; /* Adjust padding for smaller screens */
  }
}

</style>



































<!-- <template>
  <div class="container" style="background-color: #CDBCA5;">
    <div>
      <h2 id="userHeading" class="display-4 mt-4 mb-4">USER</h2>
    </div>
    <AddUser :user="user" />

    <div class="container">
        <div class="table-responsive">
          <table class="table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>Email address</th>
            <th>User role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td class="d-flex gap-2">
              <updateUser :user="user" />
              <button
                id="deleteUse"
                class="btn btn-success deleteButton"
                @click="(event) => deleteUser(user.userID)"
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
import updateUser from "../components/UpdateUserModal.vue";
export default {
  components: {
    updateUser,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
    },
    updateUser(user) {
      let editUser = {
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        userRole: user.userRole,
        gender: user.gender,
        userAge: user.userAge,
      };
      this.$store.dispatch("updateUser", { id: user.userID, data: editUser });
    },
  },
};
</script>

<style scoped>
.btn {
  border-radius: 30px;
  color: #fff;
  background-color: #4E96D3;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: .4s;
}
.btn:hover{
  background-color: #1d3557;
  color: #fff;
  transition: 1s;
}
#deleteBut,
#deleteUse,
.updateButton {
  height: 50px;
  background-color: rgb(39, 142, 86);
  color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 1px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
}

#deleteBut:hover,
#deleteUse:hover,
.updateButton:hover {
  background-color: rgb(35, 211, 105);
  color: white;
  transform: translateY(-2px);
}

#prodImg {
  width: 160px;
  aspect-ratio: 1/1;
}

table {
  border: solid rgb(39, 142, 86);
}

td {
  padding: 10px;
}

@media (max-width: 300px) {
  td,
  th {
    padding: 5px;
    font-size: 12px; /* Adjust font size for small screens */
  }

  #deleteBut,
  #deleteUse,
  .updateButton {
    font-size: 12px;
    padding: 0 10px;
    height: 40px; /* Adjust button height for small screens */
  }

  #prodImg {
    width: 80px; /* Adjust image size for very small screens */
    height: 80px;
  }
}
</style> -->
