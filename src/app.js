import  * as dısaaktarıfonk from "./tokenget"
// import play from "./runmusic.js"





class spotfyappekr{
    constructor(){

this.playing = true;
      this.hak=0;
    this.dg = document.querySelector(".opt");
     this.opt = document.querySelector("#select_genre");
     this.playlıst = document.querySelector("#select_playlist");
     
     this.opt.addEventListener("change", this.apıcontollerforplaylist.bind(this));

     this.playlıst.addEventListener("change", this.getrack.bind(this));
     this.listgroup = document.querySelector(".list-group");

     this.albumart = document.querySelector(".album-art");

     this.player = document.querySelector(".player");

     this.info = document.querySelector(".info");
   
   

   
    
      this.listgroup.addEventListener("click", this.musicınfo.bind(this));
      this.trackIndex = -1;
      this.tracks = [];
      this.trackart = [];
      this.tracktext = [];
    }


  

  async  APIController(){ 
//gettok artık benım accesstokenım
    const gettok = await dısaaktarıfonk.tokenalma();
     const getrens =  await dısaaktarıfonk.turalma(gettok) ;

     getrens.forEach((element)=>{
       let val1 = element.id;

       this.createGenre(val1);
     
     })
  

            }

            async apıcontollerforplaylist(e){
            let clıckval = e.target.value;
              const gettok = await dısaaktarıfonk.tokenalma();

              const getplaylıstbygen = await dısaaktarıfonk.playlist(gettok,clıckval);

              const rmv = document.querySelectorAll(".remove");
             
     if(rmv){
     
      for(var i = 0; i < rmv.length; i++)
      {
        rmv[i].remove();
      }

     }    

                getplaylıstbygen.forEach((element)=>{
       
                  this.createplaylist(element.name,element.id);
                      })
                     

            }

            async getrack(e){
              const rmvx = document.querySelectorAll(".rmv");

              if(rmvx){
     
                for(var i = 0; i < rmvx.length; i++)
                {
                  rmvx[i].remove();
                }
          
               }    
          

              const gettok = await dısaaktarıfonk.tokenalma();

              let clıckval = e.target.value;
              

               const getracs = await dısaaktarıfonk.getTracks(gettok,clıckval);

               getracs.forEach((element)=>{

                if(element.track.preview_url){

                  this.createtrack(element.track.id,element.track.name);
              
                  this.tracks.push(element.track.preview_url)
 
                  this.trackart.push(element.track.album.images[1].url)
 
                  this.tracktext.push(element.track.name)

                }
        
               

               })

            }


            async musicınfo(e){
              e.preventDefault();
          

              const gettok = await dısaaktarıfonk.tokenalma();

              let clıckval = e.target.id;
              
              
          
            
            

               const getmusicinfo = await dısaaktarıfonk.getTracksinfos(gettok,clıckval);
              
            
             this.createmusic(getmusicinfo.album.name,getmusicinfo.album.images[1].url,getmusicinfo.preview_url);
              
          
          

             //"href,preview_url,uri,external_urls=>spotify


              
            }

     
          

createGenre(par){
  
  this.opt.innerHTML +=  `<option value="${par}">${par}</option>`;
}
    
createplaylist(valx,valid){

    this.playlıst.innerHTML+= `<option  class="remove" value="${valid}">${valx}</option>`
   
 

}

createtrack(valid,valx){

  this.listgroup.innerHTML+= `<a href="#" class="list-group-item list-group-item-action list-group-item-light rmv" id="${valid}">${valx}</a>`;
 


}

createmusic(name,image,preurl){

if(preurl){

  this.player.innerHTML=` <img src="${image}" alt="album art" class="art">
  <div class="info">
      <p class="text">${name}</p>
      
  </div> 
  <div class="prog">
      <div class="prog-time">
          <p class="left"></p>
          <p class="right"></p>
      </div>
      <div class="prog-bar">
          
          <input type="range"  class="prog-bars" min="0" max="" value="0" />
         
      </div>
  </div>  


  <ul class="buttons">
           
  <div class="next-prev">
  <i class="far fa-arrow-alt-circle-left fa-2x" id="prev-track"></i>
  </div>
  <div class="play-pause">
  <i class="far fa-play-circle fa-3x" id="play"></i>
  <i class="far fa-pause-circle fa-3x" id="pause"></i>
</div>
<div class="next-prev">

<i class="far fa-arrow-alt-circle-right fa-2x" id="next-track"></i>
</div>
 
</ul>
  
  
  `;


    play.style.display = "none";
    pause.style.display = "block";
    track.src=`${preurl}`
    track.play();

pause.addEventListener("click",()=>{
  pause.style.display = "none";
  play.style.display = "block";
  track.pause();
})


play.addEventListener("click",() =>{
  play.style.display = "none";
  pause.style.display = "block";//||
  track.play();
})

let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");

next.addEventListener("click", this.nexsong.bind(this,[name,image,preurl]));

prev.addEventListener("click", this.prevsong.bind(this));




let refreshIntervalId = setInterval(()=>{
 
  const progressBars = document.querySelector(".prog-bars");

  
  const left = document.querySelector(".left");

  
  const right = document.querySelector(".right");

  progressBars.max = track.duration;
  
  progressBars.value = track.currentTime;//suan gecen zaman
 
  left.textContent = this.formatTime(track.currentTime);
  right.textContent = this.formatTime(track.duration);

 if( track.currentTime ===  track.duration){
  pause.style.display = "none";
  play.style.display = "block";
  track.pause();
  
  
  clearInterval(refreshIntervalId);
  
  left.textContent = 0.00;
  progressBars.value =0;
 }

}, 500);




}else{
  console.log("şarkı bulunamadı")
}

  
  
  // this.albumart.style.backgroundImage = `url(${image})`;
  
  // this.info.innerHTML = `<span class="artist">${name}</span>`;


}

nexsong(name,image,preurl){




    let art = document.querySelector(".art");
    let text = document.querySelector(".text");
   
    let kacıncıındexsrc = track.src;
   
    for(var j = 0; j < this.tracks.length; j++) {
   
     if((kacıncıındexsrc === this.tracks[j])){
      
       this.trackIndex = j+1;
   
     }
     
     
   }
   
     
   
     if (this.trackIndex > this.tracks.length - 1) {
       this.trackIndex = 0;
     }
   
   
     track.src = this.tracks[this.trackIndex];
   
     art.src = this.trackart[this.trackIndex];
     text.textContent = this.tracktext[this.trackIndex];
   
     this.playing = true;
     track.play();




 

}


prevsong(){


  let art = document.querySelector(".art");
  let text = document.querySelector(".text");
 
  let kacıncıındexsrc = track.src;
 
  for(var j = 0; j < this.tracks.length; j++) {
 
   if((kacıncıındexsrc === this.tracks[j])){
    
     this.trackIndex = j-1;
 
   }
   
   
 }
 
   
 
   if (this.trackIndex == -1) {
   let uzunluk =  this.tracks.length;

     this.trackIndex = Number(uzunluk) - 1;
     
   }
 
 
   track.src = this.tracks[this.trackIndex];
 
   art.src = this.trackart[this.trackIndex];
   text.textContent = this.tracktext[this.trackIndex];
 
   this.playing = true;
   track.play();


}




formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}




















}

export default function catagorıes(){
 const abc = new spotfyappekr();
  abc.APIController();


}
