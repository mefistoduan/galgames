<template>
    <div class="context">
        <mu-appbar style="width: 100%;" color="primary">
            <router-link to="/" slot="left">
                <mu-icon value="arrow_back"></mu-icon>
            </router-link>
            设置
        </mu-appbar>
        <mu-form :model="model" class="mu-demo-form" label-width="100">
            <mu-form-item prop="slider" label="文字速度">
                <mu-slider class="demo-slider" :step="10" v-model="sliderVal" @change="saveslide"></mu-slider>
            </mu-form-item>
        </mu-form>
    </div>
</template>

<script>
    import story from '../story/index'

    export default {
        data() {
            return {
                sliderVal: parseInt(localStorage.speed) || 50,
                model: {},
            }
        },
        methods: {
            // 文字速度
            saveslide(e) {
                localStorage.speed = e
            },
        }
    }
</script>

<style scoped>
    .mu-demo-form {
        padding: 10px;
    }
</style>
