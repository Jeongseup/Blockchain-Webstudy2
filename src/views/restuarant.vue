<template>
    <div id="orderbar">
        <h2>메뉴판</h2>
        <button
        @click="requestOrder(menu.menuId)"
        :key="menu.menuId"
        v-for="menu in menus"
        >
            {{ menu.menuName }}
        </button>
    </div>
    <div id="menubar">
        <h2>주문 현황</h2>
        <table>
            <thead>
                <tr>
                    <th>메뉴명</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>합계</th>
                </tr>
            </thead>
            <tbody>
                <tr
                :key="menu.menuId"
                v-for="menu in menus"
                >
                    <td>{{ menu.menuName }}</td>
                    <td>{{ menu.price }}</td>
                    <td>{{ menu.amount }}</td>
                    <td>{{ menu.amount * menu.price }}</td>
                </tr>
       
            </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">총 합</td>
                        <td>{{ totalAmount }}</td>
                    </tr>
                </tfoot>
        </table>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
        totalAmount : 0,
        cardTypes : [
        {
        cardType: "CREDIT",
        title: "신용카드"
        },
        {
            cardType: "TELECOM",
            title: "통신사"
        },
        {
            cardType: "OKCASHBAG",
            title: "OK캐시백"
        },
        {
            cardType: "POINT",
            title: "포인트결제"
        }],

        menus : [
        {
        menuId: 1,
        menuName: "무제한 샐러드바",
        price: 25000
        },
        {
        menuId: 2,
        menuName: "안심 스테이크(150g)",
        price: 35500
        },
        {
        menuId: 3,
        menuName: "립아이 스테이크(220g)",
        price: 22500
        },
        {
        menuId: 4,
        menuName: "채끝 등심 스테이크(210g)",
        price: 30500
        },
        {
        menuId: 5,
        menuName: "자몽에이드",
        price: 6500
        },
        {
        menuId: 6,
        menuName: "애플망고에이드",
        price: 6500
        },
        {
        menuId: 7,
        menuName: "생맥주",
        price: 400
        }],

        creditCards : [
        {
        cardId: 1,
        cardType: "CREDIT",
        cardName: "CJ ONE 삼성카드",
        discount: 30,
        discountType: "%"
        },
        {
        cardId: 2,
        cardType: "CREDIT",
        cardName: "CJ ONE 신한카드",
        discount: 30,
        discountType: "%"
        },
        {
        cardId: 3,
        cardType: "CREDIT",
        cardName: "The CJ 카드",
        discount: 22,
        discountType: "%"
        },
        {
        cardId: 4,
        cardType: "CREDIT",
        cardName: "삼성 6 V4카드",
        discount: 20,
        discountType: "%"
        },
        {
        cardId: 5,
        cardType: "CREDIT",
        cardName: "신한 Lady카드",
        discount: 20,
        discountType: "%"
        },
        {
        cardId: 6,
        cardType: "CREDIT",
        cardName: "삼성 SFC",
        discount: 20,
        discountType: "%"
        },
        {
        cardId: 7,
        cardType: "CREDIT",
        cardName: "삼성 S클라스",
        discount: 20,
        discountType: "%"
        },
        {
        cardId: 8,
        cardType: "CREDIT",
        cardName: "하나 Yes OK Saver",
        discount: 20,
        discountType: "%"
        },
        {
        cardId: 9,
        cardType: "CREDIT",
        cardName: "홈플러스 하나줄리엣카드",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 10,
        cardType: "CREDIT",
        cardName: "하나 줄리엣카드 & Yes 4u shopping",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 11,
        cardType: "CREDIT",
        cardName: "KB Star",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 12,
        cardType: "CREDIT",
        cardName: "이마트 KB카드",
        discount: 15,
        discountType: "%"
      },
      {
        cardId: 13,
        cardType: "TELECOM",
        cardName: "KT 멤버십 일반 할인",
        discount: 5,
        discountType: "%"
      },
      {
        cardId: 14,
        cardType: "TELECOM",
        cardName: "KT 멤버십 VIP 할인",
        discount: 15,
        discountType: "%"
      },
      {
        cardId: 15,
        cardType: "TELECOM",
        cardName: "T 멤버십 실버 할인",
        discount: 5,
        discountType: "%"
      },
      {
        cardId: 16,
        cardType: "TELECOM",
        cardName: "T 멤버십 VIP/골드 할인",
        discount: 15,
        discountType: "%"
      },
      {
        cardId: 17,
        cardType: "OKCASHBAG",
        cardName: "OK캐시백",
        discount: 30,
        discountType: "%"
      },
      {
        cardId: 18,
        cardType: "POINT",
        cardName: "BC Top 포인트",
        discount: 100,
        discountType: "%"
      },
      {
        cardId: 19,
        cardType: "POINT",
        cardName: "기아멤버스 카드",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 20,
        cardType: "POINT",
        cardName: "삼성카드 포인트",
        discount: 100,
        discountType: "%"
      },
      {
        cardId: 21,
        cardType: "POINT",
        cardName: "현대카드 M",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 22,
        cardType: "POINT",
        cardName: "신한 Hi-Point 카드",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 23,
        cardType: "POINT",
        cardName: "블루멤버스 카드",
        discount: 20,
        discountType: "%"
      }],
    
    coupons : [{
        couponId: 1,
        title: "5% 할인쿠폰(중복할인 가능)",
        discount: 5,
        doubleDiscount: true,
        discountType: "%"
      },
      {
        couponId: 2,
        title: "10% 할인쿠폰(중복할인 가능)",
        discount: 10,
        doubleDiscount: true,
        discountType: "%"
      },
      {
        couponId: 3,
        title: "15% 할인쿠폰(중복할인 가능)",
        discount: 15,
        doubleDiscount: true,
        discountType: "%"
      },
      {
        couponId: 4,
        title: "5000 할인쿠폰(중복할인 가능)",
        discount: 5000,
        doubleDiscount: true,
        discountType: ""
      },
      {
        couponId: 5,
        title: "10,000 할인쿠폰(중복할인 가능)",
        discount: 10000,
        doubleDiscount: true,
        discountType: ""
      },
      {
        couponId: 6,
        title: "20,000 할인쿠폰(중복할인 가능)",
        discount: 20000,
        doubleDiscount: true,
        discountType: ""
      },
      {
        couponId: 7,
        title: "5% 할인쿠폰(중복할인 불가능)",
        discount: 5,
        doubleDiscount: false,
        discountType: "%"
      },
      {
        couponId: 8,
        title: "10% 할인쿠폰(중복할인 불가능)",
        discount: 10,
        doubleDiscount: false,
        discountType: "%"
      },
      {
        couponId: 9,
        title: "15% 할인쿠폰(중복할인 불가능)",
        discount: 15,
        doubleDiscount: false,
        discountType: "%"
      },
      {
        couponId: 10,
        title: "5000 할인쿠폰(중복할인 불가능)",
        discount: 5000,
        doubleDiscount: false,
        discountType: ""
      },
      {
        couponId: 11,
        title: "10,000 할인쿠폰(중복할인 불가능)",
        discount: 10000,
        doubleDiscount: false,
        discountType: ""
      },
      {
        couponId: 12,
        title: "20,000 할인쿠폰(중복할인 불가능)",
        discount: 20000,
        doubleDiscount: false,
        discountType: ""
      }]

        };
    },
    setup() {},
    created() {},
    mounted() {
        this.addMenuAmount();
    },
    unmounted() {},
    methods: {
        addMenuAmount () {
            for(var menu of this.menus){
                menu.amount = 0;
            }
            // console.table(this.menus);
        },

        requestOrder(menuId) {
            // console.log('click');

            var menu = this.menus.filter(
                (m) => m.menuId == menuId
            )[0];
            // console.log(menu)
            menu.amount++;
            this.calTotalAmount();
        },

        calTotalAmount(){
            let totalAmount = 0;
            for(var menu of this.menus){
                var menuAmount = menu.price * menu.amount;
                totalAmount += menuAmount;
            }
            // console.log(totalAmount);
            this.totalAmount = totalAmount;
        }

        
    }
}
</script>
<style scoped>
table {
    width: 100%;
    margin-top: 30px;
}

table, th, td{
    border-collapse: collapse;
}

th, td{
    border: 1px solid black;
    padding: 10px;
}
</style>