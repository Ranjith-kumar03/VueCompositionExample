<template>
<Header/>
  <div class="home">
    <div v-if="error">{{error}}</div>
    <div v-if="!posts.length> 0"> Still We are Loading ....</div>
    <div v-else="posts.length> 0"><PostList :posts="posts" /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
export default {
  name: "HomeView",
  components: {PostList},
  setup() {
    const {posts, error, loading,load}= getPosts()
  load()
    return {
      posts, error
    };
  },
};
</script>
