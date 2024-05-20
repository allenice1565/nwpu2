<template>
    <TaskSetting class="task-setting">
        <template #task-content>
            <div class="item">
                <span class="item-title">模型参数设置</span>
                <TaskTitle name="检测模型" />
                <div class="model-path" @click="handleSelectFile">
                    {{ modelSelect.name || '请选择' }}
                </div>
                <input
                    ref="fileInputRef"
                    type="file"
                    style="display: none"
                    @input="hanleInput"
                />
            </div>
            <div class="item">
                <TaskTitle name="IOU" />
                <el-input
                    type="number"
                    placeholder-class="placeholderStyle"
                    v-model="iou"
                    placeholder="请输入"
                ></el-input>
            </div>
            <div class="item">
                <TaskTitle name="比例尺" />
                <el-input
                    type="number"
                    placeholder-class="placeholderStyle"
                    v-model="scale"
                    placeholder="请输入"
                ></el-input>
            </div>
        </template>
        <template #result-content>
            <div class="item table-list">
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
            </div>
            <div class="add" @click="handleAdd">
                <el-icon color="#68d6e5"><Plus /></el-icon>
            </div>
        </template>
    </TaskSetting>
</template>
<script setup>
import { nextTick, ref } from 'vue';
import TaskSetting from '@components/task-setting-template/index.vue';
import TaskTitle from '@components/task-setting-template/task-title.vue';

const fileInputRef = ref();
const modelSelect = ref({});
const iou = ref();
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

const handleSelectFile = () => {
    fileInputRef.value.click();
};
const hanleInput = (e) => {
    modelSelect.value = e.target.files[0];
};
</script>
<style scoped lang="less">
.result-list {
    max-height: 260px;
    overflow-y: auto;
    margin-top: 15px;
}
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

    :deep(.el-input) {
        input::placeholder {
            color: #a8abb2;
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

    .model-path {
        height: 32px;
        color: #a8abb2;
        background-color: #040914;
        line-height: 32px;
        padding: 0 12px;
        margin-top: 10px;
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
.add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 44px;
    min-height: 44px;
    border-radius: 3px;
    border: 1px dashed #68d6e5;
    cursor: pointer;
    background: #0d1425;
    margin-top: 15px;
}
</style>
