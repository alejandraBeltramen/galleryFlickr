angular.module('galeriaFlikrApp')
    .service('gallerySvc', function ($q, $http) {
        var baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=5d340a588774b863f69e21741c34a9bc&user_id=44947048%40N00&format=json&nojsoncallback=1';
        // var foto = {
        //     farmid: "",
        //     serverid: "",
        //     id: "",
        //     secret: ""
        // } 
        var flickr = {};
        flickr.api = 'ed63c482172c41cc603ea3a1bdb01012';
        //flickr.user_id = '150263346%40N03'; //afua
        flickr.user_id = '44947048@N00';
        flickr.format = 'json';
        flickr.endpoint = 'https://api.flickr.com/services/rest/';

        //obtiene todos los albumes de fotos para el user harcodeado
        this.getAlbumes = function() {
            var url = flickr.endpoint+'?method=flickr.photosets.getList&api_key='+flickr.api+'&user_id='+flickr.user_id+'&format='+flickr.format+'&nojsoncallback=1';
            return $http.get(url).then(function (respuesta) {
                return _.cloneDeep(respuesta.data.photosets.photoset);
            });
        };

        /**
         * obtiene la imagen para un album. Se le pasa por parametro los siguientes valores
         * que se obtienen de cada photoset:
         * farmid = corresponde al valor 'farm' 
         * serverid = corresponde al valor 'server'
         * id = corresponde al valor 'primary'
         * secret = corresponde al valor 'secret'
         */
        // this.getFotoAlbum = function(farmid, serverid, id, secret) {
        //     var url = 'https://farm' + farmid + '.staticflickr.com/' + serverid + '/' + id + '_' + secret + '.jpg';
        //     return $http.get().then(function (respuesta) {
        //         return (respuesta);
        //     });
        // }
       
        //no seria necesario porque siempre vamos a obtener los albums para un user harcodeado
        // this.getAlbumes = function (id) {
        //     return $http.get(baseUrl + id).then(function (respuesta) {
        //         return _.cloneDeep(respuesta.photosets.photoset);
        //     });
        // };
    });