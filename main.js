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
        } else {
            alert("Wrong name!");
        }
    };
    $("button.submit").click(buttonClicked);
};

$(document).ready(application);






























