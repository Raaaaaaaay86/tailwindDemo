<template>
  <div>
    <div class="block md:hidden my-8">
      <img
        :src="require(`@/assets/svg/${quoteImg}--h.svg`)"
        width="196"
        alt="quote"
        class="mx-auto"
      >
    </div>
    <div class="bg-light md:mt-20 md:mb-20 relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <div
        class="md:px-8"
        :class="[ reverse ? 'md:col-start-2 col-span-1' : '' ]"
      >
        <img
          :src="require(`@/assets/img/${productImg}.webp`)"
          alt="pancake"
          class="w-full h-64 md:h-460px md:w-460px object-cover object-center md:absolute md:-top-10px"
          :class="[ reverse ? 'right-8' : '' ]"
        >
      </div>
      <div
        class="flex px-7 pt-2 pb-7 md:py-16 md:px-8"
        :class="[ reverse ? 'md:col-start-1' : '' ]"
      >
        <div
          class="section__text leading-10 text-secondary"
          :class="[ reverse ? 'md:ml-16' : '' ]"
        >
          <p>樵江渚上，古今多少事，都付笑談中。</p>
          <p>是非成敗轉頭空，滾滾長江東逝水，白</p>
          <p class="ml-4">
            古今多少事，都付笑談中。
          </p>
          <p>轉頭空，滾滾長江東逝水，白髮漁樵江</p>
          <p>一壺濁酒喜相逢，浪花淘盡英雄。是非</p>
          <p>青山依舊在，幾度夕陽紅。慣看秋月春風。</p>
        </div>
        <img
          width="90"
          :src="require(`@/assets/svg/${quoteImg}.svg`)"
          alt="quote: 為什麼選擇了做甜點"
          class="ml-auto hidden md:block -mt-48"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
    productImg: {
      type: String,
      required: false,
      default: 'index__pancake',
    },
    quoteImg: {
      type: String,
      required: false,
      default: 'quote__whyMake',
    },
  },
};
</script>

<style lang="scss">
.section__text {
  writing-mode: vertical-rl;
  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    margin: 0 auto;
  }
}
</style>
