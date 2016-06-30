(function(){
  'use strict';
  angular.module('mutantApp.mutantList').directive('xtMutantForm', xtMutantForm);

  function xtMutantForm(){
    return {
      templateUrl: 'app/mutantList/mutantListForm.html',
      restrict: 'E',
      controller: MutantFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        mutants: '='
      },
    };
  }

  MutantFormController.$inject = ['mutantService'];
  function MutantFormController(mutantService){
    var vm = this;
    vm.mutants = vm.mutants;//mutantService.mutantsByUser(user.uid);
    vm.addMutant = addMutant;
    vm.newMutant = new mutantService.Mutant();

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant(); //need new here, still calling constructor
    }
  }
})();
