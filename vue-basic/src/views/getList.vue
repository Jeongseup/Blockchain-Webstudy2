<template>
    <div>
        <h1>Get list example</h1>
        <!-- <p>{{ list }}</p> -->
        <div>
            <label>first name :</label>
            <input type="text" v-model="firstName" />
        </div>
        <div>
            <label>last name :</label>
            <input type="text" v-model="lastName" />
        </div>
        <div>
            <label>email :</label>
            <input type="text" v-model="email" />
        </div>

        <button @click="createPerson" @keyup.enter="createPerson">생성</button>
    </div>
    <div>
        <table style="width:100%;">
            <thead>
                <tr>
                    <th>fisrt name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr :key="person.id" v-for="(person, idx) in list">
                    <td><input type="text" v-model="person.first_name" /></td>
                    <td><input type="text" v-model="person.last_name" /></td>
                    <td><input type="text" v-model="person.email" /></td>
                    <td>
                        <button @click="deletePerson(person.id)">삭제</button>
                    </td>
                    <td>
                        <button @click="updatePerson(idx)">수정</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            list: [],
            firstName: '',
            lastName: '',
            email: ''
        }
    },
    setup() {},
    created() {},
    mounted() {
        this.getList()
    },
    unmounted() {},
    methods: {
        async getList() {
            // 'http://localhost:3000 + /api/getList
            this.list = await this.$api('/api/getList', 'get', {})
            console.log(this.list)
            // this.list = await this.$api('/api/getList', 'get', {})
        },

        async createPerson() {
            const r = await this.$api('/api/createPerson', 'post', {
                param: [
                    {
                        first_name: this.firstName,
                        last_name: this.lastName,
                        email: this.email
                    }
                ]
            })
            this.getList()
            console.log(r)
        },
        async deletePerson(id) {
            const r = await this.$api('/api/deletePerson', 'post', {
                param: [id]
            })
            this.getList()
            console.log(r)
        },
        async updatePerson(idx) {
            const r = await this.$api('/api/updatePerson', 'post', {
                param: [
                    {
                        first_name: this.list[idx].first_name,
                        last_name: this.list[idx].last_name,
                        email: this.list[idx].email
                    },
                    this.list[idx].id
                ]
            })
            this.getList()
            console.log(r)
        }
    }
}
</script>
