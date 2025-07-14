document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
});

function showModel() {
    document.getElementById("model").classList.toggle("show");
    document.getElementById("model_back").classList.toggle("dis-none");
}

document.getElementById("add_user").addEventListener('click', showModel);
document.getElementById("submit").addEventListener('click', showModel);