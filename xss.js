const url = "../affil/";
let xml = new XMLHttpRequest();
xml.onreadystatechange = function(){
    if(xml.readyState !== 4) return;
    if(xml.status === 200){
        console.log(btoa(xml.responseText));
    }
}
xml.open("GET",url);
xml.send();
