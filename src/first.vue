<template>
    <div>
        <div class="first-cp">first vue component</div>
        <div>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-input v-model='input2' placeholder='请输入内容'></el-input>
        </div>
    </div>
    
</template>

<<script>
    export default{
        data(){
            return{
                input:"",
                input2:'123'
            }
        }
    }
</script>

<style>
    .first-cp{
        color:green;
        font-size:25px;
    }

    .first-cp:hover{
        color:red;
        font-size:35px;
    }
</style>