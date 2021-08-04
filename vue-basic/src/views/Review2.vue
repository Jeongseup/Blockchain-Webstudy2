<template>
    <page-title :title="userRole" />
    <div>
        <div v-show="userRole == 'admin'">
            <button>조회</button>
            <button>생성</button>
        </div>
        <div v-show="userRole != 'admin'">
            <button>조회</button>
        </div>
    </div>
    <div>
        <div v-if="userRole == 'admin'">
            <button>조회</button>
            <button>생성</button>
        </div>
        <div v-else>
            <button>조회</button>
        </div>
    </div>
    <div>
        <input type="text" v-model="firstName" />
        <input type="text" v-model="lastName" />
        <input type="text" v-model="fullName" />
    </div>
    <div>
        <button v-on:click="myFunction">클릭</button>
    </div>
    <div>
        <input
            type="text"
            @keydown="myFunction"
            @keypress="myFunction"
            @keyup="myFunction"
            @keyup.enter="myFunction"
        />
    </div>
</template>
<script>
import PageTitle from '../components/pageTitle.vue'
// import ModalLayout from '../components/SlotModalLayout.vue'
export default {
    name: '',
    components: { 'page-title': PageTitle },
    data() {
        return {
            drinkList: [
                {
                    drinkId: '1',
                    drinkName: '코카콜라',
                    price: 700,
                    stock: 5
                },
                {
                    drinkId: '2',
                    drinkName: '오렌지주스',
                    price: 1200,
                    stock: 5
                },
                {
                    drinkId: '3',
                    drinkName: '커피',
                    price: 500,
                    stock: 5
                },

                {
                    drinkId: '4',
                    drinkName: '물',
                    price: 700,
                    stock: 5
                },

                {
                    drinkId: '5',
                    drinkName: '보리차',
                    price: 1200,
                    stock: 5
                },

                {
                    drinkId: '6',
                    drinkName: '포카리',
                    price: 1000,
                    stock: 5
                },

                {
                    drinkId: '7',
                    drinkName: '뽀로로',
                    price: 1300,
                    stock: 5
                }
            ],
            firstName: 'Jeongseup',
            lastName: 'Son',
            fullName: '',
            userRole: 'admin2'
        }
    },
    // computed: {
    //     fullName() {
    //         return this.firstName + ' ' + this.lastName
    //     }
    // },
    watch: {
        firstName() {
            this.fullName = this.firstName + ' ' + this.lastName
        },
        lastName() {
            this.fullName = this.firstName + ' ' + this.lastName
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        myFunction(event) {
            console.log(event.type)
            console.log('click')
        }
    }
}
</script>
