const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({ include: [{ model: Product }] }).then((tagData) => {
    res.json(tagData);
  });
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk()
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
});

module.exports = router;
