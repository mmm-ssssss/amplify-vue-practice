<script setup lang="ts">
import LabelInput from "@/components/shared/organisms/LabelInput.vue";
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
</script>

<template>
  <v-container class="d-flex justify-center align-center">
    <Card class="w-50 my-spacer" border="thin">
      <v-card-title> 愛犬登録 </v-card-title>
      <v-card-text>
        <LabelInput :title="'名前'" :del-border-b="true" />
        <LabelInput :title="'犬種'" />
      </v-card-text>
      <v-card-actions>
        <v-btn>登録</v-btn>
      </v-card-actions>
    </Card>
  </v-container>
</template>

<style scoped>
.my-spacer {
  margin-top: 20vh;
}
</style>
