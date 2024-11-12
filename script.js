const questions = [
    { question: "¿Cuál es la capital de Francia?", options: ["Madrid", "Paris", "Londres", "Roma"], correct: 1 },
    { question: "¿Quién pintó la Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], correct: 2 },
    { question: "¿Cuál es el planeta más cercano al Sol?", options: ["Tierra", "Venus", "Mercurio", "Marte"], correct: 2 },
    { question: "¿Qué gas necesitamos para respirar?", options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correct: 0 },
    { question: "¿En qué año se cayó el Muro de Berlín?", options: ["1987", "1989", "1991", "1990"], correct: 1 },
    { question: "¿Quién escribió 'Cien años de soledad'?", options: ["Pablo Neruda", "Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar"], correct: 1 },
    { question: "¿Qué océano es el más grande?", options: ["Atlántico", "Índico", "Pacífico", "Ártico"], correct: 2 },
    { question: "¿Cuál es el metal más pesado?", options: ["Oro", "Plomo", "Platina", "Uranio"], correct: 3 },
    { question: "¿Cuántos continentes hay en la Tierra?", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "¿Quién inventó la bombilla?", options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Michael Faraday"], correct: 1 },
    { question: "¿Cuál es el animal terrestre más rápido?", options: ["León", "Tigre", "Guepardo", "Elefante"], correct: 2 },
    { question: "¿En qué año se fundó la ONU?", options: ["1942", "1945", "1950", "1960"], correct: 1 },
    { question: "¿Qué instrumento musical tiene teclas?", options: ["Guitarra", "Piano", "Batería", "Saxo"], correct: 1 },
    { question: "¿Qué país tiene forma de bota?", options: ["España", "Italia", "Francia", "México"], correct: 1 },
    { question: "¿Quién escribió 'Don Quijote de la Mancha'?", options: ["Garcilaso de la Vega", "Miguel de Cervantes", "Lope de Vega", "Tirso de Molina"], correct: 1 },
    { question: "¿Qué día celebramos el Día de la Independencia en México?", options: ["5 de mayo", "16 de septiembre", "20 de noviembre", "15 de septiembre"], correct: 1 },
    { question: "¿Cuál es la fórmula química del agua?", options: ["H2O", "CO2", "O2", "H2"], correct: 0 },
    { question: "¿Cuántos países componen la Unión Europea?", options: ["20", "27", "30", "35"], correct: 1 },
    { question: "¿Quién es conocido como el padre de la teoría de la relatividad?", options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Marie Curie"], correct: 1 },
    { question: "¿Qué país inventó el sushi?", options: ["China", "Japón", "Corea del Sur", "Tailandia"], correct: 1 },
    { question: "¿En qué continente está el desierto del Sahara?", options: ["Asia", "África", "América", "Oceanía"], correct: 1 },
    { question: "¿Cómo se llama el sol de nuestra galaxia?", options: ["Sol", "Alpha Centauri", "Sirius", "Betelgeuse"], correct: 0 },
    { question: "¿Cuál es la lengua oficial de Brasil?", options: ["Español", "Inglés", "Portugués", "Francés"], correct: 2 },
    { question: "¿Qué continente está en su mayoría en el hemisferio sur?", options: ["Asia", "América", "África", "Oceanía"], correct: 3 },
];

let currentQuestion = 0;
let correctAnswers = 0;

function startGame() {
    correctAnswers = 0;
    currentQuestion = 0;
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestion >= 10) {
        showResult();
        return;
    }

    const question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    document.getElementById("option1").textContent = question.options[0];
    document.getElementById("option2").textContent = question.options[1];
    document.getElementById("option3").textContent = question.options[2];
    document.getElementById("option4").textContent = question.options[3];
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.correct) {
        correctAnswers++;
    }

    currentQuestion++;
    displayQuestion();
}

function showResult() {
    if (correctAnswers >= 7) {
        alert("¡Felicidades! Has respondido correctamente más del 70%");
    } else {
        alert("Lo siento, sigue intentándolo");
    }
}
