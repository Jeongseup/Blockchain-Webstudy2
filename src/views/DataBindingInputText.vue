<template>
    <div>
        <input type="text" v-model.number="txt1" />
        <input type="number" v-model="num1" />
        <button @click="changeValue()" style="margin: 10px">값변경</button>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            txt1: '',
            num1: 0
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeValue() {
            console.log(this.txt1)

            this.num1 = this.txt1
            this.txt1 = '변경되었습니다.'

            console.log('button click')
        }
    }
}
</script>
