const url = "http://127.0.0.1:7777/";
let xml = new XMLHttpRequest();
xml.onreadystatechange = function(){
    if(xml.readyState !== 4) return;
    if(xml.status === 200){
        console.log(btoa(xml.responseText));
    }
}
xml.open("GET",url);
xml.withCredentials = true;
xml.send();
