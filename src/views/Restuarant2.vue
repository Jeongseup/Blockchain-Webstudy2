<template>
  <!-- Header -->
  <header class="header">
    <div>
      <h2>Choose Your Menu</h2>
      <button
        class="btn-menu"
        @click="requestOrder(menu.menuId)"
        :key="menu.menuId"
        v-for="menu in menus"
      >
        {{ menu.menuName }}({{ menu.price}}원)
      </button>
    </div>
  </header>

  <!-- Navigation Bar -->
  <nav class="navbar"></nav>

  <div class="row">
    <main class="menubar">
      <h2>Order Navigation</h2>
      <table>
        <thead>
          <tr>
            <th>Menu</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="menu.menuId" v-for="menu in menus.filter(m => m.isSelected)">
            <td>{{ menu.menuName }}</td>
            <td>{{ menu.price }}</td>
            <td>
              <input type="number" v-model="menu.qty">
            </td>
            <td>{{ menu.amount * menu.price }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">총 합</td>
            <td>{{ totalAmount }}</td>
          </tr>
          <tr>
            <td colspan="3">할인 후 금액</td>
            <td>{{ finalAmount }}</td>
          </tr>
        </tfoot>
      </table>
    </main>
    <aside class="sidebar">
      <h3>Discount Card List</h3>
      <div class="card" :key="type" v-for="(cardType, type) in oCards">
        <select
          class="sel-card"
          v-model="selectCards[type]"
          @change="calFinalAmount"
        >
          <option value="">{{ type }}카드를 선택하세요.</option>
          <option
            :value="card.cardId"
            :key="card.cardId"
            v-for="card in cardType"
          >
            {{ card.cardName }}
          </option>
        </select>
      </div>

      <h3>Discount Coupon List</h3>
      <select class="sel-coupon" v-model="selCoupon" @change="calFinalAmount">
        <option value="">쿠폰을 선택하세요.</option>
        <option
          :value="coupon.couponId"
          :key="coupon.couponId"
          v-for="coupon in coupons"
        >
          {{ coupon.title }}
        </option>
      </select>
    </aside>
  </div>

  <!-- <button @click="calFinalAmount"><h2>할인조회</h2></button> -->
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      selCoupon: '',
      totalAmount: 0,
      finalAmount: 0,

      oCards: {},
      selectCards: {
        CREDIT: '',
        TELECOM: '',
        OKCASHBAG: '',
        POINT: ''
      },

      cardTypes: [
        {
          cardType: 'CREDIT',
          title: '신용카드'
        },
        {
          cardType: 'TELECOM',
          title: '통신사'
        },
        {
          cardType: 'OKCASHBAG',
          title: 'OK캐시백'
        },
        {
          cardType: 'POINT',
          title: '포인트결제'
        }
      ],

      menus: [
        {
          menuId: 1,
          menuName: '무제한 샐러드바',
          price: 25000
        },
        {
          menuId: 2,
          menuName: '안심 스테이크(150g)',
          price: 35500
        },
        {
          menuId: 3,
          menuName: '립아이 스테이크(220g)',
          price: 22500
        },
        {
          menuId: 4,
          menuName: '채끝 등심 스테이크(210g)',
          price: 30500
        },
        {
          menuId: 5,
          menuName: '자몽에이드',
          price: 6500
        },
        {
          menuId: 6,
          menuName: '애플망고에이드',
          price: 6500
        },
        {
          menuId: 7,
          menuName: '생맥주',
          price: 400
        }
      ],

      creditCards: [
        {
          cardId: 1,
          cardType: 'CREDIT',
          cardName: 'CJ ONE 삼성카드',
          discount: 30,
          discountType: '%'
        },
        {
          cardId: 2,
          cardType: 'CREDIT',
          cardName: 'CJ ONE 신한카드',
          discount: 30,
          discountType: '%'
        },
        {
          cardId: 3,
          cardType: 'CREDIT',
          cardName: 'The CJ 카드',
          discount: 22,
          discountType: '%'
        },
        {
          cardId: 4,
          cardType: 'CREDIT',
          cardName: '삼성 6 V4카드',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 5,
          cardType: 'CREDIT',
          cardName: '신한 Lady카드',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 6,
          cardType: 'CREDIT',
          cardName: '삼성 SFC',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 7,
          cardType: 'CREDIT',
          cardName: '삼성 S클라스',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 8,
          cardType: 'CREDIT',
          cardName: '하나 Yes OK Saver',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 9,
          cardType: 'CREDIT',
          cardName: '홈플러스 하나줄리엣카드',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 10,
          cardType: 'CREDIT',
          cardName: '하나 줄리엣카드 & Yes 4u shopping',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 11,
          cardType: 'CREDIT',
          cardName: 'KB Star',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 12,
          cardType: 'CREDIT',
          cardName: '이마트 KB카드',
          discount: 15,
          discountType: '%'
        },
        {
          cardId: 13,
          cardType: 'TELECOM',
          cardName: 'KT 멤버십 일반 할인',
          discount: 5,
          discountType: '%'
        },
        {
          cardId: 14,
          cardType: 'TELECOM',
          cardName: 'KT 멤버십 VIP 할인',
          discount: 15,
          discountType: '%'
        },
        {
          cardId: 15,
          cardType: 'TELECOM',
          cardName: 'T 멤버십 실버 할인',
          discount: 5,
          discountType: '%'
        },
        {
          cardId: 16,
          cardType: 'TELECOM',
          cardName: 'T 멤버십 VIP/골드 할인',
          discount: 15,
          discountType: '%'
        },
        {
          cardId: 17,
          cardType: 'OKCASHBAG',
          cardName: 'OK캐시백',
          discount: 30,
          discountType: '%'
        },
        {
          cardId: 18,
          cardType: 'POINT',
          cardName: 'BC Top 포인트',
          discount: 100,
          discountType: '%'
        },
        {
          cardId: 19,
          cardType: 'POINT',
          cardName: '기아멤버스 카드',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 20,
          cardType: 'POINT',
          cardName: '삼성카드 포인트',
          discount: 100,
          discountType: '%'
        },
        {
          cardId: 21,
          cardType: 'POINT',
          cardName: '현대카드 M',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 22,
          cardType: 'POINT',
          cardName: '신한 Hi-Point 카드',
          discount: 20,
          discountType: '%'
        },
        {
          cardId: 23,
          cardType: 'POINT',
          cardName: '블루멤버스 카드',
          discount: 20,
          discountType: '%'
        }
      ],

      coupons: [
        {
          couponId: 1,
          title: '5% 할인쿠폰(중복할인 가능)',
          discount: 5,
          doubleDiscount: true,
          discountType: '%'
        },
        {
          couponId: 2,
          title: '10% 할인쿠폰(중복할인 가능)',
          discount: 10,
          doubleDiscount: true,
          discountType: '%'
        },
        {
          couponId: 3,
          title: '15% 할인쿠폰(중복할인 가능)',
          discount: 15,
          doubleDiscount: true,
          discountType: '%'
        },
        {
          couponId: 4,
          title: '5000 할인쿠폰(중복할인 가능)',
          discount: 5000,
          doubleDiscount: true,
          discountType: ''
        },
        {
          couponId: 5,
          title: '10,000 할인쿠폰(중복할인 가능)',
          discount: 10000,
          doubleDiscount: true,
          discountType: ''
        },
        {
          couponId: 6,
          title: '20,000 할인쿠폰(중복할인 가능)',
          discount: 20000,
          doubleDiscount: true,
          discountType: ''
        },
        {
          couponId: 7,
          title: '5% 할인쿠폰(중복할인 불가능)',
          discount: 5,
          doubleDiscount: false,
          discountType: '%'
        },
        {
          couponId: 8,
          title: '10% 할인쿠폰(중복할인 불가능)',
          discount: 10,
          doubleDiscount: false,
          discountType: '%'
        },
        {
          couponId: 9,
          title: '15% 할인쿠폰(중복할인 불가능)',
          discount: 15,
          doubleDiscount: false,
          discountType: '%'
        },
        {
          couponId: 10,
          title: '5000 할인쿠폰(중복할인 불가능)',
          discount: 5000,
          doubleDiscount: false,
          discountType: ''
        },
        {
          couponId: 11,
          title: '10,000 할인쿠폰(중복할인 불가능)',
          discount: 10000,
          doubleDiscount: false,
          discountType: ''
        },
        {
          couponId: 12,
          title: '20,000 할인쿠폰(중복할인 불가능)',
          discount: 20000,
          doubleDiscount: false,
          discountType: ''
        }
      ]
    }
  },
  computed: {
    totalAmount() {
      return this.menus
      .filter((m) => m.isSelected)
      .reduce((t, o) => t + o.price * o.qty, 0);

      // var sum = 0;
      // for (var menu of this.menus){
      //   if (menu.isSelected){
      //     sum += menu.price * menu.qty;
      //   }
      // }
    },
  },
  setup() {},
  
  created() {
    this.menus.map(m => {
     return {
       menuId : m.menuId,
       menuName: m.menuName,
       price: m.price,
       qty: 1,
       isSelected: false
     } 
    })
  },
  mounted() {
    this.addMenuAmount()
    this.makeObjectCards()
  },
  unmounted() {},
  methods: {
    // =======================================================
    // 초기화 mount 함수
    addMenuAmount() {
      for (var menu of this.menus) {
        menu.amount = 0
      }
      // console.table(this.menus);
    },

    makeObjectCards() {
      // empty obejct
      var oCards = {}

      for (var card of this.creditCards) {
        // 할인카드 종류가 oCard안에 define 되지 않았다면,
        if (!oCards[card.cardType]) {
          // obejct안에 []를 생성한다.
          oCards[card.cardType] = []
        }
        // cardType의 종류에 해당되는 card를 빈 []안에 넣는다.
        oCards[card.cardType].push(card)
      }

      // => oCard라는 object 안에 cardType이란 key에 맞춰 데이터가 재배열됨.
      this.oCards = oCards
      // 확인
      // console.log(this.oCards);
      // console.log(this.oCards[])
    },
    // =======================================================

    //
    requestOrder(menuId) {
      // console.log('click');

      var menu = this.menus.filter((m) => m.menuId == menuId)[0]
      // console.log(menu)
      menu.amount++
      this.calTotalAmount()
    },

    calTotalAmount() {
      let totalAmount = 0
      for (var menu of this.menus) {
        var menuAmount = menu.price * menu.amount
        totalAmount += menuAmount
      }
      // console.log(totalAmount);
      this.totalAmount = totalAmount
    },

    // getSelectCoupon () {
    //   console.log(this.selCoupon);
    // },

    // getSelectCards () {
    //   console.log(this.selectCards);
    // },

    calFinalAmount() {
      let finalAmount = this.totalAmount

      if (this.totalAmount == 0) {
        return alert('메뉴를 먼저 선택하세요.')
      }

      // 카드할인 array 만들기
      // console.log(Object.values(this.selectCards));
      var cardsArr = Object.values(this.selectCards)
      // console.log(cardsArr);

      // 배열 안에 "" 지워주기
      for (var i in cardsArr) {
        if (cardsArr[i] == '') {
          cardsArr[i] = 0
        }
      }

      // console.log(cardsArr);

      var maxCardDist = cardsArr.reduce(function (a, b) {
        return Math.max(a, b)
      })

      // console.log(maxCardDist);
      var coupon = null
      if (this.selCoupon != '') {
        coupon = this.coupons.filter((c) => c.couponId == this.selCoupon)[0]
      }
      // var couponDistcount = this.coupons[this.selCoupon].discount;
      // console.log(coupon);

      // 이제 먼저 쿠폰이 있는지 없는지 부터 확인
      // 쿠폰 확인 - 있으면 ? => 중복할인 되는지 / 없으면 => 카드할인 있는지?
      // console.log(finalAmount);
      if (coupon != null) {
        // 중복할인이 되는 경우
        if (coupon.doubleDiscount) {
          console.log(coupon.doubleDiscount)
          // 중복할인 % 인지
          var couponDist = coupon.discount
          if (coupon.discountType == '%') {
            couponDist = Math.round(finalAmount * (coupon.discount / 100))
          }

          // 중복할인  해주고
          finalAmount -= couponDist
          // 카드할인 있으면 해주고
          this.finalAmount =
            finalAmount - Math.round(finalAmount * (maxCardDist / 100))

          // 중복할인이 되지 않는 경우
        } else {
          // 쿠폰 할인량 계산
          var couponDist = coupon.discount
          if (coupon.discountType == '%') {
            couponDist = Math.round(finalAmount * (coupon.discount / 100))
          }

          // 카드할인량 계산
          var cardDist = Math.round(finalAmount * (maxCardDist / 100))

          // 최대할인으로 계산
          if (couponDist > cardDist) {
            this.finalAmount = finalAmount - couponDist
          } else {
            this.finalAmount = finalAmount - cardDist
          }
        }
        // 쿠폰이 없는 경우
      } else {
        // console.log("쿠폰이 없는 경우");
        this.finalAmount =
          finalAmount - Math.round(finalAmount * (maxCardDist / 100))
      }
    }
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

/* Style the body */
body {
  font-family: Arial;
  margin: 0;
}

/* Header/logo Title */
.header {
  padding: 60px;
  text-align: center;
  background: #884200;
  color: white;
}

/* Style the top navigation bar */
.navbar {
  display: flex;
  height: 20px;
  background-color: #333;
  /* justify-content: center; */
}

/* Column container */
.row {
  display: flex;
  flex-wrap: wrap;
}

/* Sidebar/left column */
.sidebar {
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.menubar {
  flex: 70%;
  background-color: white;
  padding: 20px;
}

.btn-menu {
  width: 10em;
  height: 5em;
  margin: 5px;
  font-size: 0.8em;
  font-weight: bold;
}

.sel-card,
.sel-coupon {
  width: 20em;
  height: 3em;
  margin: 5px;
  font-size: 0.8em;
  font-weight: bold;
}

table {
  width: 100%;
  margin-top: 30px;
  font-weight: bold;
}

table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
}
</style>
