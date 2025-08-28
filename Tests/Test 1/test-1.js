const tooltipData = {
  goku: {
    img: "https://static.wikia.nocookie.net/dragonball/images/6/65/Goku_Dragon_Ball_Super.png",
    desc: "Goku is the cheerful and powerful Saiyan protagonist of Dragon Ball, known for his love of fighting and protecting Earth."
  }
};

const tooltip = document.getElementById('tooltip');

document.querySelectorAll('.tooltip-word').forEach(word => {
  word.addEventListener('mouseenter', (e) => {
    const key = word.dataset.tooltip;
    if (tooltipData[key]) {
      tooltip.innerHTML = `
        <img src="${tooltipData[key].img}" alt="${key}">
        <div>${tooltipData[key].desc}</div>
      `;
      tooltip.style.display = 'block';
      const rect = word.getBoundingClientRect();
      tooltip.style.top = `${rect.bottom + window.scrollY + 8}px`;
      tooltip.style.left = `${rect.left + window.scrollX}px`;
    }
  });

  word.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});