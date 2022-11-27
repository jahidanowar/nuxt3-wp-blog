<script lang="ts" setup>
const params = useRoute().params;

useHead({
  title: `${params.slug}`,
  meta: [
    {
      name: "description",
      content: `${params.slug}`,
    },
  ],
});
</script>
<template>
  <section class="container blog py-10 sm:py-16">
    <div class="sm:px-20">
      <h1
        class="blog__title text-3xl sm:text-5xl font-bold text-center leading-snug mb-5"
      >
        How to make a Reusable OTP Input Field with Vue 3 and Tailwind CSS
      </h1>
      <div class="flex mb-10 justify-center gap-5">
        <span>Written by: <span class="text-primary-500">Elon Musk</span></span>

        <span
          >Published on:
          <span class="text-primary-500">12th May 2021</span></span
        >
      </div>
      <div
        class="blog__image h-[250px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-12"
      >
        <img
          src="https://i.ibb.co/mJH7pyX/elon.png"
          alt="How to make a Reusable OTP Input Field with Vue 3 and Tailwind CSS"
          class="absolute w-full h-full object-cover"
        />
      </div>
      <div class="blog__content">
        <p>
          Aut occaecati non consequatur. Illum voluptatem vel numquam esse
          perferendis Tenetur eaque eveniet nisi culpa dolore beatae ab. Et
          consectetur modi veniam laudantium in ipsam. Accusantium ut cupiditate
          vel corrupti modi et. Consequatur sed neque iure quis accusantium sit.
          Quia necessitatibus impedit impedit sed. Nobis quos ut ut possimus
          expedita voluptatum provident. At officia illo nisi rem ut dolorem.
          Voluptatem est molestias doloribus aut sed nemo expedita. Esse ea
          dolorum quos et repellat doloremque magnam. Et mollitia et id ea.
          Dolores sequi occaecati atque porro illo velit perspiciatis. Corrupti
          occaecati est quis et est. Incidunt laborum accusantium temporibus
          omnis minima laboriosam. Voluptatem ab quaerat voluptas ratione ullam
          sed perferendis. Veritatis distinctio dolore minus doloribus sed. Ut
          facere sunt dolores. Voluptatum vel est nobis non minima dicta.
        </p>
        <h2>
          IN FUGIAT ODIT VOLUPTATEM SUNT EUM SED. REPREHENDERIT EX QUAM
          CONSEQUATUR VOLUPTAS QUIA EVENIET
        </h2>
        <p>
          Voluptatem qui sit assumenda assumenda. ut at saepe magnam odit. Sunt
          corporis alias quia cum dolores. Sunt facilis laudantium eligendi
          magni maiores tempora. saepe perspiciatis at totam quis Modi
          cupiditate ex et. Maiores pariatur est ut architecto ut aperiam
          corporis. voluptates aut quisquam. Esse eos qui accusamus. iure nam
          maxime magni soluta assumenda. Cumque omnis ab vel et quasi commodi.
        </p>
        <p>
          Aut occaecati non consequatur. Illum voluptatem vel numquam esse
          perferendis Tenetur eaque eveniet nisi culpa dolore beatae ab. Et
          consectetur modi veniam laudantium in ipsam. Accusantium ut cupiditate
          vel corrupti modi et. Consequatur sed neque iure quis accusantium sit.
          Quia necessitatibus impedit impedit sed. Nobis quos ut ut possimus
          expedita voluptatum provident. At officia illo nisi rem ut dolorem.
          Voluptatem est molestias doloribus aut sed nemo expedita. Esse ea
          dolorum quos et repellat doloremque magnam. Et mollitia et id ea.
          Dolores sequi occaecati atque porro illo velit perspiciatis. Corrupti
          occaecati est quis et est. Incidunt laborum accusantium temporibus
          omnis minima laboriosam. Voluptatem ab quaerat voluptas ratione ullam
          sed perferendis. Veritatis distinctio dolore minus doloribus sed. Ut
          facere sunt dolores. Voluptatum vel est nobis non minima dicta.
        </p>
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
