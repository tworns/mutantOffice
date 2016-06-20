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
    });
  }
})();
