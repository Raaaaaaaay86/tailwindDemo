<template>
  <div class="px-8 py-4 md:px-0 flex flex-col md:flex-row items-center justify-between bg-white">
    <div class="w-full md:w-auto pb-2 md:pb-0 flex flex-row items-center border-b md:border-0">
      <img
        :src="require('@/assets/img/product__strawberryCake.jpg')"
        alt="productImage"
        class="w-32 h-32 object-cover object-center"
      >
      <div class="flex-grow-2 mx-0 md:mx-4 lg:mx-12 md:mb-0 hidden md:block">
        <span class="text-xl">
          草莓鮮蛋糕
        </span>
        <p>NT$ 450</p>
      </div>
      <div class="ml-4 md:ml-0 flex flex-col md:flex-row">
        <div class="mb-2 md:mb-0 block md:hidden">
          <span class="text-xl">
            草莓鮮蛋糕
          </span>
          <span>NT$ 450</span>
        </div>
        <Counter @count="counter" />
      </div>
    </div>
    <span class="py-2 md:my-0 w-full border-b md:border-0 md:w-auto text-right md:text-center self-end md:self-auto">
      NT$ 450
    </span>
    <i class="far fa-trash-alt hidden md:block cursor-pointer" />
  </div>
</template>

<script>
import Counter from '@/components/UI/Counter';

export default {
  components: {
    Counter,
  },
  data() {
    return {
      count: null,
    };
  },
  methods: {
    counter(number) {
      const vm = this;
      vm.count = number;
    },
  },
};
</script>
