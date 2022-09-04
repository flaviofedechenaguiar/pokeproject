import * as Vibrant from 'node-vibrant'

export const getColor = (img, callback) => {
  Vibrant.from(img).getPalette((err, palette) => {
    if (!palette.DarkVibrant) return
    const result = getRGBColor(palette.DarkVibrant._rgb);
    callback(result);
  })
}

const getRGBColor = (rgb) => {
  const [r, g, b] = rgb;
  return `rgb(${r}, ${g}, ${b})`;
}