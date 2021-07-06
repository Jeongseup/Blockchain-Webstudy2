<template>
  <div>
    <select name="" id="" v-model="selectGender" @change="getUserList">
      <option value="">전체</option>
      <option value="male">남자</option>
      <option value="female">여자</option>
    </select>
    <!-- <button @click="getUserList">조회</button> -->
    <!-- <button @click="getUserList">조회</button> -->
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>성별</th>
          <th>회사</th>
          <th>이메일</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(user, i) in userList">
          <td>{{ user.name }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      selectGender: "",
      url: "https://021382de-6838-47cd-b6bb-3b0fc09fa7c4.mock.pstmn.io/getUserList",
      userList: [],
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.getUserList();
  },
  unmounted() {},
  methods: {
    async getUserList() {
      this.userList = (await axios.get(this.url)).data.data;
      // console.log(this.userList);

      if (this.selectGender == "") {
        this.userList = this.userList;

        // }else{
        //     this.userList = this.userList.filter((u) => u.gender == this.selectGender);
        // }
      } else {
        var newUserList = [];
        for (var user of this.userList) {
          if (user.gender == this.selectGender) {
            newUserList.push(user);
          }
        }
        this.userList = newUserList;
      }

      // console.log(this.userList[0]);
      // console.log(this.userList[0]["_id"]);
    },
  },
};

import ApiMixin from "../api.js";
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 30px;
}

table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
}
</style>
