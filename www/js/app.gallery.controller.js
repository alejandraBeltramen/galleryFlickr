angular.module('galeriaFlikrApp')
    .controller("GalleryCtrl", function($scope, $state, $stateParams, $ionicLoading, gallerySvc) {
        $scope.titulo = "Gallery";

        //cargar los albumes de la galeria 
         //if ($stateParams.id) {
            showIonicLoading()
                .then(obtenerAlbumes) //deberia retornar _gallery para que lo tome la siguiente promesa en su parametro
                // .then(inicializarOpciones)
                .then(function(_gallery) {
                    console.log(_gallery);
                    $scope.gallery = _gallery;
                    $scope.onAlbumClick = onAlbumClick; 
                })
                .then($ionicLoading.hide)
                .catch($ionicLoading.hide);
        //}

        function obtenerAlbumes() {
            // return gallerySvc.getAlbumes($stateParams.id);
            return gallerySvc.getAlbumes();            
        };

        function showIonicLoading() {
            return $ionicLoading.show({
                template: '<ion-spinner icon="lines"/>'
            });
        };


        function onAlbumClick (id){
            console.log("click en album");
            console.log(id);
            return $state.go('app.album', {'albumId': id});
        };
    });