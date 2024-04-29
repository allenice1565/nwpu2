<template>
    <div class="data-transfer-modal">
        <el-dialog
            v-model="innerVisible"
            title="数据转换"
            :before-close="handleClose"
        >
            <div class="content">
                <el-upload
                    ref="upload1"
                    class="upload"
                    v-model:file-list="fileList1"
                    :limit="1"
                    :on-exceed="(val) => handleExceed(val, upload1)"
                    :auto-upload="false"
                >
                    <template #trigger>
                        <div class="input-box">
                            <span class="placeholder">输入路径</span>
                            <el-button type="primary">选择文件夹</el-button>
                        </div>
                    </template>
                </el-upload>
                <el-upload
                    ref="upload2"
                    class="upload"
                    :limit="1"
                    v-model:file-list="fileList2"
                    :on-exceed="(val) => handleExceed(val, upload2)"
                    :auto-upload="false"
                >
                    <template #trigger>
                        <div class="input-box">
                            <span class="placeholder">输出路径</span>
                            <el-button type="primary">选择文件夹</el-button>
                        </div>
                    </template>
                </el-upload>
                <el-progress :percentage="percentage" :show-text="false" />
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="handleConfirm">
                        确认
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { genFileId } from 'element-plus';

const emit = defineEmits(['update:dialogVisible']);
const props = defineProps({
    dialogVisible: {
        type: Boolean,
        default: false,
    },
});
const percentage = ref(50);
const fileList1 = ref();
const fileList2 = ref();
const upload1 = ref();
const upload2 = ref();
const handleExceed = (files, upload) => {
    upload?.value?.clearFiles();
    const file = files?.[0] || {};
    file.uid = genFileId();
    upload?.value?.handleStart(file);
};

const innerVisible = computed({
    get() {
        return props.dialogVisible;
    },
    set(val) {
        emit('update:dialogVisible', val);
    },
});
const handleClose = () => {
    innerVisible.value = false;
};
const handleConfirm = () => {
    console.log(fileList1.value, fileList2.value);
};
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

.content {
    padding: 0 30px;

    :deep(.upload) {
        width: 100%;
        margin-bottom: 30px;

        .el-upload {
            width: 100%;
        }

        .input-box {
            flex: 1;
            height: 56px;
            padding-left: 30px;
            line-height: 56px;
            background: #232f4e;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .placeholder {
                font-weight: 500;
                font-size: 18px;
                color: #727fa1;
            }

            .el-button {
                height: 100%;
                border-radius: 5px;
                color: #000;
            }
        }
    }
}

.dialog-footer {
    margin: 20px auto 40px;
    display: flex;
    justify-content: center;

    :deep(.el-button) {
        width: 140px;
        height: 50px;
        margin: 0 auto;
        background-color: #687691;
        border: none;
        color: #000;
    }
}
</style>
