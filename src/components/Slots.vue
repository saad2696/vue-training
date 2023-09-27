<template>
<p>--------------------------------------Slots---------------------------</p>
<slot></slot>
<h1>{{ name }}</h1>
</template>

<script>
export default {
    name: "watcher-comp",
    props: {
        name: String
    }
}
</script>
