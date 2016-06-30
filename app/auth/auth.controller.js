(function(){
  'use strict';
  angular.module('mutantApp.auth')
  .controller('AuthController',AuthController);
  AuthController.$inject = ['$state', 'authService', 'emailService'];
  function AuthController($state, authService, emailService) {
    var vm = this;
    vm.error = null;
    ///functions///

}
})();
