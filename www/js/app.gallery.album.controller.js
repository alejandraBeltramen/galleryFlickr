angular.module('galeriaFlikrApp')
    .controller("AlbumCtrl", function($scope, $state, $stateParams, $ionicLoading, albumSvc) {
        //cargar las fotos del album 
         if ($stateParams.albumId) {
            showIonicLoading()
                .then(obtenerPhotos) //deberia retornar _album para que lo tome la siguiente promesa en su parametro
                // .then(inicializarOpciones)
                .then(function(_album) {
                    $scope.album = _album;
                    $scope.titulo = _album.title;
                    $scope.fotos = _album.photo;
                    loadDates();
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
            return $state.go('app.photo', {'albumId': albumId, 'photoId': fotoId});
        };

        $scope.sortByDate = function() {
            var ordenado = _.sortBy($scope.fotos, 'fecha.$$state.value');
            $scope.fotos = ordenado;
        };

        $scope.sortByName = function() {
            var ordenado = _.sortBy($scope.fotos, 'title');
            $scope.fotos = ordenado;
        };

        $scope.openOnBrowser = function (url) {
            window.open(url, '_system');
        };

        $scope.sendEmail = function(urlImage) {
            var message = 'Hola! te envio esta foto que encontré en Flickr: ' + urlImage;
                window.plugins.socialsharing.shareViaEmail(message, 'Imagen Flickr', null, null, null, null, function(success){console.log('enviado con exito');}, function(err){console.log('error no enviado')});
            };


        function loadDates() {
            for(i in $scope.fotos){
                $scope.fotos[i].fecha = albumSvc.getFecha($scope.fotos[i].id);
            }
        };


    });