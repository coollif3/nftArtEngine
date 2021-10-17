"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Planting One Tree At A Time With KryptoTrees NFT Collection.";
const baseUri = "ipfs://";

const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "AxieInfinity" }
    ]
  },
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "CrypToadz" }
    ]
  },
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "MoonCat" }
    ]
  },
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "ChickenDerby" }
    ]
  },
  {
    growEditionSizeTo: 25,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "CryptoHoots" }
    ]
  },
  {
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "Ethermon" }
    ]
  },
  {
    growEditionSizeTo: 35,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "CryptoKitties" }
    ]
  },
  {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "CryptoFoxes" }
    ]
  },
  {
    growEditionSizeTo: 45,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Gate" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Bitthumb" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 55,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Kraken" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 60,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Kucoin" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 65,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Huobi" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 70,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Bitstamp" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 75,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Coinbase" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 80,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Gemini" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 85,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Bitfinex" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 90,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "FTX" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 95,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Polkadot" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Cardano" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 105,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Ethereum" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 110,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Binance" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 115,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Bitcoin" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 120,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Doge" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 125,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Solana" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 130,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "XRP" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 135,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "SquareInc" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 140,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "ZB" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 145,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Tesla" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 150,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "MicroStrategy" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 155,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Meitu" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 160,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Grayscale" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 165,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "ShibaSwap" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 170,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Raydium" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 175,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "SushiSwap" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 180,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "CurveFinance" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 185,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "OneInch" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 190,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Mdex" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 195,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "PancakeSwap" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "UniSwap" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9800,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9805,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "AxieInfinity" }
    ]
  },
  {
    growEditionSizeTo: 9810,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "CrypToadz" }
    ]
  },
  {
    growEditionSizeTo: 9815,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "MoonCat" }
    ]
  },
  {
    growEditionSizeTo: 9820,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "ChickenDerby" }
    ]
  },
  {
    growEditionSizeTo: 9825,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "CryptoHoots" }
    ]
  },
  {
    growEditionSizeTo: 9830,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "Ethermon" }
    ]
  },
  {
    growEditionSizeTo: 9835,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "CryptoKitties" }
    ]
  },
  {
    growEditionSizeTo: 9840,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "CryptoFoxes" }
    ]
  },
  {
    growEditionSizeTo: 9845,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Gate" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9850,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Bitthumb" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9855,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Kraken" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9860,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Kucoin" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9865,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Huobi" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9870,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Bitstamp" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9875,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Coinbase" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9880,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Gemini" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9885,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Bitfinex" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9890,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "FTX" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9895,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Polkadot" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9900,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Cardano" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9905,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Ethereum" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9910,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Binance" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9915,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Bitcoin" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9920,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Doge" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9925,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Solana" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9930,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "XRP" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9935,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "SquareInc" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9940,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "ZB" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9945,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Tesla" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9950,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "MicroStrategy" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9955,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Meitu" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9960,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Grayscale" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9965,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "ShibaSwap" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9970,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Raydium" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9975,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "SushiSwap" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9980,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "CurveFinance" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9985,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "OneInch" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9990,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Mdex" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 9995,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "PancakeSwap" },
      { name: "Chest" }
    ]
  },
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "UniSwap" },
      { name: "Chest" }
    ]
  }
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 631,
  height: 631,
};

const background = {
  generate: false,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 100000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
