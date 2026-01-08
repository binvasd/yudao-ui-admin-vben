<script lang="ts" setup>
// import type {
//   WorkbenchProjectItem,
//   // WorkbenchQuickNavItem,
//   // WorkbenchTodoItem,
//   // WorkbenchTrendItem,
// } from '@vben/common-ui';

// import { ref } from 'vue';
// import { useRouter } from 'vue-router';

import {
  // AnalysisChartCard,
  WorkbenchHeader,
  // WorkbenchProject,
  // WorkbenchQuickNav,
  // WorkbenchTodo,
  // WorkbenchTrends,
} from '@vben/common-ui';
import { preferences } from '@vben/preferences';
import { useUserStore } from '@vben/stores';
// import { openWindow } from '@vben/utils';

const userStore = useUserStore();

// 这是一个示例数据，实际项目中需要根据实际情况进行调整
// url 也可以是内部路由，在 navTo 方法中识别处理，进行内部跳转
// 例如：url: /dashboard/workspace
// const projectItems: WorkbenchProjectItem[] = [
//   {
//     color: '#6DB33F',
//     content: 'github.com/YunaiV/ruoyi-vue-pro',
//     date: '2025-01-02',
//     group: 'Spring Boot 单体架构',
//     icon: 'simple-icons:springboot',
//     title: 'ruoyi-vue-pro',
//     url: 'https://github.com/YunaiV/ruoyi-vue-pro',
//   }
// ];

// 同样，这里的 url 也可以使用以 http 开头的外部链接
// const quickNavItems: WorkbenchQuickNavItem[] = [
//   {
//     color: '#1fdaca',
//     icon: 'ion:home-outline',
//     title: '首页',
//     url: '/',
//   }
// ];

// const todoItems = ref<WorkbenchTodoItem[]>([
//   {
//     completed: false,
//     content: `系统支持 JDK 8/17/21，Vue 2/3`,
//     date: '2024-07-15 09:30:00',
//     title: '技术兼容性',
//   }
// ]);
// const trendItems: WorkbenchTrendItem[] = [
//   {
//     avatar: 'svg:avatar-1',
//     content: `在 <a>开源组</a> 创建了项目 <a>Vue</a>`,
//     date: '刚刚',
//     title: '威廉',
//   }
// ];

// const router = useRouter();

// 这是一个示例方法，实际项目中需要根据实际情况进行调整
// This is a sample method, adjust according to the actual project requirements
// function navTo(nav: WorkbenchProjectItem | WorkbenchQuickNavItem) {
//   if (nav.url?.startsWith('http')) {
//     openWindow(nav.url);
//     return;
//   }
//   if (nav.url?.startsWith('/')) {
//     router.push(nav.url).catch((error) => {
//       console.error('Navigation failed:', error);
//     });
//   } else {
//     console.warn(`Unknown URL for navigation item: ${nav.title} -> ${nav.url}`);
//   }
// }
</script>

<template>
  <div class="p-5">
    <WorkbenchHeader
      :avatar="userStore.userInfo?.avatar || preferences.app.defaultAvatar"
    >
      <template #title>
        早安, {{ userStore.userInfo?.nickname }}, 开始您一天的工作吧！
      </template>
      <template #description> 今日晴，20℃ - 32℃！ </template>
    </WorkbenchHeader>

    <!--    <div class="mt-5 flex flex-col lg:flex-row">-->
    <!--      <div class="mr-4 w-full lg:w-3/5">-->
    <!--        <WorkbenchProject :items="projectItems" title="项目" @click="navTo" />-->
    <!--        <WorkbenchTrends :items="trendItems" class="mt-5" title="最新动态" />-->
    <!--      </div>-->
    <!--      <div class="w-full lg:w-2/5">-->
    <!--        <WorkbenchQuickNav-->
    <!--          :items="quickNavItems"-->
    <!--          class="mt-5 lg:mt-0"-->
    <!--          title="快捷导航"-->
    <!--          @click="navTo"-->
    <!--        />-->
    <!--        <WorkbenchTodo :items="todoItems" class="mt-5" title="待办事项" />-->
    <!--        <AnalysisChartCard class="mt-5" title="访问来源">-->
    <!--          <AnalyticsVisitsSource />-->
    <!--        </AnalysisChartCard>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
