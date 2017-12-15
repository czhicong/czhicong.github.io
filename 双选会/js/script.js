var swiper = new Swiper('.swiper-container', {
    loop : true,
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable:false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
});
//音频标签
var mp3 = document.querySelector("#mp3");

//音乐按钮
var mp3Btn = document.querySelector("#mp3Btn");

//暂停音乐按钮
//mp3Btn.style.animationPlayState = 'paused'
//旋转音乐按钮
//mp3Btn.style.animationPlayState = 'running'

mp3Btn.onclick = function () {
    if (mp3.paused) {
        //开始旋转
        mp3Btn.style.animationPlayState = 'running';
        //开始音频
        mp3.play();
    } else {
        //暂停旋转
        mp3Btn.style.animationPlayState = 'paused';
        //暂停音频
        mp3.pause();
    }
};



var canvas=document.querySelector('canvas');
var ctx=canvas.getContext("2d");
var width=600;
var height=400;
var colorArr=["yellow","blue","orange","red","green"];
var textArr=[
    "web前段工程师web前段工程师",
    "web前段工程师jquery",
    "web前段工程师javascript",
    "vue.js",
    "php",
    "bootstarp",
    "web前段工程师",
    "jquery",
    "javascript",
    "web前段工程师web前段工程师vue.js",
    "web前段工程师web前段工程师php",
    "web前段工程师web前段工程师bootstarp",
    "web前段工程师",
    "web前段工程师web前段工程师jquery"
];
canvas.width=width;
canvas.height=height;
var image=new Image();

ctx.font = "20px Courier New";
var numArrL=[80,10,0,30,50,43];//初始的X
var numArrT=[80,100,20,300,380,210];//初始的Y
setInterval(function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    for(var j=0;j<textArr.length;j++){
        numArrL[j]-=(j+10)*0.2;
        ctx.fillStyle = colorArr[j];
        ctx.fillText(textArr[j],numArrL[j],numArrT[j]);
    }
    for(var i=0;i<textArr.length;i++){
        if(numArrL[i]<=-200){
            numArrL[i]=canvas.width;
        }
    }
    ctx.restore();
},20);

