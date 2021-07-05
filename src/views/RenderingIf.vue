<template>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
    </div>

    <div>
        <button>조회</button>
        <button v-if="userRole=='admin'">생성</button>
        <button v-show="userRole=='admin'">삭제</button>
 
    </div>
 
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            type: "D",
            userRole: "user"
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style scoped>
h1 {
    background-color: antiquewhite;
}
</style>