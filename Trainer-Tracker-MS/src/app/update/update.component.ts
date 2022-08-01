import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!:number;
  trainer:Trainer = new Trainer();
  constructor(private authService :AuthService,
      private route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id'];

    this.authService.getTrainerById(this.id).subscribe(data => {
      this.trainer =data;
    },error =>console.log(error));
  }

  onSubmit() {
    this.authService.updateTrainer(this.id).subscribe(data=>{
      this.goToTrainerList();
    },
    error=>console.log(error));
  }

  goToTrainerList() {
    this.router.navigate(['/trainer']);
  }

}
