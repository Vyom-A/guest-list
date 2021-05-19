var guest_names = [];
console.log(guest_names);

function submit_value() {
    var single_guest_name ;
    console.log(single_guest_name);
single_guest_name = document.getElementById("input_name").value;
console.log(single_guest_name);
guest_names.push(single_guest_name);
console.log(guest_names);
document.getElementById("show_guest_names").innerHTML = guest_names ;
} 

function show_values_list() {
    guest_names.length;
for (var i =0 ; i < guest_names.length; i++) {
document.getElementById("show_guest_list").innerHTML=guest_names.join("<br>");
console.log(guest_names);
}
}
function sorting() {
var sorted_value = guest_names.sort();
console.log(sorted_value);
sorted_value.length;
console.log(sorted_value);
for (var j=0; j<sorted_value.length; j++) {
document.getElementById("show_sorted_guest_names").innerHTML=sorted_value.join("<br>");
console.log(sorted_value);
}
}

function name_sorting() {
var sorted_names = guest_names.sort();
console.log(sorted_names);
sorted_names.length;
console.log(sorted_names);
for (var k = 0;k<sorted_names.length;k++) {
document.getElementById("sorted_guest_names").innerHTML = sorted_names;
console.log(sorted_names);
}
}
function searching() {
var search = document.getElementById("search_input").value;
console.log(search);
var found = 0;

for (var v = 0; v<guest_names.length;v++){
if (search == guest_names[v]) {
found = found+1;
console.log(found);
document.getElementById("show_searched_names").innerHTML = search+"&nbsp;"+"is found in your guest list";
}
if (found==0){
    document.getElementById("show_searched_names").innerHTML = search + "&nbsp;" + "is not found in your guest list";
    }
}
}