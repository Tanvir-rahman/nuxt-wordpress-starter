<template>
    <NuxtLink :to='post.uri' class="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <!-- <div class="flex items-center mb-4">
        <img :src="post.author.avatar.url" alt="Author's avatar" class="w-10 h-10 rounded-full mr-3" />
        <div>
          <p class="text-sm font-semibold">{{ post.author.name }}</p>
          <p class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString() }}</p>
        </div>
      </div> -->
      <h2 class="text-2xl font-semibold mb-2">{{ post.title }}</h2>
      <p class="text-gray-700 mb-4">{{ post.excerpt }}</p>
    </NuxtLink>
  </template>
  
  <script setup>
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  /* Add any additional scoped styles here */
  </style>
  