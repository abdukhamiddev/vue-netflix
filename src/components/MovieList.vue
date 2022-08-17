<template>
    <div class="carousel">
        <h3 class="carousel__title">
            {{ movie.title }}
        </h3>
        <button class="carousel__btn carousel__btn--left">
            <i class="fas fa-chevron-right carousel__icon"></i>
        </button>
        <div class="carousel__list">

            <div class="carouse__item " :key="item.id" v-for="item in movies">
                <MovieCardComponent :cardInfo="item" />
            </div>
        </div>
        <button class="carousel__btn">
            <i class="fas fa-chevron-right carousel__icon"></i>
        </button>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import MovieCardComponent from './MovieCard.vue'

export default {
    props: ["movie"],
    components: {
        MovieCardComponent
    },
    setup(props) {
        let moviesId = ref([]);
        let movies = ref([]);
        let slider = ref("");
        let isActive = ref(false);

        async function fetchMovies() {
            await fetch(
                `https://api.themoviedb.org/3/discover/${props.movie.type}?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${props.movie.genreId}`
            )
                .then((response) => response.json())
                .then((response) => {
                    moviesId.value = response.results
                        .filter(
                            (el) =>
                                el.backdrop_path !== null &&
                                el.overview.split(".")[0].length > 30
                        )
                        .map((el) => el.id);
                    moviesId.value.forEach((el) => {
                        appendInfo(el);
                    });
                });
        }
        async function appendInfo(value) {
            await fetch(
                `https://api.themoviedb.org/3/${props.movie.type}/${value}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos,credits,release_dates,similar`
            )
                .then((response) => response.json())
                .then((response) => {
                    if (
                        response.videos.results.length > 0 &&
                        response.similar.results.length > 0
                    ) {
                        movies.value.push(response);
                    }
                });
        }
        function nextSlide() {
            slider.value.scrollLeft += (slider.value.clientWidth * 90) / 100;
            isActive.value = true;
        }
        function prevSlide() {
            slider.value.scrollLeft -= (slider.value.clientWidth * 90) / 100;
            if (slider.value.scrollLeft < slider.value.clientWidth) {
                isActive.value = false;
            }
        }
        onMounted(() => {
            fetchMovies();
        });
        return {
            moviesId,
            movies,
            slider,
            isActive,
            nextSlide,
            prevSlide,
        };

    }
}
</script>

<style lang="scss" scoped>
</style>