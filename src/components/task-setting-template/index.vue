<template>
    <div class="task-setting">
        <Transition name="content">
            <div class="task-setting__expand" v-if="expandStatus">
                <div class="header">
                    <span
                        class="cursor-pointer"
                        :class="{
                            activeTab: (fixedTab ? fixedTab : tab) === 'task',
                        }"
                        @click.stop="
                            fixedTab ? (tab = fixedTab) : (tab = 'task')
                        "
                        >任务设置</span
                    >
                    <span
                        class="cursor-pointer"
                        :class="{
                            activeTab: (fixedTab ? fixedTab : tab) === 'result',
                        }"
                        @click.stop="
                            fixedTab ? (tab = fixedTab) : (tab = 'result')
                        "
                        >结果分析</span
                    >
                </div>
                <template v-if="(fixedTab ? fixedTab : tab) === 'task'">
                    <div
                        class="task overflow-x-hidden overflow-y-auto flex flex-col flex-1 h-full"
                    >
                        <template v-if="!props.emptyTask">
                            <div class="content flex-1">
                                <slot name="task-content"></slot>
                            </div>
                            <div
                                class="flex justify-center mt-[auto] pt-[20px] mb-[35px] confirm"
                                v-if="!props.hideConfirm"
                            >
                                <el-button type="primary">确认</el-button>
                            </div>
                        </template>
                        <template v-else>
                            <div
                                class="w-full h-full flex items-center flex-col pt-[120px]"
                            >
                                <img
                                    class="nodrag h-fit w-[50%] translate-x-[5px]"
                                    src="@assets/images/common/task-setting/no-result.svg"
                                    alt=""
                                />
                                <div class="text-white mt-[20px] opacity-50">
                                    暂无任务
                                </div>
                            </div>
                        </template>
                    </div>
                </template>
                <template v-else>
                    <slot name="result-content">
                        <div
                            class="w-full h-full flex items-center flex-col pt-[120px]"
                        >
                            <img
                                class="nodrag h-fit w-[50%] translate-x-[5px]"
                                src="@assets/images/common/task-setting/no-result.svg"
                                alt=""
                            />
                            <div class="text-white mt-[20px] opacity-50">
                                无分析结果
                            </div>
                        </div>
                    </slot>
                </template>
            </div>
        </Transition>
        <div class="footer">
            <svg
                v-if="expandStatus"
                class="w-[12px] h-[10px] collapse-btn cursor-pointer icon-bg-forward iconfont"
                t="1714183602063"
                viewBox="0 0 1260 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1884"
                @click="expandStatus = false"
            >
                <path
                    d="M77.738464 1011.260664l536.872038-462.255925a50.350711 50.350711 0 0 0 0-72.796208L77.738464 12.739336A46.104265 46.104265 0 0 0 0.089175 48.530806v926.331753a46.104265 46.104265 0 0 0 77.649289 36.398105z m629.687204 0l536.872038-462.255925a49.744076 49.744076 0 0 0 0-72.796208L707.425668 12.739336a46.104265 46.104265 0 0 0-77.649289 36.398105v925.725118a46.104265 46.104265 0 0 0 77.649289 36.398105z"
                    fill="#ffffff"
                    p-id="1885"
                ></path>
            </svg>
            <Transition name="footer">
                <div
                    v-show="!expandStatus"
                    class="task-setting__btn"
                    @click="expandStatus = true"
                    :style="{
                        maxWidth: expandStatus ? 0 : '30px',
                    }"
                >
                    <svg
                        t="1714183796932"
                        class="icon"
                        viewBox="0 0 1260 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2062"
                        width="12"
                        height="10"
                    >
                        <path
                            d="M1181.831855 12.560526l-536.645044 462.060479a50.329422 50.329422 0 0 0 0 72.76543l536.645044 463.879615a46.084772 46.084772 0 0 0 77.616459-36.382715V48.943241a46.084772 46.084772 0 0 0-77.616459-36.382715zM552.410888 12.560526L15.765843 474.621005A49.723044 49.723044 0 0 0 15.765843 546.173678l536.038666 465.092372a46.084772 46.084772 0 0 0 77.616459-36.382715V48.943241A46.084772 46.084772 0 0 0 552.410888 12.560526z"
                            fill="#ffffff"
                            p-id="2063"
                        ></path>
                    </svg>
                </div>
            </Transition>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    hideConfirm: {
        type: Boolean,
        default: true,
    },
    emptyTask: {
        type: Boolean,
        default: false,
    },
    fixedTab: {
        type: String,
        default: '',
    },
});
const expandStatus = ref(true);
const tab = ref('task');
</script>
<style scoped lang="less">
.task-setting {
    height: 80%;
    top: calc(50%);
    transform: translateY(-50%);
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    background-color: #060d1b;
    padding-bottom: 24px;
}

