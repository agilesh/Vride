import { Component, OnInit } from '@angular/core';
import { DriverDetailsDataService } from '../service/data/driver-details-data.service';
import { Driver } from '../driver-details/driver-details.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-add-details',
  templateUrl: './edit-add-details.component.html',
  styleUrls: ['./edit-add-details.component.css']
})
export class EditAddDetailsComponent implements OnInit {

id:number
edit_addDetailsDriver:Driver

  constructor(public edit_addService:DriverDetailsDataService,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
     this.edit_addDetailsDriver = new Driver(this.id ,0,'','',0,0,new Date(),'','');


    if(this.id!=-1)
    {
    this.edit_addService.retrieveOneDriverDetail('agilesh',this.id).subscribe
    (data=> this.edit_addDetailsDriver = data)
    }
  }

  saveDetails(){
     if(this.id === -1)
     {
         this.edit_addService.createDriversDetails('agilesh',this.edit_addDetailsDriver)
         .subscribe(
           data=>{
             console.log(data)
             this.router.navigate(['driver-details'])
           }
         )
     }
     else
     {
    this.edit_addService.updateDriversDetails('agilesh',this.id,this.edit_addDetailsDriver)
    .subscribe(
      data=>{
      console.log(data)
      this.router.navigate(['driver-details'])
    }
    )
  }
}
}


