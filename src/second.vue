<template>
    <div>
    <div>second component vue</div>
    <div>
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    </div>
    </div>
</template>

<<script>
    import {mapGetters,mapActions} from 'vuex'
    export default{
        name:'second',
        computed:mapGetters([
            'evenOrOdd'
        ]),
        methods:mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
</script>