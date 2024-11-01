<template>
   
       <div class=" w-2/3 mx-auto mt-10 flex flex-col gap-4 justify-center" >
        <h1 class=" font-bold text-4xl">Shopping Cart</h1>
        <hr class=" my-6">
        
        <ShoppingProductList :cartItems="cartItems" />
        <div v-if="cartItems.length === 0" class=" text-xl flex justify-center">
            You current have no items
        </div>
    </div>
        
   
</template>

<script setup>
import ShoppingProductList from '@/components/ShoppingProductList.vue';
import { cartItems } from '@/temp-data';



</script>

