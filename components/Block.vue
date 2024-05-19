<template>
    <CoreParagraph v-if="block.name === 'core/paragraph'" :block="block"/>
    <CoreImage v-if="block.name === 'core/image'" :block="block"/>
    </template>
    
    <script setup>
    const props = defineProps({
        block: Object
    })
    
    
    </script>