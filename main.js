var application = function () {
    var body = $("body");

    takeANote(body);
    displayActivitiesTable();

    $("a.submitNote").click(function() {
        var activity = $(".activity").val();
        var timeSpent = $(".timeSpent").val();

        clearActivityFields(body);
        displayActivity(activity, timeSpent);

        alert("Activity has been logged!");
    });
};

$(document).ready(application);

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