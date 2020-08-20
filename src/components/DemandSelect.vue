<template>
  <div class="demand">
    <div v-for="(e,index) in demands" :key="index">
      <el-row :gutter="20">
        <el-col :span="11" :offset="1">{{e.name}}</el-col>
        <el-col :span="10">
          <el-rate
            v-model="ranks[e.id]"
            show-text
            :max="e.items.length"
            :texts="rate_txt(e.items)"
            @change="rank_onchange(e.id)"
          ></el-rate>
        </el-col>
        <el-col :span="2">
          <el-tooltip class="item" effect="dark" placement="left">
            <div slot="content" v-html="rate_toolip(e.items)"></div>
            <i class="el-icon-info"></i>
          </el-tooltip>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemandSelect",
  data() {
    return {
      demands: new Array(),
      ranks: new Array(),
    };
  },

  methods: {
    rank_onchange(id) {
      this.$store.commit("demand_rank_onchange", {
        i: id,
        val: this.ranks[id],
      });
    },

    rate_txt(items) {
      let res = new Array();
      res = items.map((item) => {
        return item.short_name;
      });
      return res;
    },

    rate_toolip(items) {
      let res = "";
      items.forEach((r) => {
        res += r.short_name + ", " + r.name + "<br />";
      });
      return res;
    },
  },

  mounted: function () {
    this.$store.state.demand.forEach((v) => {
      this.ranks[v.i] = v.val;
    });
  },

  created: function () {
    this.axios.get("http://jrwh:8000/api/demandindex/").then((res) => {
      this.demands = res.data;
    });
  },
};
</script>