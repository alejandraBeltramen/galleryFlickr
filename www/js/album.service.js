angular.module('galeriaFlikr')
    .service('albumSvc', function ($q, $http) {
        var baseUrl1 = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=55c499f4331e623d5f26c0510e4ca069&photoset_id=';
        var baseUrl2 = '&user_id=116685283%40N05&format=json&nojsoncallback=1';

        //obtiene todas las fotos para el album indicado
        this.getPhotos = function (id) {
            return $http.get(baseUrl1 + id + baseUrl2).then(function (respuesta) {
                return _.cloneDeep(respuesta.photoset);
            });
        };
    });