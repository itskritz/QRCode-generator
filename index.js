console.log("js loaded");
var qrcody;

function happy(){
    var ha=["https://youtu.be/AddjMh8-Qsk?si=yHHxCsVByAtLL0Di",
        "https://youtu.be/gMANPF8IgMY?si=e4WgSuEnWxQBVrQ4",
        "https://youtu.be/Hc__v0q4n94?si=wS0ba6xKNUf_-5AK",
        ];
    var num=Math.floor(Math.random()*3);
    makeqr(ha[num]);
}
function cooked(){
    var ha=["https://youtu.be/lZerGzImshA?si=hgd0dqy8ULpMAU3G","https://youtu.be/RBkSbGVFQpY?si=8nPVc4AjTB9SHfwR","https://youtu.be/KCqQknk42sk?si=3OF8GufGlnQLmnsg"];
 var num=Math.floor(Math.random()*3);
    makeqr(ha[num]);
}
function side(){
 var ha=["https://youtu.be/5neQXJhOOLU?si=VuQXhwfiiDuENb0j","https://youtu.be/wmqitUd1y_o?si=dHvpZJa6cTPvbZnz","https://youtu.be/gVUCS9fpESM?si=3UgdZjRR8T4H2p8_"];
 var num=Math.floor(Math.random()*3);
    makeqr(ha[num]);
}
function fah(){
   var ha=["https://youtu.be/_P5vR9pz5Hc?si=_qE89rzIbS47j1UO","https://youtu.be/8On78J3vLr4?si=DZNBTA-1gVaW-B6T","https://youtu.be/EA4DipdhpV8?si=8Kq_nyNMT8Sv72BS"];
 var num=Math.floor(Math.random()*3);
    makeqr(ha[num]);  
}
function rizz(){
 var ha=["https://youtu.be/ehz3EdRhdkw?si=YAW6tc0eiPHj9pBv","https://youtu.be/2Y_77ZEq630?si=LfJFNfYulmXnVtXJ","https://youtu.be/i7P3Nb4B5es?si=eJwJ-34tTTqYuTb5"];
 var num=Math.floor(Math.random()*3);
    makeqr(ha[num]);
}
function rage(){
   var ha=["https://youtu.be/xj4kYVSOhyA?si=ye4k_Bg5AmjRU9-x","https://youtu.be/cFfILqbRYNU?si=bG-_vONVrU0CAfjE","https://youtu.be/1NOuOpVpfvs?si=97djoBf0-Y6fZ6x2"];
 var num=Math.floor(Math.random()*3);
    makeqr(ha[num]);  
}
function aura(){
   var ha=["https://youtu.be/WgxPOnwPWQ4?si=OsSp5l_9Wgr176CZ","https://youtu.be/EhXDEijkPhk?si=cRDGLg9Zj-lVgd47","https://youtu.be/zM6pRnMbFy0?si=N4PNR1l67GwqLLF0"];
 var num=Math.floor(Math.random()*3);
    makeqr(ha[num]);  
}
function cringe(){
   var ha=["https://youtu.be/Sozu9_YWKRk?si=bQgmhJvK020HqbtJ","https://youtu.be/LvreRLglIBg?si=1aHN2nSnbINX41Xa","https://youtu.be/SWkMYO9V_-k?si=ZmHRtP05qdXvzfNh"];
 var num=Math.floor(Math.random()*3);
    makeqr(ha[num]);  
}

function makeqr(link){

    const container=document.querySelector(".qrcode");
    container.innerHTML="";
    qrcody=new QRCode(container,{
        text:link,
        width:200,
        height:200,
    })
    const msg=document.getElementById("scroll");
    msg.style.display="block";
    setTimeout(()=>{
        msg.style.display="none";
    },3000);
}