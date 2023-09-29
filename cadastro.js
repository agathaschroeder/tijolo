function calcularDigitoVerificador(cep) {
    cep = cep.replace(/\D/g, '');
  
    if (cep.length !== 8) {
      return "CEP inválido";
    }
  
    const digitos = cep.split('').map(Number);
  
    
    let soma = 0;
    for (let i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        soma += digitos[i] * 1;
      } else {
        soma += digitos[i] * 3;
      }
    }
    const primeiroDigito = (10 - (soma % 10)) % 10;
  
    soma = 0;
    for (let i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        soma += digitos[i] * 3;
      } else {
        soma += digitos[i] * 1;
      }
    }
    const segundoDigito = (10 - (soma % 10)) % 10;
  
    return `Dígitos verificadores: ${primeiroDigito}${segundoDigito}`;
  }
  
  const cep = "12345-678";
  const digitosVerificadores = calcularDigitoVerificador(cep);
  console.log(digitosVerificadores);
