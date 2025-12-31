<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();
const modelValue = defineModel<boolean>();
</script>
<template>
  <v-snackbar v-model="modelValue" location="bottom">
    <v-icon>mdi-check-circle</v-icon>
    {{ content }}
    <template #actions>
      <v-btn icon="mdi-close" variant="text" @click="modelValue = false" />
    </template>
  </v-snackbar>
</template>

<style scoped></style>
