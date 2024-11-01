<template>
    <div class=" w-full min-h-fit flex justify-between items-center px-20">
        <router-link to="/products"><img :src="logo" alt="logo" class=" absolute top-8 h-32 w-32"></router-link>
        <router-link to="/cart"><button class=" bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 max-h-fit rounded-md">Shopping Cart</button></router-link>
    </div>
</template>

<script setup>
import logo from "@/assets/logo-hexagon.svg"
</script>

