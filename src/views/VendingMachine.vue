<template>
    <div id="coin">
        <button :value=coinArr[0] @click="InputCoin(coinArr[0])">100원투입</button>
        <button :value=coinArr[1] @click="InputCoin(coinArr[1])">500원투입</button>
        <button :value=coinArr[2] @click="InputCoin(coinArr[2])">1000원투입</button>
    </div>

    <div id="containder">
        <div class="drink"
        :key="drink.drinkId"
        v-for="(drink, i) in drinkList"
        >
        <!-- <img src="" alt=""> -->
            <label for="">명칭:{{drink.drinkName}}</label><br>
            <label for="">가격:{{drink.price}}</label><br>
            <label for="">재고:{{drink.stock}}</label><br>
            <button @click="orderDrink">선택</button>
        </div>
         
    </div>
    <div id="monitor">
        <h3>현재 지갑 잔액 : {{total_customer_amount}}</h3>
        <h3>현재 자판기 잔금 : {{total_vending_amount}}</h3>
        <h3>현재 투입된 금액 : {{total_input_amount}}</h3>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            total_customer_amount: 10000,
            total_vending_amount: 1000,
            total_input_amount : 0,

            msg: "",
            selectDirnk: "",
            coinArr: [100, 500, 1000],
            
            drinkList : [
                {
                    drinkId: "1",
                    drinkName: "코카콜라",
                    price: 700,
                    stock: 5
                },
                {
                    drinkId: "2",
                    drinkName: "오렌지주스",
                    price: 1200,
                    stock: 5
                },
                {
                    drinkId: "3",
                    drinkName: "커피",
                    price: 500,
                    stock: 5
                },
                {
                    drinkId: "4",
                    drinkName: "물",
                    price: 700,
                    stock: 5
                },
                {
                    drinkId: "5",
                    drinkName: "보리차",
                    price: 1200,
                    stock: 5
                },
                {
                    drinkId: "6",
                    drinkName: "포카리",
                    price: 1000,
                    stock: 5
                },
                {
                    drinkId: "7",
                    drinkName: "뽀로로",
                    price: 1300,
                    stock: 5
                }
            ]
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        orderDrink(){
            console.log(this);

        },

        InputCoin(coin) {
            if(this.total_customer_amount - coin >= 0){
                this.total_customer_amount -= coin;
                this.total_vending_amount += coin;
                this.total_input_amount += coin;

            } else{
                this.msg = "현재 지갑에 잔액이 없습니다.";
                console.log(this.msg);
            }
        }
    }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
}

#container {
    width:100%;
    /* border-collapse: collapse; */
}
#coin {
    margin-bottom: 10px;
}
.drink {
    /* position: center; */
    border: 1px solid black;
    /* border-collapse: collapse; */
    display: flex;
    padding: 5px;
   /* text-align: center; */
}
</style>