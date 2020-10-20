<template>
  <div class="px-5 border border-light text-secondary">
    <h4 class="py-4 mb-4 -mx-5 bg-light text-2xl text-center">
      購物清單
    </h4>
    <div
      v-for="index in 3"
      :key="index"
      class="mb-4 flex justify-between items-center"
    >
      <img
        :src="require('@/assets/img/product__cherryCake.webp')"
        alt="productImage"
        class="w-20 lg:w-32 h-20 object-cover object-center"
      >
      <div class="ml-4">
        <p>焦糖馬卡龍（2）</p>
        <p class="text-sm lg:text-2xl">
          NT$ 900
        </p>
      </div>
    </div>
  </div>
</template>
