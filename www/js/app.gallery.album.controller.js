angular.module('galeriaFlikrApp')
    .controller("AlbumCtrl", function($scope, $state, $stateParams, $ionicLoading, albumSvc) {
        $scope.titulo = "Album";
        console.log($stateParams.albumId);
        //cargar las fotos del album 
         if ($stateParams.albumId) {
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
            return albumSvc.getPhotos($stateParams.albumId);
        };

        function showIonicLoading() {
            return $ionicLoading.show({
                template: '<ion-spinner icon="lines"/>'
            });
        };
    });