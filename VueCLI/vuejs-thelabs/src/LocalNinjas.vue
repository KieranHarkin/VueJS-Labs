<template>
<div>
  <h1>Ninjas with local scope</h1>
  <ul>
      <li v-for="ninja in localNinjas">
          {{ninja}}
      </li>
  </ul>
</div>
</template>



<script>
export default {
    data() {
        return {
            localNinjas: ["Hitman", "Bulldog", "Road Warrior"]
        }
    }
}
</script>


<style>

</style>
