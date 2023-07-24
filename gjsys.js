document.body.getElementsByTagName("frame")[2].onload = function(){
    change();
}
function change(){
    let frame = document.getElementById("idForChangeMenu").getElementsByTagName("frame")[1].contentWindow;
    frame.document.getElementsByClassName("seiseki")[3].getElementsByTagName("td")[2].innerHTML="4.0000";
    let c = frame.document.getElementsByClassName("normal")[0].getElementsByTagName("td");
    for(i=1;i<=c.length/11;i++){
        c[11*i-1].innerHTML = "合";
        c[11*i-2].innerHTML = "秀";
    }
}