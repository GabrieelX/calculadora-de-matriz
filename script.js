// Função para mostrar ou esconder os termos independentes
function toggleTermosIndependentes() {
    const aplicacao = document.getElementById('aplicacao').value;
    const termosIndependentesDiv = document.getElementById('termosIndependentes');

    if (aplicacao === 'cramer') {
      termosIndependentesDiv.style.display = 'block';  // Mostrar campos
    } else {
      termosIndependentesDiv.style.display = 'none';   // Esconder campos
    }
  }

  function calcular() {
    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a13 = parseFloat(document.getElementById('a13').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);
    const a23 = parseFloat(document.getElementById('a23').value);
    const a31 = parseFloat(document.getElementById('a31').value);
    const a32 = parseFloat(document.getElementById('a32').value);
    const a33 = parseFloat(document.getElementById('a33').value);

    const aplicacao = document.getElementById('aplicacao').value;
    let resultado = '';

    if (aplicacao === "determinante") {
      const determinante = a11 * (a22 * a33 - a23 * a32) -
                           a12 * (a21 * a33 - a23 * a31) +
                           a13 * (a21 * a32 - a22 * a31);
      resultado = `Determinante: ${determinante}`;
    } 
    else if (aplicacao === "colinear") {
      const detColinear = a11 * (a22 * a33 - a23 * a32) -
                          a12 * (a21 * a33 - a23 * a31) +
                          a13 * (a21 * a32 - a22 * a31);
      if (detColinear === 0) {
        resultado = 'Os pontos são colineares (alinhados).';
      } else {
        resultado = 'Os pontos NÃO são colineares.';
      }
    } 
    else if (aplicacao === "triangulo") {
      const area = 0.5 * Math.abs(a11 * (a22 * a33 - a23 * a32) -
                                   a12 * (a21 * a33 - a23 * a31) +
                                   a13 * (a21 * a32 - a22 * a31));
      resultado = `A área do triângulo é: ${area}`;
    } 
    else if (aplicacao === "cramer") {
      const b1 = parseFloat(document.getElementById('b1').value);
      const b2 = parseFloat(document.getElementById('b2').value);
      const b3 = parseFloat(document.getElementById('b3').value);

      // Determinante da matriz principal D
      const D = a11 * (a22 * a33 - a23 * a32) -
                a12 * (a21 * a33 - a23 * a31) +
                a13 * (a21 * a32 - a22 * a31);

      if (D === 0) {
        resultado = 'O sistema não tem solução única (determinante = 0).';
      } else {
        const Dx = b1 * (a22 * a33 - a23 * a32) -
                   a12 * (b2 * a33 - b3 * a32) +
                   a13 * (b2 * a32 - a22 * b3);

        const Dy = a11 * (b2 * a33 - b3 * a32) -
                   b1 * (a21 * a33 - a23 * a31) +
                   a13 * (a21 * b3 - b2 * a31);

        const Dz = a11 * (a22 * b3 - b2 * a32) -
                   a12 * (a21 * b3 - b1 * a31) +
                   b1 * (a21 * a32 - a22 * a31);

        const x = Dx / D;
        const y = Dy / D;
        const z = Dz / D;

        resultado = `Determinante D: ${D}\nDeterminante Dx: ${Dx}\nDeterminante Dy: ${Dy}\nDeterminante Dz: ${Dz}\nSoluções:\nx = ${x}, y = ${y}, z = ${z}`;
      }
    }

    document.getElementById('resultado').innerText = resultado;
  }