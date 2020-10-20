<template>
  <div class="grid grid-cols-1 md:grid-cols-12 md:gap-5">
    <div class="mb-16 md:col-span-8">
      <CartList />
    </div>
    <div class="md:col-span-4">
      <OrderSummary />
    </div>
  </div>
</template>

<script>
import CartList from '@/components/UI/CartList';
import OrderSummary from '@/components/UI/OrderSummary';

export default {
  components: {
    OrderSummary,
    CartList,
  },
};
</script>
