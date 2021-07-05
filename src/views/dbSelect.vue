<template>
  <div>
    <select name="" id="" v-model="city" @change="getSelectCity">
      <option value="">도시를 선택하세요</option>
      <option value="02">서울</option>
      <option value="064">제주도</option>
      <option value="032">부천</option>
      <option value="031">강원도</option>
    </select>

    <button @click="getSelectCity" style="margin: 10px">조회</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      city: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getSelectCity() {
      if (this.city != "") {
        console.log(this.city);
      }
    },
  },
};
</script>

<style scoped></style>
