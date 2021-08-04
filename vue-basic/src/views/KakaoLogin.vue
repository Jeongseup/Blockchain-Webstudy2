<template>
    <div>
        <h1>KakaoLogin</h1>
        <h1>{{ user.email ? "로그인성공" : "로그인 후 사용하세요" }}</h1>
        <a v-show="!user.email" id="custom-login-btn" @click="kakaoLogin()">
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"
            />
        </a>
        <button @click="kakaoLogout">카카오 로그아웃</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: "",
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        kakaoLogin() {
            window.Kakao.Auth.login({
                scope: "profile_nickname, account_email, gender",

                success: this.getKakaoAccount,

                // function (response) {
                //     console.log(response);
                // },

                fail: function (error) {
                    console.log(error);
                },
            });
        },
        getKakaoAccount() {
            window.Kakao.API.request({
                url: "/v2/user/me",
                success: (res) => {
                    const kakaoAccount = res.kakao_account;
                    console.log(kakaoAccount);

                    this.$store.commit("user", kakaoAccount);
                },
            });
        },
        kakaoLogout() {
            if (!window.Kakao.Auth.getAccessToken()) {
                // 로그인된 상태인지 없다라는 건 아직 로그인 안했다는 것
                console.log("Not logged in.");
                return;
            }
            window.Kakao.Auth.logout((res) => {
                // 로그아웃 실행
                console.log(window.Kakao.Auth.getAccessToken());
                console.log(res, 111);
                this.$store.commit("user", {});
            });
        },
    },
};
</script>
