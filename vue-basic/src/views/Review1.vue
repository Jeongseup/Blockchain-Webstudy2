<template>
    <div>
        <input
            type="text"
            v-model="txt2"
            :class="{ 'border-red': isEmpty }"
            @blur="checkEmpty"
        />
    </div>
    <div>
        <select name="" id="" v-model="city" @change="changeSelect">
            <option value="02">서울2</option>
            <option value="01">서울1</option>
            <option value="03">서울3</option>
        </select>
    </div>
    <div>
        <h1>{{ title1 }} ,{{ title2 }}</h1>
        <!-- <br /> -->
        <!-- <button v-bind:disabled="txt1 == ''">VUE</button> -->
    </div>
    <div v-html="htmlString"></div>
    <div>
        <input type="text" name="" id="" v-model="txt" />
        <button v-bind:disabled="txt == ''">버튼</button>
        <p>{{ txt }}</p>
    </div>
    <div>
        <img :src="imgSrc" alt="" />
    </div>
    <div>
        <label for="">
            <input type="checkbox" value="02" v-model="cities" />서울
        </label>
        <label for="">
            <input type="checkbox" value="01" v-model="cities" />서울1
        </label>
        <label for="">
            <input type="checkbox" value="03" v-model="cities" />서울3
        </label>
        <p>{{ cities }}</p>
    </div>

    <div>
        <label for="">
            <input type="radio" value="02" v-model="selectedCity" />서울
        </label>
        <label for="">
            <input type="radio" value="01" v-model="selectedCity" />서울1
        </label>
        <label for="">
            <input type="radio" value="03" v-model="selectedCity" />서울3
        </label>
        <p>{{ selectedCity }}</p>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            isEmpty: '',
            txt2: '',
            title1: 'World',
            title2: 'JS',
            txt: '',
            htmlString: '<p style="color:red;">빨간색 글자</p> ',
            imgSrc: 'http://localhost:8080/img/logo.82b9c7a5.png',
            cities: [],
            selectedCity: '',
            city: '',
            asjdla: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeSelect() {
            console.log(this.city)
        },

        checkEmpty() {
            if (this.txt === '') {
                this.isEmpty = true
            } else {
                this.isEmpty = false
            }
        }
    }
}
</script>
<style scoped>
.border-red {
    border: 2px solid red;
}
</style>
