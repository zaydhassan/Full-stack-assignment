const Item = require('../models/item');

exports.createItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    let item = new Item({ name, description });
    item = await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.readItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    let item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    item.name = name || item.name;
    item.description = description || item.description;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteItem = async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    await item.remove();
    res.json({ msg: 'Item removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
