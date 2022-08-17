<template>
    <div class="modal">
        <div class="modal__video">

            <button class="modal__byn modal__btn--close">
                <i class="fas fa-times modal__icon"></i>
            </button>
            <iframe src="" frameborder="0" class="modal__video-frame"></iframe>
            <div class="modal__overlay">
                <h3 class="modal__title">
                    {{ cardInfo.name || cardInfo.title }}
                </h3>
                <div class="modal_btns">
                    <button class="modal__btn modal__btn--play">
                        <i class="fas fa-play modal__icon modal__icon--play"></i>Play
                    </button>
                    <button class="modal__btn">
                        <i class="fas fa-plus modal__icon"></i>
                    </button>
                    <button class="modal__btn">
                        <i class="far fa-thumbs-up modal__icon"></i>
                    </button>
                    <button class="modal__btn">
                        <i class="far fa-thumbs-down modal__icon"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="modal__info">
            <p class="modal__overview">
                {{ cardInfo.overview.split(".")[0] + "." }}
            </p>
            <div class="modal__credits">
                <p class="modal__text">
                    <span class="modal__text--gray">Cast:</span>{{ cast }}
                </p>
                <p class="modal__text">
                    <span class="modal__text--gray">Genres:</span>{{ genre }}
                </p>
            </div>
        </div>
        <div class="modal__related">

            <h3 class="modal__related-title">More Like This</h3>
            <div class="modal__cards">
                <div class="modal__card">
                    <div class="modal__card-main">
                        <p class="modal__card-name">
                        </p>
                        <img src="" alt="" class="modal__card-img">
                    </div>
                    <div class="modal__card-info">
                        <p class="modal__card-vote">{{ item.vote_average }}</p>
                        <p class="modal__card-date">
                            {{ item.release_date ?
                                    item.relaese_date.split("-")[0] : item.first_air_date.split("-")[0]
                            }}
                        </p>
                    </div>
                    <p class="modal__card-overview">
                        {{ item.overview.split(".")[0] + "." }}
                    </p>
                </div>
                <div class="modal__about">

                    <h3 class="modal__title">
                        <span class="modal__title-thin">About</span>
                        {{ cardInfo.name || cardInfo.title }}
                    </h3>
                    <p v-if="cardInfo.credits.crew.length > 0" class="modal__text">
                        <span class="modal__text--gray">Director: </span>{{ cardInfo.credits.crew[0].name }}
                    </p>
                    <p class="modal__text">
                        <span class="modal__text--gray">Cast: </span>{{ cast }}
                    </p>
                    <p v-if="cardInfo.credits.crew.length > 1" class="modal__text">
                        <span class="modal__text--gray">Writer: </span>{{ cardInfo.credits.crew[1].name }}
                    </p>
                    <p class="modal__text">
                        <span class="modal__text--gray">Genres: </span>{{ genre }}
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { computed } from 'vue';

export default {
    props: ["cardInfo", "isOpened"],
    emits: ["closeModal"],
    setup(props) {
        let related = computed(() => {
            return props.cardInfo.similar.results.filter(el => el.backdrop_path !== null && el.overview.split(".")[0].length > 30).splite(0, 9)
        })
        let cast = computed(() => {
            if (props.cardInfo.credits.cast.length > 1) {
                return `${props.cardInfo.credits.cast[0].name}, ${props.cardInfo.credits.cast[1].name}`;
            } else {
                return props.cardInfo.credits.cast[0].name;
            }
        })
        let genre = computed(() => {
            if (props.cardInfo.genres.length > 1) {
                return `${props.cardInfo.genres[0].name}, ${props.cardInfo.genres[1].name}`;
            } else {
                return props.cardInfo.genres[0].name;
            }
        });


        return {
            related, cast, genre
        }
    }
}
</script>

