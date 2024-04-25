<template>
    <div class="operation">
        <div
            class="operation-item"
            v-for="(item, index) in operationList"
            :key="index"
            :style="{
                backgroundImage: `url(${activeIndex === index ? item.activeIcon : item.icon})`,
                backgroundColor: activeIndex === index ? '#73efff' : '#000',
            }"
            :title="item.name"
            @click="handleClick(item, index)"
        ></div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    operationList: {
        type: Array,
        default: () => [],
    },
});

const activeIndex = ref(-1);

const handleClick = (item, index) => {
    if (activeIndex.value === index) {
        activeIndex.value = -1;
    } else {
        activeIndex.value = index;
        item.callback && item.callback();
    }
};
</script>
<style scoped lang="less">
.operation {
    width: 70px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    opacity: 0.74;

    &-item {
        width: 70px;
        height: 70px;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        border-radius: 3px;
    }
}
</style>
