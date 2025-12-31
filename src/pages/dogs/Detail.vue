<script setup lang="ts">
import LabelInput from "@/components/shared/organisms/LabelInput.vue";
import LabelInputRead from "@/components/shared/organisms/LabelInputRead.vue";
import Card from "@/components/shared/atoms/Card.vue";
import { onMounted, ref } from "vue";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

// const client = generateClient<Schema>();

// // create a reactive reference to the array of todos
// const todos = ref<Array<Schema["Todo"]["type"]>>([]);

// function listTodos() {
//   client.models.Todo.observeQuery().subscribe({
//     next: ({ items, isSynced }) => {
//       todos.value = items;
//     },
//   });
// }

// function createTodo() {
//   client.models.Todo.create({
//     content: window.prompt("Todo content"),
//   }).then(() => {
//     // After creating a new todo, update the list of todos
//     listTodos();
//   });
// }

// function deleteTodo(id: string) {
//   client.models.Todo.delete({ id });
// }

// // fetch todos when the component is mounted
// onMounted(() => {
//   listTodos();
// });

defineProps<{
  dogId: string;
}>();

const register = ref(false);
</script>

<template>
  <v-container class="d-flex flex-column justify-center align-center">
    <Card class="w-75 my-spacer" border="thin">
      <v-card-title> 血液検査結果 </v-card-title>
      <v-card-subtitle> 名前：ココア 犬種：チワワ</v-card-subtitle>
      <v-card-subtitle> 2025/12/31 ○○動物病院 △△獣医師</v-card-subtitle>
      <v-divider />
      <v-card-text>
        <v-row class="ma-0 pa-0">
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInputRead :title="'項目A'" :value="'1.00'" />
          </v-col>
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInputRead :title="'項目B'" :value="'2.11'" />
          </v-col>
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInputRead :title="'項目C'" :value="'30.1'" />
          </v-col>
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInputRead :title="'項目D'" :value="'0.55'" />
          </v-col>
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInputRead :title="'項目E'" :value="'1.01'" />
          </v-col>
        </v-row>
      </v-card-text>
    </Card>
    <v-btn v-if="!register" @click="register = !register" class="mt-5"
      >新規</v-btn
    >
    <Card v-if="register" class="w-75 mt-5" border="thin">
      <v-card-title> 血液検査登録 </v-card-title>
      <v-divider />
      <v-card-text>
        <v-row class="ma-0 pa-0">
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInput :title="'項目A'" />
          </v-col>
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInput :title="'項目B'" />
          </v-col>
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInput :title="'項目C'" />
          </v-col>
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInput :title="'項目D'" />
          </v-col>
          <v-col cols="4" class="ma-0 pa-0">
            <LabelInput :title="'項目E'" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn>登録</v-btn>
        <v-btn @click="register = !register">中断</v-btn>
      </v-card-actions>
    </Card>
  </v-container>
</template>

<style scoped>
.my-spacer {
  margin-top: 20vh;
}
</style>
