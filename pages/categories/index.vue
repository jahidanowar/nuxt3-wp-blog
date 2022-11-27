<script lang="ts" setup>
import colorGenerator from "~~/utils/colorGenerator";
useHead({
  title: "Categories",
  meta: [
    {
      name: "description",
      content: "Categories",
    },
  ],
});
</script>
<template>
  <PageHeader title="Categories"> </PageHeader>
  <section class="py-10">
    <div class="container">
      <div class="flex flex-wrap gap-5">
        <NuxtLink
          v-for="i in 20"
          :key="i"
          :to="`/categories/${i}`"
          class="flex items-center justify-center py-2 px-4 rounded text-white shadow-md hover:shadow-lg duration-200 text-2xl uppercase"
          :style="{ backgroundColor: colorGenerator() }"
        >
          <span class="font-semibold">#{{ i }}category</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
