import {ref} from 'vue'
const getPosts = () => {
    const posts = ref([]);
    const error = ref(null)
    const loading = ref(false)
   const load = async ()=>{
      try {
        loading.value=true;
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")
         if(data.ok)
         {
          posts.value = await data.json()
          loading.value=false
         }else{
          throw Error("No Data Available")
         }
      } catch (err) {
        error.value = err.message
        loading.value=false
        console.log( error.value)
      }
    }
    

    return {posts, error, loading, load}
}

export default getPosts