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

  XtAuthController.$inject = ['$state','authService','emailService'];
  function XtAuthController($state,authService, emailService){
    var vm = this;
    vm.register = register;
    vm.login = login;
    vm.error = null;
    vm.start = start;
    //  vm.updateName = updateName;
    vm.user = {
      email: '',
      password: '',
    };


  ///////////Functions/////////
  function start(user) {
    if(vm.form === 'Login'){
      return vm.login(user);
    }
     if(vm.form === 'Register'){
      return vm.register(user);
    }
    else {
    }
  }
      function register(user){
        return authService.register(user)
        .then(function(){
          vm.login(user);
        }).then(function(){
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
    //  function updateName(user){
    //    return authService.updateName(user);
    //  }
}
})();
