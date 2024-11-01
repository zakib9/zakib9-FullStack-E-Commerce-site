<template>
  <div class=" w-2/3 mx-auto mt-10 flex flex-col gap-4 justify-center">
    <h1 class=" font-bold text-4xl">Products</h1>
    <hr class=" my-6">
    
        <ProductList :products="products"/>
      
  </div>
</template>

<script setup>
import { products } from '@/temp-data';
import ProductList from '@/components/ProductList.vue';


</script>

