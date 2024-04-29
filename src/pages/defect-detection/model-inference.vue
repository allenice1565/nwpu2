<template>
    <div class="model-inference">
        <OperationBtns class="operation" :operationList="operationList" />
    </div>
</template>
<script setup>
import OperationBtns from '@components/operation-btns.vue';
import importIcon from '@assets/images/common/operation-icon/import.png';
import importActiveIcon from '@assets/images/common/operation-icon/import-active.png';
import analyzeIcon from '@assets/images/common/operation-icon/analyze.png';
import analyzeActiveIcon from '@assets/images/common/operation-icon/analyze-active.png';
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
        icon: analyzeIcon,
        activeIcon: analyzeActiveIcon,
        name: '处理分析',
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
.model-inference {
    position: relative;
    width: 100%;
    height: 100%;

    .operation {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
