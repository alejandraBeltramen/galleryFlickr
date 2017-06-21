angular.module('galeriaFlikrApp')
    .service('albumSvc', function ($q, $http) {
        var baseUrl1 = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=5d340a588774b863f69e21741c34a9bc&photoset_id=';
        var baseUrl2 = '&user_id=44947048%40N00&format=json&nojsoncallback=1';

        var flickr = {};
        flickr.api = ['ed63c482172c41cc603ea3a1bdb01012', '3e07ba483c2acaffd8578aede8a43752', 'a51f5ec466de508d20ffe9626308af39'];
        //flickr.user_id = '150263346%40N03'; //afua
        flickr.user_id = '44947048@N00';
        flickr.format = 'json';
        flickr.endpoint = 'https://api.flickr.com/services/rest/';

        //obtiene todas las fotos para el id del album indicado
        this.getPhotos = function (id) {
            var url = flickr.endpoint+'?method=flickr.photosets.getPhotos&api_key='+flickr.api[0]+'&photoset_id='+id+'&user_id='+flickr.user_id+'&format='+flickr.format+'&nojsoncallback=1';
            console.log(url);
            return $http.get(url).then(function (respuesta) {
                console.log(respuesta);
                return _.cloneDeep(respuesta.data.photoset);
            });
        };

        /**
         * Obtiene la fecha de creacion de una foto. 
         * Se recibe por parametro el id de la foto.
         */
        this.getFecha = function(id) {
            var url = flickr.endpoint+'?method=flickr.photos.getInfo&api_key='+flickr.api[2]+'&photo_id='+id+'&format=json&nojsoncallback=1';
            return $http.get(url).then(function (respuesta) {
                return _.cloneDeep(respuesta.data.photo.dates.taken);
            });
        }
    });