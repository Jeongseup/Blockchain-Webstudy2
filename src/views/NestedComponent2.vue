<template>
    <div>
        
        <PageTitle :title="title" :title2="title2"/>
    </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
export default {
    
    name: "",
    components: { PageTitle },
    data() {
        return {
            title: "ABC",
            title2: "abc"
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>