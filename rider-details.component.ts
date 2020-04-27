import { Component, OnInit } from '@angular/core';
import { RiderDetailsService } from '../service/data/rider-details.service';
import { Router } from '@angular/router';

export class Rider
{
  constructor
  (
    public id :number,
    public source:string,
    public via:string,
    public destination:string,
    public date:Date
      )
    {
       
    }
}

@Component({
  selector: 'app-rider-details',
  templateUrl: './rider-details.component.html',
  styleUrls: ['./rider-details.component.css']
})


export class RiderDetailsComponent implements OnInit {



  riders : Rider[]
  message:string
  //  [
  //   new Rider('agilesh','vadipatti','chennai','kovai',new Date()),
  //   new Rider('raaamasamy','ramnagar','coimbatore','erode',new Date()),
  //   new Rider('kuppusamy','royapuram','namakkal','trichy',new Date()),
  //   new Rider('pichamani','malumichampati','selvapuram','erode',new Date())
 
    
  // ]
  

  constructor(public riderDetailsService:RiderDetailsService,
    public router:Router) { }

  ngOnInit(): void {
    
    this.refreshRidersDetails();
   
   
  }


  refreshRidersDetails()
  {
    this.riderDetailsService.retrieveAllRiderDetails('agilesh').subscribe
    (response=>{
      console.log(response);
      this.riders = response;
    })
  }


  delRidersDetails(id)
  {
    console.log(`dele ${id}`)
    this.riderDetailsService.deleteRidersDetails('agilesh',id).subscribe
    (response=> {
      console.log(response)
      this.message = `delete of rider${id} successfull `
      this.refreshRidersDetails();
    })
  }


  udtRidersDetails(id)
  {
   console.log(`update of rider ${id}`)
   this.router.navigate(['edit_addDetails2',id])
  }


  addRidersDetails()
  {
    this.router.navigate(['edit_addDetails2',-1])
  }

}
