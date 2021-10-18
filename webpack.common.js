//ortak alanları burda yazıcaz

module.exports = {

    entry: './src/index.js',
  
    

      module: {
        rules: [
         
        
          {
            test: /\.html$/i,//webpack dosyasındakı uygulamada anlatıldı
            loader: "html-loader",
          },



        ],
         },
        
      
        



      } 
     //sımdı bız dıger ornektekı dosyaları tasıdık fakat node modules dosyasını tasımadık 
     //eger npm istall dersen pacjage.jsona gıder ordakı dosyaları nodemodules klsorune yukler
     //2. olarak burda commonda bazı ayarları degıstırdık ortak alanlar bunlar olsun dedık vs

     //3. sonuc olarak baktıgımızda networkten suan axıos bulma cdnden getırılıyor ama butun js
     //dosyalarım bundel.js ye aktarılmıs duurmda tek bır dosya  js dosyam ve inddex.html boşluklar
     //gitmis ve sıkıstırılmıs durumda 

     //4:tırnaklar vs gıtmıs babel olayı atanmıs axıos gıbı kutuphaneyı cdnden cekmeme gerek yok 
     //fakat package .jsonda axıos gorunuyor ama node modules ıcıne getırmemız gerekır npm install axios
     //diyoruz kı nodes.modules paketın ıcıne gelsın ve requıre olarak axıos olan yerlere ımport
     //edıyoruz

     //5:artık noldu  networkten bakarsak sadce bundl.js var  bunun ıcıne eklendı aslında axıos 

     //6:uygulama acılınca networkde main. bundl.js var 55kblık, butun kodları ıceren bır dosya gelıyoro ındırılmıs oluyor zaten  butona basıncada sonucları goruyoruz
     // haber gelcek ya ıste butona basana kadar haberı getır resımgetır vs
     //kodlarının bı kullanımı var mı yok  ben yanı resım getırılınce import edılen kod ımport edılıp calıssın ısteyebılrım

     //7:bu gibi durumlarda dınamık ımportlar ypaabılrız bu uygulamada yapıldı saka.jsde ypaıldı

   