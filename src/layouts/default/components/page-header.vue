<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
    name: 'PageHeader',
});

const router = useRouter();
const menuList = ref([
    {
        id: 1,
        label: '数据统计',
        children: [
            {
                id: 11,
                label: '统计',
                path: '/data-annotation/statistics',
            },
            {
                id: 12,
                label: '标注',
                path: '/data-annotation/annotation',
            },
        ],
    },
    {
        id: 2,
        label: '厚度测量',
        path: '/thickness-measurement',
    },
    {
        id: 3,
        label: '十字校正',
        path: '/cross-correction',
    },
    {
        id: 4,
        label: '缺陷检测',
        children: [
            {
                id: 41,
                label: '模型推理',
                path: '/defect-detection/model-inference',
            },
            {
                id: 42,
                label: '结果展示',
                path: '/defect-detection/result-display',
            },
            {
                id: 43,
                label: '模型训练',
                path: '/defect-detection/model-training',
            },
        ],
    },
]);
const menuClick = (path) => {
    if (!path) return;
    router.push(path);
};
</script>
<template>
    <div class="header">
        <div class="left">
            <img src="@assets/images/home/earth.png" alt="" />
            <span>工业测量与缺陷检测系统</span>
        </div>
        <div class="middle">
            <el-menu
                class="el-menu-popper"
                :ellipsis="false"
                :default-active="1"
                :popper-offset="20"
                mode="horizontal"
                background-color="transparent"
                text-color="#fff"
                active-text-color="#66D5E3"
                menu-trigger="click"
                close-on-click-outside
                unique-opened
            >
                <template v-for="item in menuList">
                    <el-sub-menu
                        v-if="item.children"
                        :index="item.id"
                        popper-class="header-popper-container"
                    >
                        <template #title>{{ item.label }}</template>
                        <el-menu-item
                            v-for="subItem in item.children"
                            :index="subItem.id"
                            :style="{
                                '--el-menu-hover-text-color': '#69d7e6',
                            }"
                            class="select-none !text-[18px] !leading-[56px] !p-[25px]"
                            @click="menuClick(subItem.path)"
                        >
                            <svg
                                class="header-menu-item-prefix w-[8px] mr-[12px]"
                                version="1.1"
                                id="图层_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 8 12"
                                style="enable-background: new 0 0 8 12"
                                xml:space="preserve"
                            >
                                <g>
                                    <rect class="st0" width="4" height="4" />
                                    <rect
                                        x="4"
                                        y="4"
                                        class="st0"
                                        width="4"
                                        height="4"
                                    />
                                    <rect
                                        y="8"
                                        class="st0"
                                        width="4"
                                        height="4"
                                    />
                                </g>
                            </svg>
                            {{ subItem.label }}</el-menu-item
                        >
                    </el-sub-menu>
                    <el-menu-item
                        v-else
                        :index="item.id"
                        :style="{
                            '--el-menu-hover-text-color': '#69d7e6',
                        }"
                        class="select-none !text-[18px] !leading-[56px] !p-[25px]"
                        @click="menuClick(item.path)"
                    >
                        <svg
                            class="header-menu-item-prefix w-[8px] mr-[12px]"
                            version="1.1"
                            id="图层_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 8 12"
                            style="enable-background: new 0 0 8 12"
                            xml:space="preserve"
                        >
                            <g>
                                <rect class="st0" width="4" height="4" />
                                <rect
                                    x="4"
                                    y="4"
                                    class="st0"
                                    width="4"
                                    height="4"
                                />
                                <rect y="8" class="st0" width="4" height="4" />
                            </g>
                        </svg>
                        {{ item.label }}</el-menu-item
                    >
                </template>
            </el-menu>
        </div>
        <div class="right"></div>
    </div>
</template>
<style scoped lang="less">
.header {
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 16px;
    background-color: #0a1225;
    background-image: url('@assets/images/common/header-bg.png');
    background-repeat: no-repeat;
    background-position: right top;

    .left {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: default;

        img {
            width: 44px;
            height: 44px;
            margin-right: 15px;
        }
        span {
            font-size: 26px;
            color: #ffffff;
            line-height: 23px;
            font-weight: bold;
        }
    }
    .middle {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .el-menu--horizontal.el-menu {
            border-bottom: none;

            :deep(.el-sub-menu) {
                user-select: none;

                &.is-active {
                    .el-sub-menu__title {
                        border-bottom: none;
                    }
                }

                .el-sub-menu__title {
                    font-size: 20px;
                    font-weight: 500;
                    border-bottom: none;
                }
            }

            .el-menu-item {
                border-bottom: none;
            }
        }
    }
    .right {
        display: flex;
        align-items: center;
        background-image: url('@assets/images/common/header-exit.png');
        background-repeat: no-repeat;
        background-size: contain;
        width: 28px;
        height: 32px;
        cursor: pointer;
        user-select: none;
        -webkit-user-drag: none;
    }
}
</style>
<style lang="less">
.header-popper-container {
    .el-menu-item {
        .header-menu-item-prefix {
            user-select: none;
            -webkit-user-drag: none;
            .st0 {
                fill: #fff;
            }
        }

        &.is-active .st0,
        &:hover .st0 {
            fill: #60c6d4;
        }
    }
}
</style>
