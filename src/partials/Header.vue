<template>
    <div>
         <b-navbar :toggleable="BNavBar.toggleable" :type="BNavBar.type" :variant="BNavBar.variant">
            <b-navbar-brand href="/">{{ header.title}}</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-brand v-for="item in items" :key="item.id" :to="{name:item.link}">{{ item.title}}</b-navbar-brand>
            

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" v-for="item in profile" :key="item.id">
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <b-avatar variant="info"></b-avatar>
                    <em>{{ item.fullName }}</em>
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
                type: 'dark',
                variant: 'info'
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

</style>