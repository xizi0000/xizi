//const常量，对于数组和对象保存的值是引用地址（指针）,所以任然可以修改const定义的数组或对象的属性
const p =['a','b','b']

p.push('d')

console.log(p);
//解构赋值语法
const jgfz = {
    name:'嘿嘿',
    age:18,
    dsh:function(){
        console.log("male");
    }
};

let {heihei,nianl,haha} = jgfz;

console.log(heihei);
console.log(nianl);
console.log(haha);
jgfz.dsh();

 //js的构造函数
let Person = function(name,age){
    this.name = name;
    this.age = age;
}

let me = new Person('xiao',18)

console.log(me);

function fa(){
    return 18;
}

console.log(fa());
//rest参数
function fa(a,b,c,...argu){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(argu);
}
fa(1,2,3,4,5,6,7,)//rest参数接收实参，...rest要写在最后一个参数，他是一个数组
//拓展运算符（展开），把一个数组展开成参数序列，
const wyj = ['at','heihei','aiya'];
const kelong = [...wyj];//克隆数组   如果里面元素有引用数据类型是浅拷贝
console.log(kelong);

const divs = document.querySelectorAll('.a')
const divarr = [...divs];
console.log(divarr);

//js7种数据类型   USONB
// u  undefined
// s  String Symbol
// o  Object
// n  null
// b  Boolean

//fo in 和fo of遍历区别
//自定义迭代器
const banji = {
    name:'文',
    stus:[
        '阿哥',
        '小南',
        '啊千'
    ],
    [Symbol.iterator](){//往对象身上添加一个迭代器属性值为一个函数
        let index = 0
        return{//里面返回一个next()函数
            next:() =>{
                if(index<this.stus.length){//控制遍历次数
                    const result = {value:this.stus[index],done:false}
                    index++
                    return result//next()方法里返回一个对象，里面包括value和done
                }else{
                    return {value:undefined,done:true}
                }
            }
        } 
    }
}
//有了自定义的迭代器就可以使用for 遍历数组了
for (const i of banji) {
    console.log(i);
}
