"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Planting One Tree At A Time With KryptoTrees NFT Collection.";
const baseUri = "ipfs://YourIPFSHere";

const category = {
  FRUIT : "Fruit",
  ACCESSORY : "Accessory"
}

const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "AxieInfinity",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "CrypToadz",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "MoonCat",
        options: {
          displayName: category.ACCESSORY
        }    
      }
    ]
  },
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "ChickenDerby",
        options: {
          displayName: category.ACCESSORY
        }
      }
    ]
  },
  {
    growEditionSizeTo: 25,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "CryptoHoots",
        options: {
          displayName: category.ACCESSORY
        }
      }
    ]
  },
  {
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "Ethermon",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 35,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "CryptoKitties",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "CryptoFoxes",
        options: {
          displayName: category.ACCESSORY
        }
      }
    ]
  },
  {
    growEditionSizeTo: 45,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Gate",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Bitthumb",
        options: {
          displayName: category.FRUIT
        }
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 55,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Kraken",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 60,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Kucoin",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 65,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Huobi",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 70,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Bitstamp",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 75,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Coinbase",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 80,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Gemini",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 85,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Bitfinex",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 90,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "FTX",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 95,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Polkadot",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Cardano",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 105,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Ethereum",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 110,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Binance",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 115,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Bitcoin",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 120,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Doge",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 125,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Solana",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 130,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "XRP",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 135,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "SquareInc",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 140,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "ZB",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 145,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Tesla",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 150,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "MicroStrategy",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 155,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Meitu",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 160,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Grayscale",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 165,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "ShibaSwap",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 170,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Raydium",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 175,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "SushiSwap",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 180,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "CurveFinance",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 185,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "OneInch",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 190,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Mdex",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 195,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "PancakeSwap",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "UniSwap",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9800,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9805,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "AxieInfinity",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 9810,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "CrypToadz",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 9815,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "MoonCat",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 9820,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "ChickenDerby",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 9825,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "CryptoHoots",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 9830,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "Ethermon",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 9835,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "CryptoKitties",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 9840,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { name: "Fruit" },
      { 
        name: "CryptoFoxes",
        options: {
          displayName: category.ACCESSORY
        } 
      }
    ]
  },
  {
    growEditionSizeTo: 9845,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Gate",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9850,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Bitthumb",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9855,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Kraken",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9860,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Kucoin",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9865,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Huobi",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9870,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Bitstamp",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9875,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Coinbase",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9880,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Gemini",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9885,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Bitfinex",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9890,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "FTX",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9895,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Polkadot",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9900,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Cardano",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9905,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Ethereum",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9910,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Binance",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9915,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Bitcoin",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9920,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Doge",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9925,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Solana",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9930,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "XRP",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9935,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "SquareInc",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9940,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "ZB",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9945,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Tesla",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9950,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "MicroStrategy",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9955,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Meitu",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9960,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Grayscale",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9965,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "ShibaSwap",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9970,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Raydium",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9975,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "SushiSwap",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9980,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "CurveFinance",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9985,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "OneInch",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9990,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "Mdex",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 9995,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "PancakeSwap",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
    ]
  },
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Trunk" },
      { name: "Crown" },
      { name: "Soil" },
      { 
        name: "UniSwap",
        options: {
          displayName: category.FRUIT
        } 
      },
      { name: "Accessory" }
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
