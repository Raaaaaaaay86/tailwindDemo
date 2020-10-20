<template>
  <div
    class="steps w-40 flex justify-between"
    :class="[{ 'success' : success }]"
  >
    <div
      class="step"
      :class="[{ 'success' : success }, { 'now' : step === '1' }, { 'done' : step === '2' || step === '3' } ]"
    />
    <div
      class="step"
      :class="[{ 'success' : success }, { 'now' : step === '2' }, { 'done' : step === '3' } ]"
    />
    <div
      class="step"
      :class="[{ 'success' : success }, { 'now' : step === '3' } ]"
    />
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: String,
      required: false,
      default: '0',
    },
    success: {
      type: Boolean,
      requried: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
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

.now{
  background:#EAF0ED;
  border: none;
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

.done{
  background:#EAF0ED;
  border: none;
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
    border-radius: 100%;
    background-image: url('../../assets/svg/icon__done.svg');
    background-position: center;
    background-size: cover;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
}

.success{
  &.steps{
    background-color: none;
    border: none;
  }
  &::after{
    background: #3F5D45;
  }
  &.step{
    background-image: url('../../assets/svg/icon__done--white.svg');
    background-position: center;
    background-size: contain;
  }
  border: 1px solid #3F5D45;
}
</style>
