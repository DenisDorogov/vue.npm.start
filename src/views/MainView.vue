<template>
  <div class="home">
    <MainModule msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainModule from '@/modules/main'

export default {
  name: 'MainView',
  components: {
    MainModule
  }
}
</script>
