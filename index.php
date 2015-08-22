<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Diary</title>
    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript" src="bootstrap.js"></script>
    <script type="text/javascript" src="main.js"></script>
    <link href="bootstrap.css" rel="stylesheet">
</head>
<body>
<button class='create btn btn-primary' data-toggle='modal' data-target='#myModal2'>Create</button>
<div class="modal fade" role="dialog" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit activity</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control id disabled" placeholder="ID" disabled>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control activityDescription" placeholder="Description">
                </div>
                <div class="form-group">
                    <label>Time spent</label>
                    <input type="text" class="form-control spentTime" placeholder="Hours">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary submitEdit">Save changes</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" role="dialog" id="myModal2">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Create activity</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="activity form-control"></textarea>
                </div>
                <div class="form-group">
                    <label>Time spent</label>
                    <input class="timeSpent form-control" type="text">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary submitNote">Submit</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>