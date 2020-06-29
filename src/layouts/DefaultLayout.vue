<template>
    <div>
        <!-- header -->
        <HeaderPartials :header="header"></HeaderPartials>
        <!-- end header -->
        
        <!-- main -->
        <b-container fluid="xl" right>
            <b-row>
                <b-col col lg="2"><Sidebar></Sidebar></b-col>
                <b-col cols="10" md="auto"><router-view></router-view></b-col>
            </b-row>
        </b-container>
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
export default {
    name: 'DefaultLayout',
    components: { HeaderPartials, Footer, Sidebar },
    data() {
        return {
            header: {
                title: 'Base'
            },
            breadcrumb: []
        }
    }
}
</script>
<style lang="scss" scoped>
.main-section {
    padding: 0;
    margin: 0;
}
</style>