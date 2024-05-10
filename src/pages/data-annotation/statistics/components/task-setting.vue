<template>
    <TaskSetting class="task-setting">
        <template #task-content>
            <div class="item">
                <TaskTitle name="统计范围" />
                <el-date-picker
                    class="date-picker"
                    v-model="startDate"
                    type="date"
                    placeholder="开始时间"
                    :default-value="new Date()"
                    :teleported="false"
                />
                <el-date-picker
                    class="date-picker"
                    v-model="endDate"
                    type="date"
                    placeholder="结束时间"
                    :default-value="new Date()"
                    :teleported="false"
                />
            </div>
            <div class="item">
                <TaskTitle name="型号信息" />
                <el-select
                    v-model="versionSelect"
                    placeholder="请选择"
                    :teleported="false"
                >
                    <el-option
                        v-for="item in versionInfoOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
                <!-- <el-checkbox
                    label="全选"
                    v-model="versionInfoAllCheck"
                    @change="hanleVersionAllCheck"
                />
                <el-checkbox-group v-model="versionInfo">
                    <el-checkbox
                        v-for="item in versionInfoOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        @change="hanleVersionSingleCheck"
                    />
                </el-checkbox-group> -->
            </div>
            <div class="item">
                <TaskTitle name="统计信息" />
                <el-checkbox
                    label="全选"
                    v-model="statisticsInfoAllCheck"
                    @change="hanlestatisticsAllCheck"
                />
                <el-checkbox-group v-model="statisticsInfo">
                    <el-checkbox
                        v-for="item in statisticsInfoOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        @change="hanleStatisticsSingleCheck"
                    />
                </el-checkbox-group>
            </div>
        </template>
        <template #result-content></template>
    </TaskSetting>
</template>
<script setup>
import { ref } from 'vue';
import TaskSetting from '@components/task-setting-template/index.vue';
import TaskTitle from '@components/task-setting-template/task-title.vue';

const startDate = ref();
const endDate = ref();
const versionInfo = ref();
const versionInfoOptions = ref([
    {
        label: '型号1',
        value: '1',
    },
    {
        label: '型号2',
        value: '2',
    },
    {
        label: '型号3',
        value: '3',
    },
    {
        label: '型号4',
        value: '4',
    },

    {
        label: '型号5',
        value: '5',
    },
    {
        label: '型号6',
        value: '6',
    },
    {
        label: '型号7',
        value: '7',
    },
    {
        label: '型号8',
        value: '8',
    },
]);
const versionInfoAllCheck = ref(false);
const hanleVersionAllCheck = (val) => {
    if (val) {
        versionInfo.value = versionInfoOptions.value.map((item) => item.value);
    } else {
        versionInfo.value = [];
    }
};
const hanleVersionSingleCheck = () => {
    if (versionInfo.value.length === versionInfoOptions.value.length) {
        versionInfoAllCheck.value = true;
    } else {
        versionInfoAllCheck.value = false;
    }
};

const statisticsInfo = ref();
const statisticsInfoOptions = ref([
    {
        label: '检测数量',
        value: 'number',
    },
    {
        label: '合格率',
        value: 'rate',
    },
]);
const statisticsInfoAllCheck = ref(false);
const hanlestatisticsAllCheck = (val) => {
    if (val) {
        statisticsInfo.value = statisticsInfoOptions.value.map(
            (item) => item.value,
        );
    } else {
        statisticsInfo.value = [];
    }
};
const hanleStatisticsSingleCheck = () => {
    if (statisticsInfo.value.length === statisticsInfoOptions.value.length) {
        statisticsInfoAllCheck.value = true;
    } else {
        statisticsInfoAllCheck.value = false;
    }
};
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
    :deep(.date-picker) {
        --el-date-editor-width: 100%;
    }

    :deep(.el-checkbox-group) {
        display: flex;
        flex-wrap: wrap;

        .el-checkbox {
            flex: 34%;
            min-width: 0;
            margin-right: 0;
        }
    }
}
</style>
