import { Post, PostData } from "../types";
import { PostDto } from "../dto/types";

export interface PostClientStructure {
  getPosts: (pageNumber?: number) => Promise<PostsData>;
  addPost: (postData: PostData) => Promise<Post>;
  deletePost: (postId: string) => Promise<Post>;
  getPostById: (postId: string) => Promise<Post>;
}
export interface PostsDtoData {
  posts: PostDto[];
  postsTotal: number;
}

export interface PostsData {
  posts: Post[];
  postsTotal: number;
}
