<template>
    <div id="sidebar" :class="{ active: isActive }">
        <div class="toogle-btn">
            <span @click="tooglebtn()">&#9776;</span>
        </div>
        <b-list-group class="listSlider" v-for="item in items" :key="item.id">
            <b-list-group-item class="d-flex justify-content-between align-items-center" :to="{name:item.link}" :active="item.isActive">
                {{ item.title }}
                <b-badge variant="primary" pill>{{ item.count ? item.count : '0'}}</b-badge>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
export default {
    name: 'SideBar',
    data() {
        return{
            isActive:false,
            items: [
                {id: 1, title:'Dasboard', link:'home', count: 2, isActive:false},
                {id: 2, title:'Configuracion', link:'settings', count: null, isActive:false},
                {id: 3, title:'Perfil', link:'profile', count: null, isActive:false}
            ]
        }
    },
    methods: {
        tooglebtn() {
            this.isActive = !this.isActive;
        }
    }
}
</script>
<style lang="scss" scoped>
#sidebar.active {
        left: 0;
    }
#sidebar {
    position: fixed;
    width: auto;
    height: 100%;
    background: rgba(3, 3, 3, 0.9);
    border-radius: 0px 15px 15px 0px;
    left: -200px;
    .listSlider b-list-group-item {
        color: rgba(80, 77, 77, 0.9);
        text-align: center;
        padding: 15px 10px;
        border-bottom: 1px solid rgba(100, 100, 100, .3);
    }
    .toogle-btn {
        position: absolute;
        left: 200px;
        top:0px;
        cursor: pointer;
        :hover {
            background: rgba(23, 162, 184, .5);
            border: 0.5px solid rgb(71, 70, 70);
        }
        span {
            display: block;
            width: 50px;
            border-radius: 5px;
            text-align: center;
            font-size: 30px;
            border: 1px solid #000;
        }
    }
}
</style>