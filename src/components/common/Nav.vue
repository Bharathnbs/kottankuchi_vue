<template>
    <div>
        <div class="w-100 h-14 bg-slate-300">
            <img class="h-10" src="../../assets/logo/brand_logo.png" alt="Brand Logo">
            <div>
                <ul class="flex">
                    <li><router-link :to="{name: 'LandingPage'}">Home</router-link></li>
                    <li><router-link :to="{name: 'ProductsPage'}">Products</router-link></li>
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