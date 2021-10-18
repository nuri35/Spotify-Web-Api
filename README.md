# Spotify-Web-Api

![alt text](https://www.scdn.co/i/_global/open-graph-default.png)

İlgili olduğum backend developer alanında Web teknolojilerini kullanarak uzmanlaşmaya çalıştığım Node js ve javascript dillerinde  clone proje yapmış bulunmaktayım.
Bu projede axios kütüphanesi ve nesneye yönelimli proğramlama  kullanılarak spotify uygulamasındaki muzikler kullanılmıştır.

Projede kullanıcılar muzik kategorisine göre muzikler listelemekte olup, muzikleri ileriye sarma,durdurma,başka müzige geçme gibi özellikleride kullanabilmektedir.
Ayrıca bu projenin 2.0 versiyonu çıkacaktır.

Bu projede projenin hızlılığı ön planda olması amacıyla modül paketleyicisi olan webpack kullanılmıştır.

 ## :computer: Projenin Kurulumu
 
-Visual studio Code ile temiz kod yazabilmemiz için her dosyanın kendi görevini yapması için dosyaları görevlere ayıralım.Ayrıca görevlere ayrılan bütün dosyalar src klösörü altında olmalıdır.Bu uygulamada dosyaların olduğu klasörler örnek teşkil edebilir.

-package.json dosyamızın oluşması için npm init komutunu kullanalım.Bu dosya içinde webpack kullanabilmemiz için ;

   "dev": "webpack    --config webpack.development.config.js",
   
   "prod": "webpack    --config webpack.production.config.js" 
   komutlarını yazmamız gerekecektir.
   
-Bir sonraki aşamada webpack için config dosyaları oluşturalım ve isteğinize göre bu dosyada webpack için işlemlerimizi yapalım.Yazdığım bu uygulamadaki config dosyasındaki kodlar sizlere örnek olabilir.

-Bundle edildikten sonra uygulama dist klasörü içinde oluşacaktır.Örnek amacıyla uygulamamda ki dist klasörüne bakabilirsiniz.

 ## 🙈: Proje içinden görüntüler
 
 
![](images)

