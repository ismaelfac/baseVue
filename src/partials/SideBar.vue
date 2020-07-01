<template>
    <div id="sidebar" :class="{ active: isActive }">
        <b-list-group class="listSlider" v-for="item in items" :key="item.id">
            <b-list-group-item class="d-flex justify-content-between align-items-center" :to="{name:item.link}" :active="active">
                {{ item.title }}
                <b-badge variant="primary" pill>{{ item.count ? item.count : ''}}</b-badge>
            </b-list-group-item>
        </b-list-group>
        <hr class="my-4">

    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'SideBar',
    data() {
        return{
            items: [
                {id: 1, title:'Dasboard', link:'home', count: 2},
                {id: 2, title:'Configuracion', link:'settings', count: null},
                {id: 3, title:'Perfil', link:'profile', count: null}
            ],
            active: false
        }
    },
    computed: mapState({
        isActive: state => state.SideBar.toogle_btn
    }),
    methods: {

    }
}
</script>
<style lang="scss" scoped>
#sidebar.active {
        left: 0;
    }
#sidebar {
    position: fixed;
    width: 15%;
    height: 100%;
    background: rgba(230, 230, 230, 0.5);
    border-radius: 0px 15px 15px 0px;
    left: -200px;
    .listSlider b-list-group-item {
        color: rgba(80, 77, 77, 0.9);
        text-align: center;
        border-radius: 0px;
        padding: 15px 10px;
        border-bottom: 1px solid rgba(100, 100, 100, .3);
        height: 150px;
        overflow: hidden;
        
    }
}
</style>