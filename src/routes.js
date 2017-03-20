import First from './first.vue'
import Second from './second.vue'
import Third from './third.vue'

const Foo = {template:'<div>foo</div>'}
const Bar = {template:'<div>bar</div>'}

export const routes = [
    {
        path: '/foo',component:First
    },{
        path:'/bar', component:Second
    },{
        path:'/todo',component:Third
    }
]


