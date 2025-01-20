<template>
  <HeaderNavigator />
    <div class="flex flex-col pb-16">
        <div class="shadow mt-6 mx-10 rounded-lg bg-gray-50">
            <div class="flex">
                <div :class="{ 'bg-green-300 rounded-tr-lg': activeTab === 2 }" class="flex-1 flex justify-center rounded-tr-lg">
                    <button @click="showContent(1)" :class="{ ' text-green-300 font-bold': activeTab === 1 }">{{ $t('HomePage.oneWay') }}</button>
                </div>
                <div :class="{ 'bg-green-300 rounded-tr-lg': activeTab === 1 }" class="flex-1 flex justify-center rounded-tr-lg">
                    <button @click="showContent(2)" :class="{ ' text-green-300 font-bold': activeTab === 2 }">{{ $t('HomePage.roundTrip') }}</button>
                </div>
            </div>
            <div v-if="activeTab === 1">
              <OneWayTicket/>
            </div>
            <div v-if="activeTab === 2">
                <RoundedWayTicket/>
            </div>

            <div class="pt-8 flex justify-center">
                <input
                    type="checkbox"
                    id="checkbox"
                    v-model="isChecked"
                    class="h-5 w-3 border-black rounded-full"/>
                    <label for="checkbox" class="ml-2 text-sm text-gray-700">{{ $t('HomePage.readAgreement') }}</label>
                    <a href="#" class="text-sm text-blue-700 ml-1">{{ $t('HomePage.terms') }}</a>
              </div>

              <div class="pt-1 pb-4 flex justify-center">
                <a-button
                  type="primary"
                  @click="navigateToConfirmation"
                 class="w-2/3 rounded-lg bg-green-500 text-white">{{ $t('HomePage.confirm') }}</a-button>
              </div>
        </div>
    </div>
</template>


<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { notification } from 'ant-design-vue';
import type { NotificationPlacement } from 'ant-design-vue';

export default defineComponent({
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    showContent(tab :number) {
      this.activeTab = tab;
    },
  },
  
  setup() {
    const localPath = useLocalePath();
    const isChecked = ref(false); // 定義復選框狀態

    // 打开通知
    const openNotification = (placement: NotificationPlacement) => {
      notification.open({
        message: `{{ $t('HomePage.notification.title') }}`,
        description: `{{ $t('HomePage.notification.description') }}`,
        placement,
      });
    };

    const router = useRouter();
    // 點擊確認按鈕的邏輯
    const navigateToConfirmation = () => {
      if (!isChecked.value) {
        openNotification('bottom'); // 如果未勾選，彈出通知
      } else {
        const path = localPath('/confirmationPage');
        router.push(path); // 如果勾選，跳轉
      }
    };

    return {
      isChecked,
      navigateToConfirmation,
    };
  },
});
</script>
