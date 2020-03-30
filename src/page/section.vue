<template>
    <div class="context">
        <!--<div class="bg" style="background: url('../../static/img/bg/bg01.png')">-->
        <div class="bg" :style="{background: backgroundSrc}">
            <div class="man">
                <ul>
                    <li>
                        <img src="../../static/img/man/knife.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="chat">
            <div class="lt" @click="step">
                <div class="speaker_container">
                    <div class="speaker">{{speaker}}:</div>
                </div>
                <br>
                <span class="text">{{text}}</span>
            </div>
            <div class="rt">
                <mu-button color="success" d="load" @click="load">读数据</mu-button>
                <mu-button color="warning" id="replay">回放</mu-button>
                <mu-button color="secondary" id="save" @click="save">存数据</mu-button>
                <mu-button color="primary" id="step" @click="step">下句话</mu-button>
            </div>
        </div>
    </div>
</template>

<script>
    import story from '../story/index'
    export default {
        data() {
            return {
                speaker: '',
                text: '',
                wordid: 1,
                nextWordid: 1,
                currentWordid: 1,
                readList: 1,
                backgroundSrc:"",
            }
        },
        mounted() {
            // 初始化
            this.initStory();
        },
        methods: {
            step() {
                this.changeBg(this.wordid);
                this.stepWord(this.nextWordid);
            },
            stepWord(t) {
                console.log(t);
                this.nextWordid += 1;
                // todo
                // let currentWord = getWord(this.nextWordid);
            },
            save() {
                this.savePrgress();
            },
            // 进度保存
            savePrgress() {
                localStorage.saveContent = this.currentWordid;
                this.$toast.success('保存成功');
            },
            load() {
                this.loadPrgress();
            },
            // 读取保存
            loadPrgress() {
                let that = this;
                if (localStorage.saveContent) {
                    that.stepWord(localStorage.saveContent);
                    that.readList = [];
                    this.$toast.success('读取成功');
                } else {
                    this.$toast.error('读取失败');
                }
            },
            changeBg(id){
                console.log(id);
                this.backgroundSrc =  "url('../../static/img/bg/bg01.png')"
            },
            // 初始化
            initStory(){
                this.wordid = 1;
                this.currentWordid = 1;
                this.readList = 1;
                this.nextWordid = 1;
                this.speaker = story().roles[0].name;
                this.text = story().datas[0].content;
                this.backgroundSrc =  "url('../../static/img/bg/bg01.png')"
            }
        }
    }
</script>

<style scoped>
    .context {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        display: block;
        margin: 0 auto;
        padding: 0;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .context .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: block;
        margin: 0 auto;
        background-size: 100%;
    }

    .chat {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        width: 100%;
        display: block;
        margin: 0 auto;
    }

    .chat .lt {
        width: 100%;
        height: 200px;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding: 5px;
        background: rgba(255, 255, 255, 0.6);
    }

    .chat .rt {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        margin-top: 5px;
    }

    .chat .rt button {
        margin-right: 5px;
    }

    .chat .rt button:nth-child(4) {
        margin-right: 0px;
        float: right;
    }

    .man {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        position: absolute;
        bottom: 240px;
    }

    .man li img {
        width: 160px;
        max-height: 240px;
    }
    .speaker {
        font-size: 16px;
    }
    .text {
        font-size: 16px;
    }
</style>
