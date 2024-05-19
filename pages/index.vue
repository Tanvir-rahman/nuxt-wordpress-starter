<template>
  <div>
    <TheHeader/>
    <div class="container mx-auto p-6">
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-if="error" class="text-center text-red-500">An error occurred: {{ error.message }}</div>
      <div v-if="!loading && !error">
        <div class="space-y-8">
          <Post v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QUERY_ALL_POSTS } from '~/data/posts'

const { data, loading, error } = await useAsyncQuery(QUERY_ALL_POSTS)
const posts = data.value ? data.value.posts.nodes : []

</script>

<style scoped>
/* Add any scoped styles here */
</style>

