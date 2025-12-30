<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import HeaderLayout from "@/layouts/HeaderLayout.vue";
</script>

<template>
  <Authenticator>
    <template #header>
      <h2 class="custom-header"></h2>
    </template>
    <template #default="{ user, signOut }">
      <v-app v-if="user">
        <HeaderLayout :signOut="signOut" />
      </v-app>
    </template>
  </Authenticator>
</template>

<style scoped>
.custom-header {
  height: 20vh;
}
</style>
