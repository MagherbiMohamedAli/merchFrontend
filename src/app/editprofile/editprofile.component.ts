import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LocalStoregService } from '../services/local-storeg.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  user:any;
constructor(private userSer:UserService,private localStoregSer:LocalStoregService){

}
ngOnInit(): void {
  this.getUser()
}
getUser(){
  this.userSer.getuserbyid(this.localStoregSer.getUserId()).subscribe({
    next:(data:any)=>{

      console.log(data)
      this.user=data;
    
    // lhajet li na3mlouhom ki temshi s7i7a
    },
    error:(err:any)=>{
      console.log(err)
    // ki tabda ghalta 
    },
    complete:()=>{ // par defaut
    },
  })
}
modifier(){
  this.userSer.miseajouruser(this.user).subscribe({
    next:(data:any)=>{

      console.log(data)
      this.user=data;
    
    // lhajet li na3mlouhom ki temshi s7i7a
    },
    error:(err:any)=>{
      console.log(err)
    // ki tabda ghalta 
    },
    complete:()=>{ // par defaut
    },
  })
}
ajouterRole(){
  this.userSer.ajouterRole(this.localStoregSer.getUserId()).subscribe({
    next:(data:any)=>{

      console.log(data)
      Swal.fire({
        icon: 'success',
        title: 'Bienvenue',
        text: "Bienvenue dans l'equipe des vendeurs",
      
      })
    // lhajet li na3mlouhom ki temshi s7i7a
    },
    error:(err:any)=>{
      console.log(err)
    // ki tabda ghalta 
    },
    complete:()=>{ // par defaut
    },
  })
}
}
