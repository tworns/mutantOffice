(function(){
  'use strict';
angular.module('mutantApp.home').config(configFunc);
configFunc.$inject = ['$stateProvider'];
function configFunc ($stateProvider){
   $stateProvider.state('home',{
     url: '/',
     templateUrl: 'app/home/home.html',
   });
 }
})();
