<template>
<p>--------------------------------------Simple Form---------------------------</p>
<ul>
    <li v-for="item in error" v-bind:key="item">
        {{ item }} not valid
    </li>
</ul>
<form action="">
    <label for="email">Email: </label>
    <input type="text" placeholder="enter email" v-model.lazy="form.email">
    <br> <br>

    <label for="age">Age: </label>
    <input type="number" placeholder="enter age" v-model.number="form.age">
    <br> <br>

    <label for="email">Password :</label>
    <input type="password" placeholder="enter Password" v-model="form.password">
    <br> <br>
    <select name="country" placeholder="Choose Country" v-model="form.country">
        <option>
            Pakistan
        </option>
        <option>
            USA
        </option>
        <option>
            Canada
        </option>
    </select>

    <br> <br>

    <h2>Technology</h2>

    <label for="javasxript">Javascript :</label>
    <input type="checkbox" value=javascript v-model="form.technology">

    <br> <br>

    <label for="PHP">PHP :</label>
    <input type="checkbox" value="PHP" v-model="form.technology">

    <br> <br>

    <h2>Gender </h2>

    <label for="male">Male :</label>
    <input type="radio" value="male" v-model="form.gender">

    <br> <br>
    <label for="female">Female :</label>
    <input type="radio" value="female" v-model="form.gender">

    <br> <br>
    <label for="female">Other :</label>
    <input type="radio" value="other" v-model="form.gender">

    <br> <br>

    <button v-on:click="login" type="button">Login</button>
    <br> <br>
</form>

<div>{{ form  }}</div>
</template>

<script>
export default {
    name: 'SimpleForm',
    data() {
        return {
            form: {
                email: "",
                password: "",
                country: "",
                age:null,
                technology: [],
                gender: ""
            },
            error: []
        }
    },
    methods: {
        login() {

            this.error = []
            for (const item in this.form) {
                if (this.form[item] === '' || this.form[item].length === 0) {
                    this.error.push(item)
                }

            }
            console.warn("login data", this.form, this.error)
        }
    }
}
</script>
