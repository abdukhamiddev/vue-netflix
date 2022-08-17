<template>
    <HeaderComponent />
    <router-view :key="route.path" />
    <FooterComponent />

</template>

<script>
import { useRoute } from "vue-router";
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";
export default {
    components: {
        HeaderComponent,
        FooterComponent,
    },
    setup() {
        const route = useRoute()
        return {
            route
        };
    },
};
</script>