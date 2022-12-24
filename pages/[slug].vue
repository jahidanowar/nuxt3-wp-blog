<script lang="ts" setup>
const params = useRoute().params;

const { data: posts } = await useWpApi().getPost(params.slug as string);
const post = posts.value?.[0];

useHead({
  title: post?.title.rendered,
  meta: [
    {
      name: "description",
      content: `${post?.excerpt.rendered}`,
    },
  ],
});
</script>
<template>
  <section class="container blog py-10 sm:py-16">
    <div v-if="post" class="sm:px-20">
      <!-- Blog Title  -->
      <h1
        class="blog__title text-3xl sm:text-5xl font-bold text-center leading-snug mb-5"
      >
        {{ post.title.rendered }}
      </h1>
      <!-- Blog Meta  -->
      <div class="flex mb-10 justify-center gap-5">
        <span
          >Written by:
          <span class="text-primary-500">{{
            post._embedded["author"][0]?.name
          }}</span></span
        >

        <span
          >Published on:
          <span class="text-primary-500">{{ post.date }}</span></span
        >
      </div>
      <!-- Blog Image  -->
      <div
        class="blog__image h-[250px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-12"
      >
        <img
          :src="post._embedded['wp:featuredmedia'][0]?.source_url"
          :alt="post.title.rendered"
          class="absolute w-full h-full object-cover"
        />
      </div>
      <div class="blog__content">
        <div v-if="post.content" v-html="post.content.rendered"></div>
      </div>
    </div>
  </section>
</template>

<style>
.blog__content {
  @apply sm:px-10;
}
.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6,
.blog__content p {
  @apply my-5;
}
.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6 {
  @apply font-bold;
}

.blog__content h1 {
  @apply text-2xl sm:text-4xl;
}

.blog__content h2 {
  @apply text-xl sm:text-3xl;
}

.blog__content h3 {
  @apply text-lg sm:text-2xl;
}

.blog__content h4 {
  @apply sm:text-xl;
}

.blog__content h5 {
  @apply text-sm sm:text-lg;
}
</style>
