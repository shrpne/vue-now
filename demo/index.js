// eslint-disable-next-line import/extensions
import VueNowMixin, {VueNowMixinFactory, VueNowPlugin} from '../src/index.js';

Vue.use(VueNowPlugin, 3000);
// Vue.mixin(VueNowMixinFactory(2000));

new Vue({
    el: '#app',
    // mixins: [VueNowMixin],
    // mixins: [VueNowMixinFactory(5000)],
    data() {
        return {
            initTimestamp: Date.now(),
        };
    },
    computed: {
        secondsAfterInit() {
            return Math.round((this.$now - this.initTimestamp) / 1000);
        },
        nowFormatted() {
            return new Date(this.$now).toISOString();
        },
    },
});
