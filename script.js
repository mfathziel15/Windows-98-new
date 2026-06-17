function openFolder(id) {
    console.log(id);
    document.getElementById(id).style.display = "block";
}

function closeFolder(id) {
    document.getElementById(id).style.display = "none";
}


document.querySelectorAll(".window").forEach(windowEl => {

    const header = windowEl.querySelector(".title-bar");

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    function startDrag(clientX, clientY) {
        isDragging = true;

        offsetX = clientX - windowEl.offsetLeft;
        offsetY = clientY - windowEl.offsetTop;
    }

    function drag(clientX, clientY) {

        if (!isDragging) return;

        let newLeft = clientX - offsetX;
        let newTop = clientY - offsetY;

        const maxX =
            window.innerWidth - windowEl.offsetWidth;

        const maxY =
            window.innerHeight - windowEl.offsetHeight;

        newLeft = Math.max(0, Math.min(newLeft, maxX));
        newTop = Math.max(0, Math.min(newTop, maxY));

        windowEl.style.left = newLeft + "px";
        windowEl.style.top = newTop + "px";
    }

    function stopDrag() {
        isDragging = false;
    }

    /* Mouse */

    header.addEventListener("mousedown", (e) => {
        startDrag(e.clientX, e.clientY);
    });

    document.addEventListener("mousemove", (e) => {
        drag(e.clientX, e.clientY);
    });

    document.addEventListener("mouseup", stopDrag);

    /* Touch */

    header.addEventListener("touchstart", (e) => {
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    });

    document.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        drag(touch.clientX, touch.clientY);
    });

    document.addEventListener("touchend", stopDrag);

});

function updateClock(){
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
}

setInterval(updateClock,1000);
updateClock();

function toggleStartMenu() {
  const menu = document.getElementById("startMenu");
  menu.classList.toggle("hidden");
}

// klik di luar buat nutup
document.addEventListener("click", function (e) {
  const menu = document.getElementById("startMenu");
  const btn = document.querySelector(".start-btn");

  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.add("hidden");
  }
});
function toggleProgramsSubmenu(e) {
  e.stopPropagation(); // biar gak nutup start menu

  const submenu = document.getElementById("programsSubmenu");
  submenu.classList.toggle("hidden");
}