(function(){
'use strict';

  angular.module('mutantApp', [
    //Angular Modules
    'ui.router',
    //3rd party modules
    'firebase',
    //custom modules
    'mutantApp.home',
    'mutantApp.mutantList',
    'mutantApp.auth',
    'mutantApp.core',
    'mutantApp.layout',
  ]).config(configFunc).run(runFunc);

  configFunc.$inject = ['$urlRouterProvider'];

  function configFunc( $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  }

  runFunc.$inject = ['$rootScope', '$state'];
  function runFunc($rootScope, $state){
    $rootScope.$on('$stateChangeError',
      function(event, toState, toParams, toFrom, fromParams, error){ //function for rootScope.on
      if(error === 'AUTH_REQUIRED'){
        $state.go('login');
      }
    });
  }
})(); //IIFE
