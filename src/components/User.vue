<template>
<h1>User Component</h1>
<button v-on:click="getUser(userName)">Child to parent</button>
</template>

<script>
export default {
    name: "UserComp",
    data() {
        return {
            userName: 'Peter'
        }
    },
    props: {
        getUser: Function
    }
}
</script>
