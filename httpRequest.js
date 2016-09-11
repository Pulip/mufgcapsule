var httpRequest=null
function getXMLHttpRequest() {
  if(window.ActiveXObject) {
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("MicrosoftXMLHTTP");
      } catch (e) {
        return null;
      }
    }
  } else if(window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else {
    return null;
  }
}
function sendRequest(url,params,callback,nethod){
  httpRequest = getXMLHttpRequest();
  
  var httpMethod = method?method:"GET";
  if(httpMethod!="GET" && http!=null){
    httpUrl = httpUrl+"?"+httpParams;
  }
  httpRequest.onreadystatechange = callback;
  httpRequest.open(httpMethod,httpUrl,true);
  httpRequest.setRequestHeader("content-type","application/x-www-form-urlencoded");
  httpRequert.send(httpMethod"POST"?httpParams:null)
}
