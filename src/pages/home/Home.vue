<script setup lang="ts">
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

import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <v-container class="d-flex justify-center align-center">
    <!-- <h1>My todos</h1>
    <button @click="createTodo">+ new</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="deleteTodo(todo.id)">
        {{ todo.content }}
      </li>
    </ul>
    <div>🥳 App successfully hosted. Try creating a new todo.</div> -->
    <Card class="w-50 my-spacer" border="thin">
      <v-card-title> ホーム画面 </v-card-title>
      <v-divider />
      <v-card-text>
        愛犬のアレルギー検査アプリです。愛犬の登録。登録済みの愛犬の一覧表示。
        <br />
        血液検査結果の記録ができます。
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn @click="router.push({ name: 'list' })">一覧</v-btn>
        <v-btn @click="router.push({ name: 'register' })">登録</v-btn>
      </v-card-actions>
    </Card>
  </v-container>
</template>

<style scoped>
.my-spacer {
  margin-top: 20vh;
}
</style>
