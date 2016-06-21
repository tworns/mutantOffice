(function(){
  'use strict';
  angular.module('mutantApp.mutantList').controller('MutantListController', MutantListController);
  MutantListController.$inject = ['$firebaseArray'];
  function MutantListController($firebaseArray){
    var vm = this;
    var mutantsRef = firebase.database().ref().child('mutants');
    vm.mutants = $firebaseArray(mutantsRef);
    vm.addMutant = addMutant;
    vm.toggleComplete = toggleComplete;
    vm.deleteMutant = deleteMutant;

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
    }
    function Mutant() {
      this.name = '';
      this.phone ='';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }
    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
  }
    function deleteMutant(mutant){
      vm.mutants.$remove(mutant);
    }
  }
})();
