function Nhapgiatri(a){
    var mydiv = document.getElementById("hienthi");
    mydiv.appendChild(document.createTextNode(a));
}
function tinhtoan(){
    var mydiv = document.getElementById("hienthi").innerHTML;
    var result=eval(mydiv);
    document.getElementById("hienthi").innerHTML=result;
}
function xoa(){
    document.getElementById("hienthi").innerHTML="";
}