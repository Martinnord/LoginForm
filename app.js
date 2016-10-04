$(document).ready(function(){
//Problem: Hints are shown even when the form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function passwordEvent() {
  if($password.val().length > 8) {
    //Hide hint if valid
    $password.next().hide();
  } else {
    //Else show hint
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if($password.val() === $confirmPassword.val()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //Else show the hint
    $confirmPassword.next().show();
  }
}

//When event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);
  //Find out if password is valid

//When event happens on confirmation input
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

});
