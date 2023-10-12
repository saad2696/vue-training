<template>
<div>
    <p>Welcome to SSI </p>
</div>
</template>

<script>
export default {
    name: "BeforeCreated",
    beforeCreate() {
        alert("Hello i am the first!")
    },
    created(){
        alert('I run after created')
    }

}
</script>

<style>
</style>
