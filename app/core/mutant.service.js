(function() {
  'use strict';
  angular.module('mutantApp.core')
  .factory('mutantService', mutantService);


  function mutantService(){
    var service = {
      Mutant: Mutant,

    };
    return service;
    //////////////////////FUNCTIONS BELOW//////////////////////////

    function Mutant() {
      this.name = '';
      this.phone ='';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }
  }
})();
