angular.module('galeriaFlikrApp')
    .controller("GalleryCtrl", function($scope, $state, $stateParams, $ionicLoading, gallerySvc, storageSvc) {
        $scope.titulo = "Gallery";

        //cargar los albumes de la galeria 
         //if ($stateParams.id) {   
            var network = navigator.connection.type;

           if(navigator.connection.type !== Connection.NONE) {
                showIonicLoading()
                .then(obtenerAlbumes)
                .then(function (_gallery){
                    console.log(_gallery);
                    $scope.gallery = _gallery;
                    $scope.onAlbumClick = onAlbumClick;
                    storageSvc.setAlbumList(_gallery);
                })
                .then($ionicLoading.hide)
                .catch($ionicLoading.hide);
            } else {
                $scope.gallery = storageSvc.getAlbumList();
            }



        function obtenerAlbumes() {
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

        function setAlbumList(gallery) {
            // storageSvc.setAlbumList(gallery).then(function(resultado) {
            //     alert("Guardado");
            // });
            localstorage["albumList"] = JSON.stringify(gallery);
            alert("Guardado");
        };

        function getAlbumList () {
            alert('Entra a getAlbumList');
            // storageSvc.getAlbumList().then(function(resultado) {
            //     $scope.gallery = resultado;
            //     alert("Se obtuvieron los PhotoSets");
            // });
            var albumList = JSON.parse(localstorage["albumList"]);
            $scope.gallery = albumList;
            alert(albumList);
        };
    });