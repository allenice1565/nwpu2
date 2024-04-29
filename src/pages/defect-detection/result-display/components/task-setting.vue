<template>
    <TaskSetting class="task-setting">
        <template #task-content> </template>
        <template #result-content>
            <div class="item">
                <TaskTitle name="检测结果" />
                <div class="head row">
                    <div class="col">测点序号</div>
                    <div class="col">测点坐标</div>
                    <div class="col">厚度尺寸</div>
                    <div class="col">人工修正</div>
                </div>
                <div class="body row" v-for="item in measureResultList">
                    <div class="col">{{ item.order }}</div>
                    <div class="col">
                        {{ item.position[0] }}<br />{{ item.position[1] }}
                    </div>
                    <div class="col">{{ item.shape }}</div>
                    <div class="col">{{ item.hand }}</div>
                </div>
            </div>
            <div class="item">
                <TaskTitle name="推理结果" />
                <div class="inference-item">
                    <div class="label">当前模型:</div>
                    <div class="value"></div>
                </div>
                <div class="inference-item">
                    <div class="label">ioU:</div>
                    <div class="value"></div>
                </div>
                <div class="inference-item">
                    <div class="label">Recall:</div>
                    <div class="value"></div>
                </div>
                <div class="inference-item">
                    <div class="label">Precision:</div>
                    <div class="value"></div>
                </div>
            </div>
        </template>
    </TaskSetting>
</template>
<script setup>
import { ref } from 'vue';
import TaskSetting from '@components/task-setting-template/index.vue';
import TaskTitle from '@components/task-setting-template/task-title.vue';

const modelSelect = ref();
const modelOptions = ref([
    {
        label: '型号1',
        value: '1',
    },
    {
        label: '型号2',
        value: '2',
    },
]);
const confidenceSelect = ref();
const confidenceOptions = ref([
    {
        label: '型号1',
        value: '1',
    },
    {
        label: '型号2',
        value: '2',
    },
]);

const measureResultList = ref([
    {
        order: '1',
        position: ['x1,y1', 'x2,y2'],
        shape: '10mm*10mm',
        hand: '10mm*10mm',
    },
    {
        order: '2',
        position: ['x1,y1', 'x2,y2'],
        shape: '10mm*10mm',
        hand: '10mm*10mm',
    },
]);
</script>
<style scoped lang="less">
.item {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .item-title {
        font-weight: 500;
        font-size: 16px;
        color: #49546b;
        margin-bottom: 10px;
    }

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

    .row {
        display: flex;

        .col {
            padding: 10px;
            font-weight: 500;
            font-size: 12px;
            min-width: 0;
            flex: 1;
            text-align: center;
            color: #fff;
            background: #040914;
            border: 1px solid #626262;
            border-right: none;
            border-bottom: none;
            white-space: wrap;
            word-wrap: break-word;

            &:first-child {
                border-left: none;
            }
        }

        &:first-child {
            .col {
                border-top: none;
            }
        }
    }

    .head {
        margin-top: 15px;
        .col {
            border-top: none;
            font-size: 16px;
        }
    }

    .scale {
        margin-top: 10px;

        .col {
            &:nth-child(odd) {
                flex: none;
                flex-basis: 68px;
                white-space: nowrap;
            }
            &:nth-child(even) {
                flex: 1;
            }
        }
    }

    .inference-item {
        margin-top: 10px;
        height: 40px;
        display: flex;
        line-height: 40px;

        .label {
            font-weight: 500;
            font-size: 16px;
            color: #687692;
            width: 74px;
        }

        .value {
            flex: 1;
            background: #040914;
            border-radius: 3px;
            height: 40px;
        }
    }
}
</style>
