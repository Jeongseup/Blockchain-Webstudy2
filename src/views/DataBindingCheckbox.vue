<template>
    <div>
        <label for=""
            ><input
                type="checkbox"
                :value="cityArr[0]"
                v-model="cities"
            />서울</label
        >
        <label for=""
            ><input
                type="checkbox"
                :value="cityArr[1]"
                v-model="cities"
            />제주</label
        >
        <label for=""
            ><input
                type="checkbox"
                :value="cityArr[2]"
                v-model="cities"
            />부천</label
        >
        <br />
        <div>선택한 지역: {{ cities }}</div>
        <br />
        <button @click="getValue">가져오기</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            cities: [],
            cityArr: ["02", "064", "032"],
            cityList: [
                { v: "02", t: "서울" },
                { v: "064", t: "제주" },
                { v: "032", t: "부천" },
            ],
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        getValue() {
            console.log(this.cities);
        },
    },
};
</script>
<style scoped>
label {
    margin: 10px;

    /* border: 1px solid black; */
}
</style>
