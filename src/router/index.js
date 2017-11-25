import Vue from 'vue'
import Router from 'vue-router'


import Pokedex from '@/components/pokedex/Pokedex'

import Team from '@/components/pokedex/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pokedex',
      component: Pokedex
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    }
  ]
})
