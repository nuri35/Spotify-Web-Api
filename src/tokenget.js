

class token{
    constructor(){
      
        this.clientId = '8edb402234fd4ea4ae574a01af924b27';
        this.clientSecret = '05efe3427d1f440ab75e4402ee625317';

      
    }

    async _gettoken(){ 

      
        try{
        
            const result = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded', 
                    'Authorization' : 'Basic ' + btoa( this.clientId + ':' +   this.clientSecret),
                   
                },
                body: 'grant_type=client_credentials'
               
                
            })
         
           const data =  await result.json();
        
           return data.access_token;
       

        }catch(err){  
           console.log(err);
        }
           
        }

        async turalma(token){
         
            try{

                const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_TR`, {
                    method: 'GET',
                    headers: { 'Authorization' : 'Bearer ' + token}
                });
        
                const data = await result.json();
                return data.categories.items;



            }catch(err){
       console.log(err);
            }


        }

          async _getPlaylistByGenre (token, genreId)  {

            
            
            const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
            });

    
            const data = await result.json();
            
            return data.playlists.items;
        }


    
        async getTracks(token, tracksEndPoint) {

            const limit = 10;
         
            const result = await fetch(`https://api.spotify.com/v1/playlists/${tracksEndPoint}/tracks?limit=${limit}`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
            });
    
            const data = await result.json();
            return data.items;
        }


        async getTracksinfo(token, tracksEndPoint) {

           
         
            const result = await fetch(`https://api.spotify.com/v1/tracks/${tracksEndPoint}`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
            });
    
            const data = await result.json();
            return data
        }


       





}


 function tokenalma(){
    const abc = new token();

  const val =    abc._gettoken();
   
  return val
   }

   
 function turalma(par){
    const abc = new token();

  const val =    abc.turalma(par);
   
  return val
   }

   function playlist(par,par2){
    const abc = new token();

  const val =    abc._getPlaylistByGenre(par,par2);
   
  return val
   }


   function getTracks(par,par2){
    const abc = new token();

  const val =    abc.getTracks(par,par2);
   
  return val
   }

   
   function getTracksinfos(par,par2){
    const abc = new token();

  const val =    abc.getTracksinfo(par,par2);
   
  return val
   }

  

   export{
       tokenalma,
       turalma,
       playlist,
       getTracks,
       getTracksinfos,
     
   }