<template>
    <TaskSetting class="task-setting">
        <template #task-content>
            <div class="item">
                <TaskTitle name="标注结果" />
                <div class="head row">
                    <div class="col">目标类别</div>
                    <div class="col">中心位置</div>
                    <div class="col">目标大小</div>
                </div>
                <div class="body row" v-for="item in annotationList">
                    <div class="col">{{ item.type }}</div>
                    <div class="col">{{ item.position }}</div>
                    <div class="col">{{ item.shape }}</div>
                </div>
            </div>
        </template>
        <template #result-content></template>
    </TaskSetting>
</template>
<script setup>
import { ref } from 'vue';
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
]);
</script>
<style scoped lang="less">
.item {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .row {
        display: flex;

        .col {
            padding: 10px;
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
        }
    }
}
</style>
