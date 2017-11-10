var butn=document.getElementById('btn');
var counter=0;
butn.onclick = function(){
    counter=counter + 1;
     var span=document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
};
