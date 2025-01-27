const TagController = {
    getAllTags: (async (req, res) => {
      const games = await Game.find();
  
      if (games.length > 0)
        res.status(200).send({ msg: "Game found", games: games });
      else {
        res.status(404).send({ msg: "Game not found" });
      }
    }),
    createTag:(async(req,res) => {
        const { name } = req.body;

        const tag = new TagController({name});
        const result = await tag.save();
        console.log(result, "RESULT TAGS ");

        if(result._id) {
          res.status(201).send({msg: "Tag succesfully saved"})
        }

    }),

    getTag: (async (req, res) => {
      const { id } = req.params;

      if (tag) {
        res.status(200).send({msg:"Tag not found"});
      } else {
        res.status(404).send({msg:"No tag found"});
      }


    }),

    updateTag: (async (req, res) => {
      const { id } = req.params;
      const { name } = req.params;

      const tag = await TagController.findByIdAndUpdate(id, {name: name})

      if(tag) {
        res.status(202).send({msg:"Tag succesfully updated", tag})
      } else {
        res.status(500).send({msg:"something happend"})
      }

    }),

    deleteTag: (async (req,res) => {
      const { id } = req.params;
      const tag = await TagController.findByIdAndUpdate(id);

      if (tag) {
        res.status(200).send({msg:"Succesfully deleted"})
      } else {
        res.status().send({msg:"something happend"})
      }

    }),


    


    }

    module.exports = TagController;