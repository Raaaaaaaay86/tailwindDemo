<template>
  <div class="py-8 grid grid-cols-1 md:grid-cols-12">
    <div class="md:col-start-2 md:col-span-5 bg-primary text-light">
      <div class="px-8">
        <h1 class="text-4xl text-center my-10">
          會員登入
        </h1>
        <div class="block md:hidden bg-light p-8 mb-8 -mx-8">
          <div class="grid grid-cols-3 divide-x bg-white justify-items-center items-center">
            <div class="p-4 w-full flex justify-center cursor-pointer">
              <img class="h-5" :src="require('@/assets/svg/logo__facebook--logotype.svg')" alt="facebook logo">
            </div>
            <div class="p-4 w-full flex justify-center cursor-pointer">
              <img class="h-6" :src="require('@/assets/svg/logo__google--logotype.svg')" alt="facebook logo">
            </div>
            <div class="p-4 w-full flex justify-center cursor-pointer">
              <img class="h-6" :src="require('@/assets/svg/logo__yahoo--logotype.svg')" alt="facebook logo">
            </div>
          </div>
        </div>
        <Input
          append-icon
          type="text"
          placeholder="電子信箱/手機號碼"
          icon-type="user"
          class="mb-4"
        />
        <Input
          append-icon
          type="password"
          placeholder="請輸入使用者密碼"
          icon-type="key"
          class="mb-4"
        />
        <div class="mb-5">
          <input
            id="rememberMe"
            type="checkbox"
            name="rememberMe"
            class="cursor-pointer"
          >
          <span>
            記住我
          </span>
        </div>
      </div>
      <div class="py-4 text-2xl text-center bg-warning text-primary cursor-pointer">
        登入帳號
      </div>
    </div>
    <div class="hidden md:flex flex-col justify-center md:col-start-7 md:col-span-5">
      <div class="px-8 py-8 flex flex-col bg-light text-secondary">
        <h2 class="mb-8 text-2xl font-light text-center">
          —— 連結社群帳號 ——
        </h2>
        <div class="py-4 mb-4 bg-white flex justify-center cursor-pointer">
          <img class="h-5" :src="require('@/assets/svg/logo__facebook--logotype.svg')" alt="facebook logo">
        </div>
        <div class="py-4 mb-4 bg-white flex justify-center cursor-pointer">
          <img class="h-6" :src="require('@/assets/svg/logo__google--logotype.svg')" alt="facebook logo">
        </div>
        <div class="py-4 bg-white flex justify-center cursor-pointer">
          <img class="h-6" :src="require('@/assets/svg/logo__yahoo--logotype.svg')" alt="facebook logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/UI/Input';

export default {
  components: {
    Input,
  },
};
</script>
