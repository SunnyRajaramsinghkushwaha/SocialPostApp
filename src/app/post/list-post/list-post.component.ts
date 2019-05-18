import { Component, Input } from '@angular/core';

@Component ({
    selector: 'list-post',
    templateUrl: './list-post.component.html',
    styleUrls : ['./list-post.component.css']
})
export class ListPostComponent {
   /* posts = [
        { title: 'first post', content: 'this is first post'},
        { title: 'second post', content: 'this is second post'},
        { title: 'third post', content: 'this is third post'}
    ]*/
  @Input()  posts = [];
}