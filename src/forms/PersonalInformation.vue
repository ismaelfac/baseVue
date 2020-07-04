<template>
    <div>
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
        <b-form @submit.stop.prevent="handleSubmit(onSubmit)" inline>
            <b-container fluid>
              <b-row>
                <b-col md="4" lg="3" sm="6">
                  <validation-provider name="Dni" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                    <b-input-group prepend="Dni" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                      <b-form-input
                        id="dni"
                        name="dni"
                        v-model="form.dni"
                        size="sm"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-dni"
                      ></b-form-input>

                      <b-form-invalid-feedback  id="input-dni">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-input-group>
                  </validation-provider>
                </b-col>
                <b-col md="4" lg="3" sm="6">
                  <validation-provider name="Tipo Dni" :rules="{ required: true }" v-slot="validationContext">
                    <b-input-group prepend="Tipo Dni" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                      <b-form-select
                        id="type_dni"
                        name="type_dni"
                        v-model="form.type_dni"
                        :options="options_dni"
                        size="sm"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-type-dni"
                      ></b-form-select>

                      <b-form-invalid-feedback id="input-type-dni">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-input-group>
                  </validation-provider>
                </b-col>
                <b-col md="4" lg="3" sm="6">
                  <validation-provider name="Nombres" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                    <b-input-group prepend="Nombres" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                      <b-form-input
                        id="names"
                        name="names"
                        v-model="form.names"
                        size="sm"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-names"
                      ></b-form-input>

                      <b-form-invalid-feedback  id="input-names">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-input-group>
                  </validation-provider>
                </b-col>
                <b-col md="4" lg="3" sm="6">
                  <validation-provider name="Apellidos" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                    <b-input-group prepend="Apellidos" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                      <b-form-input
                        id="surnames"
                        name="surnames"
                        v-model="form.surnames"
                        size="sm"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-surnames"
                      ></b-form-input>

                      <b-form-invalid-feedback  id="input-surnames">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-input-group>
                  </validation-provider>
                </b-col>
                <b-col md="4" lg="3" sm="6">
                  <validation-provider name="gender" :rules="{ required: true }" v-slot="validationContext">
                    <b-input-group prepend="Genero" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                      <b-form-radio-group
                        id="gender"
                        v-model="form.gender"
                        :options="option_gender"
                        size="sm"
                        buttons
                        name="gender"
                        aria-describedby="input-gender"
                      ></b-form-radio-group>
                      <b-form-invalid-feedback id="input-gender">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-input-group>
                  </validation-provider>
                </b-col>
                <b-col>
                  <hr />
                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button class="ml-2" @click="resetForm()">Reset</b-button>
                </b-col>
              </b-row>       
          </b-container>
            
        </b-form>
        </validation-observer>
    </div>
</template>
<script>
export default {
    name: 'PersonalInformation',
    data() {
    return {
      options_dni: [
        { value: null, text: "Tipo de Dni" },
        { value: "CC", text: "Cedula de Ciudadania" },
        { value: "TI", text: "Tarjeta de Identidad" },
        { value: "PP", text: "Pasaporte" }
      ],
      options: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
      ],
      option_gender: [
          { value: 'male', 'text': "Masculino" },
          { value: 'female', 'text': "Femenino" }
      ],
      form: {
        dni: null,
        type_dni: null,
        names: null,
        surnames: null,
        gender: null
      }
    };
  },
  computed: {
    state() {
      return Boolean(this.value)
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
        console.log('dyrty: '+dirty+ ' Validated: '+ validated);
      return dirty || validated ? valid : null;
    },
    resetForm() {
      this.form = {
        name: null,
        food: null,
        option: null
      };

      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
    onSubmit() {
      alert("Form submitted!");
    }
  }
};
</script>