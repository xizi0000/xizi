<template>
    <ul class="todo-main">
        <transition-group appear name="animate__animated animate__bounce animate__faster	180ms"
            enter-active-class="animate__fadeInDown"
            leave-active-class="animate__fadeOut">
            <done-item v-for="did in todones" :key="did.id" :did="did"></done-item>
        </transition-group>      
    </ul>
</template>

<script>
import DoneItem from './DoneItem.vue'
export default {
    components:{
       DoneItem 
    },
    props:['todones']
    
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
  overflow-y: auto;
}
.todo-main::-webkit-scrollbar{
    display: none;
}
</style>