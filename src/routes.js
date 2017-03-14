import First from './first.vue'
import Second from './second.vue'

const Foo = {template:'<div>foo</div>'}
const Bar = {template:'<div>bar</div>'}

export const routes = [
    {
        path: '/foo',component:First
    },{
        path:'/bar', component:Second
    }
]


