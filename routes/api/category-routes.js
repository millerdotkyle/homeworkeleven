const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const catData = await Category.findAll({include: [{model: Product}]});
  // be sure to include its associated Products
  res.status(200).json(catData);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  const catData = Category.findByPk(req.params.id, {
    include: [{model: Product}]
  });

  if(catData) {
    res.status(200).json(catData)
  };
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  const catData = Category.create(req.body);
  res.status(200).json(catData);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const catData = Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json(catData);
});

router.delete('/:id', (req, res) => {
  try {
    const catData = Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!catData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
