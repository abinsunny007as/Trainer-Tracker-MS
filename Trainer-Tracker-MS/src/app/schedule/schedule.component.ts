import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  id!:number
  trainer! :Trainer
  constructor(private route:ActivatedRoute,private  authService :AuthService) { }

  ngOnInit(): void {
    this .id =this.route.snapshot.params['id'];
    this.trainer =new Trainer();
    this.authService.getTrainerById(this.id).subscribe(data => {
    this.trainer =data;
  });
    this.authService.getTrainerById(this.id)
    .subscribe({
    next:(data)=>{
       this.trainer=data;
         console.log(data);
       },
       error:(e)=>console.error(e)
     });
  }

  }


