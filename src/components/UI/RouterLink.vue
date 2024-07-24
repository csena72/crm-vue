<script setup>
    import { RouterLink } from 'vue-router'

    defineProps({
        to: {
            type: String,
            required: true
        }
    })

</script>

<template>
    <RouterLink 
        :to="{ name: to}" 
        class="
            block md:inline-block 
            rounded 
            bg-blue-500
            text-white
            text-sm
            uppercase
            shadow
            px-3 
            py-2 
            md:mr-2 
            cursor-pointer
            font-bold
            hover:bg-blue-600
            hover:text-white
            hover:shadow
            transition
            duration-300
            ease-in-out"
    >
        <slot></slot> 
    </RouterLink>
</template>


