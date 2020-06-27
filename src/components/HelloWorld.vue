<template>
  <div class="black">
    <h1 class="hello">{{ msg }}</h1>
    <h3 class="msgSecundary">{{ msdSecundary }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    msdSecundary: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
