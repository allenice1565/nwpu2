<template>
    <div class="data-annotation__annotation">
        <OperationBtns class="operation" :operationList="operationList" />
        <TaskSetting class="task-setting"></TaskSetting>
    </div>
</template>
<script setup>
import OperationBtns from '@components/operation-btns.vue';
import TaskSetting from './components/task-setting.vue';
import importIcon from '@assets/images/common/operation-icon/import.png';
import importActiveIcon from '@assets/images/common/operation-icon/import-active.png';
import savePathIcon from '@assets/images/common/operation-icon/save-path.png';
import savePathActiveIcon from '@assets/images/common/operation-icon/save-path-active.png';
import prevIcon from '@assets/images/common/operation-icon/prev.png';
import prevActiveIcon from '@assets/images/common/operation-icon/prev-active.png';
import nextIcon from '@assets/images/common/operation-icon/next.png';
import nextActiveIcon from '@assets/images/common/operation-icon/next-active.png';
import saveIcon from '@assets/images/common/operation-icon/save.png';
import saveActiveIcon from '@assets/images/common/operation-icon/save-active.png';

const operationList = [
    {
        icon: importIcon,
        activeIcon: importActiveIcon,
        name: '导入',
        callBack() {},
    },
    {
        icon: savePathIcon,
        activeIcon: savePathActiveIcon,
        name: '存储路径',
        callBack() {},
    },
    {
        icon: prevIcon,
        activeIcon: prevActiveIcon,
        name: '上一张',
        callBack() {},
    },
    {
        icon: nextIcon,
        activeIcon: nextActiveIcon,
        name: '下一张',
        callBack() {},
    },
    {
        icon: saveIcon,
        activeIcon: saveActiveIcon,
        name: '保存',
        callBack() {},
    },
];
</script>
<style scoped lang="less">
.data-annotation__annotation {
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
