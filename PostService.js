import Post from "./Post.js";
import fileService from "./fileService.js";

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });

    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();

    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id not provided");
    }

    const post = await Post.findById(id);

    return post;
  }

  async update(id, post) {
    if (!id) {
      throw new Error("Id not provided");
    }

    const updatedPost = Post.findByIdAndUpdate(id, post, {
      new: true,
    });

    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id not provided");
    }

    const deletedPost = Post.findByIdAndDelete(id);

    return deletedPost;
  }
}

export default new PostService();
