<template>
  <div>
    <!-- // 네이버 버튼 만들기 -->
    <p>
      {{ user.email }}
    </p>
    <div v-show="!user.email" id="naverIdLogin"></div>
    <button v-show="user.email" @click="logout">로그아웃</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      naverLogin: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  setup() {},
  created() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "iRWhThdviePHZqOi2w8Q", // 개발자 센터 등록 id
      callbackUrl: "http://localhost:8080/naverlogin",
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 60 },
    });

    this.naverLogin.init();
    // arrow 함수는 scope가 바뀌지 않는다.
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);

        // window가 아닌 vue component가 가져와진다
        this.$store.commit("user", this.naverLogin.user);
      }
    });

    // this.naverLogin.getLoginStatus(function(status){
    //     this.naverLogin ... 이럴 땐 window 객체
    // });

    // console.log(window.naver);
  },
  unmounted() {},
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url =
        "/oauth2.0/token?grant_type=delete&client_id=iRWhThdviePHZqOi2w8Q&client_secret=7CQMTHcgGa&access_token=" +
        accessToken +
        "&service_provider=NAVER";

      //발급 받은 토큰을 삭제해야만 로그인이 해제된다.
      // url를 받으면 삭제된 것!
      axios.get(url).then((res) => {
        console.log(res);
        this.$store.commit("user", {});
        // this.$router.push({ path: "/naverlogin" });
      });
    },
  },
};
</script>
