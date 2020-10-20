<template>
  <div class="flex border border-light divide-x">
    <div
      class="w-16 h-16 flex justify-center items-center"
      :class="[ hasPre === false ? 'text-secondary' : 'hover:bg-primary hover:text-light cursor-pointer' ]"
    >
      <i class="fas fa-caret-left" />
    </div>
    <template>
      <div
        v-for="(page) in totalPage"
        :key="page"
        class="w-16 h-16 text-xl flex justify-center items-center cursor-pointer"
        :class="[ currentPage === page ? 'bg-primary text-light' : 'hover:bg-primary hover:text-light' ]"
      >
        {{ page }}
      </div>
    </template>
    <div
      class="w-16 h-16 flex justify-center items-center"
      :class="[ hasNext === false ? 'text-secondary' : 'hover:bg-primary hover:text-light cursor-pointer' ]"
    >
      <i class="fas fa-caret-right" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      required: false,
      default: 3,
    },
    currentPage: {
      type: Number,
      requried: false,
      default: 1,
    },
    hasPre: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasNext: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>
