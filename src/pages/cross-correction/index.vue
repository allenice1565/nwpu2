<template>
    <div class="cross-correction">
        <OperationBtns class="operation" :operationList="operationList" />
    </div>
</template>
<script setup>
import OperationBtns from '@components/operation-btns.vue';
import transformIcon from '@assets/images/common/operation-icon/transform.png';
import transformActiveIcon from '@assets/images/common/operation-icon/transform-active.png';
import importIcon from '@assets/images/common/operation-icon/import.png';
import importActiveIcon from '@assets/images/common/operation-icon/import-active.png';
import analyzeIcon from '@assets/images/common/operation-icon/analyze.png';
import analyzeActiveIcon from '@assets/images/common/operation-icon/analyze-active.png';
import prevIcon from '@assets/images/common/operation-icon/prev.png';
import prevActiveIcon from '@assets/images/common/operation-icon/prev-active.png';
import nextIcon from '@assets/images/common/operation-icon/next.png';
import nextActiveIcon from '@assets/images/common/operation-icon/next-active.png';
import saveIcon from '@assets/images/common/operation-icon/save.png';
import saveActiveIcon from '@assets/images/common/operation-icon/save-active.png';

const operationList = [
    {
        icon: transformIcon,
        activeIcon: transformActiveIcon,
        name: '数据转换',
        callback() {},
    },
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
.cross-correction {
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
