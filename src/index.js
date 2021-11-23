export function VueNowMixinFactory(period = 1000) {
    return {
        data() {
            return {
                _vueNow: {
                    _interval: undefined,
                    _timestamp: Date.now(),
                },
            };
        },
        computed: {
            $now() {
                return this.$data._vueNow._timestamp;
            },
        },
        created() {
            this.$data._vueNow._interval = setInterval(() => {
                this.$data._vueNow._timestamp = Date.now();
            }, period);
        },
        destroyed() {
            clearImmediate(this.$data._vueNow._interval);
        },
    };
}

export const VueNowPlugin = {
    install(Vue, pluginOptions) {
        Vue.mixin(VueNowMixinFactory(pluginOptions));
    },
};

export const VueNowMixin = VueNowMixinFactory();

export { VueNowMixin as default };
