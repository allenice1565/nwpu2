<template>
    <TaskSetting class="task-setting" noresult>
        <template #task-content>
            <div class="item">
                <TaskTitle name="标注结果" />
                <div ref="resultRef" class="result-list">
                    <div class="head row">
                        <div class="col">目标类别</div>
                        <div class="col">中心位置</div>
                        <div class="col">目标大小</div>
                        <div class="col"></div>
                    </div>
                    <div
                        class="body row"
                        v-for="(item, index) in annotationList"
                    >
                        <div class="col">
                            <el-input v-model="item.type"></el-input>
                        </div>
                        <div class="col">
                            <el-input v-model="item.position"></el-input>
                        </div>
                        <div class="col">
                            <el-input v-model="item.shape"></el-input>
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
        <template #result-content></template>
    </TaskSetting>
</template>
<script setup>
import { nextTick, ref } from 'vue';
import TaskSetting from '@components/task-setting-template/index.vue';
import TaskTitle from '@components/task-setting-template/task-title.vue';

const annotationList = ref([
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
    {
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    },
]);
const resultRef = ref();
const handleAdd = () => {
    annotationList.value.push({
        type: 'c1',
        position: 'x1,y1',
        shape: 'w*h',
    });
    nextTick(() => {
        resultRef.value.scrollTo(0, resultRef.value.scrollHeight);
    });
};

const handleDelete = (index) => {
    annotationList.value.splice(index, 1);
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

    .row {
        display: flex;

        .col {
            font-weight: 500;
            font-size: 16px;
            min-width: 0;
            flex: 1;
            text-align: center;
            color: #fff;
            background: #040914;
            border: 1px solid #626262;
            border-right: none;
            border-bottom: none;
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
    }

    .head {
        margin-top: 15px;

        &:nth-child(1) {
            margin-top: 0;
        }

        .col {
            border-top: none;
            padding: 10px;
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
