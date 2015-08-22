var application = function () {
    var body = $("body");

    displayActivitiesTable();

    getActivities().then(function () {
        $("button.edit").click(function(event) {
            var currentRow = $(event.target).parent().parent();
            $('input.id').val($(currentRow.find("td")[0]).text());
            $('input.activityDescription').val($(currentRow.find("td")[1]).text());
            $('input.spentTime').val($(currentRow.find("td")[2]).text());
        });

        $("button.delete").click(function (event) {
            var currentRow = $(event.target).parent().parent();
            var id = $(currentRow.find("td")[0]).text();

            $.ajax({
                url: 'http://127.0.0.1:8000/activities',
                method: "DELETE",
                data: JSON.stringify({ activity: { id: id }}),
               success: function (response) {
                    $(event.target).parent().parent().remove();
                    alert("Activity has been deleted!");
                },
                fail: function (response) {
                    alert("Bad request!");
                }
            });
        });

        $("button.submitEdit").click(function (event) {
            var activity = $(".activityDescription").val();
            var timeSpent = $(".spentTime").val();
            var id = $(".id").val();


            var requestData = JSON.stringify({ activity: { description: activity, hours: timeSpent , id: id}});

            $.ajax({
                url: 'http://127.0.0.1:8000/activities',
                method: "PUT",
                data: requestData,
                success: function (response) {
                    $(event.target).closest('#myModal').modal("hide");
                    alert("Activity has been successfully updated!");
                },
                fail: function (response) {
                    console.log(response);
                    alert("Bad request!");
                }
            });
        });
    });

    $("button.submitNote").click(function() {
        var activity = $(".activity").val();
        var timeSpent = $(".timeSpent").val();

        var requestData = JSON.stringify({ activity: { description: activity, hours: timeSpent }});

        var requestParams = {
            url: 'http://127.0.0.1:8000/activities',
            method: "POST",
            data: requestData,
            success: function (response) {
                clearActivityFields(body);
                appendActivity(response.activity);
                alert("Activity has been logged!");
            },
            fail: function (response) {
                console.log(response);
                alert("Bad request!");
            }
        };

        $.ajax(requestParams);
    });
};

$(document).ready(application);


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
        '<th class="id">ID</th>' +
        '<th class="activity">Activity</th>' +
        '<th class="hoursSpent">Hours spent</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '</tbody>' +
        '</table>'
    );
};

var appendActivity = function (activity) {
    console.log(activity);
    $("body > table > tbody").append(
        "<tr>" +
        "<td>" + activity.id + "</td>" +
        "<td>" + activity.description + "</td>" +
        "<td>" + activity.hours + "</td>" +
        "<td><button class='edit btn btn-primary' data-toggle='modal' data-target='#myModal'>Edit</button></td>" +
        "<td><button class='delete btn btn-default'>Delete</button></td>" +
        "</tr>"
    );
};

var getActivities = function () {
    return $.ajax({
        url: 'http://127.0.0.1:8000/activities',
        success: function (response) {
            response.activities.forEach(function (activity) {
                appendActivity(activity);
            });


        },
        fail: function (response) {
            console.log(response);
            alert("Bad request!");
        }
    });
};




