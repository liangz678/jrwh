<template>
  <div class="Resource">
    <h2>可选资源</h2>
    <el-table
      :data="res_items"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="category" label="类别" width="180"></el-table-column>
      <el-table-column prop="name" label="资源名" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Resource",
  data() {
    return {
      res_items: new Array(),
      // ResourceSelection: [],
    };
  },

  created: function () {
    let data = {
      demand: this.$store.state.demand,
    };
    this.axios.post("http://jrwh:8000/api/resources/", data).then((res) => {
      this.res_items = res.data;
    });
  },

  methods: {
    handleSelectionChange(val) {
      console.log(val);
      this.$store.commit("select_resource", val);
    },
  },
};
</script>

<style>
</style>