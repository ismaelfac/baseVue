<template>
    <div :style="{ background: fondo.backgroundColor }">
        <!-- header -->
        <HeaderPartials :header="header"></HeaderPartials>
        <!-- end header -->
        
        <!-- main -->
        <b-container fluid="xl" class="bv-example-row">
            <b-row>
                <b-col col lg="2"><Sidebar></Sidebar></b-col>
                <b-col cols="10" md="auto"><router-view></router-view></b-col>
                <b-col col lg="2"><b-button-group vertical>
                    <b-button>Top</b-button>
                    <b-button>Middle</b-button>
                    <b-button>Bottom</b-button>
                </b-button-group></b-col>
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
            fondo: {
                backgroundColor: 'rgba(23, 162, 184, .9)'
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