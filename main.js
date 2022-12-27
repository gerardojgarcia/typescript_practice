var containerEl = document.getElementById('container');
containerEl.innerHTML = "<h1 class=\"title\">Hello Everybody this is typescript practice</h1>";
var titleEl = document.querySelector('.title');
console.log(titleEl);
function greeter(person) {
    return "Hello, " + person;
}
var user = "Gerardo Garcia";
document.body.textContent = greeter(user);
