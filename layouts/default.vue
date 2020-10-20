<template>
  <div class="md:container mx-auto md:px-10 text-primary font-semibold">
    <Navbar />
    <Nuxt class="nuxt" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.nuxt {
  min-height: calc(100vh - 568px);
}
</style>
