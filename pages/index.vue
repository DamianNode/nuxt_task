<template>
  <links>
    <div class="container">
      <p>Hello {{ name }}!</p>
      <NuxtLink class="btn btn-primary" to="/about">
        Go to /about
      </NuxtLink>
      <NuxtLink class="btn btn-primary" to="/contact">
        Go to /contact
      </NuxtLink>
    </div>
  </links>
</template>

<script>
  export default {
    asyncData () {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({ name: 'world' })
        }, 1000)
      })
    }
  }
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
