import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentForm: Trainer = {
    id:'',
    name:'',
    batchname:'',
    domain:'',
    subject:'',
    stime:'',
    etime:'',
  }
  message = '';
  // trainers!: Trainer[];
  //   constructor(private authService :AuthService,
  //     private router:Router) { }

  //   ngOnInit(): void {
  //     this.getTrainers();
  //   }
  //   private getTrainers(){
  //     this.authService.getTrainerList().subscribe(data=>{
  //       this.trainers=data;
  //     });
  //   }

 
 
  id!:number;
  trainer:Trainer = new Trainer();
  constructor(private authService :AuthService,
      private route : ActivatedRoute, 
      private router:Router) { }


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTrainer();
     
    }
  
  
 
  }

  getTrainer(): void {

    this.authService.getTrainerById(this.currentForm.id)
      .subscribe({
        next: (data) => {
          this.currentForm = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });

      console.log(this.currentForm.id);

    // this.id = this.route.snapshot.params['id'];
    // this.trainer = new Trainer();
    // this.authService.getTrainerById(this.id).subscribe(data => {
    //   this.trainer = data;
    // });
    //   this.authService.getTrainerById(this.id)
    //     .subscribe({
    //       next: (data) => {
    //         this.trainer = data;
    //         console.log(data);
    //       },
    //       error: (e) => console.error(e)
    //     });
    // }

  }
}

