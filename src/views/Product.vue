<template>
  <div>
    <h5 v-if="loading">Please wait a few second....</h5>
    <div v-else class="container mt-4">
      <!-- <div class="row justify-content-center">
        <div class="col-md-6">
          <input type="text" v-model="productName" placeholder="Search" />
        </div>
      </div> -->
      <div class="row">
        <div class="col-md-10">
          <p>
            <input
              v-model="productName"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Search Product"
            />
          </p>
        </div>
        <div class="col-md-2">
          <button
            @click="filterSearched()"
            type="button"
            class="btn btn-outline-success"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div
          class="col-md-3 mb-3"
          v-for="product in products"
          :key="product.id"
        >
          <div class="card">
            <div class="card-body text-center">
              <img
                class="img"
                :src="product.image"
                alt="Product Image"
                style="width: 100px; height: 100px"
              />
              <p class="text-muted">{{ product.title }}</p>
              <h5 class="my-4">${{ product.price }}</h5>
              <router-link
                :to="`/product/${product.id}`"
                class="btn btn-primary btn-block"
                >More Detail</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Product",
  data() {
    return {
      loading: false,
      productName: "",
      products: [],
    };
  },
  methods: {
    filterSearched() {
      this.products = this.products.filter((product) => {
        return product.title.match(this.productName);
      });
    },
  },
  computed: {
    filterSearch() {
      return this.products.filter((product) => {
        return product.title.match(this.productName);
      });
    },
  },
  created() {
    this.loading = true;
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.products = res.data;
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      });
  },
};
</script>

<style>
.img {
  height: 130px;
}
</style>