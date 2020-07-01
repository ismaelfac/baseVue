<template>
  <div>
    <b-jumbotron bg-variant="light" text-variant="dark" border-variant="white">
    <template v-slot:header>Perfil </template>

    <template v-slot:lead>
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>
  </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: 'Profile',
}
</script>
<style lang="scss" scoped>
b-jumbotron {
}
</style>