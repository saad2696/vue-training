<template>
<h2>Child Component</h2>
<p>Passed down from Parent Component: {{ name }}</p>
<p>Object to pass down </p>
<ul>
    <li v-for="item in user" :key="item.name">
        Name : {{ item['name'] }} & Title : {{ item['title'] }}

    </li>
</ul>
<p>
    Methods to pass down from Parent to child
</p>
<button v-on:click="getData()">Click me to invoke function from Parent</button>
</template>

<script>
export default {
    name: 'ChildComp',
    props: {
        name: String,
        user: Object,
        getData: Function

    }
}
</script>
