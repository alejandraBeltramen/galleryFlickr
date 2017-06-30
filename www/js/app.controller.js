angular.module('galeriaFlikrApp')
  .controller('AppCtrl', function($scope,gallerySvc,$translate) {
    $scope.leng = navigator.language;
    
    //Inicializar la lista de albumes
    function cargarGallery() {
      return gallerySvc.getAlbumes().then(function(gallery) {
        $scope.gallery = gallery;
      });
    }
 
    //Permite recargar la lista de albumes (ej.: utilizando 
    //ion-refresher) 
    $scope.cargarGallery = cargarGallery;
 
    //Carga la lista de albumes cuando se inicia la aplicación 
    cargarGallery();

    $scope.cambiarLenguaje = function(leng) {
        $translate.use(leng);
    };
  });