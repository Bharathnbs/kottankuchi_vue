<template>
    <div>
        <div class="flex bg-white w-100 h-14">

            <div class="md:w-48 md:h-full">
                <img class="h-10 my-2" src="../../assets/logo/brand_logo.png" alt="Brand Logo">
            </div>
            <div class="hidden md:inline-block md:w-full md:h-full">
                <ul class="flex justify-center my-4">
                    <li class="mx-8"><router-link :to="{name: 'LandingPage'}">Home</router-link></li>
                    <li class="mx-8"><router-link :to="{name: 'ProductsPage'}">Products</router-link></li>
                    <li class="mx-8"><router-link :to="{name: 'ProductsPage'}">Products</router-link></li>
                    <li class="mx-8"><router-link :to="{name: 'ProductsPage'}">Products</router-link></li>
                    <li class="mx-8"><router-link :to="{name: 'ProductsPage'}">Products</router-link></li>
                    <li class="mx-8"><router-link :to="{name: 'ProductsPage'}">Products</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'NavBarSection',
}
</script>