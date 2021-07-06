<template>
    <div>
        <button @click="myFunction" ref="btn">클릭</button>
        <h1>{{ fullName }}</h1>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: "",
            fullName: "",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        myFunction() {
            console.log("부모컴포넌트에서 발생시킨 이벤트");
        }
    }
}
</script>