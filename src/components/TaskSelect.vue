<template>
  <div class="task">
    <el-tabs type="border-card">
      <el-tab-pane v-for="(c,i) in category" :key="i" :label="c">
        <div v-for="(e,j) in category_items[i]" :key="j">
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
              <button @click="rank_reset(e.id)">清除</button>

            </el-col>
          </el-row>
          <el-divider></el-divider>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
  
</template>

<script>
export default {
  name: "TaskSelect",
  data() {

    return {
      category:[],
      category_items:[],
      ranks:[],
    };
  },

  methods: {
    rank_onchange(id) {
      this.$store.commit("char_rank_onchange", { i: id, val: this.ranks[id] });
    },
    rank_reset(id) {
      this.ranks[id] = 0;
      this.$forceUpdate();
      this.$store.commit("char_rank_onchange", { i: id, val: this.ranks[id] });
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

  computed: {},
  mounted: function () {
    this.$store.state.envs.forEach((v) => {
      this.ranks[v.i] = v.val;
    });
  },

  created: function () {
    this.axios.get("http://jrwh:8000/api/charindex/").then((res) => {
      let category = res.data.map((item) => {
        return item.category;
      });

      this.category = [...new Set(category)];
      this.category.forEach((v, i) => {
        this.category_items[i] = res.data.filter((item) => item.category === v);
      });
    });
  },
};
</script>