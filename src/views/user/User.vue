<template lang="html">
  <div>
    <NavBar index='4'></NavBar>
    <Login></Login>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Login from './Login.vue'
export default {
  components: {
    NavBar,
    Login
  }
}
</script>

<style lang="css" scoped>
</style>
