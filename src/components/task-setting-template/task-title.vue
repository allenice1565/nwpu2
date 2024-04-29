<template>
    <div class="task-setting-title">
        <img v-if="icon" :src="icon" alt="" width="16px" height="16px" />
        <span>{{ name }}</span>
    </div>
</template>
<script setup>
defineProps({
    name: {
        type: String,
        default: '',
    },
    icon: {
        type: String,
        default: '',
    },
});
</script>
<style scoped lang="less">
.task-setting-title {
    color: #687692;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;

    img {
        user-select: none;
        -webkit-user-drag: none;
        object-fit: contain;
        margin-right: 7px;
    }
}
</style>
