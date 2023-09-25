const buttons = document.querySelectorAll(".btn");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);
        showMessage(result, playerChoice, computerChoice);
    });
});

resetButton.addEventListener("click", () => {
    message.textContent = "";
});

function getComputerChoice() {
    const choices = ["tas", "kagit", "makas"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(player, computer) {
    if (player === computer) {
        return "Berabere!";
    } else if (
        (player === "tas" && computer === "makas") ||
        (player === "kagit" && computer === "tas") ||
        (player === "makas" && computer === "kagit")
    ) {
        return "Oyuncu Kazandı!";
    } else {
        return "Bilgisayar Kazandı!";
    }
}

function showMessage(result, player, computer) {
    message.textContent = `Oyuncu: ${player} - Bilgisayar: ${computer} - Sonuç: ${result}`;
}
