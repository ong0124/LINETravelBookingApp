<template>
    <div class="h-screen">
        <div class="py-4 bg-green-400 ">
            <header class="flex items-center ">
                <Icon name="tabler-arrow-back-up" class="mr-1 bg-white ml-4"/>
                <h1 class="absolute left-1/2 transform -translate-x-1/2 text-base font-bold capitalize text-white ">
                   請你支付
                </h1>
            </header>
        </div>
        <div class="px-6">
            <p class="pt-4 pb-2">選擇支付方式</p>
            <div class="flex flex-col">
                <button class="flex mb-4 bg-green-300 rounded-lg text-white justify-between px-6 py-1">
                    LinePay
                    <img src="/assets/images/LINEPayIcon.png" alt="LinePay Icon" class="w-6 h-6 mr-2 bg-white p-1 rounded" />
                </button>
                <button class="flex mb-4 bg-white rounded-lg text-gray-500 justify-between px-6 py-1">
                    PayPal
                    <img src="/assets/images/PayPalIcon.png" alt="LinePay Icon" class="w-6 h-6 mr-2 bg-white rounded" />
                </button>
                <button class="flex mb-4 bg-white rounded-lg text-gray-500 justify-between px-6 py-1">
                    信用卡
                    <img src="/assets/images/download.png" alt="LinePay Icon" class="h-6 mr-2 bg-white rounded" />
                </button>
            </div>

        </div>
        <div class="fixed inset-x-0 bottom-6 flex justify-center">
            <button class="bg-green-400 text-white w-1/3 py-2 rounded">支付</button>
        </div>
    </div>

</template>