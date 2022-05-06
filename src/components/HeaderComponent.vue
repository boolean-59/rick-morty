<template>
  <header class="container">
        <h1 class="text-center my-5">{{ message }}</h1>
    </header>
</template>

<script>

export default {
  name: 'HeaderComponent',
  props: {
    message: String
  }
}
</script>


<style scoped lang="scss">
h1 {
    font-weight: 700;
}

</style>
