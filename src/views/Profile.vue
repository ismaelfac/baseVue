<template>
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs v-model="tabIndex" small card>
        <b-tab title="General">
          <PersonalInformation></PersonalInformation>
        </b-tab>
        <b-tab title="Demografica">
          <DemograPerson></DemograPerson>
        </b-tab>
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--">Previous</b-button>
        <b-button @click="tabIndex++">Next</b-button>
      </b-button-group>

      <div class="text-muted">Current Tab: {{ tabIndex }}</div>
    </div>
  </div>
</template>
<script>
import DemograPerson from '../forms/DemograPerson'
import PersonalInformation from '../forms/PersonalInformation'
export default {
  name: 'Profile',
  components: { PersonalInformation, DemograPerson },
  data() {
      return {
        tabIndex: 1
      }
    }
}
</script>
<style lang="scss" scoped>

</style>