(function(){
  'use strict';
  angular.module('mutantApp.mutantList').controller('MutantListController', MutantListController);
  MutantListController.$inject = ['mutantService','firebaseDataService'];
  function MutantListController( mutantService,firebaseDataService){
    var vm = this;
    var textRef = firebaseDataService.root.child('texts');
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
      var newText = {
        topic: mutant.topic,
        name: mutant.name,
        phone: mutant.phone
      };
      textRef.push(newText);
      vm.mutants.$save(mutant);

    }
  }
})();
