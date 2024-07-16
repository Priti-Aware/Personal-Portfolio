const reveal=()=>{
    document.querySelectorAll(".reveal").forEach(function(elem){
        //create two spans
        var parent=document.createElement("span");
        var child=document.createElement("span");
    
        parent.classList.add("parent");
        parent.classList.add("child");
    
        child.textContent=elem.textContent;
        parent.appendChild("child");
    
        elem.innerHTML="";
        elem.appendChild(parent);
    });
}

export{
    reveal
}