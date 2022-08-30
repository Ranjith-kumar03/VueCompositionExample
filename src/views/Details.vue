<template>
 <div class="details">
    <div v-if="error">{{error}}</div>
    <div v-if="loading"> Still We are Loading ....</div>
    <div v-else="!loading">
      <h1>{{post.body}}</h1>
      <p>{{post.title}}</p>
    </div>
  </div>
</template>

<script>
import getPostById from '../composables/getPostById'
export default {
  name:"details",
props:['id'],
setup(props)
{
 const {post, error, loading,load}= getPostById()
 load(props.id)
  return{post, error, loading}
}
}
</script>

<style>

</style>