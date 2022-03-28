const layersOrder = [
    { name: 'face', number: 3 },
    { name: 'hair', number: 3 },
];
  
const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 9;

module.exports = { layersOrder, format, rarity, defaultEdition };