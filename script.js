function calcularAproveitamento() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const consumo = parseFloat(document.getElementById('consumo').value);

    // Verifica se os campos estão preenchidos 
    if (isNaN(distancia) || distancia <= 0 || isNaN(consumo) || consumo <= 0) {
        alert('Por favor, insira valores para todos os campos.');
        return;
    }

    // Define constantes
    const emissaoPorLitro = 2.7; // kg CO2 por litro de diesel

    // Cálculo do consumo por km
    const consumoPorKm = consumo / 100; // O consumo é em litros para 100 km

    // Cálculo da emissão total de CO2
    const totalConsumo = consumoPorKm * distancia; // Consumo em litros
    const emissaoTotal = totalConsumo * emissaoPorLitro; // kg de CO2 por consumo de diesel

    // Cálculo do aproveitamento de CO2 (exemplo: 25% do CO2 pode ser aproveitado)
    const aproveitamentoCO2 = emissaoTotal * 0.25; // 25% do CO2 é aproveitado

    // Armazenar os resultados no localStorage
    localStorage.setItem('distancia', distancia);
    localStorage.setItem('emissaoTotal', emissaoTotal);
    localStorage.setItem('aproveitamentoCO2', aproveitamentoCO2);

    // Redireciona para a página de resultados
    window.location.href = 'resultado.html';
}
