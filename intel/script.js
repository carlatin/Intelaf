  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBcUlqowYiD3hhe0UXN-i_qj_PAMMl4X9g",
    authDomain: "intelaf-6f196.firebaseapp.com",
    databaseURL: "https://intelaf-6f196.firebaseio.com",
    projectId: "intelaf-6f196",
    storageBucket: "intelaf-6f196.appspot.com",
    messagingSenderId: "601010648955",
    appId: "1:601010648955:web:62da6f52e091fb5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var App=angular.module("App",[]);
  App.controller("control",function($scope){
 console.log("Entra inicio");

 $scope.variableP;
 $scope.cargar;
/*diccionario de la base de datos*/
    $scope.productos={};
/*diccionario de la base de datos*/
/*funcion para base de datos*/
    $scope.base = function(x) {
        console.log(x)
        firebase.database().ref("/Mercaderia").push(x);
    }
/*fin funcion*/

  function handleFileSelect(evt) {
   var files = evt.target.files; // FileList object
   console.log(files[0].name);
   $scope.variableP = files;
   console.log($scope.variableP);
   $scope.cargar = files[0].name;
   // Loop through the FileList and render image files as thumbnails.
   for (var i = 0, f; f = files[i]; i++) {

     // Only process image files.
     if (!f.type.match('image.*')) {
       continue;
     }

     var reader = new FileReader();

     // Closure to capture the file information.
     reader.onload = (function(theFile) {
       return function(e) {
         // Render thumbnail.
         var span = document.createElement('span');
         span.innerHTML = ['<img class="thumb" src="', e.target.result,
                           '" title="', escape(theFile.name), '"/>'].join('');
         document.getElementById('list').insertBefore(span, null);
       };
     })(f);

     // Read in the image file as a data URL.
     reader.readAsDataURL(f);
   }
 }

 
 $scope.img = function(){

   /*    var storageRef = storage.ref();
   var file = files; // use the Blob or File API
   ref.put(file).then(function(snapshot) {
     console.log('Uploaded a blob or file!');
   })*/

   //console.log($scope.cargar);

   var myImage = new Image();
   myImage.src = $scope.cargar;
   var cargarImagen = myImage

   
   var storage = firebase.storage();
   var storageRef = storage.ref();
   var file = cargarImagen; // use the Blob or File API
   storageRef.put(file).then(function(snapshot) {
     console.log('Uploaded a blob or file!');
   })


 }

 document.getElementById('files').addEventListener('change', handleFileSelect, false);
});