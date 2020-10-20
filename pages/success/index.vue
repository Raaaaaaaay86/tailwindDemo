<template>
  <div>
    <div class="md:mb-16">
      <div
        :style="{'background-image': 'url(' + require('@/assets/img/done__background.jpg') + ')'}"
        style="background-size: cover"
        alt="backgroundImage"
        class="flex flex-col justify-center items-center w-full h-124"
      >
        <Step class="mt-auto md:mt-0 mb-8" success />
        <img
          :src="require('@/assets/svg/quote__paySuccess.svg')"
          width="190"
          alt="paySuccess"
          class="md:mb-12"
        >
        <nuxt-link to="/" class="mt-auto md:m-0 py-4 w-full md:w-64 inline-block text-center text-2xl bg-warning text-primary">
          <div>
            繼續逛逛
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Step from '@/components/UI/Step';

export default {
  components: {
    Step,
  },
};
</script>
