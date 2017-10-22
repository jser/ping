// LICENSE : MIT
"use strict";
function createIssue(issueData, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (200 <= xhr.status && xhr.status < 300) {
            callback(null, xhr.responseText);
        } else {
            callback(new Error(xhr.responseText));
        }
    };
    xhr.onerror = function() {
        callback(new Error(xhr.responseText));
    };
    xhr.open("POST", "https://rihxwdqmx9.execute-api.ap-northeast-1.amazonaws.com/prod/ping/create");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(issueData));
}
var URL = location.href.replace(/([?&]utm_(source|medium|campaign|content)=.+)/ig, '');
createIssue({
    url: URL
}, function(error, response) {
    if (error) {
        alert(error);
        console.error("error", error, response);
    } else {
        alert("success");
        console.log("success", response);
    }
});