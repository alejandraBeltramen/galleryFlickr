angular.module('galeriaFlikrApp')
    .service('photoSvc', function ($q, $http) {
        var baseUrl1 = 'https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=55c499f4331e623d5f26c0510e4ca069&photo_id=';
        var baseUrl2 = '&format=json&nojsoncallback=1';

        //obtiene todos los comentarios para la foto indicada
        this.getComments = function (id) {
            return $http.get(baseUrl1 + id + baseUrl2).then(function (respuesta) {
                return _.cloneDeep(respuesta.comments.comment);
            });
        };
    });