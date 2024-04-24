<script setup>
import { useRouter } from 'vue-router';
import icon1 from '@assets/images/home/icon1.png';
import icon2 from '@assets/images/home/icon2.png';
import icon3 from '@assets/images/home/icon3.png';
import icon4 from '@assets/images/home/icon4.png';
import modelBg1 from '@assets/images/home/model-bg1.png';
import modelBg2 from '@assets/images/home/model-bg2.png';
import modelBg3 from '@assets/images/home/model-bg3.png';
import modelBg4 from '@assets/images/home/model-bg4.png';

const router = useRouter();
const moduleEntranceList = [
    {
        name: '数据统计',
        icon: icon1,
        backgroundImg: modelBg1,
        path: '/data-annotation',
    },
    {
        name: '厚度测量',
        icon: icon2,
        backgroundImg: modelBg2,
        path: '/thickness-measurement',
    },
    {
        name: '十字矫正',
        icon: icon3,
        backgroundImg: modelBg3,
        path: '/cross-correction',
    },
    {
        name: '缺陷检测',
        icon: icon4,
        backgroundImg: modelBg4,
        path: '/defect-detection',
    },
];
defineOptions({
    name: 'Home',
});
</script>
<template>
    <div class="my-container">
        <img
            src="@assets/images/home/earth.png"
            alt=""
            class="earth"
            width="66"
            height="66"
        />
        <div class="title">遥感影像智能分析系统</div>
        <div class="description">
            文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区文字介绍占位区
        </div>
        <div class="module-entrance">
            <div
                class="module-entrance__item"
                v-for="item in moduleEntranceList"
                :key="item.name"
                :style="{
                    backgroundImage: `url(${item.backgroundImg})`,
                }"
                @click="router.push(item.path)"
            >
                <div
                    class="icon"
                    :style="{ backgroundImage: `url(${item.icon})` }"
                ></div>
                <div class="name">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
.my-container {
    width: 100%;
    height: 100vh;
    padding-top: 170px;
    padding-left: 90px;
    padding: 170px 90px 20px;
    overflow: hidden;
    background-image: url('@assets/images/home/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .earth {
        width: 66px;
        height: 66px;
        user-select: none;
        -webkit-user-drag: none;
    }

    .title {
        width: 100%;
        margin-top: 58px;
        font-weight: 500;
        font-size: 43px;
        color: #ffffff;
        line-height: 38px;
        cursor: default;
    }

    .description {
        margin-top: 50px;
        max-width: 1168px;
        font-weight: 500;
        font-size: 18px;
        color: #ffffff;
        line-height: 32px;
        cursor: default;
    }

    .module-entrance {
        width: 100%;
        height: 246px;
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__item {
            min-width: 0;
            flex: 1;
            height: 100%;
            margin-right: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: transform 0.5s ease;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 20px;

            &:hover {
                transform: scale(1.15);
            }

            &:nth-last-child(1) {
                margin-right: 0;
            }

            .icon {
                width: 60px;
                height: 60px;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }

            .name {
                margin-top: 30px;
                font-weight: bold;
                font-size: 26px;
                color: #ffffff;
                line-height: 32px;
            }
        }
    }
}
</style>
