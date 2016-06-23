(function(){
  'use strict';
  angular.module('mutantApp.core').factory('firebaseDataService', firebaseDataService);

  function firebaseDataService(){
    var root = firebase.database().ref();
    var text = root.child('text');
    var service = {
      root: root,
      text: text,
    };

    return service;
    ////////////////////////////FUNCTIONS BELOW/////////////////////
  }
})();
