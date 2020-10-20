<template>
  <div class="relative">
    <img
      :src="require('@/assets/img/index__lemonCake.webp')"
      alt="hedaerImage: lemonCake"
      class="w-full h-124 object-cover object-center"
    >
    <div class="grid grid-cols-12 gap-0 -mt-24 overflow-hidden cursor-pointer">
      <div class="grid grid-cols-3 col-span-12 md:col-start-2 md:col-span-10">
        <div class="cube">
          <img
            :src="require('@/assets/img/index__cube1.webp')"
            alt="linkImage"
            class="cube__img w-full h-64 object-cover object-center"
          >
          <p class="cube__text">
            本日精選
          </p>
        </div>
        <div class="cube">
          <img
            :src="require('@/assets/img/index__cube2.webp')"
            alt="linkImage"
            class="cube__img w-full h-64 object-cover object-center"
          >
          <p class="cube__text">
            人氣推薦
          </p>
        </div>
        <div class="cube">
          <img
            :src="require('@/assets/img/index__cube3.webp')"
            alt="linkImage"
            class="cube__img w-full h-64 object-cover object-center"
          >
          <p class="cube__text">
            新品上市
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cube {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  &__text {
    position: absolute;
    writing-mode: vertical-rl;
    color: white;
    z-index: 1;
    font-size: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__img {
    filter: blur(3px);
  }
  &::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #3F5D45;
  opacity: 80%;
  }
  &:hover {
    & .cube__text {
      color: #3F5D45;
    }
    &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #FFE180;
    opacity: 80%;
    }
  }
}
</style>
