let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let container = document.getElementById('container');
let eye1 = document.querySelector('.ps1');
let eye2 = document.querySelector('.ps2');
let eye3 = document.querySelector('.ps3')
var see1 = true
var see2 = true
var see3 = true
//获取信息填写不规范提示框
var errortext = document.getElementById('errortext');

signUpButton.addEventListener('click',()=>{
    container.classList.add('right-panel-active')
})
signInButton.addEventListener('click',()=>{
    container.classList.remove('right-panel-active')
})
//登录注册表单验证
window.onload = function(){
    // 给用户名文本框绑定blur事件
    var usernameElt = document.getElementById("username");
    usernameElt.onblur = function(){
        // 获取用户名
        var username = usernameElt.value;
        // 去除前后空白
        username = username.trim();
        // 判断用户名是否为空
        // if(username.length == 0){}
        if(username === ""){
            // 用户名为空
            // usernameElt.style.placeholder.color = 'red'  
            usernameElt.placeholder = "用户名不能为空";
        }else{
            // 用户名不为空
            // 继续判断长度[6-14]
            if(username.length < 2 || username.length > 14){
                // 用户名长度非法
                errortext.innerText = "用户名长度必须在[2-14]之间";
                usernameElt.placeholder = '用户名长度必须在[2-14]之间';
            }else{
                errortext.innerText = "或者用你的QQ进行注册";
                // 用户名长度合法
                // 继续判断是否含有特殊符号
                var regExp = /^[A-Za-z0-9]+$/;
                var ok = regExp.test(username);
                if(ok){
                    // 用户名最终合法
                    errortext.innerText = "或者用你的QQ进行注册";
                }else{
                    // 用户名中含有特殊符号
                    errortext.innerText = "用户名只能由数字和字母组成";
                    usernameElt.placeholder = '用户名只能由数字和字母组成';
                }
            }
        }
    }
    // 给username这个文本框绑定获得焦点事件
    usernameElt.onfocus = function(){
        // 清空非法的value
        if(usernameElt.placeholder = "用户名不能为空"){
            usernameElt.placeholder = "Name";
        }
    }
    // 获取确认密码框对象
    var userpwd2Elt = document.getElementById("userpwd2");
    var userpwd1Elt = document.getElementById('userpwd');
    
    eye1.onclick = function(){
        if(see1){
            userpwd1Elt.type = 'text'
            see1 = false
        }else{
            userpwd1Elt.type = 'password'
            see1 = true
        }
        
    }
    eye2.onclick = function(){
        if(see2){
            userpwd2Elt.type = 'text'
            see2 = false
        }else{
            userpwd2Elt.type = 'password'
            see2 = true
        }
        
    }
    // 绑定blur事件
    userpwd2Elt.onblur = function(){
        // 获取密码和确认密码
        var userpwd = userpwd1Elt.value;
        var userpwd2 = userpwd2Elt.value;
        if(userpwd !== userpwd2){
            // 密码不一致
            errortext.innerText = "密码不一致";
        }else if(userpwd == '' || userpwd2 == ''){
            errortext.innerText = "密码不能为空";
        }else{
            // 密码一致
            errortext.innerText = "或者用你的QQ进行注册";
        }
    }
    userpwd1Elt.onblur = function(){
        // 获取密码和确认密码
        var userpwd = userpwd1Elt.value;
        var userpwd2 = userpwd2Elt.value;
        if(userpwd !== userpwd2){
            // 密码不一致
            errortext.innerText = "密码不一致";
        }else if(userpwd == '' || userpwd2 == ''){
            errortext.innerText = "密码不能为空";
        }else{
            // 密码一致
            errortext.innerText = "或者用你的QQ进行注册";
        }
    }
    // 获取手机号的输入
    var phone = document.getElementById('phone');
    
    phone.onblur  =function(){
        var regExp = new RegExp("^1[3578]\\d{9}$");
        var _value = phone.value;
        if (regExp.test(_value)) {
            errortext.innerText = "或者用你的QQ进行注册";
        } else {
            errortext.innerText = "请输入正确的手机号！";
            phone.placeholder = '请输入正确的手机号！'
        }
    }
    phone.onfocus = function(){
        // 清空非法的value
        if(phone.placeholder = "请输入正确的手机号！"){
            phone.placeholder = "Phone";
        }
    }
    
    // 给提交按钮绑定鼠标单击事件
    var submitBtnElt = document.getElementById("submitBtn");
    var login = document.getElementById('setuser');
    var argen = document.getElementById("argen");
    var lgusername = document.getElementById('lgusername');
    var lguserpasswd = document.getElementById('lguserpasswd');
    // var lguserphone =document.getElementById('lguserphone')
    var logincollect = document.getElementById('logincollect')
    var loginstate
    // function nopost(event){
    //     event.preventDefault();
    // }
    // nopost();
    eye3.onclick = function(){
        if(see3){
            lguserpasswd.type = 'text'
            see3 = false
        }else{
            lguserpasswd.type = 'password'
            see3 = true
        }
        
    }
    lgusername.onfocus = function(){
        logincollect.innerText ='使用你已有的账号'
    }
    submitBtnElt.onclick = function(){
        // 触发username的blur userpwd2的blur email的blur
        // 不需要人工操作,使用纯JS代码触发事件.
        
        usernameElt.focus();
        usernameElt.blur();
        phone.focus();
        phone.blur();
        userpwd1Elt.blur();
        userpwd2Elt.blur();

        // 当所有表单项都是合法的时候,提交表单
        
        if(usernameElt.placeholder == 'Name' && phone.placeholder == 'Phone' && errortext.innerText == "或者用你的QQ进行注册" && userpwd1Elt.value===userpwd2Elt.value && argen.checked){
            //将注册信息保存到localstrage
            const userinfo = {username:usernameElt.value,passwd:userpwd2Elt.value,phone:phone.value}
            localStorage.setItem('userinfo',JSON.stringify(userinfo))
            // console.log(userinfo);
            alert("注册成功啦")
            container.classList.remove('right-panel-active')
        }else if(argen.checked === false){
            // alert("请勾选同意注册协议！")
            errortext.innerText = "请勾选同意注册协议!";
        }else{
            // alert("注册信息填写有误")
            errortext.innerText = "注册信息填写有误";
        }
    }

    //登录验证
    login.onclick = function(){
        const logininfo = {username:lgusername.value,uspasswd:lguserpasswd.value}
        // console.log(logininfo);
        const zaza =  JSON.parse(localStorage.getItem('userinfo')) || false
        if(lgusername.value!==zaza.username || !zaza){
            logincollect.innerText ='用户不存在'
        }else{
            if(logininfo.username===zaza.username && logininfo.uspasswd===zaza.passwd){
                loginstate = true;
                localStorage.setItem('loginstate',JSON.stringify(loginstate))
                alert("登录成功啦！")
                window.location.href = 'index.html'
            }else{  
                loginstate = false;
                localStorage.setItem('loginstate',JSON.stringify(loginstate))
                logincollect.innerText ='密码错误!'
            }
        }
    }
}
