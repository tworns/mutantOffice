(function(){
  'use strict';
  angular.module('mutantApp.core').factory('firebaseDataService', firebaseDataService);

  function firebaseDataService(){
    var root = firebase.database().ref();
    var text = root.child('texts');
    var email = root.child('email');
    var service = {
      root: root,
      text: text,
      users: root.child('users'),
      email: email,
    };

    return service;
    ////////////////////////////FUNCTIONS BELOW/////////////////////
  }
})();
