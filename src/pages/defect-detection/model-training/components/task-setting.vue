<template>
    <TaskSetting class="task-setting">
        <template #task-content>
            <div class="task-content">
                <div class="item">
                    <div class="label">Backbone:</div>
                    <div class="value">
                        <el-select
                            v-model="backboneSelect"
                            placeholder=""
                            :teleported="false"
                        >
                            <el-option
                                v-for="item in backboneOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="label">Epochs:</div>
                    <div class="value">
                        <el-input v-model="epochs"></el-input>
                    </div>
                </div>
                <div class="item">
                    <div class="label">Batch-size:</div>
                    <div class="value">
                        <el-input v-model="batchSize"></el-input>
                    </div>
                </div>
                <div class="item">
                    <div class="label">Optimizer:</div>
                    <div class="value">
                        <el-select
                            v-model="optimizerSelect"
                            placeholder=""
                            :teleported="false"
                        >
                            <el-option
                                v-for="item in optimizerOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </div>
                </div>
            </div>
        </template>
        <template #result-content>
            <div class="item">
                <div class="label">IOU:</div>
                <div class="value">
                    <el-input v-model="iou"></el-input>
                </div>
            </div>
            <div class="item">
                <div class="label">Recall:</div>
                <div class="value">
                    <el-input v-model="recall"></el-input>
                </div>
            </div>
            <div class="item">
                <div class="label">Precision:</div>
                <div class="value text">
                    <el-input v-model="precision"></el-input>
                </div>
            </div>
        </template>
    </TaskSetting>
</template>
<script setup>
import { ref } from 'vue';
import TaskSetting from '@components/task-setting-template/index.vue';

const backboneSelect = ref();
const iou = ref();
const recall = ref();
const precision = ref();
const backboneOptions = ref([
    {
        label: '型号1',
        value: '1',
    },
    {
        label: '型号2',
        value: '2',
    },
]);

const epochs = ref();
const batchSize = ref();
const optimizerSelect = ref();
const optimizerOptions = ref([
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
    align-items: center;
    height: 40px;
    line-height: 40px;
    color: #687692;
    margin-top: 12px;

    .label {
        width: 80px;
        font-size: 14px;
    }

    .value {
        flex: 1;

        :deep(.el-input) {
            height: 40px;
        }

        :deep(.el-select) {
            --el-fill-color-blank: #040914;
            height: 40px;
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

        &.text {
        }
    }
}
</style>
