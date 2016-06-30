(function(){
  'use strict';
  angular.module('mutantApp.mutantList').controller('MutantListController', MutantListController);
  MutantListController.$inject = ['mutantService', 'textMessageService', 'user', 'emailService'];
  function MutantListController( mutantService, textMessageService, user, emailService){
    var vm = this;
    vm.mutants = mutantService.mutantsByUser(user.uid);
    
    ////////////////////////////FUNCTIONS BELOW//////////////////////

  }
})();
