import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
    etime:''
    
  };
  message='';


  trainer:Trainer = new Trainer();
  constructor(private authService :AuthService,
      private route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    if(!this.viewMode){
      this.message='';
      this.getTrainer(this.route.snapshot.params['id']);
    }
    

    // this.authService.getTrainerById(this.id).subscribe(data => {
    //   this.trainer =data;
    // },error =>console.log(error));
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

  // onSubmit() {
  //   this.authService.updateTrainer(this.id).subscribe(data=>{
  //     this.goToTrainerList();
  //   },
  //   error=>console.log(error));
  // }

  // goToTrainerList() {
  //   this.router.navigate(['/trainer']);
  // }
  updateTrainer():void{
    this.message='';
    this.authService.updateTrainer(this.currentForm.id, this.currentForm).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error: (e)=>console.error(e)
  });
  }

}
