const Conversor = require("../src/conversor");

describe("Conversor", () => {
  let conv;

  beforeEach(() => {
    conv = new Conversor();
  });

  test("conversões de temperatura (C <-> F)", () => {

    const fFrom0 = conv.celsiusParaFahrenheit(0);
    const cFrom32 = conv.fahrenheitParaCelsius(32);
    const fFrom100 = conv.celsiusParaFahrenheit(100);

    expect(fFrom0).toBe(32);
    expect(cFrom32).toBe(0);
    expect(fFrom100).toBe(212);
  });

  test("metros <-> centimetros", () => {

    const cm = conv.metrosParaCentimetros(1);
    const m = conv.centimetrosParaMetros(250);

    expect(cm).toBe(100);
    expect(m).toBe(2.5);
  });

  test("quilogramas <-> gramas", () => {

    const g = conv.quilosParaGramas(2);
    const kg = conv.gramasParaQuilos(500);

    expect(g).toBe(2000);
    expect(kg).toBe(0.5);
  });

  test("tempo: horas, minutos, segundos, dias, semanas", () => {

    const minutos = conv.horasParaMinutos(2);
    const segundos = conv.minutosParaSegundos(3);
    const horas = conv.diasParaHoras(1);
    const dias = conv.semanasParaDias(2);

    expect(minutos).toBe(120);
    expect(segundos).toBe(180);
    expect(horas).toBe(24);
    expect(dias).toBe(14);
  });

  test("moeda: reais <-> centavos", () => {

    const centavos = conv.reaisParaCentavos(1.5);
    const reais = conv.centavosParaReais(250);

    expect(centavos).toBe(150);
    expect(reais).toBe(2.5);
  });

  test("distância: km <-> m e polegadas <-> cm", () => {

    const metros = conv.kmParaMetros(1);
    const kms = conv.metrosParaKm(500);
    const cmFromPol = conv.polegadasParaCm(1);
    const polFromCm = conv.cmParaPolegadas(2.54);

    expect(metros).toBe(1000);
    expect(kms).toBe(0.5);
    expect(cmFromPol).toBeCloseTo(2.54);
    expect(polFromCm).toBeCloseTo(1);
  });

  test("anos -> meses e meses -> dias (estimativa)", () => {

    const meses = conv.anosParaMeses(2);
    const dias = conv.mesesParaDias(1);

    expect(meses).toBe(24);
    expect(dias).toBe(30);
  });

  test("bytes <-> KB", () => {

    const kb = conv.bytesParaKb(1024);
    const bytes = conv.kbParaBytes(1);

    expect(kb).toBe(1);
    expect(bytes).toBe(1024);
  });
});
