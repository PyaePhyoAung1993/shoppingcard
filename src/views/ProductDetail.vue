<template>
  <div>
    <h5 v-if="loading">Please wait a few second....</h5>
    <div v-else class="container">
      <div class="row">
        <div class="col-md-4">
          <img :src="product.image" class="img-fluid" alt="" />
        </div>
        <div class="col-md-8 pt-5">
          <h3 class="display-4">{{ product.title }}</h3>
          <div class="h3 text-muted mt-4">${{ product.price }}</div>
          <div class="mt-4">{{ product.description }}</div>
          <div class="mt-4">
            <router-link to="/product" class="btn btn-outline-secondary"
              >Back</router-link
            >
            <button class="btn btn-primary float-right">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetail",
  data() {
    return {
      loading: false,
      product: {},
    };
  },
  created() {
    this.loading = true;
    axios
      .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then((response) => {
        this.product = response.data;
        this.loading = false;
      });
  },
};
</script>

<style>
</style>