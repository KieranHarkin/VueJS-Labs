<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
    <local-ninjas></local-ninjas>
  </div>
</template>

<script>
import LocalNinjas from "./LocalNinjas.vue";

export default {
  components: {
    'localNinjas': LocalNinjas
  },
  data () {
    return {
      title: "Ninja App"
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
