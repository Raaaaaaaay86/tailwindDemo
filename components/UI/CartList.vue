<template>
  <div>
    <div class="bg-light">
      <h1 class="py-4 text-2xl font-semibold text-center">
        您的購物車
      </h1>
    </div>
    <CartListItem />
    <CartListItem />
    <CartListItem />
  </div>
</template>

<script>
import CartListItem from '@/components/UI/CardList__Item';

export default {
  components: {
    CartListItem,
  },
};
</script>
