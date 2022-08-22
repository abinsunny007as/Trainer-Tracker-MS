import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  trainer: Trainer = new Trainer();
  us: any;
  constructor(private authService :AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveTrainer() {
    this.authService.createTrainer(this.trainer).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  goToTrainerList(){
    this.router.navigate(['/trainer']);
  }

  onSubmit() {
    if(this.trainer.id=="" || this.trainer.name=="" || this.trainer.batchname=="" || this.trainer.domain=="" || this.trainer.subject=="" || this.trainer.stime=="" || this.trainer.etime=="")
    {
      alert("Please! Fill with all inserts!!");
    }
    else{
      alert("Successfully!!")
      console.log(this.trainer);
      this.saveTrainer();
      this.router.navigate(['/home']);
    
    }
   
  }
 
}
