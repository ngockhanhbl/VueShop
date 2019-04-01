import Home from './components/Home'
import Shop from './components/body/Shop'
import Contact from './components/body/Contact'
import About from './components/body/About'
import Collection from './components/body/Collection'
import Carts from './components/body/Carts'
import Jobs from './components/body/Jobs'
import Social from './components/body/Social'
export const routes = [
  { path:'/', name: 'homepage', component: Home, meta:{breadcrumb: 'Home Custom Label' } },
  { path:'/shop', name:'body', component:Shop, meta:{breadcrumb: {label: 'Custom Shop page Label',parent: 'home'} } },
  { path:'/contact', name:'contact', component:Contact, meta:{breadcrumb: {label: 'Custom Contact page Label',parent: 'home'} }},
  { path:'/aboutus', name:'about', component:About, meta:{breadcrumb: {label: 'Custom About page Label',parent: 'home'} }},
  { path:'/collection', name:'collection', component:Collection, meta:{breadcrumb: {label: 'Custom Collection page Label',parent: 'home'} }},
  { path:'/carts', name:'cart', component:Carts, meta:{breadcrumb: {label: 'Custom About Cart Label',parent: 'home'} }},
  { path:'/jobs', name:'jobs', component:Jobs, meta:{breadcrumb: {label: 'Custom Jobs page Label',parent: 'home'} }},
  { path:'/social', name:'social', component:Social, meta:{breadcrumb: {label: 'Custom Social page Label',parent: 'home'} } }
]
