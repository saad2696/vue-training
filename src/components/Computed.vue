<template>
<div>
    <p>--------------------------------------Computed Properties----------------------------</p>
    <h3>{{ getRate }}</h3>
</div>
</template>

<script>
export default {
    name: 'computed-comp',
    data() {
        return {
            dollars: 100,
            ruppeeVal: 320,
            discount: 10
        }
    },
    computed: {
        getRate() {
            return (this.dollars * this.ruppeeVal) - this.discount
        }
    }
}
</script>
