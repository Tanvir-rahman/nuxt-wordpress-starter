<template>
    <p v-html="block.attributes.content"/>
   </template>
   
   <script setup>
   const props = defineProps({
       block: Object
   })
   
   </script>
   
   <style >
   
   a {
       color: blue;
       text-decoration: underline;
   }
   
   </style>