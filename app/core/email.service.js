(function(){
  'use strict';

  angular.module('mutantApp.core').factory('emailService', emailService);
  emailService.$inject = ['firebaseDataService'];
  function emailService(firebaseDataService){
    var service = {
      sendEmail: sendEmail
    };
    return service;
///////////////////FUNCTIONS BELOW///////////////////////
  function sendEmail(email){
    var newEmail = {
      addr: email,
      msg: 'Thank you for registering with Mutant Office!',
    };
    console.log("SEND EMAIL::" + newEmail.msg);
    firebaseDataService.email.push(newEmail);
  }
  }
})();
