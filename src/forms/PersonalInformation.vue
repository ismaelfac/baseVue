<template>
    <div>
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
        <b-form @submit.stop.prevent="handleSubmit(onSubmit)" inline>
            <b-container fluid>
              <b-row>
                <b-col md="4" lg="3" sm="6">
                  <validation-provider name="Dni" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                    <b-input-group prepend="Dni" size="sm" class="mb-6 mr-sm-2 mb-sm-2">
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
                  <validation-provider name="birthday" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                    <b-input-group prepend="Fecha Nacimiento" size="sm" class="mb-6 mr-sm-2 mb-sm-2">
                      <b-form-input
                        id="birthday"
                        name="birthday"
                        type="date"
                        v-model="form.birthday"
                        size="sm"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-birthday"
                      ></b-form-input>
                      <b-form-invalid-feedback  id="input-birthday">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-input-group>
                  </validation-provider>
                </b-col>
                <b-col md="4" lg="3" sm="6">
                  <validation-provider name="email" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                    <b-input-group prepend="Email" size="sm" class="mb-6 mr-sm-2 mb-sm-2">
                      <b-form-input
                        id="email"
                        name="email"
                        type="email"
                        v-model="form.email"
                        size="sm"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-email"
                      ></b-form-input>
                      <b-form-invalid-feedback  id="input-email">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-input-group>
                  </validation-provider>
                </b-col>
                <b-col md="4" lg="3" sm="6">
                    <b-input-group prepend="Genero" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                      <b-form-radio-group
                        id="btn-radio-1"
                        v-model="form.gender"
                        :options="options_gender"
                        :state="state"
                        size="sm"
                        buttons
                        button-variant="outline-primary"
                        name="gender"
                      >
                      <b-form-valid-feedback :state="state">Perfecto!</b-form-valid-feedback>
                      </b-form-radio-group>                      
                    </b-input-group>
                </b-col>
                <b-col md="4" lg="3" sm="6">
                  <validation-provider name="Tipo de Sangre" :rules="{ required: true }" v-slot="validationContext">
                    <b-input-group prepend="Tipo de Sangre" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                      <b-form-select
                        id="blood_type"
                        name="blood_type"
                        v-model="form.blood_type"
                        :options="options_blood_type"
                        size="sm"
                        :state="getValidationState(validationContext)"
                        aria-describedby="input-blood-type"
                      ></b-form-select>
                      <b-form-invalid-feedback id="input-blood-type">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
      options_gender: [
          { value: 'male', 'text': "Masculino" },
          { value: 'female', 'text': "Femenino" }
      ],
      options_blood_type: [
        { value: 'O+', 'text': "O+" },
        { value: 'O-', 'text': "O-" },
        { value: 'A+', 'text': "A+" },
        { value: 'A-', 'text': "A-" },
        { value: 'B+', 'text': "B+" },
        { value: 'B-', 'text': "B-" },
        { value: 'AB+', 'text': "AB+" },
        { value: 'AB-', 'text': "AB-" },
      ],
      form: {
        dni: null,
        type_dni: null,
        names: null,
        surnames: null,
        birthday: null,
        email: null,
        gender: null,
        blood_type: null
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
        dni: null,
        type_dni: null,
        names: null,
        surnames: null,
        birthday: null,
        email: null,
        gender: null
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