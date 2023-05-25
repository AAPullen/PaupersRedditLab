import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Posts, SinglePost } from '../full-result';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(private redditService: RedditService) {}

  posts?: SinglePost[];

  // life cycle hook
  ngOnInit(): void {
    this.getAllPosts();
  }

  // methods to use the service
  // define what you are doing with an Observable through subscribe(*define here*)
  getAllPosts() {
    this.redditService.getPosts().subscribe( 

      result => {
        // Stuff the result into the posts property
        this.posts = result.data.children;
    }  
    );
  }

}
