<template>
    <div class="card">
        <div class="card__main">
            <img loading="lazy" :src="`https://image.tmdb.org/t/p/w300${cardInfo.backdrop_path}`" class="card__img">
        </div>
        <div class="card__info">
            <p class="card__title">{{ cardInfo.title || cardInfo.title }}</p>
            <div class="card__btns">
                <div class="card__main-btns">
                    <button class="card__btn card__btn--play">
                        <i class="fas fa-play card__icon card__icon--play"></i>
                    </button>
                    <button class="card__btn">
                        <i class="fas fa-plus card__icon"></i>
                    </button>
                    <button class="card__btn">
                        <i class="far fa-thumbs-up card__icon"></i>
                    </button>
                    <button @click="openModal" class="card__btn">
                        <i class="far fa-thumbs-down card__icon"></i>
                    </button>
                </div>
                <button class="card__btn">
                    <i class="fas fa-chevron-down card__icon"></i>
                </button>
            </div>
            <div class="card__genres">
                <span class="card__genre">{{ cardInfo.genres[0].name }} </span>
                <i v-if="cardInfo.genres[1]" class="fas fa-circle card__genre-dot"></i>
                <span v-if="cardInfo.genres[1]" class="card__genre">{{ cardInfo.genres[1].name }}
                </span>
            </div>
        </div>
    </div>
    <ModalComponent @closeModal="closeModal" :isOpened="isActive" :cardInfo="cardInfo" v-if="isActive" />

</template>

<script>
import { ref } from "vue";
import ModalComponent from "./Modal.vue";

export default {
    props: ["cardInfo"],
    components: { ModalComponent },
    setup(props) {
        let isActive = ref(false);
        function openModal() {
            isActive.value = true;
            console.log(props.cardInfo);
        }
        function closeModal() {
            isActive.value = false;
        }
        return {
            isActive,
            openModal,
            closeModal,
        };
    },

}
</script>

<style lang="scss" scoped>
</style>