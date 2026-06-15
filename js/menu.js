document.addEventListener("DOMContentLoaded", () => {

    const menuButton =
        document.getElementById("menuButton");

    const sidebar =
        document.getElementById("sidebar");

    console.log(menuButton);
    console.log(sidebar);

    menuButton.addEventListener("click", () => {

        console.log("CLICK");

        sidebar.classList.toggle("active");

    });

});