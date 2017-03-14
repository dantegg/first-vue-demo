<template>
    <div id='app'>
        <h1>the first vue demo</h1>
        <div>{{msg}}</div>
        <ul>
            <li><router-link to='/foo'>foo</router-link></li>
            <li><router-link to='/bar'>bar</router-link></li>
        </ul>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'app',
        data(){
            return {
                msg:'hello vue2!!!'
            }
        }
    }
</script>