$(document).ready(function(){
//Problem: Hints are shown even when the form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8
}

function passwordMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && passwordMatching();
}

function passwordEvent() {
  if(isPasswordValid()) {
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

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  //Find out if password is valid

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
});
