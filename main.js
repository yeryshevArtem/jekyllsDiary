var application = function () {
    var body = $("body");

    showAuthorizationWindow(body);

    $("a.submitAuthorization").click(function (event) {
        var name = $("input.name").val();
        if ("jekyll" === name.toLowerCase()) {
            alert("Thank you for authorization!");

            clear(event);
            console.log("Follow the white rabbit!");
            takeANote(body);
            displayActivitiesTable();

            $("a.submitNote").click(function() {
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
    console.log("Wake up, Neo!");
    body.append(
        '<form>' +
            '<div class="form-group">' +
                '<label>Enter activity:</label>' +
                '<textarea class="activity form-control"></textarea>' +
            '</div>' +
            '<div class="form-group">' +
                '<label>Time spent:</label>' +
                '<input class="timeSpent form-control" type="text">' +
            '</div>' +
            '<a href="#" class="submitNote btn btn-default">Submit</a>' +
        '</form>'
    );
};

var showAuthorizationWindow = function (body) {
    body.append(
        '<form>' +
            '<div class="form-group">' +
                '<label>Enter your name:</label>' +
                '<input type="text" class="name form-control">' +
            '</div>' +
            '<a href="#" class="submitAuthorization btn btn-default">Submit</a>' +
        '</form>'
    );
};

var clearActivityFields = function (bodyTag) {
    bodyTag.find('.timeSpent').val('');
    bodyTag.find('.activity').val('');
};

var displayActivity = function (someActivity, spentTime) {
    $('table.activities tbody').append(
        "<tr>" +
            "<td>" + someActivity + "</td>" +
            "<td>" + spentTime + "</td>" +
        "</tr>"
    );
};

var displayActivitiesTable = function () {
    $("body").append(
        '<table class="table activities table-striped">' +
            '<thead>' +
                '<tr>' +
                    '<th>Activity</th>' +
                    '<th>Hours spent</th>' +
                '</tr>' +
            '</thead>' +
            '<tbody></tbody>' +
        '</table>'
    );
};