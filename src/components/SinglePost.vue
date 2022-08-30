<template>
<router-link :to="{ name: 'details', params:{id:post.id}}">
<h3>{{post.title}}</h3>
  <p>{{snippet}}</p>
  </router-link>
</template>


<script>
import { computed } from '@vue/runtime-core'



export default {
props:['post'],
setup(props)
{
     console.log("see props body",props.post.body.substring(0,4)+ '....')
    const snippet = computed(()=>{
       
        return props.post.body.substring(0,10)+ '....'
    })

    return{
        snippet
    }
}

}
</script>

<style>

</style>