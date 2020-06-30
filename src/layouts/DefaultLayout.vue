<template>
    <div>
        <!-- header -->
        <HeaderPartials :header="header"></HeaderPartials>
        <!-- end header -->
        
        <!-- main -->
            <b-row>
                <b-col :cols="colsSideBar"><Sidebar></Sidebar></b-col>
                <b-col :cols="colsContent" md="100%">
                    <TopBar></TopBar>
                    <router-view></router-view>
                </b-col>
            </b-row>
        <!-- end main -->

        <!-- footer -->
        <Footer></Footer>
        <!-- end footer -->
    </div>
</template>
<script>
import HeaderPartials from '../partials/Header';
import Footer from '../partials/Footer';
import Sidebar from '../partials/SideBar';
import TopBar from '../partials/TopBar';
import { mapState } from 'vuex';
export default {
    name: 'DefaultLayout',
    components: { HeaderPartials, Footer, Sidebar, TopBar },
    data() {
        return {
            header: {
                title: 'Base'
            },
            breadcrumb: []
        }
    },
    computed: mapState({
        colsContent: state => state.SideBar.colsContent,
        colsSideBar: state => state.SideBar.colsSideBar
    }),
}
</script>
<style lang="scss" scoped>
html {
  background:  url("https://i.pinimg.com/originals/da/4c/bb/da4cbb2d23881879e8729042629c3684.jpg");
}

.main-section {
    padding: 0;
    margin: 0;
}
</style>