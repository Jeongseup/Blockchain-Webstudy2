<template>
  <div id="coin">
    <button
      class="btn-coin"
      :key="coin"
      v-for="coin in coinArr"
      @click="inputCoin(coin)"
    >
      {{ coin }}원 투입
    </button>
  </div>
  <div id="nav">
    <div class="nav-amount">
      <label for="">현재 지갑 금액</label>
      <input type="text" v-model="total_customer_amount" readonly />
    </div>
    <div class="nav-amount">
      <label for="">현재 자판기 잔액</label>
      <input type="text" v-model="total_vending_amount" readonly />
    </div>
    <div class="nav-amount">
      <label for="">현재 투입 금액</label>
      <input type="text" v-model="total_input_amount" readonly />
    </div>
  </div>
  <div id="menu">
    <button
      @click="requestDrink(drink.drinkId)"
      :key="drink.drinkId"
      v-for="drink in drinkList"
    >
      <div class="bg-fake"></div>

      {{ drink.drinkName }} <br />(가격:{{ drink.price }}원)<br />(재고:{{
        drink.stock
      }}개)
    </button>
  </div>
  <div id="msg">
    <div class="bg-fake"></div>
    <h3>{{ msg }}</h3>
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
      total_input_amount: 0,

      coinArr: [100, 500, 1000],
      msg: "",
      drinkList: [
        {
          drinkId: "1",
          drinkName: "코카콜라",
          price: 700,
          stock: 5,
        },
        {
          drinkId: "2",
          drinkName: "오렌지주스",
          price: 1200,
          stock: 5,
        },
        {
          drinkId: "3",
          drinkName: "커피",
          price: 500,
          stock: 5,
        },
        {
          drinkId: "4",
          drinkName: "물",
          price: 700,
          stock: 5,
        },
        {
          drinkId: "5",
          drinkName: "보리차",
          price: 1200,
          stock: 5,
        },
        {
          drinkId: "6",
          drinkName: "포카리",
          price: 1000,
          stock: 5,
        },
        {
          drinkId: "7",
          drinkName: "뽀로로",
          price: 1300,
          stock: 5,
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    inputCoin(coin) {
      // console.log(coin);
      if (this.total_customer_amount >= coin) {
        this.total_customer_amount -= coin;
        this.total_vending_amount += coin;
        this.total_input_amount += coin;
      } else {
        alert("지갑에 잔고가 없습니다.");
      }
    },

    requestDrink(drinkId) {
      // drinkId = 1
      //
      var tempDrink = this.drinkList.filter((d) => d.drinkId == drinkId)[0];
      var drinkIndex = parseInt(drinkId) - 1;
      // console.log(drink.price);

      // 재고가 남아있는지 확인
      if (tempDrink.stock > 0) {
        // 투입한 금액이 음료수 가격보다 큰 지 확인하고
        if (this.total_input_amount >= tempDrink.price) {
          // 잔금 반환이 될만큼 벤딩머신에 잔액 있는지 확인하고
          var backAmount = this.total_input_amount - tempDrink.price;
          if (this.total_vending_amount >= backAmount) {
            //조건 다 만족하면! 구매
            console.log(tempDrink.drinkName, "구매!");

            // 재고 하나 빼주고
            console.log(this.drinkList[drinkIndex]);
            this.drinkList[drinkIndex].stock -= 1;

            // 잔금 돌려주고
            this.total_customer_amount += backAmount;

            // 기계 내 잔액 빼주고
            this.total_vending_amount -= backAmount;

            // 잔금 초기화
            this.total_input_amount = 0;
            // alert(`${tempDrink.drinkName} 구매!`);
            this.msg = `${tempDrink.drinkName} 구매!`;
          } else {
            alert("죄송합니다 자판기 내 잔금이 없습니다.");
          }
        } else {
          alert("잔액이 부족합니다. 돈을 넣어주세요!");
        }
      } else {
        alert("죄송합니다, 재고가 부족합니다.");
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#coin {
  width: 100%;
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
}

.btn-coin {
  width: 30%;
  margin: 5px;
  color: white;
  font-size: 20px;
  background-color: #6edcaa;
  border-radius: 5px;
}

#nav {
  width: 100%;
  margin: 5px;
  /* padding: 5px; */
  display: flex;
  border: 1px solid black;
}

.nav-amount {
  font-size: 20px;
  text-align: center;
}

#menu {
  /* align-items: center; */
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  border: 1px solid black;
  /* background-colo: blue; */
}

.bg-fake {
  background-color: #6edcaa;
  margin: 3px;
  width: 100px;
  height: 100px;
}

#msg {
  width: 100%;
  text-align: center;
  align-items: center;
}
</style>
