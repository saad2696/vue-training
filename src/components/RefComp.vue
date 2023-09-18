<template>
<div>
    <p>Ref Component</p>
    <input type="text" ref="input">
    <button v-on:click="getData">Click here</button>
</div>
</template>

<script>
export default {
    name: 'RefComponent',
    methods: {
        getData() {
            this.$refs.input.focus()
            let val = this.$refs.input.value
            this.$refs.input.style.color = 'red'
            console.log(val)
        }
    }
}
</script>
