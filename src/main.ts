import Vue from 'vue'
import App from './components/App/App.vue'

class AppCore {
    private instance!: Vue;

    private init() {
        this.instance = new Vue({
            el: '#app',
            // render: h => h(App),
            components: {App},
            template: '<App/>',
            data: {
                console: console,
            }
        });
    }

    constructor() {
        this.init();
    }
}

new AppCore();
