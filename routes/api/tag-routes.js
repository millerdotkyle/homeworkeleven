const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
    // be sure to include its associated Product data
  Tag.findAll({ include: [{ model: Product }] }).then((tagData) => {
    res.json(tagData);
  });

});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
    // be sure to include its associated Product data

  Tag.findByPk(req.params.id, {
    include: [{model: Product}]
  }).then((tagData)=> {
    res.status(200).json(tagData);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body
  }).then((tagData)=> {
    res.status(200).json(tagData)
  })
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {tag_name: req.body},
    {where: {
      id: req.params.id}
    }
    ).then((tagData)=> {
      res.status(200).json(tagData)
    })
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id, }
  }).then(()=> {
    res.status(200).statusMessage('Deleted!')
  })
});

module.exports = router;

