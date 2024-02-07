document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var btn = document.querySelector("button.close");
    var restart = document.getElementById("restart");

    btn.onclick = function () {
        modal.style.display = "block";
    }

    restart.onclick = function () {
        modal.style.display = "block";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
        }
    }

    const gridForm = document.getElementById("grid-form");
    const gridContainer = document.getElementById("grid-container");

    function generateGrid(rows, columns, bombs) {
        gridContainer.innerHTML = "";

        gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

        const totalCells = rows * columns;
        const bombIndices = generateRandomIndices(totalCells, bombs);

        for (let i = 0; i < totalCells; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            if (bombIndices.includes(i)) {
                gridItem.innerText = "X";
            }
            gridContainer.appendChild(gridItem);
        }
    }

    function generateRandomIndices(totalCells, bombs) {
        const bombIndices = [];
        while (bombIndices.length < bombs) {
            const randomIndex = Math.floor(Math.random() * totalCells);
            if (!bombIndices.includes(randomIndex)) {
                bombIndices.push(randomIndex);
            }
        }
        return bombIndices;
    }

    gridForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const rows = parseInt(document.getElementById("rows").value);
        const columns = parseInt(document.getElementById("columns").value);
        const bombs = parseInt(document.getElementById("bombs").value);
        generateGrid(rows, columns, bombs);
        modal.style.display = "none";
    });

});

function gameLogic() {
    // Fonction pour la logique du jeu
}


