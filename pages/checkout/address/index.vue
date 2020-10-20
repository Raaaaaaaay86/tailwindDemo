<template>
  <div class="p-8 bg-primary text-light">
    <div class="flex justify-between items-center">
      <h1 class="text-4xl">
        運送
      </h1>
      <Step step="1" />
    </div>
    <div class="mb-2 grid grid-cols-2 gap-2">
      <div>
        <label class="mb-2" for="last-name">
          姓氏
        </label>
        <Input id="last-name" name="last-name" placeholder="王" class="pl-5" />
      </div>
      <div>
        <label class="mb-2" for="first-name">
          名字
        </label>
        <Input id="first-name" name="first-name" placeholder="小明" class="pl-5" />
      </div>
    </div>
    <div class="mb-2 grid grid-cols-1">
      <label class="mb-2" for="tel">
        電話
      </label>
      <Input id="tel" name="tel" placeholder="0912-345-678" class="pl-5" />
    </div>
    <div class="mb-2 grid grid-cols-2 gap-2">
      <div class="flex flex-col">
        <label class="mb-2" for="tel">
          地址
        </label>
        <Input id="county" name="county" placeholder="高雄市" class="pl-5" />
      </div>
      <div class="mt-auto">
        <Input id="district" name="district" placeholder="新興區" class="pl-5" />
      </div>
    </div>
    <div class="mb-8 grid grid-cols-1">
      <Input id="address" name="address" placeholder="幸福路 520 號" class="pl-5" />
    </div>
    <div class="-mx-8 -mb-8 py-4 bg-warning text-primary text-2xl font-semibold text-center cursor-pointer">
      下一步
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
      text: '',
    };
  },
};
</script>
