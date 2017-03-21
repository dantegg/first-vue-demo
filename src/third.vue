<template>
    <div>
        <div>todo</div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" v-on:click='addTodo'>todo</el-button>
        <ul>
            <li v-for="item in $store.state.todolist">
                {{item.text}}
            </li>
        </ul>
    </div>
</template>

<script>
//import {mapMutations} from 'vuex'
import store from './vuex/store'
    export default{
        name:'todo',
        data(){
            return{
                input:''
            }
        },
        mounted () {
          console.log('mounted',this.$store.state.todolist)  
        },
        updated(){
          console.log('updated',this.$store.state.todolist)  
        },
        methods:{
            addTodo(){
                //console.log(this.input)
                let text = this.input
                //this.$store.commit('addNewTodo', { text:text })
                //store.commit('addNewTodo',{text:text})
                store.dispatch('ADD_NET_TODO',{text:text})
                //console.log('added',this.$store.state.todolist)  
            }
        }
    }
</script>