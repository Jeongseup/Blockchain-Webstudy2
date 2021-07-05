<template>
    <div>
        <select name="" id="" v-model="selectGender" @change="getUserList" >
            <option value="">전체</option>
            <option value="male">남자</option>
            <option value="female">여자</option>
        </select>
        <input type="text" v-model="searchName">
        <button @click="getUserList">조회</button>
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
                <tr 
                :key="i"
                v-for="(user,i) in userList"
                >
                    <td>{{user.name}}</td>
                    <td>{{user.gender}}</td>
                    <td>{{user.company}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
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
            searchName: "",
            url:"https://021382de-6838-47cd-b6bb-3b0fc09fa7c4.mock.pstmn.io/getUserList",
            // userListdata: [],
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
        // mounted onboarding
        async getUserList(){
            var userList = (await axios.get(this.url)).data.data;

            if(this.selectGender ==""){
                if(this.searchName == ""){
                     this.userList = userList;
                } else {
                    this.userList = this.userList.filter(
                        (u) => 
                            u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1
                        );
                }            
            } else {
                if(this.selectName == ""){
                    this.userList = userList.filter(
                        (u) => u.gender == this.selectGender
                        );

                    // console.log("here");
                } else {

                    // 이름이 있고!
                    this.userList = userList.filter(
                        (u) => 
                            u.gender == this.selectGender &&
                            u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1
                        );


                    // var user2 = [];
                    // for(var user of userList) {
                    //     if(
                    //         user.gender == this.selectGender &&
                    //         user.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1
                    //     ){
                    //         user2.push((user))
                    //     }
                    // }


                }
            } 
        }
    }
}

import axios from 'axios';
</script>

<style scoped>
table {
    width: 100%;
    margin-top: 30px;
}

table, th, td{
    border-collapse: collapse;
}

th, td{
    border: 1px solid black;
    padding: 10px;
}
</style>