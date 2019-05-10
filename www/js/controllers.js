angular.module('starter.controllers', [])

.controller('categoriesCtrl', function($scope) {
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
})
/*"Impresoras",
"Gaming",
"Computadoras",
"Accesorios",
"Componentes PC",
"Muebles y Oficinas",
"Camaras"*/
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
