<template>
  <div class="home">
    <MainModule msg="Welcome to Your Vue.js App"/>
    <router-view/>
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
