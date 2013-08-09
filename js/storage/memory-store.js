var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.employees = [
            {"id": 100, "firstName": "Joel", "lastName": "Maina", "managerId": 0, "location":"Meru", "cellPhone":"0788998899"},
            {"id": 200, "firstName": "Willy", "lastName": "Mumo",  "managerId": 1, "location":"Thika", "cellPhone":"0786688990"},
            {"id": 300, "firstName": "Jim", "lastName": "waweru", "managerId": 2, "location":"Kangundo", "cellPhone":"0722345456"},
            {"id": 400, "firstName": "Pamela", "lastName": "Wanja",  "managerId": 2, "location":"Karatina", "cellPhone":"0733123543"},
        ];

    callLater(successCallback);

}