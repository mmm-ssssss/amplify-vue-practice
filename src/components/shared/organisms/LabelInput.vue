<script setup lang="ts">
defineProps<{
  delBorderT?: boolean;
  delBorderS?: boolean;
  delBorderE?: boolean;
  delBorderB?: boolean;
  title: string;
}>();
</script>
<template>
  <div
    class="d-flex justify-center align-center w-100 bg-grey-lighten-3"
    :class="{
      'border-t': !delBorderT,
      'border-s': !delBorderS,
      'border-e': !delBorderE,
      'border-b': !delBorderB,
    }"
  >
    <div class="w-25 px-3">{{ title }}</div>
    <div class="w-75 border-s px-3 bg-white">
      <v-text-field
        required
        density="compact"
        variant="outlined"
        class="mt-4"
      ></v-text-field>
    </div>
  </div>
</template>

<style scoped></style>
