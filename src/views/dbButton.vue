<template>
    <div>
        <input type="text" v-model="txt1" />
        <br>
        <button v-bind:disabled="txt1 == ''">VUE</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            txt1: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
    
    }

}
</script>
<style scoped>

 input[type="text"], button {
    width:30%;
    height: 100px;
    font-size: 30px;
    margin: 30px;
}
</style>