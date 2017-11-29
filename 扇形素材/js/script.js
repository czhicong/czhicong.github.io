//window.onload=function(){};页面加载完成触发一些事件
window.onload = function () {
    var li = document.querySelectorAll("#nav li");
    var on = true;
    //li.length-1  li长度减一
    li[li.length - 1].onclick = function () {
        for (var i = 0; i < li.length; i++) {
            var n = i - li.length / 2;
            if (on) {
                n = n * 15;
            } else {
                n = 360
            }

            li[i].style.transform = "rotateZ(" + n + "deg)";

        }
        on = !on;
    };
//单个
    for (var p = 0; p < li.length - 1; p++) {
        li[p].index=p;//index通过自定义属性定义下标值
        li[p].onclick = function () {
            //当前点击的导航旋转至零度；
           this.style.transform="rotate(0deg)";
            //当前点击的导航的左边导航依次旋转；
            var left=0;
           for(var y=this.index-1;y>=0;y--){
               var left=left-15;
               li[y].style.transform="rotate("+left+"deg)"
           }
            //当前点击的导航的右边导航依次旋转；
            var right=15;
            for(var t=this.index+1;t<li.length;t++){
                var right=right+15;
                li[t].style.transform="rotate("+right+"deg)"
            }

        }
    }
};
