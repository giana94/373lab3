const getRandomColor = () => {
  const randomColorNumber = Math.floor(Math.random() * 16777215);
  const randomColorHex = randomColorNumber.toString(16);
  return randomColorHex;
};

const generateColorGridData = () => {
  const colorGrid = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      const color = getRandomColor();
      row.push({ color, hexCode: `#${color.toUpperCase()}` });
    }
    colorGrid.push(row);
  }
  return colorGrid;
};

module.exports = { getRandomColor, generateColorGridData };

