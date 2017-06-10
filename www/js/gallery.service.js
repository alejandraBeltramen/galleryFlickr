angular.module('galeriaFlikr')
    .service('gallerySvc', function ($q, $http) {
        var baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=55c499f4331e623d5f26c0510e4ca069&user_id=116685283%40N05&format=json&nojsoncallback=1';

        //obtiene todos los albumes de fotos para el user harcodeado
        this.getAlbumes = function () {
            return $http.get(baseUrl).then(function (respuesta) {
                return _.cloneDeep(respuesta.photosets.photoset);
            });
        };
       
        //no seria necesario porque siempre vamos a obtener los albums para un user harcodeado
        this.getAlbumes = function (id) {
            return $http.get(baseUrl + id).then(function (respuesta) {
                return _.cloneDeep(respuesta.photosets.photoset);
            });
        };
    });