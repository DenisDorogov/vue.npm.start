<template>
    Example {{$route.params.number}}
    <el-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default defineComponent({
  name: 'ExampleModule',
  components: {},
  data() {
    return {
      number: 1,
      input: ''
    }
  },
  props: {
    name: String
  },
  computed: {
    ...mapState({
    //   countAlias: 'count',// arrow functions can make the code very succinct!
    // count: state => state.count,

    // passing the string value 'count' is same as `state => state.count`
    // countAlias: 'count',

    // to access local state with `this`, a normal function must be used
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
    }),

    ...mapGetters([
    //   'doneTodosCount',
    //   'anotherGetter',
      // ...
    ])
  },
   methods: {
    ...mapMutations([
    //   'increment', // map `this.increment()` to `this.$store.commit('increment')`

      // `mapMutations` also supports payloads:
    //   'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
    //   add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
    }),
     ...mapActions([
    //   'increment', // map `this.increment()` to `this.$store.dispatch('increment')`

      // `mapActions` also supports payloads:
    //   'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
    //   add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  },

  // created() {

  // },

  mounted() {
    this.number = 2;
    // (): number => this.number

  },

})

</script>

<style scoped>

</style>