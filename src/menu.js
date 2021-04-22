



let set_language = function(lang){
    sessionStorage.setItem('langauage',lang);

}
let set_enviroment = function(enviroment){
    sessionStorage.setItem('enviroment',enviroment);
}
let set_level = function(level){
   sessionStorage.setItem('level',level);  
 //  alert(sessionStorage.getItem('level'));
}
let select_road = function(road){
   sessionStorage.setItem('road',road);  
 
}
let set_npc = function(npc){
  if(sessionStorage.getItem('langauage') =='A')
    {
      if(npc =='male')
        {
          sessionStorage.setItem('npc','H');  
      //    alert(sessionStorage.getItem('npc'));
        }
      else
       {
          sessionStorage.setItem('npc','Re');  
        //    alert(sessionStorage.getItem('npc'));
       }
    }
  else
    {
      if(npc =='male')
        {
          sessionStorage.setItem('npc','Ri');  
          //alert(sessionStorage.getItem('npc'));
        }
      else
       {
          sessionStorage.setItem('npc','L');  
           // alert(sessionStorage.getItem('npc'));
       } 
      
    }
   
}

let start_game= function(){
  window.open('../dist/index.html',"_self");
}