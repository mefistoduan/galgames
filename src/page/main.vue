<template>
    <div id="pages">
        <h2>{{gameName}}</h2>
        <span>{{depend}}</span>
        <div>
            <mu-flex class="flex-wrapper" align-items="center">
                <mu-flex class="flex-demo" justify-content="center" fill>
                    <mu-button color="primary"to="/section">开始游戏</mu-button>
                </mu-flex>
            </mu-flex>
            <br>
            <mu-flex class="flex-wrapper" align-items="center">
                <mu-flex class="flex-demo" justify-content="center" fill>
                    <mu-button color="primary" to="/readGame">读取进度</mu-button>
                </mu-flex>
            </mu-flex>
            <br>
            <mu-flex class="flex-wrapper" align-items="center">
                <mu-flex class="flex-demo" justify-content="center" fill>
                    <mu-button color="primary" to="/setGame">设置</mu-button>
                </mu-flex>
            </mu-flex>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // database 基本配置项目
                dialogVisible: false,
                gameName: '不存在的骑士',
                depend: '改编自意大利作家伊塔洛·卡尔维诺创作的中篇小说',
            }
        },
        method: {
            starGame() {
                console.log(123);
            },
            readGame() {
                console.log(123);
            },
            settingGame() {
                console.log(123);
            }
        }
    }
</script>

<style>
    h2 {
        width:100%;
        height: 60px;
        line-height: 60px;
        display:block;
        margin:0 auto;
        margin-top: 120px;
        text-align: center;
        font-size: 40px;
        margin-bottom: 20px;
    }
    #pages {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        background: #e2e2e2;
    }
    span {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 20px;
    }
</style>
