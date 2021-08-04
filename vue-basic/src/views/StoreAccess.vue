<template>
    <div>
        <h2>Store</h2>
        <p>{{ count }}</p>
        <p>{{ cart }}</p>

        <button @click="incrementCount">count up</button>
        <br />
        <button @click="addCart">장바구니 추가</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: "",
        };
    },
    computed: {
        count() {
            return this.$store.state.count;
        },
        cart() {
            return this.$store.state.cart;
        },
    },
    setup() {},
    created() {},
    updated() {
        console.table(this.cart); // cart는 배열로 선언해서 table 로 print함
        console.log(this.count); // cart는 배열로 선언해서 table 로 print함
    },
    mounted() {},
    unmounted() {},
    methods: {
        incrementCount() {
            this.$store.commit("increment");
        },

        addCart() {
            this.$store.commit("addCart", {
                productId: "1",
                productName: "마우스",
                productPrice: 12000,
            });
        },
    },
};
</script>
