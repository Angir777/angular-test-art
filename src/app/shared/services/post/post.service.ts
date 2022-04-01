import { Injectable } from '@angular/core';
import { Observable, of, takeLast } from 'rxjs';
import { Post } from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    new Post(1, 'Kurs Angular', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
    new Post(2, 'Kurs Laravel', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
    new Post(3, 'Kurs Symfony', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
    new Post(4, 'Kurs Unity', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
  ]

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  deletePost(post: Post){
    const index = this.posts.findIndex(x => x.id === post.id);
    this.posts.splice(index, 1);
  } 
}
