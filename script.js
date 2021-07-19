function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
	  
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

 function showIFrame(){
    var iframe = document.createElement('iframe');
      var html = '<body>Foo</body>'; //iframe 'data:text/html;charset=utf-8,' +
      var uri='http://localhost:4200/recibopago'
      iframe.src =  uri;
      iframe.width=300
      iframe.height=100%
            document.body.appendChild(iframe);
      console.log('iframe.contentWindow =', iframe.contentWindow);
      }
//showIFrame();

function openInWindow(){
      const params = new URLSearchParams(window.location.search)
      var arr_qp=[]
      for (const param of params) {
          console.log(param)
          if(param[0]!='uri')
                arr_qp.push(param[0]+"="+param[1])
        }
        uri=params.get('uri');
        console.log(arr_qp.join('&'))
        var fulluri=uri+'?'+arr_qp.join('&')
      window.open(fulluri, 
      "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=600");
}

var windowObjectReference;

function openRequest() {
 
  const params = new URLSearchParams(window.location.search)
  var arr_qp=[]
  for (const param of params) {
      console.log(param)
      if(param[0]!='uri')
            arr_qp.push(param[0]+"="+param[1])
    }
    uri=params.get('uri');
    //var fulluri=uri+'?'+arr_qp.join('&')
    console.log(fulluri)
    document.location.assign(fulluri);
  
}



function loadComercio(){
      const params = new URLSearchParams(window.location.search)

      document.location.assign(params.get('uri')); //+'/'+params.get('CUS')
         }