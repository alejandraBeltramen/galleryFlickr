angular.module('galeriaFlikrApp')
.service('storageSvc', function($q, $http) {
  var storage = window.localStorage;

  this.setPhotoList = function(photoList){
    storage.setItem("photoList", JSON.stringify(photoList));
    return "DONE";
  }

  this.getPhotoList = function(){
    var photoList = JSON.parse(storage.getItem("photoList"));
    return photoList;
  }

  this.setAlbumList = function (albumList) {
    storage.setItem("albumList", JSON.stringify(albumList));
  }

  this.getAlbumList = function(){
    var albumList = JSON.parse(storage.getItem("albumList"));
    return albumList;
  }

  this.existPhotoList = function(photoListId){
    return false;
  }

  this.setAlbumInfo = function(albumInfo){
    storage.setItem("albumInfo", JSON.stringify(albumInfo));
    return "DONE";
  }

  this.getALbumInfo = function(){
    var albumInfo = JSON.parse(storage.getItem("albumInfo"));
    return albumInfo;
  }

});
