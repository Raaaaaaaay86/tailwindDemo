<template>
  <div>
    <ProductHeader />
    <div class="mt-16 mb-8 grid grid-cols-1 md:grid-cols-12 md:gap-6">
      <div class="md:col-span-3">
        <ListMenu />
      </div>
      <div class="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 md:col-span-9 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div class="mb-4 grid grid-cols-1 md:grid-cols-12">
      <div class="md:col-start-4 md:col-span-9 justify-self-center">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import ProductHeader from '@/components/product/ProductHeader';
import ListMenu from '@/components/UI/ListMenu';
import Card from '@/components/UI/Card';
import Pagination from '@/components/UI/Pagination';

export default {
  components: {
    ProductHeader,
    Pagination,
    ListMenu,
    Card,
  },
};
</script>