.nodrag {
    -webkit-user-drag: none;
}
.task-setting__expand {
    width: 296px;
    min-height: 0;
    flex: 1;
    background: #0d1425;
    padding: 0 14px;
    user-select: none;
    -webkit-user-drag: none;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-width: 300px;
    z-index: 10;
    padding-bottom: 16px;

    .header {
        margin-top: 6px;
        height: 44px;
        border-bottom: 2px solid #535353;
        display: flex;
        flex-wrap: nowrap;
        span {
            white-space: nowrap;
            line-height: 44px;
            font-size: 18px;
            font-weight: 500;
            color: #586886;
            display: block;
            height: 44px;
            width: fit-content;
            margin-right: 20px;
        }
        .activeTab {
            color: #fff;
            border-bottom: 2px solid #bcbcbc;
        }
    }
    .confirm {
        :deep(.el-button) {
            background-color: #687691 !important;
            border-color: #687691 !important;
            border-radius: 3px;
            span {
                color: #0a1225;
            }
        }
        :deep(.el-button:hover) {
            background-color: #73efff !important;
            border-color: #73efff !important;
            border-radius: 3px;
        }
    }
    .setting-item {
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        .label {
            color: #687692;
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            cursor: default;
            user-select: none;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            i {
                color: white;
                margin-right: 14px;
            }
            img {
                -webkit-user-drag: none;
                user-select: none;
                display: inline-block;
                margin-right: 15px;
                width: 12px;
                height: 12px;
                flex-shrink: 0;
            }
        }
        .select {
            width: 264px;
            height: 40px;
            :deep(.el-input__wrapper) {
                background-color: #040914;
                color: #818fa8;
                .el-input__inner {
                    user-select: none;
                    color: #fff !important;
                }
            }
        }
    }
}
.footer {
    height: 23px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    .collapse-btn {
        margin-left: 14px;
        z-index: 10;
        font-size: 10px;
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #060d1b;
    }

    .task-setting__btn {
        width: 28px;
        height: 32px;
        background-color: #73efff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2;
        transition: max-width 0.3s ease;
        cursor: pointer;
        i {
            color: #090e1b;
        }
    }
}

.content-enter-active,
.content-leave-active {
    transition:
        opacity 0.5s ease,
        max-width 0.3s ease;
}

.content-enter-from,
.content-leave-to {
    opacity: 0;
    max-width: 0;
    padding: 0;
}
.footer-enter-active {
    opacity: 0;
}
.footer-enter-to {
    opacity: 0;
}
.footer-leave-from {
    opacity: 1;
}
:deep(.el-input) {
    background-color: #040914;
    margin-top: 10px;

    .el-input__wrapper {
        background-color: #040914;
        border-radius: 3px;
        border: none;
        box-shadow: none;
    }

    .el-input__inner::placeholder {
        color: #fff;
    }
}

:deep(.el-date-picker) {
    --el-datepicker-hover-text-color: #68d6e5;

    .el-date-picker__header {
        .el-picker-panel__icon-btn {
            --el-datepicker-icon-color: var(--el-text-color-regular);
        }
    }
    .el-date-table td.today .el-date-table td.today {
        color: #68d6e5;
    }
}
</style>
