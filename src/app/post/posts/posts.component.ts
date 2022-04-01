import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => this.posts = res);
  }

  deletePost(post: Post){
    this.postService.deletePost(post);
    this.postService.getPosts().subscribe(res => this.posts = res);
  }

}