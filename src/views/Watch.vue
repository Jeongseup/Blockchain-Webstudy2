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
            fullName: ""
        };
    },
    watch: {
        firstName(){
            this.fullName = this.firstName +", " + this.lastName;
        },
        lastName(){
            this.fullName = this.firstName +", " + this.lastName;
        }
        
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>