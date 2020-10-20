<template>
  <div class="p-8 bg-primary text-light">
    <div class="flex justify-between items-center">
      <h1 class="text-4xl">
        發票
      </h1>
      <Step step="3" />
    </div>
    <div class="h-16 my-8 flex border border-light divide-x">
      <div
        class="w-full py-4 flex justify-center items-center text-xl font-semibold hover:bg-light hover:text-primary"
        :class="[ invoice === 'email' ? 'bg-light text-primary' : '']"
        @click="invoice = 'email'"
      >
        電子發票
      </div>
      <div
        class="w-full py-4 flex justify-center items-center text-xl font-semibold hover:bg-light hover:text-primary"
        :class="[ invoice === 'paper' ? 'bg-light text-primary' : '']"
        @click="invoice = 'paper'"
      >
        郵寄發票
      </div>
    </div>
    <div :class="[ invoice === 'paper' ? 'block' : 'hidden' ]">
      <div class="mb-2 grid grid-cols-2 gap-2">
        <div class="flex flex-col">
          <label class="mb-2" for="tel">
            地址
          </label>
          <Input id="county" name="county" placeholder="高雄市" class="pl-5" />
        </div>
        <div class="mt-auto">
          <div class="mb-2 flex items-center">
            <input id="same" type="checkbox" name="same" class="ml-auto mr-2">
            <span>同運送地址</span>
          </div>
          <Input id="district" name="district" placeholder="新興區" class="pl-5" />
        </div>
      </div>
      <div class="mb-2 grid grid-cols-1">
        <Input id="address" name="address" placeholder="幸福路 520 號" class="pl-5" />
      </div>
      <div class="mb-8 grid grid-cols-1">
        <label class="mb-2" for="tel">
          統一編號（選填）
        </label>
        <Input id="tel" name="tel" placeholder="12345678" class="pl-5" />
      </div>
      <nuxt-link to="/success">
        <div class="-mx-8 -mb-8 py-4 bg-warning text-primary text-2xl font-semibold text-center cursor-pointer">
          下一步
        </div>
      </nuxt-link>
    </div>
    <div :class="[ invoice === 'email' ? 'block' : 'hidden' ]">
      <div class="mb-2 grid grid-cols-1">
        <label class="mb-2" for="email">
          電子郵件信箱
        </label>
        <Input id="email" name="email" placeholder="example@email.com" class="pl-5" />
      </div>
      <div class="mb-8 grid grid-cols-1">
        <label class="mb-2" for="tel">
          統一編號（選填）
        </label>
        <Input id="tel" name="tel" placeholder="12345678" class="pl-5" />
      </div>
      <nuxt-link to="/success">
        <div class="-mx-8 -mb-8 py-4 bg-warning text-primary text-2xl font-semibold text-center cursor-pointer">
          下一步
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Input from '@/components/UI/Input';
import Step from '@/components/UI/Step';

export default {
  components: {
    Input,
    Step,
  },
  data() {
    return {
      invoice: 'paper',
    };
  },
};
</script>
