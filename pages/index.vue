<template>
  <div>
    <Header />
    <Section />
    <Section
      reverse
      :product-img="'index__oat'"
      :quote-img="'quote__whyEat'"
    />
    <div class="px-8 mt-4 mb-16 grid grid-cols-1 md:grid-cols-12 md:gap-x-5">
      <Card class="md:col-span-4" />
      <Card class="col-span-4 hidden md:block" :product-img="'product__blueberry'">
        <span slot="name">
          藍莓優格
        </span>
        <span slot="price">
          150
        </span>
      </Card>
      <Card class="col-span-4 hidden md:block" :product-img="'product__cherryCake'">
        <span slot="name">
          野莓蛋糕
        </span>
        <span slot="price">
          300
        </span>
      </Card>
    </div>
  </div>
</template>

<script>
import Header from '@/components/index/Header';
import Section from '@/components/index/Section';
import Card from '@/components/UI/Card';

export default {
  components: {
    Header,
    Section,
    Card,
  },
};
</script>

<style lang="scss" coped>
</style>
