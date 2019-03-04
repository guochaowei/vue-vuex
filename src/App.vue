<template>
  <div id="app">
    <!-- <router-view/> -->
    {{count}}
    <div @click="step1({amount: 11})">add(11)</div>
    <!-- {{doneTodosCount}}
    {{doneTodoById(2)}} -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
// import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count

    // 传字符串参数 'count' 等同于 `state => state.count`
    // count: 'count'

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
  }),
  // computed: mapState([
  //   // 映射 this.count 为 store.state.count
  //   'count'
  // ])
  // computed: {
  //   // doneTodosCount () {
  //   //   return this.$store.getters.doneTodosCount
  //   // },
  //   // doneTodoById () {
  //   //   return this.$store.getters.getTodoById(2)
  //   // }
  //   // ...mapGetters([
  //   //   'doneTodosCount',
  //   // ])
  //   ...mapGetters({
  //     doneTodoById: 'getTodoById'
  //   })
  // },
  methods: {
    ...mapMutations([
      'increment'
    ]),
    ...mapActions([
      'step1' // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ])
  },
  created () {
    // this.$store.commit('increment', {
    //   amount: 10
    // })
    // this.$store.commit({
    //   type: 'increment',
    //   amount: 10
    // })
    // this.$store.dispatch('incrementAsync', {
    //   amount: 10
    // })
    // this.$store.dispatch({
    //   type: 'incrementAsync',
    //   amount: 10
    // })
    this.$store.dispatch({
      type: 'step1',
      amount: 10
    }).then(this.$store.dispatch({
      type: 'step2'
    }))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
