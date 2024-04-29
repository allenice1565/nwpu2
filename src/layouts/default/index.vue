<template>
    <div class="my-container">
        <PageHeader />
        <div class="main">
            <RouterView />
        </div>
        <PageFooter />
    </div>
</template>
<script setup>
import PageHeader from './components/page-header.vue';
import PageFooter from './components/page-footer.vue';
</script>
<style scoped lang="less">
.my-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #0a1226;

    .main {
        flex: 1;
        padding: 0 20px;
        min-height: 0;
    }
}
</style>
