 // usage: functions showOk, showCancel are passed as arguments to ask
 ask("Do you agree?", showOk, showCancel);
  
//  ask(
//    "Do you agree?",
//    function() { alert("You agreed."); },
//    function() { alert("You canceled the execution."); }
//  );

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }