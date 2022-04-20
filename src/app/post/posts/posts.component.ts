import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private modalService: BsModalService
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

  deletePost2(post:IPost){
    this.postService.delete(post)
      .subscribe(response => this.getList());
  }

}
