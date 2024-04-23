<script setup>
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';

defineOptions({
    name: 'PageFooter',
});

const inputPath = ref('C:\Users\\86178\Desktop\示例');
const outputPath = ref('C:\Users\\86178\Desktop\示例');
const status = ref({
    percent: 60,
    progress: '分析失败',
});
const dMap = ['天', '一', '二', '三', '四', '五', '六'];
const time = ref(
    `${dayjs().format('YYYY-MM-DD')}星期${
        dMap[dayjs().format('d')]
    }${dayjs().format('HH:mm:ss')}`,
);
const updateTime = () => {
    time.value = `${dayjs().format('YYYY-MM-DD')} 星期${
        dMap[dayjs().format('d')]
    } ${dayjs().format('HH:mm:ss')}`;
    requestAnimationFrame(updateTime);
};

onMounted(() => {
    updateTime();
});
</script>
<template>
    <div class="footer text-[16px] text-white opacity-[0.59]">
        <div class="left">
            <div class="input flex-1 border-solid border-r border-[#57595D]">
                <span class="text-[#717171]">输入文件路径：</span
                ><span>{{ inputPath }}</span>
            </div>
            <div
                class="output flex-1 border-solid border-r border-[#57595D] pl-[17px]"
            >
                <span class="text-[#717171]">输出文件路径：</span
                ><span>{{ outputPath }}</span>
            </div>
        </div>
        <div class="right">
            <div
                class="flex items-center justify-center flex-1 border-solid border-r border-[#57595D]"
                v-if="!status.progress"
            >
                无任务进行
            </div>
            <div
                class="flex items-center justify-center flex-1 border-solid border-r border-[#57595D]"
                v-else-if="status.progress === '分析失败'"
            >
                <div
                    class="w-[271px] h-[10px] rounded-[5px] border border-[#a0a0a0] border-solid relative"
                >
                    <div
                        class="h-[10px] rounded-[5px] border border-solid absolute left-[-1px] top-[-1px]"
                        :style="{
                            width: `${status.percent}%`,
                            background: '#E60012',
                            borderColor: '#E60012',
                        }"
                    ></div>
                </div>
                <i
                    class="iconfont icon-cuowuguanbiquxiao-xianxingyuankuang text-[20px] mr-[6px] ml-[15px]"
                ></i
                >{{ status.progress }}
            </div>
            <div
                class="flex items-center justify-center flex-1 border-solid border-r border-[#57595D]"
                v-else-if="status.progress === '分析成功'"
            >
                <div
                    class="w-[271px] h-[10px] rounded-[5px] border border-[#a0a0a0] border-solid relative"
                >
                    <div
                        class="h-[10px] rounded-[5px] border border-solid absolute left-[-1px] top-[-1px]"
                        :style="{
                            width: `${status.percent}%`,
                            background: '#73EFFF',
                            borderColor: '#73EFFF',
                        }"
                    ></div>
                </div>
                <i
                    class="iconfont icon-success text-[20px] mr-[6px] ml-[15px]"
                ></i
                >{{ status.progress }}
            </div>
            <div
                class="flex items-center justify-center flex-1 border-solid border-r border-[#57595D]"
                v-else-if="status.progress === '进行中'"
            >
                <div
                    class="w-[271px] h-[10px] rounded-[5px] border border-[#a0a0a0] border-solid relative"
                >
                    <div
                        class="h-[10px] rounded-[5px] border border-solid absolute left-[-1px] top-[-1px]"
                        :style="{
                            width: `${status.percent}%`,
                            background: '#73EFFF',
                            borderColor: '#73EFFF',
                        }"
                    ></div>
                </div>
                <i class="iconfont icon-time text-[20px] mr-[6px] ml-[15px]"></i
                >{{ status.progress }}
            </div>
            <div class="time pl-[16px]">
                <span class="text-[#717171]">当前时间：</span
                ><span>{{ time }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
.footer {
    height: 41px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: #0a1225;

    .left {
        flex: 1;
        display: flex;
        font-size: 16px;
        font-weight: 500;
        height: 27px;
        align-items: center;
        .input,
        .output {
            line-height: 27px;
        }
    }
    .right {
        user-select: none;
        flex: 1;
        align-items: center;
        display: flex;
    }
}
</style>
