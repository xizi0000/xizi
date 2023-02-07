//promise用法


//实例化promise对象
let p = new Promise(function(resolve,reject){//f封装异步操作
    setTimeout(()=>{
        let data = '哎呀呀'
        let err = '错啦！'
        resolve(data)
        // reject(err)
    },2000)
});
//p实例的then方法   接受两个参数都为函数  根据封装的异步操作调用resolve和reject决定p.then调用哪个函数
p.then(function(value){
    console.log(value);
},function(reason){
    console.error(reason);
})


// import * as m1 from "./模块化语法.js";
// import {default as con} from "./模块化语法.js"
import con from "./模块化语法.js"

// console.log(con.jiajia());
con.jiajia()

console.log(con.age+1);
// console.log(m1);