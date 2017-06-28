angular.module('galeriaFlikrApp')
    .controller("PhotoCtrl", function($scope, $state, $stateParams, $ionicLoading, photoSvc, $cordovaEmailComposer) {

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

                $cordovaEmailComposer.isAvailable().then(function() {
                    // is available
                    alert("available");
                }, function() {
                    // not available
                    alert("not available");
                });
                $scope.sendEmail = function() {
                    var email = {
                        to: 'afua.kw@gmail.com',
                        attachments: [
                            'file://img/logo.png',
                            'res://icon.png',
                            'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                            'file://README.pdf'
                        ],
                        subject: 'Mail subject',
                        body: 'How are you? Nice greetings from Leipzig',
                        isHtml: true
                    };

                    $cordovaEmailComposer.open(email).then(null, function() {
                        // user cancelled email
                    });
                };
    };
});
