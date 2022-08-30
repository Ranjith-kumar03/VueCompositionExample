import {ref} from 'vue'

const getPostById = (id) => {
    const post = ref({});
    const error = ref(null)
    const loading = ref(false)
   const load = async (id)=>{
      try {
        loading.value=true;
        let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         if(data.ok)
         {
          post.value = await data.json()
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
    

    return {post, error, loading, load}
}


export default getPostById