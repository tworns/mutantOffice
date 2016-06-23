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
    'mutantApp.core'
  ]);

})(); //IIFE
