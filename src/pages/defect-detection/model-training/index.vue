<template>
    <div class="model-training">
        <div class="left">
            <img :src="imgSrc1" alt="" />
            <el-text type="primary">输入</el-text>
        </div>
        <div class="right">
            <img :src="imgSrc2" alt="" />
            <el-text type="primary">输出</el-text>
        </div>
        <OperationBtns class="operation" :operationList="operationList" />
        <TaskSetting class="task-setting"></TaskSetting>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import OperationBtns from '@components/operation-btns.vue';
import TaskSetting from './components/task-setting.vue';
import importIcon from '@assets/images/common/operation-icon/导入.png';
import importActiveIcon from '@assets/images/common/operation-icon/导入-active.png';
import prevIcon from '@assets/images/common/operation-icon/prev.png';
import prevActiveIcon from '@assets/images/common/operation-icon/prev-active.png';
import nextIcon from '@assets/images/common/operation-icon/next.png';
import nextActiveIcon from '@assets/images/common/operation-icon/next-active.png';
import saveIcon from '@assets/images/common/operation-icon/保存.png';
import saveActiveIcon from '@assets/images/common/operation-icon/保存-active.png';
import referenceIcon from '@assets/images/common/operation-icon/推理.png';
import referenceActiveIcon from '@assets/images/common/operation-icon/推理-active.png';
import img from '@assets/images/home/bg.jpg';

const imgSrc1 = ref(img);
const imgSrc2 = ref(img);
const operationList = [
    {
        icon: importIcon,
        activeIcon: importActiveIcon,
        name: '导入',
        callback() {},
    },
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
        icon: referenceIcon,
        activeIcon: referenceActiveIcon,
        name: '推理',
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
.model-training {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: 75px;
    padding-right: 28px;

    .left,
    .right {
        height: 100%;
        min-width: 0;
        flex: 1;
        position: relative;

        img {
            user-select: none;
            -webkit-user-drag: none;
            height: 100%;
        }

        .el-text {
            position: absolute;
            left: 5px;
            top: 5px;
            cursor: default;
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
