(function(){
  'use strict';
  angular.module('mutantApp.auth')
  .controller('AuthController',AuthController);
  AuthController.$inject = ['$firebaseAuth'];
  function AuthController($firebaseAuth) {
    var vm = this;
    var auth = $firebaseAuth();
    vm.register = register;
    vm.login = login;
    vm.logout = logout;
    vm.user = {
      email: '',
      password: ''
    };
    function register(user){
      return auth.$createUserWithEmailAndPassword(user.email,user.password).then(function(){
        vm.login(user);
      }).catch(function(error){
          console.log(error);
      });
    }

  function login(user){
    return auth.$signInWithEmailAndPassword(user.email,user.password)
    .then(function(loggedInUser){
      //$state.go('mutantList');
      console.log("GO MUTANTLIST");
    })
    .catch(function(error){console.log(error);});
  }
  function logout() {
     $signout();
     console.log('GO HOME');
     //$state.go('home');
  }
}
})();
