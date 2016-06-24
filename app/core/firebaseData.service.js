(function(){
  'use strict';
  angular.module('mutantApp.core').factory('firebaseDataService', firebaseDataService);

  function firebaseDataService(){
    var root = firebase.database().ref();
    var text = root.child('texts');
    var service = {
      root: root,
      text: text,
      mutants: root.child('mutants'),
      users: root.child('users'),
    };

    return service;
    ////////////////////////////FUNCTIONS BELOW/////////////////////
  }
})();
