<template>
    <div class="data-transfer-modal">
        <el-dialog
            v-model="innerVisible"
            title="数据转换"
            :before-close="handleClose"
        >
            <span>This is a message</span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        Confirm
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:dialogVisible']);
const props = defineProps({
    dialogVisible: {
        type: Boolean,
        default: false,
    },
});
const innerVisible = computed({
    get() {
        return props.dialogVisible;
    },
    set(val) {
        emit('update:dialogVisible', val);
    },
});
const handleClose = () => {};
</script>
<style scoped lang="less">
.data-transfer-modal {
    :deep(.el-dialog) {
        background-color: #0d1425;

        .el-dialog__header {
            font-weight: bold;
            font-size: 24px;
            color: #ffffff;
            text-align: center;

            .el-dialog__title {
                color: #ffffff;
            }
        }
    }
}
</style>
