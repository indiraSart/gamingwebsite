const Game = require("../models/GameSchema.js");

const gameController = {
  getAllGame: async (req, res) => {
    const games = await Game.find();

    if (games.length > 0)
      res.status(200).send({ msg: "Game found", games: games });
    else {
      res.status(404).send({ msg: "Game not found" });
    }
  },
  createGame: async (req, res) => {
    const {
      title,
      price,
      publisher,
      developer,
      releaseDate,
      status,
      description,
      shortDescription,
    } = req.body;

    const game = new Game({
      title,
      price,
      publisher,
      developer,
      releaseDate,
      status,
      description,
      shortDescription,
    });

    let result = await game.save();

    if (result._id) {
      res.status(201).send({ msg: "Succesfully create game" });
    } else {
      res
        .status(500)
        .send({ msg: "Something happened when creating the game" });
    }
  },
  getGame: (req, res) => {
    const { id } = req.params;

    const game = Game.findById(id);

    console.log(game);

    ret.status(200).send({ msg: "Game retrieved", game: game });
  },
  editGame: async (req, res) => {
    const { id } = req.params;
    const updateContent  = req.body;

    try {
      const game = await Game.findByIdAndUpdate(id, updateContent);
      console.log(game, "UPDATING GAME");
      res.status(200).send({ msg: "Game succesfully updated" });
    } catch (error) {
      console.log(error);
    }
  },
  deleteGame: async (req, res) => {
    const { id } = req.params;

    const game = await Game.findByIdAndDelete(id);
    console.log(game);

    res.status(200).send({ msg: "Game deleted" });
  },
};

module.exports = gameController;
