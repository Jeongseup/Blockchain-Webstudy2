<template>
    <div>
        <ProvideInject />
    </div>
</template>
<script>
import ProvideInject from "../components/ProvideInjectChild.vue";
export default {
    name: "",
    components: { ProvideInject },
    data() {
        return {
            items: ["A", "B"],
        };
    },
    provide() {
        return {
            itemLength: this.items.length,
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {},
};
</script>
