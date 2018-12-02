<template>
    <div id="app">
        <img src="../../assets/logo.png">
        <div ref="container">
            <!--<button v-on:click="cl">Click to insert</button>-->
            <button v-on:click="console.log('Hi')">Click to insert</button>
            <!--<button>Click to insert</button>-->
        </div>
    </div>
</template>

<!--<script>-->
    <!--import Vue from 'vue'-->
    <!--import Button from "../Button/Button.vue"-->
    <!--import {Component, Prop} from "vue-property-decorator"-->
    <!--import {Method, Event} from '../../decorators/vue-extend-decorator'-->

    <!--// @Component({-->
    <!--//     name: 'App',-->
    <!--//     methods: {cl(){-->
    <!--//             console.log('Hi');-->
    <!--//         }},-->
    <!--// })-->
    <!--export default {-->
        <!--methods:{-->
            <!--cl()-->
            <!--{-->
                <!--console.log('Hi');-->
                <!--console.log(this);-->
            <!--}-->
        <!--},-->
        <!--instantiate() {-->
            <!--// var ButtonClass = Vue.extend(Button);-->
            <!--// var instance = new ButtonClass({-->
            <!--//     propsData: {type: 'primary'}-->
            <!--// });-->
            <!--// instance.$slots.default = ['Click me!'];-->
            <!--// instance.$mount();-->
            <!--// this.$refs.container.appendChild(instance.$el)-->
        <!--}-->
    <!--}-->
<!--</script>-->

<script lang="ts">
    import Vue from 'vue'
    import Button from "../Button/Button.vue"
    import {Component, Prop} from "vue-property-decorator"
    import {Method, Event} from '../../decorators/vue-extend-decorator'

    @Component({
        name: 'App',
        data: {
            flag: true,
        },
    })
    export default class App extends Vue {
        @Method
        instantiate() {
            // var ButtonClass = Vue.extend(Button);
            // var instance = new ButtonClass({
            //     propsData: {type: 'primary'}
            // });
            // instance.$slots.default = ['Click me!'];
            // instance.$mount();
            // this.$refs.container.appendChild(instance.$el)
        }

        @Method
        cl()
        {
        }

        constructor()
        {
            super();
            // this.
            // this.$on('click', this.onClick)
        }
    }
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
