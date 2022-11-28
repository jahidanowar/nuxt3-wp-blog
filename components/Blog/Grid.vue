<script lang="ts" setup>
defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
}>();
</script>

<template>
  <div class="grid shadow-xl group overflow-hidden rounded">
    <div
      v-if="image"
      class="grid__image h-[180px] w-full relative overflow-hidden"
    >
      <img
        :src="image"
        :alt="title"
        class="absolute object-cover w-full h-full group-hover:scale-110 duration-300"
      />
    </div>
    <div class="grid__content p-5">
      <h3 class="grid__content-title text-xl font-semibold mb-2">
        {{ title }}
      </h3>
      <p
        v-if="excerpt"
        class="grid__content-excerpt mb-2 text-sm text-clip overflow-hidden ..."
      >
        {{ excerpt }}
      </p>
      <NuxtLink
        v-if="slug"
        class="blog__readmore border-b-2 border-primary-500 inline-flex items-center"
        :to="`/${slug}`"
        >Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 ml-1 group-hover:ml-2 duration-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
