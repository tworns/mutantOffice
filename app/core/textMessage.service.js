(function(){
  'use strict';

  angular.module('mutantApp.core').factory('textMessageService', textMessageService);
  textMessageService.$inject = ['firebaseDataService'];
  function textMessageService(firebaseDataService){
    var service = {
      sendText: sendText,
    };
    return service;
    /////////////////////FUNCTIONS BELOW/////////////
    function sendText(mutant, mutants){
      var newText = {
        topic: mutant.topic,
        name: mutant.name,
        phone: mutant.phone
      };
      firebaseDataService.text.push(newText);
      mutants.$save(mutant);

    }
  }
})();
