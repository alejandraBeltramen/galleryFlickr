// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('galeriaFlikrApp', ['ionic'])

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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
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
});
