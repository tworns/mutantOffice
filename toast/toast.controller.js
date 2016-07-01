(function(){
  'use strict';
  angular.module('mutantApp.toast')
    .controller('ToastController', ToastController);
    ToastController.$inject = ['$scope', 'toaster'];

     function ToastController($scope, toaster) {
       var vm = this;
        vm.pop = pop;

        function pop(){
            toaster.pop('success', "title", "text");
        }
    }
})();
