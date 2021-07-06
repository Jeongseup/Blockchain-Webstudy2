<template>
  <div>
    <textarea v-model="msg" style="width: 50%; height: 100px"></textarea>
    <br />
    <button @click="getMsg">메세지 가져오기</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      msg: "여러줄을 입력할 수 있는 textarea",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getMsg() {
      console.log(this.msg);
    },
  },
};
</script>
