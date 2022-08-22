import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Trainer } from '../trainer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allview',
  templateUrl: './allview.component.html',
  styleUrls: ['./allview.component.css']
})
export class AllviewComponent implements OnInit {



  trainers!: Trainer[];
  constructor(private authService :AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.getTrainers();
  }
  private getTrainers(){
    this.authService.getTrainerList().subscribe(data=>{
      this.trainers=data;
    });
  }

  scheduleDetails (id:number){
    this.router.navigate(['schedule',id]);
  } 
updateTrainer(id: number){
  this.router.navigate(['update', id]);
}



deleteTrainer(id:any) {
  this.authService.deleteTrainer(id)
  .subscribe( data => {
    console.log(data);
    this.getTrainers();
    window.location.reload();

      })
}

}  



