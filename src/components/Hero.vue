<template>
    <div class="hero">
        <video :src="heroVideo" typeof="video/mp4" class="hero__video"></video>
        <div class="hero__main">
            <div class="hero__action">
                <h1 class="hero__title">{{ heroInfo.title || heroInfo.name }}</h1>
                <p class="hero__overview">{{ heroInfo.overview }}</p>
                <div class="hero__btns">
                    <button class="hero__btn hero__btn--play">
                        <i class="fas fa-play hero__btn-icon"></i> Play
                    </button>
                    <button class="hero__btn hero__btn--info">
                        <img src="../assets/svg/info-icon.svg" alt="info-icon" /> More Info
                    </button>
                </div>
            </div>
            <button class="hero__audio">
                <i class="fas fa-volume-mute hero__audio-icon"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ["heroInfo"],
    setup(props) {
        let heroVideo = computed(() => {
            if (!props.heroInfo) {
                return ''
            }
            else {
                if (props.heroInfo.title) {
                    return `./src/assets/hero-videos/${props.heroInfo.title
                        .toLowerCase()
                        .replace(" ", "")}.mp4`;
                } else {
                    return `./src/assets/hero-videos/${props.heroInfo.name
                        .toLowerCase()
                        .replace(" ", "")}.mp4`;
                }
            }
        })


        return {
            props,
            heroVideo,
        }
    }
}
</script>

<style lang="scss" scoped>
</style>