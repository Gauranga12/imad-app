var btn=document.getElementById('btn');
var counter=0;
btn.onclick = function(){
    counter=counter + 1;
     var span=document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
};
