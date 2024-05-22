function generateSVG(text, textColor, shape) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;
}

module.exports = generateSVG;