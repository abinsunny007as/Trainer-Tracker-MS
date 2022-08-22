import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentForm: Trainer = {
    id:'',
    name:'',
    batchname:'',
    domain:'',
    subject:'',
    stime:'',
    etime:'',  
  };
  message='';

  id!:number;
  trainer:Trainer = new Trainer();
  constructor(private authService :AuthService,
      private route : ActivatedRoute, 
      private router:Router) { }

  ngOnInit(): void {
    if(!this.viewMode){
      this.message='';
      this.getTrainer(this.route.snapshot.params['id']);
    }
  }
  getTrainer(id:string):void{
    this.authService.getTrainerById(id)
    .subscribe({
      next:(data)=>{
        this.currentForm=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      id:this.currentForm.id,
    name:this.currentForm.name,
    batchname:this.currentForm.batchname,
    domain:this.currentForm.domain,
    subject:this.currentForm.subject,
    stime:this.currentForm.stime,
    etime:this.currentForm.etime,
      // published: status
    };

    this.message = '';

    this.authService.updateTrainer(this.currentForm.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.currentForm.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  // updateTrainer():void{
  //   this.message='';
  //   this.authService.updateTrainer(this.currentForm.id, this.currentForm).subscribe({
  //   next:(res)=>{
  //     console.log(res);
  //   },
  //   error: (e)=>console.error(e)
  // });
  // }
  updateTutorial(): void {
    
    this.authService.updateTrainer(this.currentForm.id,this.currentForm)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message : 'This trainer was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  goToTrainerList() {
    this.router.navigate(['/trainers']);
  }

}
