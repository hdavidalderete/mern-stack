const express = require("express");
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.json(task);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const { title, description } = req.body
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: 'received' });
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    await Task.findByIdAndUpdate(id, { title, description });

    res.json({ status: 'task update' });
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Task.findByIdAndRemove(id);
    res.json({ status: 'task delete' });
});

module.exports = router;