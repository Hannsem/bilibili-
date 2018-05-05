/**
 * Created by hanji on 2018/4/26.
 */
//---------------------头特效----------------
    var navitem=document.getElementsByClassName('nav-item')
    for(var i=0;i<navitem.length;i++){
        navitem[i].onmouseover=function () {
            this.style.backgroundColor='rgba(255,255,255,.3 )'
        }
        navitem[i].onmouseout=function () {
            this.style.backgroundColor='hsla(0,0%,100%,0)'
        }
    }
    var runimg1=77
    var runimg2=-244
    var runimg=document.getElementsByClassName('i_menu_login')[0].getElementsByClassName('img')[0].getElementsByTagName('img')
    var runimgset= setInterval(function () {
        runimg[0].style.left=runimg1-- +'px'
        runimg[1].style.left=runimg2-- +'px'
        if (runimg1==-320){
            runimg1=320
        }
        if (runimg2==-320){
            runimg2=320
        }
    },10)
    //---------------------头特效结束----------------
//-----------------------------轮播----------------------
var picc=document.getElementById('picc')
var index = 0;
var dots = document.getElementsByClassName("chief-recommend-module")[0].getElementsByClassName('carousel-box')[0].getElementsByClassName('carousel-module')[0].getElementsByClassName('panel')[0].getElementsByClassName('trig')[0].getElementsByTagName('span');
var dots1 = document.getElementsByClassName("chief-recommend-module")[0].getElementsByClassName('carousel-box')[0].getElementsByClassName('carousel-module')[0].getElementsByClassName('panel')[0].getElementsByClassName('title')[0].getElementsByTagName('a');

// dots
// alert(dots.length)

// for(var i = 0, len = dots.length; i < len; i++){
//     dots[i].onclick=function () {
//         picc.style.marginLeft='0'
//         dots[index].className='on'
//     }
// }
function showCurrentDot () {
    for(var i = 0, len = dots.length; i < len; i++){
        dots[i].className = "";
        dots1[i].className = "";
    }
    dots[index].className = "on";
    dots1[index].className = "on";
}
for (var i = 0, len = dots.length; i < len; i++){
    (function(i){
        dots[i].onclick = function () {
            var dis = index - i;
            if(index == 4 && parseInt(picc.style.marginLeft)!==-400){
                dis = dis - 5;
            }
            if(index == 0 && parseInt(picc.style.marginLeft)!== 0){
                dis = 5 + dis;
            }
            picc.style.marginLeft = (parseInt(picc.style.marginLeft) +  dis * 100)+"%";
            index = i;
            showCurrentDot();
        }
    })(i);
}
var lunsun=setInterval(function () {
    var newLeft;
    if(picc.style.marginLeft === "-400%"){
        newLeft = 0;
    }else{
        newLeft = parseInt(picc.style.marginLeft)-100;
    }
    picc.style.marginLeft = newLeft + "%";
    index++;
    if(index > 4){
        index = 0;
    }
    showCurrentDot ()

},3000)

//-----------------------------轮播结束----------------------
//------------------点击切换---------------
var djqh=document.getElementsByClassName('djqh')
var tousanjiao=document.getElementsByClassName('tousanjiao')
tousanjiao[0].onclick=function () {
    tousanjiao[0].classList.add('on')
    tousanjiao[1].classList.remove('on')
    djqh[0].style.display='block'
    djqh[1].style.display='none'
}
tousanjiao[1].onclick=function () {
    tousanjiao[1].classList.add('on')
    tousanjiao[0].classList.remove('on')
    djqh[0].style.display='none'
    djqh[1].style.display='block'
}
//------------------点击切换---------------

//------------------------------头部隐藏窗口-----------------
var playpage_game=document.getElementById('playpage_game')
var playpage_live=document.getElementById('playpage_live')
var playpage_download=document.getElementById('playpage_download')
var iframe=document.getElementsByClassName('i-frame')
var apporcodebox=document.getElementsByClassName('app-orcode-box')
var playpage_contribution=document.getElementById('playpage_contribution')
var upnav=document.getElementsByClassName('up-nav')
var upnavli=upnav[0].getElementsByTagName('li')
var profileinfo=document.getElementsByClassName('profile-info')
var i_menu_login=document.getElementsByClassName('i_menu_login')
var playpage_history=document.getElementById('playpage_history')
var historywnd=document.getElementsByClassName('history-wnd')
var loginbtn=document.getElementsByClassName('login-btn')
playpage_game.onmouseover=function () {
    iframe[0].style.display='block'
    this.style.backgroundColor='rgba(255,255,255,.3 )'
}
playpage_game.onmouseout=function () {
    iframe[0].style.display='none'
    this.style.backgroundColor='hsla(0,0%,100%,0)'
}
iframe[0].onmouseout=function () {
    iframe[0].style.display='none'
}
playpage_live.onmouseover=function () {
    iframe[1].style.display='block'
    this.style.backgroundColor='rgba(255,255,255,.3 )'
}
playpage_live.onmouseout=function () {
    iframe[1].style.display='none'
    this.style.backgroundColor='hsla(0,0%,100%,0)'
}
iframe[1].onmouseout=function () {
    iframe[1].style.display='none'
}
playpage_download.onmouseover=function () {
    apporcodebox[0].style.display='block'
    this.style.backgroundColor='rgba(255,255,255,.3 )'
}
playpage_download.onmouseout=function () {
    apporcodebox[0].style.display='none'
    this.style.backgroundColor='hsla(0,0%,100%,0)'
}
apporcodebox[0].onmouseout=function () {
    apporcodebox[0].style.display='none'
}
playpage_contribution.onmouseover=function () {

    upnav[0].style.display='block'
}
playpage_contribution.onmouseout=function () {

    upnav[0].style.display='none'
}
profileinfo[0].onmouseover=function () {
    i_menu_login[0].style.display='block'
}
profileinfo[0].onmouseout=function () {
    i_menu_login[0].style.display='none'
}
playpage_history.onmouseover=function () {
    historywnd[0].style.display='block'
    this.style.backgroundColor='rgba(255,255,255,.3 )'
}
playpage_history.onmouseout=function () {
    historywnd[0].style.display='none'
    this.style.backgroundColor='hsla(0,0%,100%,0)'
}
loginbtn[0].onmouseover=function () {
    this.style.backgroundColor='#00b5e5'
}
loginbtn[0].onmouseout=function () {
    this.style.backgroundColor='#00a1d6'
}
for(var i=0;i<upnavli.length;i++){
    upnavli[i].onmouseover=function () {
        this.style.backgroundColor='#e5e9ef'
    }
    upnavli[i].onmouseout=function () {
        this.style.backgroundColor='#fff'
    }
}

