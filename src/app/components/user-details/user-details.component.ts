import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  id: any;
  displayUser: any;
  user: any;

  imageUrl = 'https://randomuser.me/api/portraits/men/75.jpg';



  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.displayUser = this.userService.getOneUser(+this.id);
    this.user = this.displayUser[0];



  }

  onClickChildA() {
    this.router.navigate(['child-a'], {relativeTo: this.activatedRoute });
  }
  onClickChildB() {
    this.router.navigate(['child-b'], {relativeTo: this.activatedRoute });
  }


}
