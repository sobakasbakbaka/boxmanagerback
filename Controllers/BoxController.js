import BoxService from "../Services/BoxService.js";

class BoxController {
  async create(req, res) {
    try {
      const box = await BoxService.create(req.body);
      res.json(box);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const boxes = await BoxService.getAll();
      res.json(boxes);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const box = await BoxService.getOne(req.params.id);
      res.json(box);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedBoxes = BoxService.update(req.body);
      res.json(updatedBoxes);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const deletedBoxes = BoxService.delete(req.params.id);
      req.json(deletedBoxes);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new BoxController();
