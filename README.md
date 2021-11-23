# Vue Now

[![NPM Package](https://img.shields.io/npm/v/vue-now.svg?style=flat-square)](https://www.npmjs.org/package/vue-now)
[![Minified Size](https://img.shields.io/bundlephobia/min/vue-now.svg?style=flat-square)](https://bundlephobia.com/result?p=vue-now)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/shrpne/vue-now/blob/master/LICENSE)

Vue component loads an SVG source dynamically and inline `<svg>` so you can manipulate the style of it with CSS or JS.
It looks like basic `<img>` so you markup will not be bloated with SVG content.
Loaded SVGs are cached so it will not make network request twice.

[ci-img]:  https://travis-ci.org/shrpne/vue-now.svg
[ci]:      https://travis-ci.org/shrpne/vue-now


- [Install](#install)
  - [NPM](#npm)
  - [CDN](#cdn)
  - [Vue v3](#vue-v3)
- [Usage](#usage)
  - [props](#props)
    - [src](#--src)
    - [title](#--title)
    - [keepDuringLoading](#--keepduringloading)
    - [transformSource](#--transformsource)
  - [SVG attributes](#svg-attributes)
  - [events](#events)
    - [loaded](#--loaded)
    - [unloaded](#--unloaded)
    - [error](#--error)
- [Comparison](#comparison)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)


## Install

### NPM

```bash
npm install vue-now
```

Register locally in your component
```js
import VueNow from 'vue-now';

// Your component
export default {
    mixins: [VueNow],
}
```

Or register globally in the root Vue instance
```js
import Vue from 'vue';

// as a plugin
// second argument is optional use it to specify interval period in milliseconds
import {VueNowPlugin} from 'vue-now';
Vue.use(VueNowPlugin, 3000);

// or as a mixin
import VueNow from 'vue-now';
Vue.mixin(VueNow);

// or as a mixin with options
import {VueNowMixinFactory} from 'vue-now';
Vue.mixin(VueNowMixinFactory(1000));
```


### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<!-- Include the `vue-now` script on your page after Vue script -->
<script src="https://unpkg.com/vue-now"></script>

<script>
// Register as a plugin
Vue.use(VueNow.VueNowPlugin, 1000);

// or as a mixin
Vue.mixin(VueNow.VueNowMixin);

// or as a mixin with options
Vue.mixin(VueNow.VueNowMixinFactory(1000));

new Vue({
// ...
});
</script>
```



## Usage

`$now` computed property is exposed in Vue component, it reactively updated each `period` milliseconds (1000 by default)


```html
<script>
  export default {
    computed: {
      nowFormatted() {
        return new Date(this.$now).toISOString();
      },
    },
  }
</script>
<template>
  {{ $now }} <br>
  {{ nowFormatted }}
</template>
``` 
[Example](https://github.com/shrpne/vue-now/blob/master/demo/index.html)


## Changelog
[CHANGELOG.md](https://github.com/shrpne/vue-now/blob/master/CHANGELOG.md)


## Contributing
[CONTRIBUTING.md](https://github.com/shrpne/vue-now/blob/master/CONTRIBUTING.md)


## License

MIT License
