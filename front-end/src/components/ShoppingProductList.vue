<template>
    <div class=" flex flex-col w-full" v-if="cartItems.length > 0" >
          <div v-for="product in cartItems" :key="product.id"
            class=" flex flex-col p-4">
            <div class=" flex flex-col">
                <div class=" flex justify-between items-center">
                    <div class=" flex">
                        <img :src="product.imageName" class=" h-20 max-w-20 "/>
                        <div class=" flex flex-col justify-evenly">
                            <h3 class=" font-bold text-xl">{{ product.name }}</h3>
                            <p class=" font-semibold">{{ product.price }}</p>
                        </div>
                    </div>
                    <button class=" bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 max-h-fit rounded-md">Remove from Cart</button>
                </div>
                <hr class=" w-full mt-10">
            </div>
          </div>
          <button class=" bg-gray-900 hover:bg-gray-800 text-white w-full py-3 max-h-fit rounded-md">Proceed to Checkout</button>
        </div>
</template>

<script setup>
defineProps({
    cartItems: {
            type: Array,
            default: () => [],
        },
        });
</script>