//------------------------------头部隐藏窗口结束-----------------
var navlist=document.getElementById('nav-list')
var zonewrapmodule=document.getElementsByClassName('zone-wrap-module')
var sortable=navlist.getElementsByTagName('div')
var elevatormodule=document.getElementsByClassName('elevator-module')
var backtop=document.getElementsByClassName('back-top')
var offsetArr = [];
for (var i = 0; i <= zonewrapmodule.length; i++) {
    if(i == 0){
        offsetArr.push(zonewrapmodule[i].offsetTop);
    }else {
        var num = zonewrapmodule[i-1].offsetTop +(zonewrapmodule[i - 1].offsetHeight * 2 / 3)
        offsetArr.push(num);
    }
}
// console.log(offsetArr);
window.onscroll = function () {
    if (window.scrollY>=270){
        elevatormodule[0].style.top='0px'
    }else {
        elevatormodule[0].style.top='230px'
    }
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    for (var i = 1; i < offsetArr.length; i++) {
        sortable[i-1].firstElementChild.className='';

        if(scrollTop < offsetArr[i] && scrollTop >= offsetArr[i - 1] ){
            sortable[i-1].firstElementChild.className='active';
        }
    }
}

    backtop[0].onclick = function () {
        // console.log(this.className)
        var top = 0;
        if(!this.className){
            top = zonewrapmodule[this.index].offsetTop
            for(var j = 0;j < sortable.length - 1; j++){
                var span = sortable[j].firstElementChild;
                span.className = j == this.index ? 'active': ''
            }

        }
        document.documentElement.scrollTop = top;
        document.body.scrollTop = top;
}

//----------------------------------------------------------下载----
var pao=0
var tipsicon=document.getElementsByClassName('app-download')[0].getElementsByClassName('app-tips-icon')
var app=document.getElementById('elevator-mobile-app')
 app.onmouseover=function () {
     tipsicon[0].style.display='block'
   var sapp=setInterval(function () {
        app.style.backgroundPositionX=(pao=pao-80) +'px'
       if (pao==-1200){
           clearInterval(sapp)
           pao=-800
       }
    },50)
}
app.onmouseout=function () {
    tipsicon[0].style.display='none'
   var sapp=setInterval(function () {
        app.style.backgroundPositionX=(pao=pao+80) +'px'
        if (pao==0){
            pao=0
            clearInterval(sapp)
        }
    },50)
}

//----------------------------------------------正在直播-----------------------------------
var tabcon=document.getElementById('tab-con')
var tabitem=document.getElementsByClassName('bili-tab-item')
tabitem[0].onclick=function () {
    tabitem[0].classList.add('on')
    tabitem[1].classList.remove('on')
    tabitem[2].classList.remove('on')
    tabcon.style.marginLeft='0%'
}
tabitem[1].onclick=function () {
    tabitem[1].classList.add('on')
    tabitem[0].classList.remove('on')
    tabitem[2].classList.remove('on')
    tabcon.style.marginLeft='-100%'
}
tabitem[2].onclick=function () {
    tabitem[2].classList.add('on')
    tabitem[1].classList.remove('on')
    tabitem[0].classList.remove('on')
    tabcon.style.marginLeft='-200%'
}
var p=0
var iin=0
var pic=document.getElementById('pic')
var tring=document.getElementsByClassName('qiehuan')[0].getElementsByTagName('span')
var ttl=document.getElementsByClassName('qihuanzi')[0].getElementsByTagName('a')

function showCurrentDot1 () {
    for(var i = 0, len = tring.length; i < len; i++){
        tring[i].className = "";
        ttl[i].className = "";
    }
    tring[iin].className = "on";
    ttl[iin].className = "on";
}
setInterval(function () {
    pic.style.left=(p=p-100)+'%'
        if (p==-100){
        iin=1
        p=100
        }else {
            iin=0
        }
    showCurrentDot1 ()
},3000)
var trg=tring[0].onclick=function () {
    pic.style.left='0%'
    tring[0].classList.add('on')
    tring[1].classList.remove('on')
    ttl[0].classList.add('on')
    ttl[1].classList.remove('on')
}
var trgg=tring[1].onclick=function () {
    pic.style.left='-100%'
    tring[1].classList.add('on')
    tring[0].classList.remove('on')
    ttl[1].classList.add('on')
    ttl[0].classList.remove('on')
}