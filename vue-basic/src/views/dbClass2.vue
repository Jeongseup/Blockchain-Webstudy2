<template>
    <div class="container" v-bind:class="[activeClass, errorClass]">
        Class Binding
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            activeClass: 'active',
            errorClass: 'text-red'
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
.container {
    width: 100%;
    height: 200px;
}

.active {
    background-color: yellow;
    font-weight: 5px;
}

.text-red {
    color: red;
}
</style>
