var clear = function (event) {
    event.target.remove();
    $("input.name").remove();
    $('label').remove();
};


var application = function () {
    var buttonClicked = function (event) {
        var name = $("input.name").val();
        if ("jekyll" === name.toLowerCase()) {
            alert("Thank you for authorization!");
            clear(event);


           $("body").append('<p><label>What did you do today?</label></p>');
           $("body").append('<textarea class="myEvents"></textarea>');
           $("body").append('<p><input class="numberOfHours" type="text">How much times I spent today?</p>');
           $("body").append('<button  class="submit">Enter</button>');

           $("button").click(function() {
             $('.numberOfHours').val('');
             $('.myEvents').val('');
            alert("Activity has beem logged!");

          });


             }

       else {
            alert("Wrong name!");
        }
    };
    $("button.submit").click(buttonClicked);

};


$(document).ready(application);
