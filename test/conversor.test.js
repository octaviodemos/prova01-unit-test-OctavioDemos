const Conversor = require("../src/conversor");

describe("conversor", () => {
  let conv;

  beforeEach(() => {
    conv = new Conversor();
  });

  test("deve converter celsius para fahrenheit", () => {
    // Arrange
    const temperatura = 0;

    // Act
    const resultado = conv.celsiusParaFahrenheit(temperatura);

    // Assert
    expect(resultado).toBe(32);
  });

  test("deve converter fahrenheit para celsius", () => {
    // Arrange
    const temperatura = 32;

    // Act
    const resultado = conv.fahrenheitParaCelsius(temperatura);

    // Assert
    expect(resultado).toBe(0);
  });

  test("deve converter metros para centimetros", () => {
    // Arrange
    const metros = 1;

    // Act
    const resultado = conv.metrosParaCentimetros(metros);

    // Assert
    expect(resultado).toBe(100);
  });

  test("deve converter centimetros para metros", () => {
    // Arrange
    const centimetros = 250;

    // Act
    const resultado = conv.centimetrosParaMetros(centimetros);

    // Assert
    expect(resultado).toBe(2.5);
  });

  test("deve converter quilos para gramas", () => {
    // Arrange
    const quilos = 2;

    // Act
    const resultado = conv.quilosParaGramas(quilos);

    // Assert
    expect(resultado).toBe(2000);
  });

  test("deve converter gramas para quilos", () => {
    // Arrange
    const gramas = 500;

    // Act
    const resultado = conv.gramasParaQuilos(gramas);

    // Assert
    expect(resultado).toBe(0.5);
  });

  test("deve converter horas para minutos", () => {
    // Arrange
    const horas = 2;

    // Act
    const resultado = conv.horasParaMinutos(horas);

    // Assert
    expect(resultado).toBe(120);
  });

  test("deve converter minutos para segundos", () => {
    // Arrange
    const minutos = 3;

    // Act
    const resultado = conv.minutosParaSegundos(minutos);

    // Assert
    expect(resultado).toBe(180);
  });

  test("deve converter dias para horas", () => {
    // Arrange
    const dias = 1;

    // Act
    const resultado = conv.diasParaHoras(dias);

    // Assert
    expect(resultado).toBe(24);
  });

  test("deve converter semanas para dias", () => {
    // Arrange
    const semanas = 2;

    // Act
    const resultado = conv.semanasParaDias(semanas);

    // Assert
    expect(resultado).toBe(14);
  });

  test("deve converter reais para centavos", () => {
    // Arrange
    const reais = 1.5;

    // Act
    const resultado = conv.reaisParaCentavos(reais);

    // Assert
    expect(resultado).toBe(150);
  });

  test("deve converter centavos para reais", () => {
    // Arrange
    const centavos = 250;

    // Act
    const resultado = conv.centavosParaReais(centavos);

    // Assert
    expect(resultado).toBe(2.5);
  });

  test("deve converter quilometros para metros", () => {
    // Arrange
    const quilometros = 1;

    // Act
    const resultado = conv.kmParaMetros(quilometros);

    // Assert
    expect(resultado).toBe(1000);
  });

  test("deve converter metros para quilometros", () => {
    // Arrange
    const metros = 500;

    // Act
    const resultado = conv.metrosParaKm(metros);

    // Assert
    expect(resultado).toBe(0.5);
  });

  test("deve converter polegadas para centimetros", () => {
    // Arrange
    const polegadas = 1;

    // Act
    const resultado = conv.polegadasParaCm(polegadas);

    // Assert
    expect(resultado).toBeCloseTo(2.54);
  });

  test("deve converter centimetros para polegadas", () => {
    // Arrange
    const centimetros = 2.54;

    // Act
    const resultado = conv.cmParaPolegadas(centimetros);

    // Assert
    expect(resultado).toBeCloseTo(1);
  });

  test("deve converter anos para meses", () => {
    // Arrange
    const anos = 2;

    // Act
    const resultado = conv.anosParaMeses(anos);

    // Assert
    expect(resultado).toBe(24);
  });

  test("deve converter meses para dias", () => {
    // Arrange
    const meses = 1;

    // Act
    const resultado = conv.mesesParaDias(meses);

    // Assert
    expect(resultado).toBe(30);
  });

  test("deve converter bytes para kilobytes", () => {
    // Arrange
    const bytes = 1024;

    // Act
    const resultado = conv.bytesParaKb(bytes);

    // Assert
    expect(resultado).toBe(1);
  });

  test("deve converter kilobytes para bytes", () => {
    // Arrange
    const kilobytes = 1;

    // Act
    const resultado = conv.kbParaBytes(kilobytes);

    // Assert
    expect(resultado).toBe(1024);
  });
});