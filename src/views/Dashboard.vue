<template>
  <div class="dashboard">
    <h1>Welcome {{ user.data.name }}</h1>
    <p>Your sign up email is {{ user.data.email }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return { user: "" };
  },
  computed: mapGetters(["getUser"]),
  created() {
    this.user = this.getUser;
  }
};
</script>
