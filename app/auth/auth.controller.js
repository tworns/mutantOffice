(function(){
  'use strict';
  angular.module('mutantApp.auth')
  .controller('AuthController',AuthController);
  AuthController.$inject = ['$state', 'authService', 'emailService'];
  function AuthController($state, authService, emailService) {
    var vm = this;
    vm.register = register;
    vm.login = login;

    vm.user = {
      email: '',
      password: ''
    };
    function register(user){
      return authService.register(user)
      .then(function(){
        vm.login(user);
      }).then(function(){
        console.log("USER EMAIL::" +user.email);
        emailService.sendEmail(user.email);
      })
      .catch(function(error){
          console.log(error);
      });
    }

  function login(user){
    return authService.login(user)
    .then(function(loggedInUser){
      $state.go('mutantList');
    })
    .catch(function(error){console.log(error);});
  }

}
})();
