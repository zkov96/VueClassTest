<template id="app-template">
    <div id="app">
        <img src="../../assets/logo.png">
        <div ref="container">
            <button v-on:click="instantiate">Click to insert</button>
            <!--<button v-on:click="console.log('Hi')">Click to insert</button>-->
            <!--<button>Click to insert</button>-->
        </div>
    </div>
</template>

<!--<script>-->
    <!--import Vue from 'vue'-->
    <!--import Button from './Button.vue'-->

    <!--export default {-->

        <!--methods: {-->
            <!--cl () {-->
                <!--console.log('Hi')-->
                <!--console.log(this)-->
            <!--},-->
            <!--instantiate () {-->
                <!--var ButtonClass = Vue.extend(Button)-->
                <!--var instance = new ButtonClass({-->
                    <!--propsData: {type: 'primary'}-->
                <!--})-->
                <!--instance.$slots.default = ['Click me!']-->
                <!--instance.$mount()-->
                <!--this.$refs.container.appendChild(instance.$el)-->
            <!--},-->
        <!--}-->
    <!--}-->
<!--</script>-->

<script lang="kt">
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
