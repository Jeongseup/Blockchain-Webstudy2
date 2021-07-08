<template>
    <div>
        <label for=""
            ><input
                type="radio"
                value="064"
                v-model="selectedCity"
            />제주</label
        >
        <label for=""
            ><input type="radio" value="02" v-model="selectedCity" />서울</label
        >
        <label for=""
            ><input
                type="radio"
                value="032"
                v-model="selectedCity"
            />부천</label
        >
    </div>
    <br />
    <div>선택한 지역 : {{ selectedCity }}</div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            selectedCity: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
