<template>
    <div>
        <!-- header -->
        <HeaderPartials :header="header"></HeaderPartials>
        <!-- end header -->

        <!-- main -->
        <section class="main-section mb-5">
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
export default {
    name: 'DefaultLayout',
    components: { HeaderPartials, Footer },
    data() {
        return {
            header: {
                title: 'Base'
            }
        }
    }
}
</script>