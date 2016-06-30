(function(){
  'use strict';
  angular.module('mutantApp.mutantList').config(configFunc);

  configFunc.$inject=['$stateProvider'];
  function configFunc($stateProvider){
    $stateProvider.state('mutantList',{
      url: '/mutantlist' ,
      templateUrl: 'app/mutantList/mutantList.html',
      controller: 'MutantListController',
      controllerAs: 'vm',
      resolve: {
        user: resolveUser,
      }
    });
  }
  resolveUser.$inject = ['authService'];
  function resolveUser(authService){
    return authService.auth.$requireSignIn();
  }
})();
