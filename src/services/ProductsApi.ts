import axios from "axios";

class PostService {
  baseURL = "https://fakestoreapi.com/products";

  getPosts() {
    return axios.get(this.baseURL);
  }

  getPostById(id: number) {
    return axios.get(`${this.baseURL}/${id}`);
  }
}

export default new PostService();

