<template>

<div class="card">
<header>
    <slot name="header">
    </slot>
</header>
<content>
    <slot name="content"></slot>
</content>
<footer>
    <slot name="footer"></slot>
</footer>
</div>
</template>

<script>
export default {
    name: "slots-comp",
    props: {
        name: String
    }
}
</script>
<style>
.card{
    border: 1px solid black;
    padding: 2rem;
    width: 250px;
    justify-content: center;
  
}


</style>