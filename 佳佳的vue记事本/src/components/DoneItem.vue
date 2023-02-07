<template>
    <li>
        <label>
        <input type="checkbox" :checked="did.done" @change="handlerCheck"/>
        <span v-show="!did.isEdit">{{did.title}}</span>
        <transition appear name="animate__animated animate__bounce"
            enter-active-class="animate__backInLeft" 
            leave-active-class="animate__backOutUp">
            <input class="edx" type="text" 
            :value="did.title"
            v-show="did.isEdit"
            @keyup.enter='simplesave(did,$event)'
            ref="inputFocus" 
            @blur="saveValue($event)">
        </transition>
        </label>
        <transition appear name="animate__animated animate__bounce"
            enter-active-class="animate__bounceInUp"
            leave-active-class="animate__bounce ">
            <div class="confirm" v-show="did.isEdit">
            <span><svg @click="save(did)" t="1666614634165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7122" width="200" height="200"><path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m197.7 424.4L492 642c-11.7 11.7-30.7 11.7-42.4 0-0.2-0.2-0.3-0.3-0.4-0.5-0.2-0.1-0.3-0.3-0.5-0.4L314.3 506.8c-11.7-11.7-11.7-30.7 0-42.4s30.7-11.7 42.4 0l114 114L667.2 382c11.7-11.7 30.7-11.7 42.4 0 11.8 11.7 11.8 30.7 0.1 42.4z" fill="#448BFB" p-id="7123"></path></svg></span>
            <span><svg @click="noCan(did)" t="1666583765677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15595" width="200" height="200"><path d="M512 2C235.1 2 2 235.1 2 512s233.1 510 510 510 510-233.1 510-510S788.9 2 512 2z m218.8 655.9c21.9 21.9 21.9 51 0 65.8-21.9 21.9-51 21.9-65.8 0L519.1 577.8l-153 153c-21.9 21.9-51 21.9-72.9 0s-21.9-58.1 0-72.9l153-153L300.9 359c-21.9-14.8-21.9-43.9 0-65.8s51-21.9 65.8 0L512 439.1l153-153c21.9-21.9 51-21.9 72.9 0s21.9 51 0 72.9l-153 153 145.9 145.9z" fill="#FF0000" p-id="15596"></path></svg></span>
        </div>
        </transition>
        <button ref="bianji" v-show="!did.isEdit" class="btn btn-edit btn1" @click="handlerEdit(did)">编辑</button>
        <button class="btn btn-danger btn2" @click="handlerDelete(did.done)">删除</button>
    </li>
</template>

<script>
import 'animate.css'
export default {
    name:'DoneItem',
    data(){
        return{
            yeye:[],
            editValue:''
        }
    },
    props:['did'],
    methods:{
         handlerCheck(){
            // 触发checkTodo自定义事件，实现通过全局事件总线传数据
            this.$bus.$emit('movetotodo',this.did.id)
        },
        handlerDelete(done){
            // if(confirm("确定要删除嘛?")){
                // (done===false)?  alert('勾选了才能删除'):
                this.$bus.$emit('deleteTodo',this.did.id)
            // }
        },
        //开启编辑模式
        handlerEdit(did){
            this.$bus.$emit('exitEdit',did.id)
            this.$nextTick(function(){
                this.$refs.inputFocus.focus()
            })
        },
        //失去焦点时保存新编辑的内容
        saveValue(e){
            this.editValue=e.target.value;
            console.log(this.editValue);
        },
        //修改新编辑的内容
        save(todo){
            if(!(this.editValue.trim())) return alert("不能编辑成空的不然她会生气的");
            this.$bus.$emit('exitEdit',todo.id)
            this.$bus.$emit('editTitle',todo.id,this.editValue)
                // this.$refs.bianji.style.display = 'block'
        },
        //回车保存修改
        simplesave(todo,e){
            this.editValue=e.target.value;
            if(!(this.editValue.trim())) return alert("不能编辑成空的不然她会生气的");
            this.$bus.$emit('editTitle',todo.id,this.editValue)
            setTimeout(()=>{
                this.$bus.$emit('exitEdit',todo.id)
            })
        }
        ,
        //取消编辑并复原本来数据
        noCan(todo){
            this.$bus.$emit('exitEdit',todo.id)
            this.editValue=todo.title;
        }
    },
    beforeMount(){
        this.$bus.$on('ftoer',(za)=>{
            this.yeye = za
            console.log('@爷爷给我东西了',this.yeye);
        })
    }
   
}
</script>

<style scoped>
/*item*/
li {
    display: flex;
    align-items: center;
    position: relative;
    list-style: none;
    min-height: 36px;
    /* max-height: 360px; */
    line-height: 36px;
    border-radius: 5px;
    padding: 0 5px;
    font-size: 18px;
    margin: 2px auto;
    overflow: hidden;
    text-align:start;
    text-overflow: ellipsis;
    white-space: normal;
    border: 1px solid #eee;
    transition: all 0.25s linear;
}

li label {
  float: left;
  cursor: pointer;
  padding: 0 3px;
}

li label input:nth-child(1) {
  vertical-align: middle;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  position: relative;
  top: -1px;
}
li .confirm{
    position: absolute;
    right: 66px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto 0;
    width: 76px;
    height: 36px;
    /* background: skyblue; */
}
li .confirm span svg,li .addspan svg{
    width: 30px;
    height: 30px;
    line-height: 30px;
}
li .confirm span,.addspan{
    width: 30px;
    height: 30px;
    line-height: 30px;
}
li .edx{
    /* height: 80px; */
    line-height: 32px;
    white-space: wrap;
    margin: auto 6px;
    background: aliceblue;
    border-radius: 5px;
    font-size: 18px;
    /* border-style: none; */
    border: 0.5px solid #666666;
    width: 350px;
}
li .btn1{
    position: absolute;
  right: 70px;
  display: none;
  /* margin-top: 3px; */
  margin: auto 1px;
}

li .btn2 {
  position: absolute;
  right: 6px;
  display: none;
  /* margin-top: 3px; */
  margin: auto 1px;
}
li .addspan{
    position: absolute;
    right: 135px;
    display: none;
}
li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
    background: #eee;
}
li:hover button{
    display: block;
}
li:hover .addspan{
    display: block;
}
</style>