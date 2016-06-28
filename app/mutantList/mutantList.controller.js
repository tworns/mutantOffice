(function(){
  'use strict';
  angular.module('mutantApp.mutantList').controller('MutantListController', MutantListController);
  MutantListController.$inject = ['mutantService', 'textMessageService', 'user', 'emailService'];
  function MutantListController( mutantService, textMessageService, user, emailService){
    var vm = this;
    vm.mutants = mutantService.mutantsByUser(user.uid);
    vm.toggleComplete = toggleComplete;
    vm.deleteMutant = deleteMutant;
    vm.sendText = sendText;
    ////////////////////////////FUNCTIONS BELOW//////////////////////
    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
  }
    function deleteMutant(mutant){
      vm.mutants.$remove(mutant);
    }
    function sendText(mutant){
      textMessageService.sendText(mutant,vm.mutants);
    }
  }
})();
