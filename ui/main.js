var btn=document.getElementById('btn');
var counter=0;
btn.onclick = function(){
    counter=counter + 1;
    var request= new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://wwwnarasimhashenoy007.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
submit.onclick = function(){
    var name=document.getElementById('name');
    var id=document.getElementById('id');
    var dept=document.getElementById('dept');

    span.innerHTML=counter.toString();
   
};