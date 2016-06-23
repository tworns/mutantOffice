(function(){
  'use strict';
  angular.module('mutantApp.mutantList').controller('MutantListController', MutantListController);
  MutantListController.$inject = ['mutantService','firebaseDataService', 'textMessageService'];
  function MutantListController( mutantService,firebaseDataService, textMessageService){
    var vm = this;
    vm.mutants = mutantService.mutants;
    vm.addMutant = addMutant;
    vm.newMutant = new mutantService.Mutant();
    vm.toggleComplete = toggleComplete;
    vm.deleteMutant = deleteMutant;
    vm.sendText = sendText;

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant(); //need new here, still calling constructor
    }

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
