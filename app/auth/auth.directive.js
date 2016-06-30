(function() {
  'use strict';
  angular.module('mutantApp.auth').directive('xtAuth', xtAuth);

  function xtAuth (){
    return {
      templateUrl: 'app/auth/authForm.html',
      restrict: 'E',
      controller: XtAuthController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
          form: '@',

      },
    };
  }

  XtAuthController.$inject = ['$state','authService'];
  function XtAuthController($state,authService){
    var vm = this;
    vm.register = register;
    vm.login = login;
    vm.error = null;
      vm.start = start;
    vm.user = {
      email: '',
      password: ''
    };


  ///////////Functions/////////
  function start(user) {
    if(vm.form === 'Login'){
      console.log("LOGIN:: SUCCESS");
      return vm.login(user);
    }
     if(vm.form === 'Register'){
      console.log("REGISTER:: SUCCESS");
      return vm.register(user);
    }
    else {
      console.log( 'INVALID FORM::' + vm.form);
    }
  }
      function register(user){
        return authService.register(user)
        .then(function(){
          vm.login(user);
        }).then(function(){
          console.log("USER EMAIL::" +user.email);
          emailService.sendEmail(user.email);
        })
        .catch(function(error){
          vm.error = error;
          });
      }

    function login(user){
      return authService.login(user)
      .then(function(loggedInUser){
        $state.go('mutantList');
      })
      .catch(function(error){vm.error = error;});
    }
}
})();
