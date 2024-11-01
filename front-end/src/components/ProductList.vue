<template>
    <div class="  grid grid-cols-3 gap-6 items-center  mb-10">
      <div v-for="product in products" :key="product.id" class=" flex flex-col gap-4 bg-white rounded-md shadow-lg p-8 items-center justify-center">
        <img :src="product.imageName" class=" "/>
        <h3 class=" font-bold text-xl">{{ product.name }}</h3>
        <p class=" font-semibold">{{ product.price }}</p>
        <router-link class=" w-full" :to="'/products/' + product.id"><button class=" bg-gray-900 hover:bg-gray-800 text-white w-full py-2 text-lg rounded-md">View Details</button></router-link>
      </div>
    </div>
</template>

<script setup>


 defineProps({
        products: {
            type: Array,
            default: () => [],
        },
        });

</script>

