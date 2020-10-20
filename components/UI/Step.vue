<template>
  <div class="steps w-40 flex justify-between">
    <div
      class="step"
      :class="[ step === '1' ? 'active' : '' ]"
    />
    <div
      class="step"
      :class="[ step === '2' ? 'active' : '' ]"
    />
    <div
      class="step"
      :class="[ step === '3' ? 'active' : '' ]"
    />
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: String,
      required: false,
      default: '1',
    },
  },
};
</script>

<style lang="scss" scoped>
.active{
  background:#EAF0ED !important;
  border: none !important;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  position: relative;
  z-index: 1;
  &::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 14px;
    border: 1px solid #3F5D45;
    border-radius: 100%;
    transform: translate(-50%, -50%);
  }
}

.steps{
  position: relative;
  &::after{
    content:'';
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 95%;
    height: 1px;
    background: #8DA291;
    transform: translate(-50%, -50%);
  }
}

.step{
  width: 17px;
  height: 17px;
  border: 1px solid #8DA291;
  background: #3F5D45;
  border-radius: 100%;
  z-index: 1;
}
</style>
