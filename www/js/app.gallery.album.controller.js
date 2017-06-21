angular.module('galeriaFlikrApp')
    .controller("AlbumCtrl", function($scope, $state, $stateParams, $ionicLoading, albumSvc) {
        console.log($stateParams.albumId);
        //cargar las fotos del album 
         if ($stateParams.albumId) {
            showIonicLoading()
                .then(obtenerPhotos) //deberia retornar _album para que lo tome la siguiente promesa en su parametro
                // .then(inicializarOpciones)
                .then(function(_album) {
                    $scope.album = _album;
                    $scope.titulo = _album.title;
                    $scope.fotos = _album.photo;
                    cargarFechas();
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

        $scope.onFotoClick = function onFotoClick(albumId, fotoId) {
            console.log("click en foto");
            console.log(albumId, fotoId);
            return $state.go('app.photo', {'albumId': albumId, 'photoId': fotoId});
        };

        $scope.ordenarPorFecha = function() {
            var ordenado = _.sortBy($scope.fotos, 'fecha.$$state.value');
            $scope.fotos = ordenado;
        };

        $scope.ordenarPorNombre = function() {
            var ordenado = _.sortBy($scope.fotos, 'title');
            $scope.fotos = ordenado;
        };

        function cargarFechas() {
            for(i in $scope.fotos){
                $scope.fotos[i].fecha = albumSvc.getFecha($scope.fotos[i].id);
            }
        };
    });