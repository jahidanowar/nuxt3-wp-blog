<script lang="ts" setup>
import useWpApi from "~~/composables/useWpApi";

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home",
    },
  ],
  titleTemplate: "Elon's Blog - %s",
});
const { data: blogs, refresh, error } = await useWpApi().getPosts();
</script>
<template>
  <main>
    <PageHeader>
      <div class="flex items-center flex-wrap">
        <div
          class="avatar relative h-[200px] w-[200px] rounded overflow-hidden mr-10 mb-5 sm:mb-0 shadow-xl"
        >
          <img
            src="~/assets/images/elon.png"
            alt="Elon Musk"
            class="absolute w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 class="hero__title">Hi, I am Elon</h1>
          <p class="mt-3 hero__des mb-5">
            I built SpaceX, acquired Tesla, Twitter. <br />In my free time i
            sh*t post on twitter.
          </p>
          <a
            href="https://twitter.com/jahiddev"
            class="bg-primary-500 hover:bg-primary-600 py-2 px-4 rounded text-white inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
            Let's Connect</a
          >
        </div>
      </div>
    </PageHeader>

    <!-- Blog Section Starts -->
    <section class="blogs">
      <div class="container py-10">
        <div class="grid sm:grid-cols-3 gap-10">
          <BlogGrid
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.title.rendered"
            :image="blog && blog._embedded && blog._embedded['wp:featuredmedia'] ? blog._embedded['wp:featuredmedia'][0].source_url : ' '"
            :excerpt="blog.excerpt.rendered"
            :slug="blog.slug"
          ></BlogGrid>
        </div>
      </div>
    </section>
    <!-- Blog Section Ends  -->
  </main>
</template>

<style>
.hero__title {
  @apply text-4xl font-bold;
}
.hero__des {
  @apply text-xl;
}
</style>
