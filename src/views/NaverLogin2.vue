<template>
    <div>
        <h1>Naver Login Practice</h1>
        <!-- <p>{{ user }}</p> -->
        <div>{{ header }}</div>
        <br />
        <div>{{ body }}</div>
        <div id="naverIdLogin"></div>
        <button @click="naverLogout">로그아웃</button>
    </div>
    <div>
        <DataGirdPractice
            style="font-size: 1px"
            :header="header"
            :body="body"
        />
    </div>
</template>
<script>
import axios from "axios";
import DataGirdPractice from "../components/DataGirdPractice.vue";
export default {
    name: "",
    components: { DataGirdPractice },
    data() {
        return {
            naverLogin: null,
            // header: [],
            // body: [],
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        header() {
            return this.$store.state.header;
        },
        body() {
            return this.$store.state.body;
        },
    },
    setup() {},
    created() {},
    mounted() {
        this.naverLogin = new naver.LoginWithNaverId({
            clientId: "uPSjxCQziTjOUtULA7OX", // 개발자 센터 등록 id
            callbackUrl: "http://localhost:8080/naverlogin2",
            isPopup: false,
            loginButton: { color: "green", type: 2, height: 60 },
        });

        this.naverLogin.init();
        // console.log(this.naverLogin);
        console.log("naver login initialization");

        this.naverLogin.getLoginStatus((status) => {
            if (status) {
                // console.log(status); //true
                // console.log(this.naverLogin.user); //유저 정보
                // console.log(Object.keys(this.naverLogin.user));
                var userInfo = this.naverLogin.user;
                console.log(userInfo);
                var headerArray = this.createHeader(userInfo);
                var bodyArray = this.createBody(userInfo);

                console.log(headerArray);
                console.log(bodyArray);

                // window가 아닌 vue component가 가져와진다
                this.$store.commit("user", this.naverLogin.user);
                this.$store.commit("header", headerArray);
                this.$store.commit("body", bodyArray);
            }
        });

        // console.log(window.naver);
    },
    unmounted() {},
    methods: {
        naverLogout() {
            // console.log(this.naverLogin.accessToken);
            const accessToken = this.naverLogin.accessToken.accessToken;
            const url =
                "/oauth2.0/token?grant_type=delete&client_id=uPSjxCQziTjOUtULA7OX&client_secret=dHVnVM_QKi&access_token=" +
                accessToken +
                "&service_provider=NAVER";

            // console.log(accessToken);

            axios.get(url).then((res) => {
                // console.log(res);
                // console.log(res.data.result);

                this.$store.commit("user", {});
                // this.$store.commit("header", []);
                this.$store.commit("body", []);

                // this.$router.push({ path: "/naverlogin" });
            });
        },

        createHeader(oUser) {
            var newArray = [];
            // console.log(oUser)
            for (const property in oUser) {
                if (oUser[property]) {
                    // console.log(oUser[property]);
                    var tempObject = {};
                    tempObject.titile = property;
                    tempObject.key = property;
                    newArray.push(tempObject);
                }
            }
            return newArray;
        },

        createBody(oUser) {
            var newArray = [];
            newArray.push(oUser);

            return newArray;
        },
    },
};
</script>
