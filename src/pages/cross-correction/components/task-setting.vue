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
        <template #result-content>
            <div class="item">
                <TaskTitle name="检测结果" />
                <div ref="resultRef" class="result-list">
                    <div class="head row">
                        <div class="col">测点序号</div>
                        <div class="col">测点坐标</div>
                        <div class="col">厚度尺寸</div>
                        <div class="col">人工修正</div>
                        <div class="col"></div>
                    </div>
                    <div class="body row" v-for="item in dataList">
                        <div class="col">
                            <el-input v-model="item.order"></el-input>
                        </div>
                        <div class="col">
                            <el-input v-model="item.position"></el-input>
                        </div>
                        <div class="col">
                            <el-input v-model="item.shape"></el-input>
                        </div>
                        <div class="col">
                            <el-input v-model="item.hand"></el-input>
                        </div>
                        <div class="col">
                            <el-icon
                                color="#fff"
                                class="delete"
                                @click="handleDelete(index)"
                                ><Delete
                            /></el-icon>
                        </div>
                    </div>
                </div>
                <div class="add" @click="handleAdd">
                    <el-icon color="#68d6e5"><Plus /></el-icon>
                </div>
                <div class="scale">
                    <div class="row">
                        <div class="col">比例尺</div>
                        <div class="col"></div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <el-input
                                class="scale-input"
                                v-model="scale"
                                style="width: 100%; text-align: center"
                            />
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </div>
        </template>
    </TaskSetting>
</template>
<script setup>
import { nextTick, ref } from 'vue';
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

const scale = ref(1);
const dataList = ref([
    {
        order: 1,
        position: ['x1,y1', 'x2,y2'],
        shape: '10mm*10mm',
        hand: '10mm*10mm',
    },
    {
        order: 2,
        position: ['x1,y1', 'x2,y2'],
        shape: '10mm*10mm',
        hand: '10mm*10mm',
    },
    {
        order: 3,
        position: ['x1,y1', 'x2,y2'],
        shape: '10mm*10mm',
        hand: '10mm*10mm',
    },
    {
        order: 4,
        position: ['x1,y1', 'x2,y2'],
        shape: '10mm*10mm',
        hand: '10mm*10mm',
    },
    {
        order: 5,
        position: ['x1,y1', 'x2,y2'],
        shape: '10mm*10mm',
        hand: '10mm*10mm',
    },
    {
        order: 6,
        position: ['x1,y1', 'x2,y2'],
        shape: '10mm*10mm',
        hand: '10mm*10mm',
    },
]);
const handleDelete = (index) => {
    dataList.value.splice(index, 1);
};

const resultRef = ref();
const handleAdd = async () => {
    dataList.value.push({
        order: dataList.value.at(-1)?.order + 1 || 1,
        position: ['x1,y1', 'x2,y2'],
        shape: '10mm*10mm',
        hand: '10mm*10mm',
    });
    nextTick(() => {
        resultRef.value.scrollTo(0, resultRef.value.scrollHeight);
    });
};
</script>
<style scoped lang="less">
.result-list {
    max-height: 300px;
    overflow-y: auto;
    margin-top: 15px;
}
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

    .row {
        display: flex;

        .col {
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
            display: flex;
            align-items: center;
            justify-content: center;

            :deep(.el-input) {
                margin-top: 0;
                input {
                    color: #fff;
                    background: #040914;
                    text-align: center;
                }
            }

            .delete {
                cursor: pointer;
            }

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
            font-size: 14px;
            padding: 10px;
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

        :deep(.el-input.scale-input) {
            input {
                text-align: center;
            }
        }
    }
}
.add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 44px;
    border-radius: 3px;
    border: 1px dashed #68d6e5;
    cursor: pointer;
    background: #0d1425;
    margin-top: 15px;
}
</style>
