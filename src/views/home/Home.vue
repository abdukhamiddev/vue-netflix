<template>
    <HeroComponent :heroParam="moviesHeroParam" />
    <main class="main">
        <MovieListComponent :key="index" :movie='item' v-for="(item, index) in listInfo" />
    </main>
</template>

<script>
import HeroComponent from '../../components/Hero.vue';
import MovieListComponent from '../../components/MovieList.vue';

import { ref, onMounted } from 'vue';
export default {
    components: {
        HeroComponent,
        MovieListComponent
    },
    setup() {

        let listInfo = [
            { type: "movie", title: "Trending Now", genreId: 28 },
            { type: "tv", title: "Watch It Again", genreId: 10759 },
            { type: "movie", title: "Recently Added", genreId: 10751 },
            { type: "tv", title: "Popular Tv Shows", genreId: 16 },
            { type: "movie", title: "Crime & Thrillers", genreId: 80 },
            { type: "tv", title: "Top Rated", genreId: 35 },
        ];
        let moviesHeroParam = "movie/popular";
        return {
            listInfo,
            moviesHeroParam,
        };
    }
}
</script>

<style lang="scss" scoped>
.main {
    margin-top: -13%;
}
</style>