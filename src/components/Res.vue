<template>
    <div>
        <h2>可选方法</h2>
        <el-table
        :data="res"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
        >
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
            prop="name"
            label="方法名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="content"
            label="具体内容"
            width="420">
        </el-table-column>
        </el-table>
    </div>
</template>

<script>


export default {
    name:"Res",
    data(){
        return {
            res: [],
            resSelection: []
        }
    },

    methods:{
      handleSelectionChange(val){
        console.log(val)
        this.$store.commit('select_res',val)
      }
    },

    created: function () {
        let data = {
            envs: this.$store.state.envs,
            demand: this.$store.state.demand,

        }
        this.axios.post('http://jrwh:8000/api/res/', data).then((res) => {
            this.res = res.data
        })
    }    
}
</script>