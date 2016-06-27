(function(){
  'use strict';

  angular.module('mutantApp.auth').factory('authService',authService);
  authService.$inject = ['$firebaseAuth', 'emailService'];
  function authService($firebaseAuth, emailService) {
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
      console.log("USER EMAIL::" +user.email);
      emailService.sendEmail(user.email);
      return auth.$createUserWithEmailAndPassword(user.email,user.password);
    }
    function login(user){
      return auth.$signInWithEmailAndPassword(user.email,user.password);
    }
    function logout() {
      auth.$signOut();
    }
    function isLoggedIn(){
      return auth.$getAuth();
    }
  }
})();
