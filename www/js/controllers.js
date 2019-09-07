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

angular.module('starter.controllers', [])

.controller('categoriesCtrl', function($scope,$state,$rootScope) {
  //categories
  $scope.categoria=[{
	categoria:'Telefonia',
	icono:'fas fa-mobile-alt',
  },{
	categoria:'Impresoras',
	icono:'fas fa-print',
  },{
	categoria:'Gaming',
	icono:'fas fa-gamepad',
  },{
	categoria:'Computadoras',
	icono:'fas fa-laptop',
  },{
	categoria:'Accesorios',
	icono:'fas fa-sitemap',
  },{
	categoria:'Componentes PC',
	icono:'fas fa-puzzle-piece',
  },{
	categoria:'Muebles y Oficinas',
	icono:'fas fa-couch',
  },{
	categoria:'Camaras',
	icono:'fas fa-camera',
  }];
  $scope.funcion=function(i){
   /* $scope.a=false;
	if (i==true) {
	  $scope.a=true;
	 console.log($scope.a);
	}*/
	$rootScope.categorySelected = i;
	$state.go("tab.productos");

  }
})
/*"Impresoras",
"Gaming",
"Computadoras",
"Accesorios",
"Componentes PC",
"Muebles y Oficinas",
"Camaras"*/
.controller('productocontrol',function($scope,$rootScope){
	console.log($rootScope.categorySelected)
	$scope.mercaderiaObj = [];
	var starCountRef = firebase.database().ref('/Mercaderia');
		starCountRef.on('value', function(snapshot) {
			snapshot.forEach(function(y) {
				$scope.mercaderiaObj.push(y.val());
				console.log(y.val())
			})
	})



})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
	Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
	enableFriends: true
  };
});
