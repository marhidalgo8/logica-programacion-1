function analizar () {
const n1 = parseFloat(document.getElementById('n1').value);
const n2 = parseFloat(document.getElementById('n2').value);
const n3 = parseFloat(document.getElementById('n3').value);
const resultado = document.getElementById('resultado');

if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultado.innerHTML = "Por favor, ingresa los tres nÃºmeros.";
        return;
    }

    if (n1 === n2 && n2 === n3) {
        resultado.innerHTML = `Los nÃºmeros son iguales: ${n1}, ${n2}, ${n3}`;
    } else {
        let nums = [n1, n2, n3];
        
        let mayorAMenor = [...nums].sort((a, b) => b - a);
        let menorAMayor = [...nums].sort((a, b) => a - b);

        resultado.innerHTML = `
            <p>De mayor a menor: ${mayorAMenor.join(', ')}</p>
            <p>De menor a mayor: ${menorAMayor.join(', ')}</p>
            <hr>
            <p>Mayor: ${mayorAMenor[0]}</p>
            <p>Centro: ${mayorAMenor[1]}</p>
            <p>Menor: ${mayorAMenor[2]}</p>
        `;
    }
}//function
