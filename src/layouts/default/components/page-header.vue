<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

defineOptions({
    name: 'PageHeader',
});

const router = useRouter();
const route = useRoute();
const menuList = ref([
    {
        id: 1,
        label: '数据统计',
        children: [
            {
                id: 11,
                label: '统计',
            },
            {
                id: 12,
                label: '标注',
            },
        ],
    },
    {
        id: 2,
        label: '厚度测量',
        children: [
            {
                id: 21,
                label: '厚度测量1',
                path: '/ImageRegistration',
            },
        ],
    },
    {
        id: 3,
        label: '十字校正',
        children: [
            {
                id: 31,
                label: '十字校正1',
                path: '/HomologyChangeDetection',
            },
            {
                id: 32,
                label: '十字校正2',
                path: '/AllogenicChangeDetection',
            },
        ],
    },
    {
        id: 4,
        label: '缺陷检测',
        children: [
            {
                id: 41,
                label: '缺陷检测1',
                path: '/RoadDetection',
            },
            {
                id: 42,
                label: '缺陷检测2',
                path: '/OpticalImageTargetDetection',
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
                <el-sub-menu
                    v-for="item in menuList"
                    :index="item.id"
                    popper-class="popper-container"
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
                        >{{ subItem.label }}</el-menu-item
                    >
                </el-sub-menu>
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

        :deep(.el-dropdown) {
            margin-right: 61px;
            .dropdown-link {
                font-size: 20px;
                font-weight: 500;
                color: #ffffff;
                border: none;
                user-select: none;
            }
        }

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
        }
    }
    .right {
        display: flex;
        align-items: center;
        background-image: url('@assets/images/home/header-right.png');
    }
}
</style>
