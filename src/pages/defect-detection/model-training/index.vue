<template>
    <div class="model-training">
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
import importIcon from '@assets/images/common/operation-icon/import.png';
import importActiveIcon from '@assets/images/common/operation-icon/import-active.png';
import savePathIcon from '@assets/images/common/operation-icon/save-path.png';
import savePathActiveIcon from '@assets/images/common/operation-icon/save-path-active.png';
import startIcon from '@assets/images/common/operation-icon/start-training.png';
import startActiveIcon from '@assets/images/common/operation-icon/start-training-active.png';
import saveIcon from '@assets/images/common/operation-icon/save.png';
import saveActiveIcon from '@assets/images/common/operation-icon/save-active.png';
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
        icon: savePathIcon,
        activeIcon: savePathActiveIcon,
        name: '存储路径',
        callback() {},
    },
    {
        icon: startIcon,
        activeIcon: startActiveIcon,
        name: '开始训练',
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
