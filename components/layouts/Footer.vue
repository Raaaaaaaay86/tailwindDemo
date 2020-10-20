<template>
  <div>
    <div class="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-0 px-8 md:px-24 py-8 bg-primary text-light">
      <div class="flex text-2xl items-center justify-center md:justify-start">
        <img
          :src="require('@/assets/svg/logo--light.svg')"
          width="40"
          alt="logo"
        >
        <span class="ml-5">
          訂閱你我的甜蜜郵件
        </span>
      </div>
      <div>
        <EmailInput />
      </div>
    </div>
    <!---->
    <div class="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 py-8 text-primary bg-light">
      <div>
        <img
          :src="require('@/assets/svg/logo__text--dark.svg')"
          width="170"
          class="mb-32"
          alt="TextLogo"
        >
        <div class="mb-8">
          <p>07-1234-5678</p>
          <p>sweetaste@email.com</p>
          <p>800 高雄市新興區幸福路520號</p>
        </div>
        <div class="flex">
          <img
            :src="require('@/assets/svg/icon__line.svg')"
            width="32"
            alt="LineIcon"
            class="mr-4 cursor-pointer"
          >
          <img
            :src="require('@/assets/svg/icon__facebook.svg')"
            width="32"
            class="cursor-pointer"
            alt="FacebookIcon"
          >
        </div>
        <p class="block md:hidden mt-5">
          © 2018 Sweetaste* All Rights Reserved
        </p>
      </div>
      <div class="hidden md:flex flex-col items-end">
        <img
          :src="require('@/assets/svg/quote__goodDay--v.svg')"
          width="60"
          alt="quote: 今天是個吃甜點的好日子"
        >
        <p class="mt-auto">
          © 2018 Sweetaste* All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from '@/components/UI/EmailInput';

export default {
  components: {
    EmailInput,
  },
};
</script>
