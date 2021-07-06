<template>
    <div>
        <h1>Computed.vue file</h1>
        <h2>{{ firstName }}, {{ lastName }}</h2>
        <h2>{{ fullName }}</h2>

        <input type="text" v-model="firstName"/>
        <input type="text" v-model="lastName"/>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            firstName: "Jeongseup",
            lastName: "Son",
        };
    },
    computed: {
        // 데이터 안에 없는 새로운 키를 만드는 역할을 한다.
        // 사용자 정보와 같은 것은 이 기능을 자주 사용한다.
        fullName() {
            return this.firstName + this.lastName;
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>