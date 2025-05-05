function setup() {
    document.body.style.setProperty('--scrollbar-width', (window.innerWidth - document.body.clientWidth) + 'px')
    update();
}

function update() {
    var earrings = document.getElementById("earrings").checked;
    var glasses = document.getElementById("glasses").checked;
    var hat = document.getElementById("hat").checked;
    var necklace = document.getElementById("necklace").checked;
    var tattoo = document.getElementById("tattoo").checked;
    var hair = document.querySelector('input[name="toggle_option"]:checked').id;
    var image_ids = document.getElementsByClassName("leader");
    for (var i = 0; i < image_ids.length; i++) {
        var image = image_ids[i];
        var earrings_match = image.getAttribute("data-earrings") == "true" || earrings == false;
        var glasses_match = image.getAttribute("data-glasses") == "true" || glasses == false;
        var hat_match = image.getAttribute("data-hat") == "true" || hat == false;
        var necklace_match = image.getAttribute("data-necklace") == "true" || necklace == false;
        var tattoo_match = image.getAttribute("data-tattoo") == "true" || tattoo == false;
        var hair_match = image.getAttribute("data-hair") == hair || hair == "any";
        if (earrings_match && glasses_match && hat_match && necklace_match && tattoo_match && hair_match) {
            // image.style.display = "flex";
            image.style = "width: calc(var(--leader-image-width) - var(--border-width) * 2); margin: var(--space) var(--space); opacity: 1; border-width: var(--border-width);";
        } else {
            // image.style.display = "none";
            image.style = "width: 0; margin: 0 0; opacity: 0; border-width: 0em;";
        }
    }
    var hair_icons = document.getElementsByClassName("hair-icon");
    console.log(hair_icons.length);
    for (var i = 0; i < hair_icons.length; i++) {
        var image = hair_icons[i];
        var hair_match = image.getAttribute("data-hair") == hair;
        if (hair_match) {
            image.style = "opacity: 1;";
        } else {
            image.style = "opacity: 0;";
        }
    }
}
