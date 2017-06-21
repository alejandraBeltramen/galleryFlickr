angular.module('galeriaFlikrApp')
    .controller("PhotoCtrl", function($scope, $state, $stateParams, $ionicLoading, photoSvc) {

        //cargar los comentarios de la foto
         if ($stateParams.photoId) {
            showIonicLoading()
                .then(obtenerComentarios) //deberia retornar _comments para que lo tome la siguiente promesa en su parametro
                // .then(inicializarOpciones)
                .then(function(_comments) {
                    $scope.idFoto = _comments.photo_id;
                    $scope.comentarios = _comments.comment;
                })
                .then($ionicLoading.hide)
                .catch($ionicLoading.hide);
        }

        function obtenerComentarios() {
            return photoSvc.getComments($stateParams.photoId);
        };

        function showIonicLoading() {
            return $ionicLoading.show({
                template: '<ion-spinner icon="lines"/>'
            });
        };
    });