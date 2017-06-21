angular.module('galeriaFlikrApp')
    .service('photoSvc', function ($q, $http) {
        /*var baseUrl1 = 'https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=55c499f4331e623d5f26c0510e4ca069&photo_id=';
        var baseUrl2 = '&format=json&nojsoncallback=1';*/
        var flickr = {};
        flickr.api = ['ed63c482172c41cc603ea3a1bdb01012', '3e07ba483c2acaffd8578aede8a43752', 'a51f5ec466de508d20ffe9626308af39'];
        //flickr.user_id = '150263346%40N03'; //afua
        flickr.user_id = '44947048@N00';
        flickr.format = 'json';
        flickr.endpoint = 'https://api.flickr.com/services/rest/';

        //obtiene todos los comentarios para la foto indicada
        this.getComments = function (id) {
            var url = flickr.endpoint+'?method=flickr.photos.comments.getList&api_key='+flickr.api[2]+'&photo_id='+id+'&format=json&nojsoncallback=1';
            return $http.get(url).then(function (respuesta) {
                return _.cloneDeep(respuesta.data.comments);
            });
        };
    });