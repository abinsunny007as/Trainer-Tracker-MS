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
    this. authService.createTrainer(this.trainer).subscribe(data=> {
      console.log(data);
      this.goToTrainerList();
    },
    error => console.log(error));

  }
  goToTrainerList(){
    this.router.navigate(['/trainer']);
  }
  
  onSubmit(){
    console.log(this.trainer);
    this.saveTrainer();
  }
//   registerSucess:boolean = false;

//  createUserData(ff: any){
//     this.us.createform(ff).subscribe((user:any)=>{
//       console.log("Success register");
//       this.registerSucess=true;
//     });
//   }

}
