    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1" />
</head>
<body ng-app="HistoryController as ctrl">
        <div class="col-sm-12">
           <div class="panel panel-default">
           <div class="panel-heading">Search by condition</div>
            <div class="panel-body">
                <div class="col-sm-6">
                    <div class="form-group">
                       <label class="control-label col-sm-3">Name</label>
                       <div class="col-sm-9">
                        <input class="form-control" type="text" ng-model="SearchModel.Name" placeholder="Name">    
                       </div>
                    </div>
                    <div class="form-group">
                       <label class="control-label col-sm-3">Employee ID</label>
                       <div class="col-sm-9">
                       <input class="form-control" type="text" ng-model="SearchModel.EmployeeID" placeholder="Employee ID">    
                       </div>
                    </div>
                </div>
                <div class="col-sm-6">
                       <md-datepicker ng-model="ctrl.FromDate" md-placeholder="From Date"></md-datepicker>
                       <md-datepicker ng-model="ctrl.ToDate" md-placeholder="To Date"></md-datepicker>
                       <br>
                       <button style="text-align:right" type="button" class="btn btn-primary" ng-click="SearchModel.Search()">Search</button>
                </div>
            </div>
            </div>
        </div>
        <div class="col-sm-12">
        <div class="panel panel-default">
           <div class="panel-heading">Result Search</div>
            <div class="panel-body">
            <table class="table">
                <tr>
                    <th>#</th>
                    <th> EmployeeID </th>
                    <th> Name </th>
                    <th> Status </th>
                    <th> Date </th>
                </tr>
                <tr ng-repeat="history in historys">
                    <td>{{ $index + 1 }}</td>
                    <td>{{ history.EmployeeID }}</td>
                    <td>{{ history.Name }}</td>
                    <td>{{ history.Date }}</td>
                </tr>
            </table>
            </div>
            </div>
        </div>
</div>
</body>
</html>