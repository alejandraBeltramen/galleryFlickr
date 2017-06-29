angular.module('galeriaFlikrApp')
    .controller("GalleryCtrl", function($scope, $state, $stateParams, $ionicLoading, gallerySvc, storageSvc) {
        $scope.titulo = "Gallery";

        //cargar los albumes de la galeria 
         //if ($stateParams.id) {

            if(navigator.connection.type !== Connection.NONE) {
                showIonicLoading()
                .then(obtenerAlbumes)
                .then(function (_gallery){
                    console.log(_gallery);
                    $scope.gallery = _gallery;
                    $scope.onAlbumClick = onAlbumClick;
                    setAlbumList(_gallery);
                })
                .then($ionicLoading.hide)
                .catch($ionicLoading.hide);
            } else {
                getAlbumList();
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
            storageSvc.setAlbumList(gallery).then(function(resultado) {
            console.log("Guardado");
            });
        };

        function getAlbumList () {
            storageSvc.getAlbumList().then(function(resultado) {
                $scope.gallery = resultado;
                console.log("Se obtuvieron los PgotoSets");
            });
        };
    });