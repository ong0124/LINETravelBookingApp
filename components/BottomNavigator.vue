<script setup lang="ts"></script>

<template>
    <footer class="border-t bg-white fixed inset-x-0 bottom-0">
        <div class="flex justify-between">
            <button
             v-for="page in pages"
             :key="page.name"
             @click="selectPage(page.name, page.route)"
             class="flex flex-col items-center mx-auto text-sm">
                <Icon
                :name="page.icon"
                class="h-5 w-5"
                :class="selectedPage === page.name ? 'text-green-500' : 'text-gray-400'"
                />
                <span
                :class="selectedPage === page.name ? 'text-green-500 font-bold' : 'text-gray-500'"
                >
                {{ page.name }}
                </span>
            </button>
        </div>
    </footer>
</template>


<script setup lang="ts">
import { ref } from "vue";

// 定義當前選中的導航按鈕
const selectedPage = ref("接駁");

// 定義導航項目
const pages = [
  { name: "接駁", icon: "material-symbols-directions-car", route: "/" },
  { name: "包車", icon: "mdi-bus", route: "/" },
  { name: "接送", icon: "mdi-car-search-outline", route: "/" },
  { name: "我的", icon: "material-symbols-person-2-outline", route: "/profile" },
];

// 切換選中的導航按鈕
const selectPage = (pageName: string, route: string) => {
  selectedPage.value = pageName;
  navigateTo(route); // 使用 Nuxt 的 `navigateTo` 方法進行導航
};
</script>