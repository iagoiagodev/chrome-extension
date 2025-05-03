const container = document.querySelector(`#container`);

container.innerHTML += `
  <div class="buttons">
    <button class="primary-button" onclick="buy()">buy!</button>
  </div>
`;

function buy() {
  container.innerHTML += `<p>Thank you for buying!</p>`;
  console.log('Buy button clicked!');
}
