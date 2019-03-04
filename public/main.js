
document.addEventListener("submit",(p)=>{
    p.preventDefault();
    const searchValue =document.getElementById("inp").value;
    var Message1=document.getElementById("list1");
    var Message2=document.getElementById("list2");
    var Message3=document.getElementById("list3");

    fetch('/weather?address='+searchValue)
    .then((res)=>{
        res.json().then(re=>{
            if(re.error){
                return Message =re.error
            }
            Message1.innerHTML=re.name;
            Message2.innerHTML=re.temperature;
            Message3.innerHTML=re.summary})})   
    .catch()
    
    
})