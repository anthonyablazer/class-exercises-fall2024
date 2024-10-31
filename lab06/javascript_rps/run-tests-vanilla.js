import { helloWorld, rps } from "./your-task.js";
import { assertPrint, runAllTests } from "./helpers.js";

function testHelloWorld() {
    return assertPrint(
        helloWorld() === "Hello world!",
        'it returns "Hello world!"',
    );
}

function testPaperBeatsRock() {
    return assertPrint(
        rps("rock", "paper") === "Paper wins!",
        "paper beats rock",
    );
}

function testPaperBeatsRockFlipped() {
    return assertPrint(
        rps("paper", "rock") === "Paper wins!",
        "paper beats rock (flipped)",
    );
}

function testScissorsBeatsPaper() {
    return assertPrint(
        rps("paper", "scissors") === "Scissors wins!",
        "scissors beats paper",
    );
}

function testScissorsBeatsPaperFlipped() {
    return assertPrint(
        rps("scissors", "paper") === "Scissors wins!",
        "scissors beats paper (flipped)",
    );
}

function testRockBeatsScissors() {
    return assertPrint(
        rps("scissors", "rock") === "Rock wins!",
        "rock beats scissors",
    );
}

function testRockBeatsScissorsFlipped() {
    return assertPrint(
        rps("rock", "scissors") === "Rock wins!",
        "rock beats scissors (flipped)",
    );
}

function testTieRock() {
    return assertPrint(rps("rock", "rock") === "Tie!", "rock ties with rock");
}

function testTiePaper() {
    return assertPrint(
        rps("paper", "paper") === "Tie!",
        "paper ties with paper",
    );
}

function testTieScissors() {
    return assertPrint(
        rps("scissors", "scissors") === "Tie!",
        "scissors ties with scissors",
    );
}

function testInvalidInput() {
    return assertPrint(
        rps("rock", "lizard") === "Invalid",
        "invalid input (rock, lizard)",
    );
}

function testInvalidInputBoth() {
    return assertPrint(
        rps("lizard", "spock") === "Invalid",
        "invalid input (lizard, spock)",
    );
}

function testEmptyInput() {
    return assertPrint(
        rps("", "") === "Invalid",
        "invalid input (empty strings)",
    );
}

// Add each test function to the runAllTests function:
runAllTests([
    testHelloWorld,
    testPaperBeatsRock,
    testPaperBeatsRockFlipped,
    testScissorsBeatsPaper,
    testScissorsBeatsPaperFlipped,
    testRockBeatsScissors,
    testRockBeatsScissorsFlipped,
    testTieRock,
    testTiePaper,
    testTieScissors,
    testInvalidInput,
    testInvalidInputBoth,
    testEmptyInput,
]);
