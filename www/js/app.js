// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('galeriaFlikrApp', ['ionic', 'pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, translateProvider) {
    $translateProvider.translations('es', {
      etiqueta_comentarios: "Comentarios",
      etiqueta_vistas: "Vistas",
      etiqueta_galeria: "Galeria",
      etiqueta_preferencia: "Preferencias",
      etiqueta_ordenar: "Ordernar por",
      etiqueta_fechacreacion: "Fecha de Creacion",
      etiqueta_nombre: "Nombre",
      etiqueta_ordenarporfecha: "Ordenar por fecha",
      etiqueta_ordenarpornombre: "Ordenar por nombre",
      etiqueta_abrirenbrowser: "Abrir en Browser",
      etiqueta_email: "Email",
      etiqueta_preferencias: "Preferencias",
      etiqueta_lenguajes: "Lenguajes",
      etiqueta_español: "Español",
      etiqueta_ingles: "Ingles"
    });
    $translateProvider.translations('en', {
      etiqueta_comentarios: "Comments",
      etiqueta_vistas: "Views",
      etiqueta_galeria: "Gallery",
      etiqueta_preferencia: "Preferences",
      etiqueta_ordenar: "Order by",
      etiqueta_fechacreacion: "Creation Date",
      etiqueta_nombre: "Name",
      etiqueta_ordenarporfecha: "Order by Date",
      etiqueta_ordenarpornombre: "Order by Name",
      etiqueta_abrirenbrowser: "Open in Browser",
      etiqueta_email: "Email",
      etiqueta_preferencias: "Preferences",
      etiqueta_lenguajes: "Languages",
      etiqueta_español: "Spanish",
      etiqueta_ingles: "English"
    });
    $translateProvider.preferredLanguage("es");
    $translateProvider.fallbackLanguage("es");


  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.preferencias', {
    url: '/preferencias',
    views: {
      'menuContent': {
        templateUrl: 'templates/preferencias.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.gallery', {
    url: '/gallery',
    views: {
      'menuContent': {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryCtrl'
      }
    }
  })
  .state('app.album', {
    url: '/gallery/:albumId',
    views: {
      'menuContent': {
        templateUrl: 'templates/album.html',
        controller: 'AlbumCtrl'
      }
    }
  })
  .state('app.photo', {
    url: '/gallery/:albumId/:photoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/photo.html',
        controller: 'PhotoCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/gallery');

  
})

.run(function notificacion($ionicPopup) {
  document.addEventListener("offline", onOffline, false);
  function onOffline() {
    $ionicPopup.alert({
      title: 'Está en modo Offline',
      template: 'Podra acceder a lo que tiene almacenado unicamente'
    });

    var fecha = new Date();
    //var iconoNotificacion = "res://ic_notif_flickdsm";
    var icono = "file:/resources/android/icon/notification//ic_notif_flickdsm";
    cordova.plugins.notification.local.schedule({
      id: 1,
      title: "Flickr",
      message: "Conectese a una conexion y reintente",
      at: fecha,
      icon: icono,
      sound: null
    });
  }
})

.run(function lenguaje($translate) {
    this.setLenguaje = function(){
      if (typeof navigator.globalization !== "undefined") {
        //obtengo el lenguaje cortando el string que me devuelve navigator.language
        var leng = (navigator.language).split("-")[0]; 
        $translate.use(leng);
      }
    }
    document.addEventListener('deviceReady', function() {
        setLenguaje();
    }, false);
  })
;
