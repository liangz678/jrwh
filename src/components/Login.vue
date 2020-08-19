<template>
    <div class="login">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    onLogin() {
        this.axios.post('http://jrwh:8000/api/auth/',this.form,{withCredentials:true}).then((res)=> {
            console.log(res);
            if (res.data.code == 1000){
              localStorage.setItem('Authorization',this.form.username);
              this.$router.push({path:'/index'})
            }      
                
            else
                this.$message.error(res.data.msg)
      });
    }
  }
}
</script>

<style scoped>
.login {
  width: 50%;
  margin: 0 auto;
}
</style>