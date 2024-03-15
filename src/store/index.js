import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
const tnURL = "https://wineinventorycapstone-1.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${tnURL}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, info) {
      try {
        let { result } = (await axios.get(`${tnURL}users/${info.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateUser(context, {id,data}){
      try{
        let{update}= await axios.patch(`${tnURL}users/user/${id}`,data);
        if(update){
          context.dispatch('setUser');
          sweet({
            title:'Update user',
            icon:'success',
            timer:2000
          })
        }
    
      }catch(e){
        sweet({
          title:'Error',
          text:'Failed to update user',
          icon:'error',
          timer:2000
        });
        console.error('error updating user:',e)
      }
    },
    async deleteUser({commit,dispatch},payload){
      try{
    await axios.delete(`${tnURL}users/user/${payload.id}`)
    commit('setUsers');
    dispatch('fetchUsers');
    sweet({
      title:'User Deleted',
      icon:'success',
      timer:2000
    })
      }
    
      catch(error){
        sweet({
          title:'Error',
          text:'An error occurred when deleting a user',
          icon:'error',
          timer:2000
        })
      }
    },
    async addUser(context, info) {
      try {
        console.log(info);
        const { msg } = await (
          await axios.add(`${tnURL}users/signup/${info.userID}`)
        ).data;
        context.dispatch("fetchUsers");
        sweet({
          title: "Delete user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async register(context,payload){
      try{
        let{msg}=(await axios.post(`${tnURL}users/signup`,payload))
        if(msg){
          context.dispatch('setUser')
          // sweet({
          //   title:'Registration',
          //   text:msg,
          //   icon:"success",
          //   timer:2000
          // })
    
        }
      }catch(e){
        // sweet(
        //   {
        //     title:'Error',
        //     text:'Please try again later',
        //     icon:"error",
        //     timer:2000
        //   }
        // )
      }
    },

    
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${tnURL}stocks`)).data;
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving products.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProduct(context, info) {
      try {
        let { result } = (await axios.get(`${tnURL}stocks/${info.id}`)).data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet({
            title: "Retrieving a single product",
            text: "Product was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A product was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
  },
  async deleteProduct(context, info) {
    try {
      console.log(info);
      const { msg } = await (
        await axios.delete(`${tnURL}stocks/Stocks/${info.itemID}`)
      ).data;
      context.dispatch('fetchProducts');
      sweet({
        title: 'Delete product',
        text: msg,
        icon: "success",
        timer: 2000
      });
    } catch (e) {
      sweet({
        title: 'Error',
        text: 'An error occurred when deleting a product.',
        icon: "error",
        timer: 2000
      });
    }
  },
  // async deleteProduct(context, info) {
  //   try {
  //     const { msg } = await (
  //       await axios.delete(`${tnURL}products/product/${info.prodID}`)
  //     ).data;
  //     context.dispatch("fetchProducts");
  //     sweet({
  //       title: "Delete product",
  //       text: msg,
  //       icon: "success",
  //       timer: 2000,
  //     });
  //   } catch (e) {
  //     sweet({
  //       title: "Error",
  //       text: "An error occurred when deleting a product.",
  //       icon: "error",
  //       timer: 2000,
  //     });
  //   }
  // },

  // async addProduct(context, info) {
  //   try {
  //     let { msg } = await axios.post(`${tnURL}stocks/addStocks`, info);
  //     const product = {
  //       itemName: this.name,
  //       Brand: this.brand,
  //       itemYear: this.year,
  //       Price: this.price,
  //       Categories: this.categories,
  //       itemUrl: this.pic}

  //     context.dispatch("setProducts");
  //     sweet({
  //       title: "Registration",
  //       text: msg,
  //       icon: "success",
  //       timer: 2000,
  //     });
  //   } catch (e) {
  //     sweet({
  //       title: "Error",
  //       text: "Please try again later",
  //       icon: "error",
  //       timer: 2000,
  //     });
  //   }
  // },
    async addProduct() {
      try {
        const product = {
          itemName: this.name,
          Brand: this.brand,
          itemYear: this.year,
          Price: this.price,
          Categories: this.categories,
          itemUrl: this.pic
        };

       
        const response = await axios.post(`${tnURL}stocks/addStocks`, product);


        console.log(response.data); 

      
        this.name = '';
        this.brand = '';
        this.year = '';
        this.price = '';
        this.categories = '';
        this.pic = '';

    
      } catch (error) {
        console.error('Failed to add product:', error);
      
      }
    },
    async updateProduct(context,{id,data}){
      try{
        let {update}= await axios.patch(`${tnURL}stocks/Stocks/${id}`,data);
        if(update){
          context.dispatch('setProduct');
          sweet({
            title:'Update product',
            icon:"success",
            timer:2000
          })
        }
      }catch(e){
        sweet(
          {
            title:'Error',
            text:'Failed to update product',
            icon:"error",
            timer:2000
          }
        );
        console.error('Error updating user:',e)
      }
    },
  modules: {},
});