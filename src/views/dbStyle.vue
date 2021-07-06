<template>
  <div v-bind:style="oStyle">
    <h1>{{ sampleData }}</h1>
  </div>
  <div style="color: blue; font-size: 30px">
    <h1>Sample Style</h1>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "Sample Style ",
      oStyle: {
        color: "red",
        fontSize: "30px",
      },
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
