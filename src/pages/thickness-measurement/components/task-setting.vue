<template>
    <TaskSetting class="task-setting">
        <template #task-content>
            <div class="item">
                <TaskTitle name="型号选择" />
                <el-select
                    v-model="versionSelect"
                    placeholder="请选择"
                    :teleported="false"
                >
                    <el-option
                        v-for="item in versionOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
        </template>
        <template #result-content></template>
    </TaskSetting>
</template>
<script setup>
import { ref } from 'vue';
import TaskSetting from '@components/task-setting-template/index.vue';
import TaskTitle from '@components/task-setting-template/task-title.vue';

const versionSelect = ref();
const versionOptions = ref([
    {
        label: '型号1',
        value: '1',
    },
    {
        label: '型号2',
        value: '2',
    },
]);
</script>
<style scoped lang="less">
.item {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    :deep(.el-select) {
        --el-fill-color-blank: #040914;

        margin-top: 10px;

        &__wrapper {
            box-shadow: none;
        }
    }

    :deep(.el-select__popper) {
        background-color: #040914;

        .is-selected {
            background-color: #0d1425;
        }
        .is-hovering {
            background-color: transparent;
            color: var(--el-color-primary);
            font-weight: bold;

            &.is-selected {
                background-color: #0d1425;
            }
        }
    }
}
</style>
