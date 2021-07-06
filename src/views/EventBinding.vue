<template>
  <div>
    <button v-on:click="myFunction">CLICK</button>
  </div>

  <div>
    <select name="" id="" v-model="sel" @change="changeSelect">
      <option value="C">C</option>
      <option value="B">B</option>
      <option value="A">A</option>
    </select>
  </div>

  <div>
    <input type="text" @focus="myFunction" />
    <br />
    <input type="text" @blur="myFunction" />
    <br />
    <input type="text" name="" id="" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sel: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeSelect() {
      console.log(this.sel);
    },
    myFunction() {
      console.log("event!");
    },
    doSearch() {
      console.log("search");
    },
  },
};
</script>
