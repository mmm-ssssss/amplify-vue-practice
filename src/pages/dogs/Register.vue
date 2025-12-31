<script setup lang="ts">
import LabelInput from "@/components/shared/organisms/LabelInput.vue";
import Card from "@/components/shared/atoms/Card.vue";
import SnackBar from "@/components/shared/atoms/SnackBar.vue";
import { onMounted, ref } from "vue";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { v4 as uuidv4 } from "uuid";

const client = generateClient<Schema>();

// function listTodos() {
//   client.models.Todo.observeQuery().subscribe({
//     next: ({ items, isSynced }) => {
//       todos.value = items;
//     },
//   });
// }
const snackbar = ref(false);

const newDog = ref({
  name: "",
  species: "",
});

const resetNewDog = () => {
  newDog.value.name = "";
  newDog.value.species = "";
};

const createDogs = () => {
  client.models.Dogs.create({
    id: uuidv4(),
    name: newDog.value.name,
    species: newDog.value.species,
    hospitalId: "H0001",
    createdBy: "U0001",
  }).then(() => {
    snackbar.value = true;
    resetNewDog();
  });
};

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
      <v-divider />
      <v-card-text>
        <LabelInput
          :title="'名前'"
          :del-border-b="true"
          v-model="newDog.name"
        />
        <LabelInput :title="'犬種'" v-model="newDog.species" />
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn @click="createDogs">登録</v-btn>
      </v-card-actions>
    </Card>
    <SnackBar v-model="snackbar" :content="'登録しました'" />
  </v-container>
</template>

<style scoped>
.my-spacer {
  margin-top: 20vh;
}
</style>
