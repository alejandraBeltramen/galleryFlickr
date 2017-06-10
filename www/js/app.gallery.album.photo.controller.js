angular.module('galeriaFlikr')
    .controller("PhotoCtrl", function($scope, $state, $stateParams, $ionicLoading, photoSvc) {
        $scope.titulo = "Photo";

        //cargar los comentarios de la foto
         if ($stateParams.id) {
            showIonicLoading()
                .then(obtenerComentarios) //deberia retornar _comments para que lo tome la siguiente promesa en su parametro
                // .then(inicializarOpciones)
                .then(function(_comments) {
                    $scope.comentarios = _comments;
                })
                .then($ionicLoading.hide)
                .catch($ionicLoading.hide);
        }

        function obtenerComentarios() {
            return photoSvc.getComments($stateParams.id);
        };

        function showIonicLoading() {
            return $ionicLoading.show({
                template: '<ion-spinner icon="lines"/>'
            });
        };
    });