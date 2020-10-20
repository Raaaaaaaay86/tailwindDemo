<template>
  <div class="p-8 bg-primary text-light">
    <div class="flex justify-between items-center">
      <h1 class="text-4xl">
        付款
      </h1>
      <Step step="2" />
    </div>
    <div class="mb-2 grid grid-cols-1">
      <label class="mb-2" for="credit-card">
        信用卡卡號
      </label>
      <Input id="credit-card" name="credit-card" placeholder="0912-345-678" class="pl-5" />
    </div>
    <div class="mb-2 grid grid-cols-2 gap-2">
      <div class="flex flex-col">
        <label class="mb-2" for="last-name">
          持卡人姓名
        </label>
        <Input id="last-name" name="last-name" placeholder="王" class="pl-5" />
      </div>
      <div class="mt-auto">
        <Input id="first-name" name="first-name" placeholder="小明" class="pl-5" />
      </div>
    </div>
    <div class="mb-2 grid grid-cols-2 gap-2">
      <div class="flex flex-col">
        <label class="mb-2" for="tel">
          有效期限
        </label>
        <Input id="expire-month" name="expire-month" placeholder="01" class="pl-5" />
      </div>
      <div class="mt-auto">
        <Input id="expire-date" name="expire-date" placeholder="27" class="pl-5" />
      </div>
    </div>
    <div class="mb-8 grid grid-cols-2">
      <div class="flex flex-col">
        <label class="mb-2" for="tel">
          背面末三碼
        </label>
        <Input id="verify-code" name="verify-code" placeholder="123" class="pl-5" />
      </div>
    </div>
    <nuxt-link to="/checkout/invoice">
      <div class="-mx-8 -mb-8 py-4 bg-warning text-primary text-2xl font-semibold text-center cursor-pointer">
        下一步
      </div>
    </nuxt-link>
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
      text: '',
    };
  },
};
</script>
