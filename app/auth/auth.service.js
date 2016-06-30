(function(){
  'use strict';

  angular.module('mutantApp.auth').factory('authService',authService);
  authService.$inject = ['$firebaseAuth', 'mutantService'];
  function authService($firebaseAuth, mutantService) {
    var auth = $firebaseAuth();
    var service = {
      auth: auth,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
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
  }
})();
