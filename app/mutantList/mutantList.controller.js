(function(){
  'use strict';
  angular.module('mutantApp.mutantList').controller('MutantListController', MutantListController);
  // MutantListController.$inject = [] ;
  function MutantListController(){
    var vm = this;
    vm.mutants = ['Wolverine', 'X23', 'Dave'];
  }
})();
