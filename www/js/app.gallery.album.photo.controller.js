angular.module('galeriaFlikrApp')
    .controller("PhotoCtrl", function($scope, $state, $stateParams, $ionicLoading, photoSvc, storageSvc) {

            //cargar los comentarios de la foto
            if($stateParams.photoId){
            if(navigator.connection.type !== Connection.NONE) {
                showIonicLoading()
                .then(obtenerComentarios)
                .then(function (_comments){
                    $scope.idFoto = _comments.photo_id;
                    $scope.comentarios = _comments.comment;
                    storageSvc.setComments(_comments);
                })
                .then($ionicLoading.hide)
                .catch($ionicLoading.hide);
            } else {
                var comments = storageSvc.getComments();
                if(comments.photo_id === $stateParams.photoId) {
                   $scope.comentarios = comments.comment; 
                }
                $scope.idFoto = comments.photo_id;
            }
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
