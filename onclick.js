function myFunction(){
		var div=document.createElement("div");
		div.className="boxes";
		var x = document.querySelector("#header");
		x.appendChild(div);
		var y=Math.floor(Math.random()*100);
		div.innerHTML=y;	
		div.setAttribute("value",y);				
	   	div.addEventListener("click",function(){
	   		append(this);
	   	})

}
function append(d){
	var gan=d.getAttribute("value");
	var m;	
 	if(gan%2==0){
		m=document.querySelector("#black");
	}else{
		m=document.querySelector("#white")
	}
	m.appendChild(d);
}