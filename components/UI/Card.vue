<template>
  <div>
    <div class="relative">
      <img
        :src="require(`@/assets/img/${productImg}.webp`)"
        class="h-80 w-full object-cover object-center"
        alt="productImage"
      >
      <div class="flex justify-between absolute w-full top-0 left-0 px-5">
        <span class="inline writing__vertical--lr px-2 py-3 text-light bg-primary tracking-widest">
          本日精選
        </span>
        <i class="far fa-heart mt-5 cursor-pointer" />
      </div>
    </div>
    <div class="flex text-center border-b border-light text-xl">
      <span class="w-3/5 py-4 border-l border-r border-light">
        <slot name="name">
          焦糖馬卡龍
        </slot>
      </span>
      <span class="w-2/5 py-4 border-r border-light font-semibold">
        NT$ <slot name="price">450</slot>
      </span>
    </div>
    <div class="bg-light py-4 text-center font-semibold cursor-pointer hover:bg-light-darken hover:text-white">
      <span class="font-semibold text-2xl">
        加入購物車
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productImg: {
      type: String,
      required: false,
      default: 'product__donut',
    },
  },
};
</script>
