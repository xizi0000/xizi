<template>
    <div class="todo-footer" v-show="allTodo>0">
        <label>
          <input type="checkbox" :checked="isAll" @click="selectAll"/>
        </label>
        <span><span>已完成{{todones.length}}</span>/ 全部{{allTodo}}</span>
        <button class="btn btn-danger" @click="cleanAll">清空选中任务</button>
        <button class="btn btn-danger" @click="cleanAllDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    data(){
      return{
        chackall:''
      }
    },
    props:['todos','todones','checkedAllTodo','cleanAllTodo','clearAll'],
    computed:{
        allTodo(){
            return this.todos.length + this.todones.length;
        },
        // theAlltodo(){
        //     // 遍历实现统计已完成todo总数
        //     // let i = 0;
        //     // this.todos.forEach((todo) => {
        //     //     if(todo.done==true) i++;
        //     // });
        //     // return i
            
        //     // 更高端的实现方法，使用数组的reduce统计方法
        //     return this.todos.reduce((pre,current)=>{
        //         return pre + (current.done ? 1:0)
        //     },0)

        //     // 使用filter过滤 已完成的todo，返回完成的数量
        //     // return this.todos.filter((todo)=>{
        //     //     return todo.done==true
        //     // }).length
            
        // },
        isAll(){
            return this.todones.length===this.allTodo&&this.allTodo>0
        }
    },
    methods:{
        // 通过事件捕获获取选中状态，值为true or false
        selectAll(event){
            this.checkedAllTodo(event.target.checked)
            this.chackall = event.target.checked.toString();
        },
        cleanAllDone(){
            // 父子组件通过父亲传一个函数过来进行参数传递或者调用父亲方法
            this.cleanAllTodo()
        },
        cleanAll(){
          this.clearAll()
        }
    }
    
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
  width: 20px;
  height: 20px;
}

.todo-footer span,label{
    float: left;
}

.todo-footer button {
  float: right;
  margin: 5px;
  width: 110px;
  font-size: 10px;
}
</style>