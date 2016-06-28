(function(){
  'use strict';
  angular.module('mutantApp.mutantList').directive('xtMutantForm', xtMutantForm);

  function xtMutantForm(){
    return {
      templateUrl: 'app/mutantList/mutantListForm.html',
      restrict: 'E',
      controller: MutantFormController,
      controllerAs: 'vm',
      scope: {
        mutants: '='
      },
    };
  }

  MutantFormController.$inject = ['mutantService', '$scope'];
  function MutantFormController(mutantService, $scope){
    var vm = this;
    vm.mutants = $scope.mutants;//mutantService.mutantsByUser(user.uid);
    vm.addMutant = addMutant;
    vm.newMutant = new mutantService.Mutant();

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant(); //need new here, still calling constructor
    }
  }
})();
