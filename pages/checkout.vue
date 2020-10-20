<template>
  <div class="grid md:grid-cols-12 md:gap-5">
    <div class="md:col-start-2 col-span-6">
      <Nuxt />
    </div>
    <div class="hidden md:block col-span-4">
      <OrderSummary class="mb-4" />
      <OrderList />
    </div>
  </div>
</template>

<script>
import OrderSummary from '@/components/checkout/Checkout__OrderSummary';
import OrderList from '@/components/checkout/Checkout__OrderList';

export default {
  components: {
    OrderSummary,
    OrderList,
  },
};
</script>
