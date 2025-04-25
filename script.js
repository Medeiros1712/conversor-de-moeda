async function converterMoeda() {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const resultado = document.getElementById('resultado');

  if (!amount || amount <= 0) {
    resultado.textContent = 'Por favor, insira um valor válido.';
    return;
  }

  try {
    // Usei o fetch aqui porque é uma forma simples de pegar os dados da API e ela é assíncrona, o que é ótimo pra não travar a interface
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await response.json();

    const taxa = data.rates[to];
    const convertido = (amount * taxa).toFixed(2);

    resultado.textContent = `${amount} ${from} = ${convertido} ${to}`;
  } catch (error) {
    resultado.textContent = 'Erro ao converter. Tente novamente mais tarde.';
    console.error(error);
  }
}
