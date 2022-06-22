
<template>
    <ExampleModule />
    <router-view/>
</template>

<script>
import ExampleModule from '../modules/example';

export default {
  name: 'ExampleView',
  components: {
    ExampleModule
  }
}
</script>
