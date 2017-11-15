<template>
  <ul>
      <li v-for="ninja in ninjas">
          {{ninja}}
      </li>
  </ul>
</template>



<script>
export default {
  data() {
      return {
          ninjas: ['Yoshi', 'Mario', 'Bowser']
      }
  }
}
</script>


<style>

</style>
