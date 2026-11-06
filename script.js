let nombre = "Will";
let edad = 33;
let estudiandoJS = true;
console.log(nombre);
console.log(typeof edad);
console.log(estudiandoJS);
const ciudad = "Barranquilla";
//ciudad = "Bogotá";
const mesesDelPlan = 6;
const semanasPorMes = 4;
const diasPorSemana = 7;
const inicioDelPlan = new Date(2026, 9, 1); // 1 de octubre de 2026
const hoy = new Date();
const msPorDia = 1000 * 60 * 60 * 24;
const diasEstudiando = Math.floor(
  (hoy - inicioDelPlan) / (1000 * 60 * 60 * 24),
);
semanasEstudiando = diasEstudiando / diasPorSemana;
console.log(ciudad);
console.log(semanasEstudiando);
const profesion = "Ingeniero Mecanico";
const tiempoDelPlan = 6;
let diasDeEstudioPorSemana = 5;
let finDelMes1 = semanasEstudiando >= 4;
console.log(profesion);
console.log(typeof tiempoDelPlan);
console.log(diasDeEstudioPorSemana);
console.log(finDelMes1);
const semanasDelPlan = mesesDelPlan * semanasPorMes;
const avanceDelPlan = semanasEstudiando / semanasDelPlan;
console.log(semanasDelPlan);
console.log((avanceDelPlan * 100).toFixed(1) + "%");
console.log(semanasEstudiando > 4);
console.log(ciudad === "Barranquilla");
console.log(ciudad !== "Bogotá");
if (semanasEstudiando >= 4) {
  console.log("Ya completaste el primer mes");
} else {
  console.log("Aún estás en el Mes 1");
}
if (finDelMes1) {
  console.log("¡Mes 1 completado!");
} else {
  console.log("Aún falta el Mes 1");
}
if (diasDeEstudioPorSemana >= 4) {
  console.log("Muy buen ritmo de estudio");
} else {
  console.log("Vamos, puedes esforzarte un poco más");
}
