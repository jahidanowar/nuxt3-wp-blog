<script lang="ts" setup>
const params = useRoute().params;

const { data: categories, error } = await useWpApi().getCatgory(
  params.slug as string
);
const category = categories.value[0];
const { data: posts, error: postsError } = await useWpApi().getPosts(
  category.id
);

useHead({
  title: `Archive: ${category.name}`,
  meta: [
    {
      name: "description",
      content: `Category ${params.slug}`,
    },
  ],
});
</script>

<template>
  <PageHeader :title="`Archive: ${category.name}`"> </PageHeader>
  <section class="blogs blogs-archive">
    <div class="container py-10">
      <div class="grid sm:grid-cols-3 gap-10">
        <BlogGrid
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :excerpt="post.excerpt.rendered"
          :slug="post.slug"
        ></BlogGrid>
      </div>
    </div>
  </section>
</template>
