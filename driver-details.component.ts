import { Component, OnInit, ɵConsole } from '@angular/core';
import { Time } from '@angular/common';
import { timer } from 'rxjs';
import { DriverDetailsDataService } from '../service/data/driver-details-data.service';
import { Router } from '@angular/router';


export class Driver
{
  constructor
  (
    public box:number,
    public id:number,
    public username:string,
    public carModel:string,
    public seats:number,
    public cost:number,
    public date:Date,
    public source:string,
    public destination:string
    
    )
    {
       
    }
}



@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

 drivers : Driver[]
 message : string
 // [
  //  new Driver('agilesh','maruthi',4,20,new Date(),'madurai','chennai'),
  //  new Driver('raaamasamy','audi',3,30,new Date(),'coimbatore','erode'),
  //  new Driver('kuppusamy','rolls roice',6,100,new Date(),'namakkal','trichy'),
  //  new Driver('pichamani','benz',5,200,new Date(),'karur','kanyakumari'),
 
  constructor(public DriversDetailsservice :DriverDetailsDataService,
               public router:Router) { }

  ngOnInit(): void {
    this.refreshDriverDetails();
  }

refreshDriverDetails()
{
  this.DriversDetailsservice.retrieveAllDriversDetails('agilesh').subscribe
    (response=>{
    console.log(response)
    this.drivers=response;
   
   })
}




  deldriversDetails(id)
  {
    console.log(`delete todo ${id}`)
    this.DriversDetailsservice.deleteDriversDetails('agilesh',id).subscribe
    (response=>
      {
        console.log(response);
        this.message=`delete of driver ${id}  successfull`
        this.refreshDriverDetails();

      })
  }


  uptdriversDetails(id)
  {
    console.log(`update of ${id} successfull`)
    this.router.navigate(['edit_addDetails',id])
  }


  adddriversDetails()
  {
    this.router.navigate(['edit_addDetails',-1])
  }

}
