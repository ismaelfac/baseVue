<template>
    <div class="fondo">
        <!-- header -->
        <HeaderPartials :header="header"></HeaderPartials>
        <!-- end header -->
        
        <!-- main -->
        <section class="main-section">
            <Sidebar></Sidebar>
            <router-view></router-view>
        </section>
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
.fondo {
    background: rgba(23, 162, 184, .4);
}
.main-section {
    padding: 0;
    margin: 0;
}
</style>