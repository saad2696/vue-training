<template>
<div>
    <p>--------------------------------------Watchers---------------------</p>
    <h3>{{ count }}</h3>

    <br>
    <button @click="count = count +1 ">+</button>
    <br>
    <button @click="count = count -1 ">-</button>

</div>
</template>

<script>
export default {
    name: "watcher-comp",
    data() {
        return {
            count: 0
        }
    },
    watch:{
        count(val,prev){
          if(val>5){
            alert('bass karde bhai')
            console.log(prev)
          }
        }
    }
}
</script>
