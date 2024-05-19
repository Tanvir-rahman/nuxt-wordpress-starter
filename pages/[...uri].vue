<template>
    <div>
      <TheHeader/>
      <main class="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
        <div v-if="loading">Loading...</div>
        <div v-if="error">An error occurred: {{ error.message }}</div>
        <div v-if="data && data.nodeByUri">
          <h1 class="text-4xl">{{ data.nodeByUri.title }}</h1>
          <p class="text-lg text-gray-600">{{ data.nodeByUri.yoastSeoMetaDesc }}</p>
          <div class="text-2xl mt-4">{{ new Date(data.nodeByUri.date).toLocaleDateString() }}</div>
          <article class="mt-4 space-y-2" v-html="data.nodeByUri.content"/>
        </div>
        <div v-if="!loading && !error && !data.nodeByUri">Post not found</div>
      </main>
    </div>
  </template>
  
  <script setup>
  
  const route = useRoute()
  const uri = route.params.uri.join('/')
  
  const query = gql`
    query getPostByUri($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Post {
          id
          title
          date
          content
          yoastSeoTitle
          yoastSeoMetaDesc
        }
      }
    }
  `
  
  const variables = { uri }
  const { data, loading, error } = await useAsyncQuery(query, variables)
  
  if (data && data.nodeByUri) {
    useHead({
      title: data.nodeByUri.yoastSeoTitle || data.nodeByUri.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: data.nodeByUri.yoastSeoMetaDesc || 'Default meta description',
        },
      ],
    })
  }
  </script>
  