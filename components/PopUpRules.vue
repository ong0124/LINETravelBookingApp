<template>
    <div class="flex">
      <!-- 連結 -->
      <a
        href="#"
        class="text-sm text-blue-700 ml-1"
        @click.prevent="showPopup = true"
      >
        {{ $t('HomePage.terms') }}
      </a>
  
      <!-- 彈出框 -->
      <div
        v-if="showPopup"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
          <h2 class="text-sm font-bold mb-4">{{ $t('HomePage.terms') }}</h2>
          <p class="text-xs text-gray-700">
            條款與細則的內容.......，請仔細閱讀。
            -----------------------------------
            ------------------------------------
            ------------------------------------
          </p>
          <button
            class="mt-4 px-4 py-2 bg-green-300 text-white rounded hover:bg-green-500"
            @click="showPopup = false"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </template>
  

  <script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TermsPopup',
  setup() {
    const showPopup = ref(false);

    return {
      showPopup,
    };
  },
});
</script>
