<template>
  <div class="py-8 flex content-center">
    <img
      :src="require('@/assets/svg/logo--dark.svg')"
      class="inline-block cursor-pointer"
      style="height: 40px;"
      alt="logo"
    >
    <div class="flex-grow" />
    <ul class="hidden md:flex content-center p-2">
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
  </div>
</template>
