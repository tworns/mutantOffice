(function(){
  'use strict';

  angular.module('mutantApp.auth').factory('authService',authService);
  authService.$inject = ['$firebaseAuth', 'mutantService', 'firebaseDataService'];
  function authService($firebaseAuth, mutantService, firebaseDataService) {
    var auth = $firebaseAuth();

    var service = {
      auth: auth,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      // updateName: updateName,
    };
    return service;
    /////////////////FUNCTIONS BELOW//////////////////////////

    function register(user) {
      return auth.$createUserWithEmailAndPassword(user.email,user.password);
    }
    function login(user){
      return auth.$signInWithEmailAndPassword(user.email,user.password);
    }
    function logout() {
      mutantService.reset();
      auth.$signOut();
    }
    function isLoggedIn(){
      return auth.$getAuth();
    }
    function updateName(user){
    return  firebaseDataService.users.child(user.uid).update({displayName: user.displayName});
    }
  }
})();
