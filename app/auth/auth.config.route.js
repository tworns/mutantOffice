(function(){
  'use strict';
  angular.module('mutantApp.auth').config(configFunc);

  configFunc.$inject = ['$stateProvider'];
  function configFunc($stateProvider){
    $stateProvider.state('register',{
      url:  '/register',
      templateUrl: 'app/auth/register.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
  }
})();
