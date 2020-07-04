<template>
    <div>
        <b-modal id="modal-xl" size="xl" title="Extra Large Modal"></b-modal>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Modal',
    props: { form: Object},
    data() {
        return {
            
        }
    },
    computed: mapState({
        IsActiveModal: state => state.Modal.IsActiveModal
    }),
    methods: {

    }
}
</script>