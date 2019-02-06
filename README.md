# swot

> https://en.wikipedia.org/wiki/SWOT_analysis


## Demo

https://scaccogatto.github.io/vue-swot/

## Create your SWOT

1. Create your swot slide `make swot NAME=Test`

2. Using the following script, create your route:

```js
{
      path: '/NAME',
      name: 'NAME',
      component: () => import(/* webpackChunkName: "name" */ './views/NAME.vue')
}
```

3. Insert the created route into `router.js`

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/base',
      name: 'base',
      component: () => import(/* webpackChunkName: "reparto-dev" */ './views/Base.vue')
    },
    {
      path: '/NAME',
      name: 'NAME',
      component: () => import(/* webpackChunkName: "name" */ './views/NAME.vue')
    }
  ]
})
```

4. Edit `src/views/NAME/data.json` as you wish

5. `npm install && npm run serve` and open your browser to: `http://localhost:8080/`. Move around with keyboard's arrows.
