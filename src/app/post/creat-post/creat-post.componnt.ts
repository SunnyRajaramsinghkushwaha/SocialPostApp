import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector: 'creat-post',
    templateUrl : './creat-post.component.html',
    styleUrls : ['./creat-post.component.css']
})

export class CreatPostComponent {
    enterTitle = '';
    enterContent = '';
    @Output() postCreated = new EventEmitter();

     onAddPost() {
         const post = {title: this.enterTitle,
         content: this.enterContent
        };
        this.postCreated.emit(post);
     }

}