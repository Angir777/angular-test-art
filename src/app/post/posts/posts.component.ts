import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post/post.service';
import { IPost } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts2 = <IPost[]>{};

  posts: Post[] = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => this.posts = res);

    this.getList();
  }

  deletePost(post: Post){
    this.postService.deletePost(post);
  }

  getList(){
    this.postService.list()
      .subscribe(response => this.posts2 = response);
  }

}
