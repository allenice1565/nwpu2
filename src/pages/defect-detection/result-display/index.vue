<template>
    <div class="result-display">
        <div class="left">
            <img :src="imgSrc1" alt="" />
            <el-button type="primary">输入</el-button>
        </div>
        <div class="right">
            <img :src="imgSrc2" alt="" />
            <el-button type="primary">输出</el-button>
        </div>
        <OperationBtns class="operation" :operationList="operationList" />
        <TaskSetting class="task-setting"></TaskSetting>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import OperationBtns from '@components/operation-btns.vue';
import TaskSetting from './components/task-setting.vue';
import prevIcon from '@assets/images/common/operation-icon/prev.png';
import prevActiveIcon from '@assets/images/common/operation-icon/prev-active.png';
import nextIcon from '@assets/images/common/operation-icon/next.png';
import nextActiveIcon from '@assets/images/common/operation-icon/next-active.png';
import saveIcon from '@assets/images/common/operation-icon/save.png';
import saveActiveIcon from '@assets/images/common/operation-icon/save-active.png';
import img from '@assets/images/home/bg.jpg';

const imgSrc1 = ref(img);
const imgSrc2 = ref(img);
const operationList = [
    {
        icon: prevIcon,
        activeIcon: prevActiveIcon,
        name: '上一张',
        callback() {},
    },
    {
        icon: nextIcon,
        activeIcon: nextActiveIcon,
        name: '下一张',
        callback() {},
    },
    {
        icon: saveIcon,
        activeIcon: saveActiveIcon,
        name: '保存',
        callback() {},
    },
];
</script>
<style scoped lang="less">
.result-display {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;

    .left,
    .right {
        height: 100%;
        min-width: 0;
        flex: 1;
        position: relative;

        img {
            user-select: none;
            -webkit-user-drag: none;
        }

        .el-button {
            position: absolute;
            left: 5px;
            top: 5px;
        }
    }
    .left {
        margin-right: 15px;
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
