(function(){
  'use strict';
  angular.module('mutantApp.core').factory('firebaseDataService', firebaseDataService);

  function firebaseDataService(){
    var root = firebase.database().ref();
    var text = root.child('text');
    var service = {
      root: root,
      text: text,
      mutants: root.child('mutants'),
    };

    return service;
    ////////////////////////////FUNCTIONS BELOW/////////////////////
  }
})();
