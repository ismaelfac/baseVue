<template>
  <div>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
        <b-container fluid>
            <b-row>
              <b-col>
                <validation-provider name="Name" :rules="{ required: true, min: 4 }" v-slot="validationContext">
                  <b-input-group prepend="Tipo Dni" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                    <b-form-input
                      id="vname"
                      name="vname"
                      class="col-12"
                      v-model="form.name"
                      size="sm"
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-1-live-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback  id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-input-group>
                </validation-provider>
              </b-col>
              <b-col>
                <validation-provider name="Food" :rules="{ required: true }" v-slot="validationContext">
                  <b-input-group prepend="Dni" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                    <b-form-select
                      id="vfood"
                      name="vfood"
                      class="col-12"
                      v-model="form.food"
                      :options="foods"
                      size="sm"
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-food"
                    ></b-form-select>

                    <b-form-invalid-feedback id="input-food">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-input-group>
                </validation-provider>
              </b-col>
              <b-col>
                <validation-provider name="Option1" :rules="{ required: true }" v-slot="validationContext">
                  <b-input-group prepend="Genero" size="sm" class="mb-2 mr-sm-2 mb-sm-2">
                    <b-form-select
                      id="voption"
                      name="voption"
                      class="col-12"
                      v-model="form.option1"
                      :options="foods"
                      size="sm"
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-2-live-feedback"
                    ></b-form-select>

                    <b-form-invalid-feedback id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-input-group>
                </validation-provider>
              </b-col>
            </b-row>       
        </b-container>    
        <validation-provider name="option" :rules="{ required: true }" v-slot="validationContext">
          <b-form-group id="optinGener" class="col-4" label="Option" label-for="example-input-2">
          <b-form-radio-group 
            v-model="form.option" 
            :options="options" 
            :state="getValidationState(validationContext)" 
            name="radio-validation"
            class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-invalid-feedback :state="getValidationState(validationContext)">Please select one</b-form-invalid-feedback>
            <b-form-valid-feedback :state="getValidationState(validationContext)">Thank you</b-form-valid-feedback>
          </b-form-radio-group>
          </b-form-group>
        </validation-provider>
      
        <hr />
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button class="ml-2" @click="resetForm()">Reset</b-button>
      
      </b-form>
    </validation-observer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foods: [
        { value: null, text: "Choose..." },
        { value: "apple", text: "Apple" },
        { value: "orange", text: "Orange" }
      ],
      options: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
      ],
      form: {
        name: null,
        food: null,
        option: null,
        option1: null
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
        option1: null,
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