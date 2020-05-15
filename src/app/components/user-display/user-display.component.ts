import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input() user: any;
  @Output() childEvent = new EventEmitter();


  ngOnInit(): void {
  }

  onClick() {
    this.childEvent.emit(this.user.name);
  }

  onClickView() {
    console.log(this.user.id);
    this.router.navigate(['/users', this.user.id]);
  }

}
