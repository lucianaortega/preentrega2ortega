const exercises = [
    { name: "Pino", points: 10 },
    { name: "Backlever", points: 8 },
    { name: "Front", points: 12 },
    { name: "Fullplanche", points: 15 },
    { name: "Maltes", points: 13 }
  ];

  function findExercise(name) {
    return exercises.find(exercise => exercise.name.toLowerCase() === name.toLowerCase());
  }

  function startSimulation() {
    const userInput = [];
    let input = "";
    
    while (input !== "fin") {
      input = prompt("Ingresa el nombre del estatico de calistenia que realizaste (o escribe 'fin' para terminar):");
      if (input.toLowerCase() === "fin") {
        break;
      }
      
      const exercise = findExercise(input);
      if (exercise) {
        userInput.push(exercise);
      } else {
        alert("Ejercicio no valido en competencia.");
      }
    }
    
    const totalPoints = userInput.reduce((total, exercise) => total + exercise.points, 0);
    alert(`Has acumulado un total de ${totalPoints} puntos. ¡Eres una bestia!`);
  }

  // Borrador 1 de posible conexion entr html y js de prueba no se tiene en cuenta en esta entrega
  const startButton = document.createElement("button");
  startButton.textContent = "Comenzar Simulación";
  startButton.addEventListener("click", startSimulation);

  document.body.appendChild(startButton);

