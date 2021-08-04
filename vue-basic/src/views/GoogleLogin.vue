<template>
    <div>
        <!-- {{ user }} -->
        <h1>
            {{
                user.userName
                    ? '로그인 되었습니다. \n' + user.userName + '님'
                    : '로그인 해주세요'
            }}
        </h1>
    </div>
    <div style="text-algin:center;">
        <div
            v-show="!user.userName"
            id="google-signin-btn"
            style="margin-left:40%;"
        ></div>
    </div>
    <div>
        <button
            v-show="user.userEmail"
            id="google-signout-btn"
            @click="signOut"
        >
            Sign Out
        </button>
    </div>
</template>
<script>
export default {
    mounted() {
        window.gapi.signin2.render('google-signin-btn', {
            onsuccess: this.onSignIn
        })
    },
    name: '',
    components: {},
    data() {
        return {
            sampleData: ''
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    setup() {},
    created() {},
    unmounted() {},
    methods: {
        onSignIn(googleUser) {
            var oUser = {}
            const profile = googleUser.getBasicProfile()

            var userId = profile.getId()
            console.log('ID is' + userId)

            var userName = profile.getName()
            console.log('Full Name is' + userName)

            // console.log('Given Name is' + profile.getGivenName())
            // console.log('Family Name is' + profile.getFamilyName())
            // console.log('Image URL is' + profile.getImageUrl())
            var userEmail = profile.getEmail()
            console.log('Email is' + userEmail)

            oUser.userId = userId
            oUser.userName = userName
            oUser.userEmail = userEmail

            const idToken = googleUser.getAuthResponse().id_token
            console.log('ID Token is', idToken)

            console.log(oUser)
            this.$store.commit('user', oUser)
        },

        signOut() {
            window.gapi.auth2.getAuthInstance().disconnect()
            this.$store.commit('user', {})
        }
    }
}
</script>
