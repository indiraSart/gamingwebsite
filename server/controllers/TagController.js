const TagController = {
    getAllTags: (async (req, res) => {
      const games = await Game.find();
  
      if (games.length > 0)
        res.status(200).send({ msg: "Game found", games: games });
      else {
        res.status(404).send({ msg: "Game not found" });
      })