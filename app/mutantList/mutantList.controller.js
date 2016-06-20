(function(){
  'use strict';
  angular.module('mutantApp.mutantList').controller('MutantListController', MutantListController);
  // MutantListController.$inject = [] ;
  function MutantListController(){
    var vm = this;
    vm.mutants = ['Wolverine', 'X23', 'Dave'];
    vm.addMutant = addMutant;
    //vm.newMutant = newMutant;
    function addMutant() {
      vm.mutants.push(vm.newMutant.name);
    }
    function Mutant() {
      this.name = '';
      this.phone ='';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }
    function newMutant() {
  }
  }
})();
