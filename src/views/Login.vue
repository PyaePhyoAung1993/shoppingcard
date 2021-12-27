<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <div class="alert alert-danger" v-if="message">{{ message }}</div>
              <h3 class="mt-2 mb-3">log in</h3>
              <form @submit.prevent="login">
                <div class="form-group">
                  <input
                    v-model="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="password"
                    type="text"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
            <div class="card-footer">
              <small
                ><span class="text-muted">Don't you have an account?</span
                ><a href="#">Register</a></small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    login() {
      if (this.email === "admin@admin.com" && this.password === "123456") {
        localStorage.setItem("auth", this.email);
        this.$router.push("/Product");
      } else {
        this.message = "Email and Password is incorredt";
      }
    },
  },
};
</script>

<style>
</style>