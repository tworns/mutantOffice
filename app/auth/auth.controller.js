(function(){
  'use strict';
  angular.module('mutantApp.auth')
  .controller('AuthController',AuthController);
  AuthController.$inject = ['$firebaseAuth', '$state'];
  function AuthController($firebaseAuth, $state) {
    var vm = this;
    var auth = $firebaseAuth();
    vm.register = register;
    vm.login = login;
    vm.logout = logout;
    vm.user = {
      email: '',
      password: ''
    };
    function register(user, $state){
      return auth.$createUserWithEmailAndPassword(user.email,user.password).then(function(){
        vm.login(user, $state);
      }).catch(function(error){
          console.log(error);
      });
    }

  function login(user, $state){
    return auth.$signInWithEmailAndPassword(user.email,user.password)
    .then(function(loggedInUser){
      $state.go('mutantList');
      console.log("GO MUTANTLIST");
    })
    .catch(function(error){console.log(error);});
  }
  function logout($state) {
     auth.$signOut();
      console.log('GO HOME');
       $state.go('home');
    }
}
})();
