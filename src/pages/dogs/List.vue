<script setup lang="ts">
import Card from "@/components/shared/atoms/Card.vue";
import { onMounted, ref } from "vue";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient, type SelectionSet } from "aws-amplify/data";

const client = generateClient<Schema>();

const selectionSet = [
  "id",
  "name",
  "species",
  "hospitalId",
  "hospital.id",
  "hospital.name",
] as const;

type DogsWithHospital = SelectionSet<
  Schema["Dogs"]["type"],
  typeof selectionSet
>;

// create a reactive reference to the array of todos
const dogs = ref<Array<DogsWithHospital>>([]);

const listDogs = async () => {
  const { data: dogsData, errors } = await client.models.Dogs.list({
    selectionSet,
  });
  dogs.value = dogsData;
};

onMounted(async () => {
  loading.value = true;
  await listDogs();
  loading.value = false;
  console.log(dogs.value);
});

const loading = ref(false);

import { useRouter } from "vue-router";

const router = useRouter();

const headers = [
  { title: "愛犬ID", value: "id" },
  { title: "名前", value: "name" },
  { title: "犬種", value: "species" },
  { title: "登録病院", value: "hospital" },
];
</script>

<template>
  <v-container class="d-flex justify-center align-center">
    <Card class="my-spacer" style="min-width: 50%" border="thin">
      <v-card-title> 愛犬一覧 </v-card-title>
      <v-divider />
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="dogs"
          :loading="loading"
          item-key="id"
          items-per-page="100"
        >
          <template #item.id="{ item }">
            <v-btn
              @click="
                router.push({
                  name: 'detail',
                  params: { dogId: item.id },
                })
              "
              >{{ item.id }}</v-btn
            >
          </template>
          <template #item.hospital="{ item }">
            {{ item.hospital?.name ?? "未登録" }}
          </template>
        </v-data-table>
      </v-card-text>
    </Card>
  </v-container>
</template>

<style scoped>
.my-spacer {
  margin-top: 20vh;
}
</style>
