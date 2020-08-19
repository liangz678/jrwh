<template>
  <el-container id="app">
    <el-header style="height:fit-content">       
      <h1 style="text-align: left;font-size:64px; margin:auto; ">实战文化工作信息管理与辅助决策系统</h1>  
      <br />
      <br />
      <br />
    </el-header>
    <!---header--->
    <el-container>
      <el-aside>
        <div style="height: 360px;">
          <el-steps direction="vertical" :active="active">
            <el-step title="作战任务"></el-step>
            <el-step title="文化需求"></el-step>
            <el-step title="方式方法" description></el-step>
            <el-step title="可选资源" description></el-step>
          </el-steps>
        </div>
        <el-button
          type="success"          
          style="margin-top: 12px;"
          v-if="active >= 3" @click="selectDone">完成</el-button>
        <el-button type="primary" v-else-if="active>=0" @click="next">下一步</el-button>
        <el-button type="primary" v-else @click="next">开始</el-button>
        <el-button
          type="primary"
          :disabled="!prev_isabled"
          style="margin-top: 12px;"
          @click="prev"
        >上一步</el-button>

        <el-button @click="cz">
          重置
        </el-button>
      </el-aside>
      <!--侧边栏-->
      <el-container>
        <el-main>
          <el-row type="flex" justify="center">
            <el-col :span="14">
              <!-- <TaskSelect/> -->
              <router-view />
            </el-col>
          </el-row>
        </el-main>
        <!--主界面--->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      active : -1,
    }
  },
  
  methods: {
    next() {
      if (++this.active > 3) this.active = 3;
      this.$store.commit('on_active',this.active)
    },
    prev() {
      if (--this.active < 0) this.active = 0;
      this.$store.commit('on_active',this.active)
    },
    selectDone(){
      console.log('完成')
      let data = {
            methods: this.$store.state.resSelection,
            resources: this.$store.state.ResourceSelection,
            envs:this.$store.state.envs,
            demand:this.$store.state.demand,

      }
      
      this.axios.post('http://jrwh:8000/api/ans/', data).then((res) => {
        
        let data = res.data
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        let d = new Date()


        let download_name = localStorage.getItem('Authorization') + d.toLocaleDateString() + ".pdf"
        link.setAttribute('download', download_name)

        document.body.appendChild(link)
        link.click()            
      })

    },
    cz(){
      localStorage.clear()
       this.$router.replace('/index')
    }
  },

  computed: {
    next_isabled : function(){
      return this.active < 3
    },
    prev_isabled : function(){
      return this.active > 0
    }
  },

  watch: {
    active: function(val){
      switch(val)
      {

          case 0:
            this.$router.replace('/TaskSelect')
            break;
          case 1:
            this.$router.replace('/DemandSelect')
            break;
          case 2:
            this.$router.replace('/Res')
            break
          case 3:
            this.$router.replace('/Resource')
            break
          default:
            this.$$router.replace('/TaskSelect')
              
      }
    }
  },
  mounted: function () {    
    this.active = this.$store.state.active
  },
}
</script>

<style>
  .el-header {

    color: rgb(122, 120, 120);
    line-height: 60px;
  }
  
  .el-aside {
    /* border-right: 5px solid blueviolet; */
    color: #333;
  }
  

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
  margin: 60px;
}
</style>
