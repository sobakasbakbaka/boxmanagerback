import Box from "../Schemes/Box.js";

class BoxService {
  async create(data) {
    const createdBoxes = await Box.create(data);
    return createdBoxes;
  }

  async getAll() {
    const boxes = Box.find();
    return boxes;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Box id is empty");
    }

    const box = Box.findById(id);
    return box;
  }

  async update(box) {
    if (!box._id) {
      throw new Error("Box id is empty");
    }

    const updatedBoxes = Box.findByIdAndUpdate(box._id, box, { new: true });
    return updatedBoxes;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Box id is empty");
    }

    const deletedBoxes = Box.findByIdAndDelete(id);
    return deletedBoxes;
  }
}

export default new BoxService();
