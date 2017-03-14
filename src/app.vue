<template>
    <div id='app'>
        <h1>the first vue demo</h1>
        <div>{{msg}}</div>
    </div>
</template>

<script>
    export default {
        name:'app',
        data(){
            return {
                msg:'hello vue2'
            }
        }
    }
</script>