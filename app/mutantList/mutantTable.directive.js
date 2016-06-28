(function(){
  'use strict';
  angular.module('mutantApp.mutantList').directive('xtMutantTable', xtMutantTable);

  function xtMutantTable(){
    return {
      templateUrl: 'app/mutantList/mutantTable.html',
      restrict: 'E',
      controller: MutantTableController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        mutants: '='
      },
    };
  }

  MutantTableController.$inject = ['mutantService'];
  function MutantTableController(mutantService){
    var vm = this;
    vm.toggleComplete = toggleComplete;
    vm.deleteMutant = deleteMutant;
    vm.sendText = sendText;
  ///////////FUNCTIONS/////////
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
