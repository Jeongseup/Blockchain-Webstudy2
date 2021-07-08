<template>
    <div>
        <h2>V3.VUE.ORG</h2>
        <img :src="imgSrc" alt="" />
        <img src="@/assets/logo.png" alt="" />
        <!-- // visibility="hidden" -->
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            imgSrc: 'https://v3.vuejs.org/logo.png'
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style scoped>
img {
    width: 10%;
    transform: rotate(180deg);
}
</style>
