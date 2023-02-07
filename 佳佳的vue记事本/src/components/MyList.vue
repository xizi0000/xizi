<template>
    <ul class="todo-main">
            <transition-group appear name="animate__animated animate__bounce animate__faster	180ms"
                enter-active-class="animate__fadeInDown"
                leave-active-class="animate__fadeOut">
                <item v-for="todo in todos" :key="todo.id" :todoObj='todo'></item>
            </transition-group> 
    </ul>  
</template>

<script>
import Item from './Item.vue'
export default {
    components:{
       Item 
    },
    props:['todos']
    
}
</script>
    
<style scoped>
/*main*/
.todo-main {
  margin: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
  max-height: 220px;
  width: 576px;
  overflow-y: auto;
}
.todo-main::-webkit-scrollbar{
    display: none;
}
</style>