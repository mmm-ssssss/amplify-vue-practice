<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

defineProps<{
  signOut: () => Promise<void> | void;
}>();
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>Dog Allergy App</v-app-bar-title>
    <v-spacer />
    <v-btn variant="text" @click="router.push({ name: 'home' })">ホーム</v-btn>
    <v-btn variant="text" @click="signOut">サインアウト</v-btn>
  </v-app-bar>
  <v-main>
    <RouterView />
  </v-main>
</template>
