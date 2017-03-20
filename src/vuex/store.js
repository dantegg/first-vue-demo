import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './type'
Vue.use(Vuex)

const state={
    count:0,
    todolist:[]
}

const mutations={
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    },
    addNewTodo(state,item){
        console.log('mutations',item)
        state.todolist.push(item)
    }
}

const actions={
    [types.ADD_NET_TODO]({commit}){
        commit('addNewTodo')
    },
    increment:({commit})=> commit('increment'),
    decrement:({commit})=>commit('decrement'),
    incrementIfOdd({commit,state}){
        if((state.count+1)%2===0){
            commit('increment')
        }
    },
    incrementAsync({commit}){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('increment')
                resolve()
            },1000)
        })
    }
}


const getters={
    evenOrOdd: state=>state.count%2 === 0 ?"even":'odd'
}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})