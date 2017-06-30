angular.module('galeriaFlikrApp')
.service('storageSvc', function($q, $http) {
  var storage = window.localStorage;

  this.setPhotos = function(photos){
    storage.setItem("photos", JSON.stringify(photos));
  }

  this.getPhotos = function(){
    var photos = JSON.parse(storage.getItem("photos"));
    return photos;
  }

  this.setAlbumList = function (albumList) {
    alert("entro a setAlbumList");
    storage.setItem("albumList", JSON.stringify(albumList));
  }

  this.getAlbumList = function(){
    var albumList = JSON.parse(storage.getItem("albumList"));
    return albumList;
  }

  this.setComments = function(comments){
    storage.setItem("comments", JSON.stringify(comments));
  }

  this.getComments = function(){
    var comments = JSON.parse(storage.getItem("comments"));
    return comments;
  }

});
