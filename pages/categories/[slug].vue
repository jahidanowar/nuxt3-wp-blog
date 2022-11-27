<script lang="ts" setup>
const params = useRoute().params;
useHead({
  title: `Category ${params.slug}`,
  meta: [
    {
      name: "description",
      content: `Category ${params.slug}`,
    },
  ],
});
</script>

<template>
  <PageHeader :title="`Category ${params.slug}`"> </PageHeader>
  <section class="blogs blogs-archive">
    <div class="container py-10">
      <div class="grid sm:grid-cols-3 gap-10">
        <BlogGrid
          v-for="i in 9"
          :key="i"
          title=" How to make a Reusable OTP Input Field with Vue 3 and Tailwind CSS"
          image="https://i.ibb.co/mJH7pyX/elon.png"
          excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          slug="1"
        ></BlogGrid>
      </div>
    </div>
  </section>
</template>
