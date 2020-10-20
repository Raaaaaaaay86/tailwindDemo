<template>
  <div>
    <div class="py-8 px-8 flex bg-white justify-between">
      <nuxt-link to="/" class="hidden md:block">
        <img
          :src="require('@/assets/svg/logo--dark.svg')"
          class="inline-block cursor-pointer"
          style="height: 40px;"
          alt="logo"
        >
      </nuxt-link>
      <ul class="ml-auto hidden md:flex content-center p-2">
        <li class="mr-16">
          <nuxt-link to="/">
            首頁
          </nuxt-link>
        </li>
        <li class="mr-16">
          <nuxt-link to="/products">
            甜點
          </nuxt-link>
        </li>
        <li class="mr-16">
          <nuxt-link to="/login">
            登入
          </nuxt-link>
        </li>
        <li class="cursor-pointer">
          <nuxt-link to="/cart">
            <i class="fas fa-shopping-cart" />
          </nuxt-link>
        </li>
      </ul>
      <i class="fas fa-2x fa-bars block md:hidden" @click="show" />
      <nuxt-link to="/">
        <img
          :src="require('@/assets/svg/logo__logotype.svg')"
          width="150"
          alt="logo"
          class="block md:hidden"
        >
      </nuxt-link>
      <nuxt-link to="/cart">
        <i class="fas fa-2x fa-shopping-cart block md:hidden" />
      </nuxt-link>
    </div>
    <div id="dropmenu" class="drop md:hidden">
      <ul class="text-2xl">
        <nuxt-link to="/">
          <li>首頁</li>
        </nuxt-link>
        <nuxt-link to="/products">
          <li>甜點</li>
        </nuxt-link>
        <nuxt-link to="/login">
          <li class="mb-4">
            登入
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      const dropmenu = document.getElementById('dropmenu');
      dropmenu.classList.toggle('show');
    },
  },
};
</script>

<style lang="scss" scoped>
.drop{
  padding: 0;
  width: 100%;
  max-height: 0;
  padding: 0 2rem 0 2rem;
  background: white;
  overflow: hidden;
  transition: all .6s;
  &.show{
    max-height: 300px;
    transition: all .3s ease-in-out;
  }
}
</style>
