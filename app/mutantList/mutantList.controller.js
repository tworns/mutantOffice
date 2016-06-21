(function(){
  'use strict';
  angular.module('mutantApp.mutantList').controller('MutantListController', MutantListController);
  MutantListController.$inject = ['$firebaseArray'];
  function MutantListController($firebaseArray){
    var vm = this;
    var rootRef = firebase.database().ref();
    vm.mutants = $firebaseArray(rootRef);
    vm.addMutant = addMutant;

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
    function newMutant() {
  }
  }
})();
