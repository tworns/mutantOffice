(function(){
  'use strict';
  angular.module('mutantApp.auth')
  .controller('AuthController',AuthController);
  AuthController.$inject = ['$state', 'authService', 'emailService', 'toaster'];
  function AuthController($state, authService, emailService, toaster) {
    var vm = this;
    vm.error = null;
     vm.pop = pop();
    // ///functions///
      function pop () {
      toaster.pop('succcess',"TEST", "TEST");
    }
}
})();
