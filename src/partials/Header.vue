<template>
    <div>
         <b-navbar :toggleable="BNavBar.toggleable" :type="BNavBar.type" :variant="BNavBar.variant">
             <div class="toogle-btn">
                <span @click="tooglebtn()">&#9776;</span>
            </div>
            <b-navbar-brand href="/"><img class="logo" src="../assets/logo.png" alt=""></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-brand v-for="item in items" :key="item.id" :to="{name:item.link}">{{ item.title}}</b-navbar-brand>
            

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" v-for="item in profile" :key="item.id">
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <b-avatar variant="info"></b-avatar>
                </template>
                <b-dropdown-item href="#">{{ item.profile }}</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: { header: Object },
    data() {
        return { 
            classNav: 'navbar navbar-dark bg-dark',
            items: [
                {id: 1, title: 'option1', link: 'profile'},
                {id: 2, title: 'option2', link: 'home'},
                {id: 3, title: 'option3', link: 'profile'}
            ],
            BNavBar: {
                toggleable: 'lg',
                type: 'light',
                variant: 'light'
            },
            profile: [
                {
                    id: '72288959',
                    fullName: 'Ismael E. Lastre Alvarez',
                    role: 'SuperAdmin',
                    profile: 'Perfil',
                    profileLink: 'profile'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.logo{
    height: 50px;
    width: 150px;
}
.toogle-btn {
        position: relative;
        left: 0px;
        top:auto;
        cursor: pointer;
        :hover {
            background: rgba(23, 162, 184, .5);
            border: 0.5px solid rgb(236, 233, 233);
        }
        span {
            display: block;
            width: 50px;
            border-radius: 5px;
            text-align: center;
            font-size: 30px;
            border: 1px solid  rgba(32, 206, 233, 0.5);
        }
    }
</style>