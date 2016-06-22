(function(){
  'use strict';
  angular.module('mutantApp.mutantList').controller('MutantListController', MutantListController);
  MutantListController.$inject = ['$firebaseArray'];
  function MutantListController($firebaseArray){
    var vm = this;
    var mutantsRef = firebase.database().ref().child('mutants');
    var textRef = firebase.database().ref().child('texts');
    vm.mutants = $firebaseArray(mutantsRef);
    vm.addMutant = addMutant;
    vm.toggleComplete = toggleComplete;
    vm.deleteMutant = deleteMutant;
    vm.sendText = sendText;

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new Mutant();
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
