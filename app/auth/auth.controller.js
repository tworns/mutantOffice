(function(){
  'use strict';
  angular.module('mutantApp.auth')
  .controller('AuthController',AuthController);
  AuthController.$inject = ['$state', 'authService', 'emailService'];//, '$scope', 'toaster'];
  function AuthController($state, authService, emailService){//, $scope, toaster) {
    var vm = this;
    vm.error = null;
    //$scope.pop = pop;
    ///functions///
    // function pop () {
    //   toaster.pop('succcess',"TEST", "TEST");
    // }
}
})();
