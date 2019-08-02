<template>
  <div class="registration">
    <el-form status-icon ref="user" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Name" prop="name">
        <el-input v-model="user.name"></el-input>
      </el-form-item>

      <el-form-item prop="email" label="Email">
        <el-input
          type="email"
          v-model="user.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input
          type="password"
          v-model="user.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="setUserInfo">Submit</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    ...mapActions(["userData"]),
    setUserInfo() {
      this.userData({ data: this.user });
      console.log(this.user);
    }
  }
};
</script>
