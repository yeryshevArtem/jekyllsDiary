var application = function () {
    var body = $("body");

    showAuthorizationWindow(body);

    $("button.submitAuthorization").click(function (event) {
        var name = $("input.name").val();
        if ("jekyll" === name.toLowerCase()) {
            alert("Thank you for authorization!");

            clear(event);
            takeANote(body);

            $("button.submitNote").click(function() {
                var activity = $(".activity").val();
                var timeSpent = $(".timeSpent").val();

                clearActivityFields(body);
                displayActivity(activity, timeSpent);

                alert("Activity has been logged!");
            });
        } else {
            alert("Wrong name!");
        }
    });
};

$(document).ready(application);

var clear = function (event) {
    event.target.remove();
    $("input.name").remove();
    $('label').remove();
};

var takeANote = function (body) {
    body.append('<label class="">Enter activity:</label>');
    body.append('<textarea class="activity form-control"></textarea>');
    body.append('<label class="">Time spent:</label>');
    body.append('<input class="timeSpent form-control" type="text">');
    body.append('<button  class="submitNote btn btn-primary">Enter</button>');
};

var showAuthorizationWindow = function (body) {
    body.append('<label class="">Enter your name</label>');
    body.append('<input type="text" class="name form-control">');
    body.append('<button class="submitAuthorization btn btn-primary">Submit</button>');
};

var clearActivityFields = function (bodyTag) {
    console.log(bodyTag.find('.timeSpent'));
    console.log(bodyTag.find('.activity'));

    bodyTag.find('.timeSpent').val('');
    bodyTag.find('.activity').val('');
};

var displayActivity = function (someActivity, spentTime) {
    $("body").append("<p>" + someActivity + " : " + spentTime + "</p>");
};