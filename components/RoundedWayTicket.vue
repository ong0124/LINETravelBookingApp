<template>
    <div class="flex-col p-4">
        <div>
            <p class="border-l-4 my-3 border-orange-400 text-justify pl-2">{{ $t('Booking.outward') }}</p>
        </div>
        <div class="flex justify-around">
                <div class="flex"><Icon name="i-material-symbols-directions-car" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">{{ $t('Booking.departure') }}</p>
                </div>
                <div class="flex"><Icon name="i-mdi-map-marker-radius-outline" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">{{ $t('Booking.arrival') }}</p>
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
                <p class="text-green-300">{{ $t('Booking.arrivalPortTime') }}</p>
              </div>
              <div class="flex pt-2 pl-4 space-x-4">
                <DatePicker/>
                <TimePicker/>
              </div>
              <div class="flex pt-3 pl-4">
                <Icon name="i-material-symbols-directions-car" class="bg-green-300 w-6 h-6"></Icon>
                <p class="text-green-300">{{ $t('Booking.shuttleBusTime') }}</p>
              </div>
              <div class="flex pt-2 pl-4 space-x-4">
                <DatePicker />
                <TimePicker />
              </div>
              <div class="border-b-2 py-3"></div>

                <p class="border-l-4 my-3 border-orange-400 text-justify pl-2">{{ $t('Booking.return') }}</p>
                <div class="flex justify-around">
                <div class="flex"><Icon name="i-material-symbols-directions-car" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">{{ $t('Booking.departure') }}</p>
                </div>
                <div class="flex"><Icon name="i-mdi-map-marker-radius-outline" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">{{ $t('Booking.arrival') }}</p>
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
                <p class="text-green-300">{{ $t('Booking.arrivalPortTime') }}</p>
              </div>
              <div class="flex pt-2 pl-4 space-x-4">
                <DatePicker/>
                <TimePicker/>
              </div>
              <div class="flex pt-3 pl-4">
                <Icon name="i-material-symbols-directions-car" class="bg-green-300 w-6 h-6"></Icon>
                <p class="text-green-300">{{ $t('Booking.shuttleBusTime') }}</p>
              </div>
              <div class="flex pt-2 pl-4 space-x-4">
                <DatePicker />
                <TimePicker />
              </div>
              <DashLine/>
              <div class="flex pl-6 pt-2 justify-evenly content-center">
                <div class="flex flex-1">
                  <p class="flex-1">{{ $t('Booking.adultTicket') }}</p>
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
                  <p class="flex-1">{{ $t('Booking.childTicket') }}</p>
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

              <div class="flex pl-6 pt-3">
                <p class="flex-1">{{ $t('Booking.ticketPrice') }}</p>
                <p class="flex-1">&yen; {{ totalPrice }}{{ $t('Booking.pricePerPerson') }}</p>
                <p class="flex-1"></p>
              </div>


              <div class="flex py-4 px-6 content-center">
                <p class="flex-none pr-6">{{ $t('Booking.contact') }}</p>
                <input
                  type="text"
                  placeholder="必填"
                  class="flex-1 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm min-w-0"/>
              </div>

              <div class="flex py-4 px-6 content-center">
                <p class="flex-none pr-2">{{ $t('Booking.phone') }}</p>
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
        p3: "金門尚義機場",
      },
      returnTrip: {
        p2: "金門尚義機場",
        p3: "金門水頭碼頭",
      },
      counts:{
      adult: 1,
      child: 1
      },
      pricePerTicket:30,
    };
  },
  computed: {
    totalPrice(): number {
      // 總票價動態計算
      return (this.counts.adult) * this.pricePerTicket;
    },
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
