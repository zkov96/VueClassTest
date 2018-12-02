import {createDecorator} from 'vue-class-component'

export function Method(options) {
    if (options === void 0) { options = {}; }
    return createDecorator(function (componentOptions, k) {
        (componentOptions)[k] = options;
    });
}

export function Event(options) {
    if (options === void 0) { options = {}; }
    return createDecorator(function (componentOptions, k) {
        componentOptions.$on(k,options);
    });
}
