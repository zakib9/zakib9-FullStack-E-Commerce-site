<template>
     <div v-if="product" class=" flex flex-col gap-4 w-1/2 mx-auto items-center justify-center py-10">
        <img :src="product.imageName" class=" w-96 "/>
        <div class=" flex justify-between items-center w-full">
            <h3 class=" font-bold text-3xl">{{ product.name }}</h3>
            <p class=" font-semibold text-xl">{{ product.price }}</p>
        </div>
        <hr class="my-4 h-px w-full bg-black">
        <button class=" bg-gray-900 hover:bg-gray-800
         text-white w-full py-2 text-xl rounded-md">Add to cart</button>
      </div>
      <div v-else class=" flex justify-center items-center h-full w-full">
        <NotFoundPage/>
      </div>
</template>

<script setup>
import { products } from '@/temp-data';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import NotFoundPage from './NotFoundPage.vue';
    const product = ref(null)
        product.value = products.find(product => product.id === useRoute().params.productId)
</script>

