import Inag from './comp/inag.vue'
import Add from './comp/add.vue'
import Get from './comp/get.vue'
import Id from './comp/id.vue'

export default[
  {path:'/', component:Inag},
  {path:'/add', component:Add},
  {path:'/get', component:Get},
  {path:'/get/:id', component:Id}
]
