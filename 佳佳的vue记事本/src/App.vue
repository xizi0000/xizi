<template>
  <div id="app">
  <h2>西子记事本</h2>
  <div class="todo-container">
    <div class="todo-wrap">
      <my-header @fromlist="getlist"></my-header>
      <div class="title">新建事项</div>
      <my-list :todos="todos"></my-list>
      <div class="title">已完成的</div>
      <my-done  :todones="todones"></my-done>
      <my-footer
       :todos="todos"
       :todones="todones"
       :checkedAllTodo="checkedAllTodo" 
       :cleanAllTodo="cleanAllTodo"
       :clearAll="clearAll">
      </my-footer>
    </div>
  </div>
</div>
</template>

<script>

import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyDone from './components/MyDone.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyDone,
    MyFooter
  },
  data(){
        return{
          // 初始化数据，从localStorage中读取数据并使用JSON解析成对象形式，如果没有数据给后面的初始数据
            todos:JSON.parse(localStorage.getItem('todos')) || [
                {id:'001',title:'学习',done:false,isEdit:false},
                {id:'002',title:'摸鱼',done:false,isEdit:false},
                {id:'003',title:'原神',done:false,isEdit:false},
                {id:'005',title:'山峰不会亲吻晚霞，即使他们曾无比接近过，而那之间确是我们看不到的远隔重山。',done:false,isEdit:false},
                {id:'004',title:'emo',done:false,isEdit:false}
            ],
            todones:JSON.parse(localStorage.getItem('todones')) || []
        }
  },
  methods:{
    // 添加一个todo
    getlist(todoObj){
      let dif = this.todos.filter(todo  => todo.title==todoObj.title)//过滤一遍数组返回一个和新添加的todo一样的数组
      //空数组通过Number()方法转化的结果为0
      if(Number(dif)==0){
        this.todos.unshift(todoObj);
      }else{alert("不能重复添加一个一样的代办事情!")} 
    },
    // 勾选or取消一个todo
    checkTodo(itemid){
      this.todos.forEach((todo)=>{
        if(todo.id===itemid)  todo.done=!todo.done;
      }) 
    console.log(this.todos);
    console.log(this.todones);
    },
    //添加到已完成
    movetodid(id){
      for(let i in this.todos){//fo in遍历返回一个key，可以当下标使用
        if(this.todos[i].id===id){
          this.todos[i].done=true
          this.todones.unshift(this.todos[i]);
          this.todos.splice(i,1)
        }
        // this.todos = this.todos.filter((todo)=>{
        //     return todo.done!=true
        //   })
      }
    },
    //移回未完成
    movetotodo(item2id){
      for(let f of this.todones){//fo of遍历返回一个value值
        if(f.id===item2id){
          f.done=!f.done;
          this.todos.push(f);
          // this.todones.splice(f,1);
        }
        this.todones = this.todones.filter(todo => todo.done===true)
      }
      console.log(this.todos);
      console.log(this.todones);
    },
    // 编辑一个todo
    editTitle(edid,nval){
        this.todos.forEach((todo)=>{
        if(todo.id===edid)  {
          todo.title = nval
        }
      })
        this.todones.forEach((todone)=>{
        if(todone.id===edid)  {
          todone.title = nval
        }
      })
    },
    //退出or进入编辑状态
    exitEdit(exit){
      this.todos.forEach((todo)=>{
        if(todo.id===exit)  {
             todo.isEdit =!todo.isEdit;
          }
      })
      this.todones.forEach((todo)=>{
        if(todo.id===exit)  {
             todo.isEdit =!todo.isEdit;
          }
      })
    },
    // 删除一个todo
    deleteTodo(delid){
      this.todos = this.todos.filter((todo)=>{
        return todo.id != delid
      })
      this.todones = this.todones.filter((todo)=>{
        return todo.id != delid
      })
    },
    // 全选或全取消全部的todo
    checkedAllTodo(allselect){
      this.todos.forEach((todo)=>{
        todo.done = allselect
      })
    },
    // 清楚所有已完成的todo
    cleanAllTodo(){
      this.todones=[];
    },
    //清楚有选中的todo
    clearAll(){
      this.todos = this.todos.filter(todo => todo.done!=true)
      // if(can=='true'){
        // this.todos=[];
      this.todones=[];
      // }else{alert("全选才能删除所有")}
    }
  },
  watch:{
    // 监测添加的todo变化，实时更新localStorage中的数据
    todos:{
      deep:true,//深度监视
      handler(val){
        localStorage.setItem('todos',JSON.stringify(val))//把新加的todo做数据持久化处理
      }
    },
      todones:{
      deep:true,//深度监视
      handler(value){
        localStorage.setItem('todones',JSON.stringify(value))//把新加的todo做数据持久化处理
      }
    }
  },
  mounted(){
    // 绑定事件总线的自定义事件
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteTodo)
    this.$bus.$on('movetotodo',this.movetotodo)
    this.$bus.$on('movetodid',this.movetodid)
    // 爷爷给孙子传东西
    this.$bus.$emit('ftoer',this.todos)
    this.$bus.$on('editTitle',this.editTitle)
    this.$bus.$on('exitEdit',this.exitEdit)
  },
  beforDestroy(){
    // 在销毁之前解绑事件
    this.$bus.$off(['checkTodo','deleteTodo','movetotodo','movetodid','editTitle','exitEdit'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*base*/
body {
  background: #fff;
}
.title{
  margin: 6px auto;
  color: white;
  font-size: 18px;
  width: 100%;
  height: 18px;
  line-height: 18px;
  vertical-align: middle;
  text-align: left;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
}
.btn-edit{
   color: #fff;
  background-color: #66A9C9;
  border: 1px solid #eee;
}
.btn-danger {
  color: #fff;
  background-color: #EE3F4D;
  border: 1px solid #eee;
}
.btn-edit:hover{
  color: #fff;
  background-color: #1781B5;
}
.btn-danger:hover {
  color: #fff;
  background-color: #C21F30;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
  border-radius: 5px;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #C4CBCF;
}
</style>
