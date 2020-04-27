import { Component, OnInit } from '@angular/core';
import { RiderDetailsService } from '../service/data/rider-details.service';
import { Rider } from '../rider-details/rider-details.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-add-details2',
  templateUrl: './edit-add-details2.component.html',
  styleUrls: ['./edit-add-details2.component.css']
})
export class EditAddDetails2Component implements OnInit {

  id:number
  rider : Rider

  constructor(
    public ridersDetailsService : RiderDetailsService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rider = new Rider(this.id,'','','',new Date())
    if(this.id!=-1)
    {
    this.ridersDetailsService.retrieveRiderDetails('agilesh',this.id).subscribe
    (data=>this.rider=data)
    }
  }


  saveRidersDetails()
  {
    if(this.id===-1)
    {
      this.ridersDetailsService.createRidersDetails('agilesh',this.rider)
      .subscribe(
        data=> {
        console.log(data)
        this.router.navigate(['rider-details'])
        }
      )
    }
    else
   {
    this.ridersDetailsService.updateRidersDetails('agilesh',this.id,this.rider)
    .subscribe(
      data=> {
      console.log(data)
      this.router.navigate(['rider-details'])
      }
    )
  }
}
}
