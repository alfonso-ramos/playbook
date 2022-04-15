const explorers = [
    {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
        "js",
        "c#"
    ],
    missions: {
        onboarding: {
        isFinished: true,
        exercisesFinished: true
        },
        frontend: {
        isFinished: true,
        exercisesFinished: true
        }
    }
    },
    {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
        "js"
    ],
    missions: {
        onboarding: {
        isFinished: false,
        exercisesFinished: false
        },
        frontend: {
        isFinished: false,
        exercisesFinished: false
        }
    }
    },
    {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
        "elixir"
    ],
    missions: {
        onboarding: {
        isFinished: true,
        exercisesFinished: true
        },
        frontend: {
        isFinished: false,
        exercisesFinished: false
        }
    }
    },
]
console.log("Ejercicio 1")
explorers.forEach(explorer => console.log(explorer.name))

console.log("Ejercicio 2")
explorers.forEach(explorer => console.log(explorer.stack))

console.log("Ejercicio 3")
const explorersStack = explorers.map(stackList => stackList.stack)
console.log(explorersStack)

console.log("Ejercicio 4")
const explorersUseJavaScript = explorers.filter(stackList => stackList.stack.includes("js"))
console.log(explorersUseJavaScript)

console.log("Ejercicio 5")
const explorerCDMX = explorers.find(explorer => explorer.city === "CDMX")
console.log(explorerCDMX)

console.log("Ejercicio 6")
const allExercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(allExercises)

console.log("Ejercicio 7")
const exercisesFinishedByExplorer = explorers.some((explorer) => explorer.missions.onboarding.exercisesFinished === true || explorer.missions.frontend.exercisesFinished === true)
console.log(`¿Alguno de los explorers, tiene los ejercicios terminados? ${exercisesFinishedByExplorer}` )

console.log("Ejercicio 8")
const allExercisesFinishedByExplorer = explorers.every((explorer) => explorer.missions.onboarding.exercisesFinished === true && explorer.missions.frontend.exercisesFinished === true)
console.log(`¿Los explorers, tienen todos los ejercicios terminados? ${allExercisesFinishedByExplorer}` )