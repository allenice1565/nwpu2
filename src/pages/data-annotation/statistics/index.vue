<template>
    <div class="data-annotation__statistics">
        <img :src="imgSrc" alt="" />
        <span class="status">{{ status }}</span>
        <OperationBtns class="operation" :operationList="operationList" />
        <TaskSetting class="task-setting"></TaskSetting>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import OperationBtns from '@components/operation-btns.vue';
import TaskSetting from './components/task-setting.vue';
import updateIcon from '@assets/images/common/operation-icon/update.png';
import updateActiveIcon from '@assets/images/common/operation-icon/update-active.png';
import saveIcon from '@assets/images/common/operation-icon/save.png';
import saveActiveIcon from '@assets/images/common/operation-icon/save-active.png';
import exportIcon from '@assets/images/common/operation-icon/export.png';
import exportActiveIcon from '@assets/images/common/operation-icon/export-active.png';
import img from '@assets/images/home/bg.jpg';

const imgSrc = ref(img);
const operationList = [
    {
        icon: updateIcon,
        activeIcon: updateActiveIcon,
        name: '更新',
        callback() {},
    },
    {
        icon: saveIcon,
        activeIcon: saveActiveIcon,
        name: '保存',
        callback() {},
    },
    {
        icon: exportIcon,
        activeIcon: exportActiveIcon,
        name: '导出',
        callback() {},
    },
];
const status = ref('未检测');
</script>
<style scoped lang="less">
.data-annotation__statistics {
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 75px;
    padding-right: 28px;

    .status {
        position: absolute;
        left: 86px;
        top: 16px;
        color: #fff;
        font-size: 18px;
        user-select: none;
    }

    & > img {
        user-select: none;
        -webkit-user-drag: none;
        width: 100%;
        height: 100%;
    }

    .operation {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .task-setting {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
