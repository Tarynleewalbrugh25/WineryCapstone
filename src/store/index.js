import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
const tnURL = "https://winerycapstone.onrender.com/";

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
    
    async register(context,payload){
      try{
        let{msg}=(await axios.post(`${tnURL}users/signup`,payload))
        if(msg){
          context.dispatch('setUser')
          sweet({
            title:'Registration',
            text:msg,
            icon:"success",
            timer:2000
          })
    
        }
      }catch(e){
        sweet(
          {
            title:'Error',
            text:'Please try again later',
            icon:"error",
            timer:2000
          }
        )
      }
    },    
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${tnURL}products`)).data;
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
        let { result } = (await axios.get(`${tnURL}products/${info.id}`)).data;
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
  
  async deleteProduct({commit,dispatch},payload){
    try{
  await axios.delete(`${tnURL}products/product/${payload.id}`)
  commit('setProducts');
  dispatch('fetchProducts');
  sweet({
    title:'Product Deleted',
    icon:'success',
    timer:2000
  })
    }
  
    catch(error){
      sweet({
        title:'Error',
        text:'An error occurred when deleting a product',
        icon:'error',
        timer:2000
      })
    }
  },
  async addProduct(context,payload){
    try{
      let {msg}=(await axios.post(`${tnURL}products/add`,payload))
      if(msg){
        context.dispatch('setProducts')
        sweet(
          {
            title:'Product Added',
            text:msg,
            icon:"success",
            timer:2000
          }
        )
      }
    }catch(e){
      sweet({
        title:'Error',
        text:'Please try again later',
        icon:"error",
        timer:2000
      })
    }
  },
  async updateProduct(context,{id,data}){
      try{
        let {update}= await axios.patch(`${tnURL}products/product/${id}`,data);
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
  },
  modules: {},
});