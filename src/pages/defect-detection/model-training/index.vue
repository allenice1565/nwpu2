<template>
    <div class="model-training">
        <OperationBtns class="operation" :operationList="operationList" />
    </div>
</template>
<script setup>
import OperationBtns from '@components/operation-btns.vue';
import importIcon from '@assets/images/common/operation-icon/import.png';
import importActiveIcon from '@assets/images/common/operation-icon/import-active.png';
import savePathIcon from '@assets/images/common/operation-icon/save-path.png';
import savePathActiveIcon from '@assets/images/common/operation-icon/save-path-active.png';
import startIcon from '@assets/images/common/operation-icon/start-training.png';
import startActiveIcon from '@assets/images/common/operation-icon/start-training-active.png';
import saveIcon from '@assets/images/common/operation-icon/save.png';
import saveActiveIcon from '@assets/images/common/operation-icon/save-active.png';

const operationList = [
    {
        icon: importIcon,
        activeIcon: importActiveIcon,
        name: '导入',
        callback() {},
    },
    {
        icon: savePathIcon,
        activeIcon: savePathIcon,
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
