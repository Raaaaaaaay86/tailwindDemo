<template>
  <div
    class="inline-block w-full bg-white relative"
    :class="[ appendIcon ? 'pl-12' : '' ]"
  >
    <i
      v-if="appendIcon"
      :class="`fas fa-${iconType} text-primary absolute top-4 left-4`"
    />
    <input
      :type="type"
      :placeholder="placeholder"
      class="h-12 w-full text-primary"
      @input="update"
    >
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    appendIcon: {
      type: Boolean,
      defauly: false,
      required: false,
    },
    iconType: {
      type: String,
      required: false,
      default: 'user',
    },
    placeholder: {
      type: String,
      required: false,
      default: 'prop: placeholder',
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    update(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
