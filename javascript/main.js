document.addEventListener("DOMContentLoaded", () => {

    // Declare Relevant Variables
    const navToggleButton = document.getElementById(`navToggleButton`);
    const hamburgerComponents = navToggleButton.getElementsByClassName("hamburgerComponent");

    console.log(hamburgerComponents)

    const hiddenNavList = document.getElementById(`hiddenNavList`);



    // Detect Toggle Button Click
    navToggleButton.addEventListener(`click`, e => {

        // Apply Class to Hamburger Icon
        for (let component of hamburgerComponents) {
            // Apply Relevant Class
            component.classList.contains("active") ? component.classList.remove("active") : component.classList.add("active");
        };

        // Apply Relevant Class
        hiddenNavList.classList.contains("active") ? hiddenNavList.classList.remove("active") : hiddenNavList.classList.add("active");
    });

});