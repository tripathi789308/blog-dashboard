export interface BlogPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type NewBlogPost = Omit<BlogPost, 'id'>;