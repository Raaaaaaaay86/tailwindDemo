<template>
  <div class="flex border border-light divide-x">
    <div
      class="w-12 h-12 flex items-center justify-center"
      :class="[ count === 0 ? 'text-secondary': 'active:bg-primary active:text-light cursor-pointer' ]"
      @click="minus"
    >
      <i class="fas fa-minus" />
    </div>
    <div class="w-12 h-12 flex items-center justify-center">
      {{ count }}
    </div>
    <div
      class="w-12 h-12 flex items-center justify-center active:bg-primary active:text-light cursor-pointer"
      @click="plus"
    >
      <i class="fas fa-plus" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    plus() {
      const vm = this;
      vm.count += 1;
      this.$emit('count', vm.count);
    },
    minus() {
      const vm = this;
      if (vm.count === 0) {
        return;
      }
      vm.count -= 1;
    },
  },
};
</script>
