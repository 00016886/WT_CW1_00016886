window.onload = function() {
    alert("Welcome to TSS! Call back +1 (888) 403 77 78 and get fuel cards!");
};
function validateForm() {
    let name = document.forms["apply"]["name"].value;
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    let phone = document.forms["apply"]["phone"].value;
    if (phone === "") {
        alert("Put your phone number");
        return false;
    }

    let company  = document.forms["apply"]["company"].value;
    if (company === "") {
        alert("Company name must be filled out");
        return false;
    }
    let trucks = document.forms["apply"]["trucks"].value;
    if (trucks === "") {
        alert("Truck number must be shown");
        return false;
    }
}
