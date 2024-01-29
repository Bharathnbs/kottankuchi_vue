<template>
  <div>
    <NavBarSection /> 
    <RouterView></RouterView>
  </div>
</template>

<script>
import NavBarSection from '../src/components/common/Nav.vue';

export default{
  name:'app',
  components:{ NavBarSection },
}
</script>