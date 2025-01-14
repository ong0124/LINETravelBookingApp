<template>
<div class="h-screen bg-gray-200"> 
    <div class="h-1/3 bg-gradient-to-b from-green-400 ">
    <header class="flex items-center py-4">
        <Icon name="tabler-arrow-back-up" class="mr-1 bg-white ml-4"/>
        <h1 class="absolute left-1/2 transform -translate-x-1/2 text-base font-bold capitalize text-white ">
           訂單確認
        </h1>
     </header>
    <div class="mx-3 pt-4 pb-8 rounded-lg bg-white">
        <div class="px-4">
            <div class="px-2">
                <p class="border-l-4 border-orange-400 pl-2">
                  行程信息
                </p>
                <p class="my-2">01月02日星期四 11:30</p>
                <div class="flex ">
                    <p>水頭碼頭</p>
                    <Icon name="material-symbols-arrow-right-alt" class="mx-2 w-6 h-6"></Icon>
                    <p>尚義機場</p>
                </div>
            </div>
           <DashLine/>  
                <div class="px-2">
                    <div class="flex py-2">
                        <p class="border-l-4 border-orange-400 pl-2 flex-1">
                            訂單總價
                        </p>
                        <a href="#" class="text-sm text-gray-600 ml-1">退改説明</a>
                        </div>
                     <div class="flex">
                     <p class="flex-1">全票 x 1</p>           
                     <p>¥&nbsp;30.00</p>
                        </div>
                    <div class="flex">
                    <p class="flex-1">嬰兒票 x 1</p>
                    <p>¥&nbsp;0.00</p>
                    </div>
                </div>
           </div>
    </div>
    <div class="text-xs p-6 text-gray-700">
        <p>溫馨提示：</p>
        <p>1. 請確認購票信息准確無誤。</p>
        <p>2. 接駁車線上購票截止時間為前一天20:00。</p>
        <p>3. 金門碼頭至機場預計車程為15-20分鐘，為避免影響行程，航班到達時間與出發時間請至少間隔90分鐘，請您提前合理規劃出行方式並妥善安排好出行時間和具體線路，以便有充足時間辦理值機、托運、安檢等乘機手續，否則由此造成的損失和不便由旅客自行承擔。</p>
        <p>4. 線上退票截止時間為發車時間前90分鐘。</p>
        <p>5. 車票當日有效。逾期未使用的車票，系統將於3-5個工作日內自動退回到原支付渠道上。</p>
    </div>

    <footer class="border-t bg-white fixed inset-x-0 bottom-0">
        <div class="py-6 mx-6 flex">
            <div class="flex flex-1">
                <p>合計 &nbsp;: &nbsp;</p>
                <p class="text-red-500">¥&nbsp;30.00</p>
            </div>
            <nuxt-link to="/payment" class="bg-red-500 text-white rounded px-2 py-1">提交訂單</nuxt-link>
        </div>
    </footer>
</div>
</div>
</template>

