<template>
    <div class="flex-col p-4">
        <div>
            <p class="border-l-4 my-3 border-orange-400 text-justify pl-2">去程</p>
        </div>
        <div class="flex justify-around">
                <div class="flex"><Icon name="i-material-symbols-directions-car" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">出發地點</p>
                </div>
                <div class="flex"><Icon name="i-mdi-map-marker-radius-outline" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">抵達地點</p>
                </div>
              </div>
              <div class="flex justify-evenly">
                <p class="ml-auto text-2xl ">{{ isSwapped ? returnTrip.p2 : onwardTrip.p2 }}</p>
                <Icon name="i-hugeicons-exchange-01" class=" mx-auto bg-green-600 w-7 h-7"
                @click="swapText"/>
                <p class="mr-auto text-2xl">{{ isSwapped ? returnTrip.p3 : onwardTrip.p3 }}</p>
              </div>
              <div class="border-b-2 py-3"></div>
              <div class="flex pt-3 pl-4">
                <Icon name="i-majesticons-ship-line" class="bg-green-300 w-6 h-6"></Icon>
                <p class="text-green-300">抵達碼頭時間</p>
              </div>
              <div class="flex pt-2 pl-4 space-x-4">
                <DatePicker/>
                <TimePicker/>
              </div>
              <div class="flex pt-3 pl-4">
                <Icon name="i-material-symbols-directions-car" class="bg-green-300 w-6 h-6"></Icon>
                <p class="text-green-300">接駁車發車時間</p>
              </div>
              <div class="flex pt-2 pl-4 space-x-4">
                <DatePicker />
                <TimePicker />
              </div>
              <div class="border-b-2 py-3"></div>

                <p class="border-l-4 my-3 border-orange-400 text-justify pl-2">返程</p>
                <div class="flex justify-around">
                <div class="flex"><Icon name="i-material-symbols-directions-car" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">出發地點</p>
                </div>
                <div class="flex"><Icon name="i-mdi-map-marker-radius-outline" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">抵達地點</p>
                </div>
              </div>
              <div class="flex justify-evenly">
                <p class="ml-auto text-2xl ">{{ isSwapped ? onwardTrip.p2 : returnTrip.p2 }}</p>
                <Icon name="i-hugeicons-exchange-01" class=" mx-auto bg-green-600 w-7 h-7"
                @click="swapText"/>
                <p class="mr-auto text-2xl"> {{ isSwapped ? onwardTrip.p3 : returnTrip.p3 }}</p>
              </div>
              <div class="border-b-2 py-3"></div>
              <div class="flex pt-3 pl-4">
                <Icon name="i-majesticons-ship-line" class="bg-green-300 w-6 h-6"></Icon>
                <p class="text-green-300">抵達碼頭時間</p>
              </div>
              <div class="flex pt-2 pl-4 space-x-4">
                <DatePicker/>
                <TimePicker/>
              </div>
              <div class="flex pt-3 pl-4">
                <Icon name="i-material-symbols-directions-car" class="bg-green-300 w-6 h-6"></Icon>
                <p class="text-green-300">接駁車發車時間</p>
              </div>
              <div class="flex pt-2 pl-4 space-x-4">
                <DatePicker />
                <TimePicker />
              </div>
              <DashLine/>

              <div class="flex pl-6 pt-3">
                <p class="flex-1">票價</p>
                <p class="flex-1">$30 /人</p>
                <p class="flex-1"></p>
              </div>

              <div class="flex pl-6 pt-2 justify-evenly content-center">
                <div class="flex flex-1">
                  <p class="flex-1">成人票</p>
                  <div class="flex-1 flex ">
                  <button @click="decrement('adult')">
                  <Icon name="i-mdi-minus-circle-outline"/></button>
                  <p class="px-2">{{ counts.adult }}</p>
                  <button @click="increment('adult')">
                    <Icon name="i-material-symbols-add-circle-outline"/>
                  </button>
                  </div>
                </div>
                <div class="flex flex-1">
                  <p class="flex-1">嬰兒票(&lt;= 2嵗)</p>
                  <div class="flex-1 flex">
                  <button @click="decrement('child')">
                  <Icon name="i-mdi-minus-circle-outline"/></button>
                  <p class="px-2 ">{{ counts.child }}</p>
                  <button @click="increment('child')">
                    <Icon name="i-material-symbols-add-circle-outline"/>
                  </button>
                  </div>
                </div>
              </div>

              <div class="flex py-4 px-6 content-center">
                <p class="flex-none pr-6">聯係人</p>
                <input
                  type="text"
                  placeholder="必填"
                  class="flex-1 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm min-w-0"/>
              </div>

              <div class="flex py-4 px-6 content-center">
                <p class="flex-none pr-2">聯係電話</p>
                <input
                  type="text"
                  placeholder="必填"
                  class="flex-1 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm min-w-0"/>
              </div>
              
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      isSwapped: false,
      onwardTrip: {
        p2: "金門水頭碼頭",
        p3: "金門商議機場",
      },
      returnTrip: {
        p2: "金門商議機場",
        p3: "金門水頭碼頭",
      },
      counts:{
      adult: 1,
      child: 1
      },
    };
  },
  methods: {
    swapText() {
      this.isSwapped = !this.isSwapped;
    },
    increment(type :"adult" | "child") {
            this.counts[type]++;
        },
        decrement(type :"adult" | "child") {
            if (this.counts[type] > 0) {
                this.counts[type]--;
            }
        }
    }
});
</script>
