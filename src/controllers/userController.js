const Item = require('../models/item');

exports.viewItems = async (req, res) => {
  try {
    const items = await Item.find().select('-comments');
    res.json(items);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.viewItemDetails = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.addItemComment = async (req, res) => {
  const { user, comment, rating } = req.body;
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    item.comments.push({ user, comment, rating });
    await item.save();
    res.json(item.comments);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
