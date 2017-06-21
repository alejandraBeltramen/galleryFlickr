angular.module('galeriaFlikrApp')
    .controller("AlbumCtrl", function($scope, $state, $stateParams, $ionicLoading, albumsvc) {
        $scope.titulo = "Album";

        //cargar las fotos del album 
         if ($stateParams.id) {
            showIonicLoading()
                .then(obtenerPhotos) //deberia retornar _album para que lo tome la siguiente promesa en su parametro
                // .then(inicializarOpciones)
                .then(function(_album) {
                    $scope.album = _album;
                    $scope.titulo = _album.title;
                    $scope.photos = _album.photo;
                })
                .then($ionicLoading.hide)
                .catch($ionicLoading.hide);
        }

        function obtenerPhotos() {
            return albumsvc.getPhotos($stateParams.id);
        };

        function showIonicLoading() {
            return $ionicLoading.show({
                template: '<ion-spinner icon="lines"/>'
            });
        };
    });