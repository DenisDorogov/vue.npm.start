<template>
    <el-button type="success">Success</el-button>
     <el-button type="primary" plain>Primary</el-button>
     <el-button type="primary">Primary</el-button>
</template>

<script>
 import { ElButton } from 'element-plus'

export default {
  name: "ButtonGo",
  components: { ElButton },
}
</script>

<style scoped>

</style>