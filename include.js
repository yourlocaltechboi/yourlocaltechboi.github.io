function parseHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("parsefile");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Whoops! I couldn't load this page";}
                    elmnt.removeAttribute("parsefile");
                    parseHTML();
                }
            } 
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}