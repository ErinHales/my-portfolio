import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Journey from '@/components/Journey'
import About from '@/components/About'
import Work from '@/components/Work'
import OzzyApp from '@/components/OzzyApp'
import CalendarApp from '@/components/CalendarApp'
import WeatherApp from '@/components/WeatherApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/journey',
      name: 'Journey',
      component: Journey
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/ozzy/app',
      name: 'OzzyApp',
      component: OzzyApp
    },
    {
      path: '/calendar/app',
      name: 'CalendarApp',
      component: CalendarApp
    },
    {
      path: '/weather/app',
      name: 'WeatherApp',
      component: WeatherApp
    }
  ]
})
