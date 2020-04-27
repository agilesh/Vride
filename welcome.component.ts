import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name  = ''

  message = 'welcome to our App'
  welcomemsgfromservice : string

  constructor(public route :ActivatedRoute,public router:Router,public service:WelcomeDataService) { }

  ngOnInit()
  {
    console.log(this.message)
   // this.route.snapshot.params['name']

    this.name =this.route.snapshot.params['name']


  }
  betheDriver()
  {
    this.router.navigate(['driver-details'])
   
  }
  betheRider()
  {
    this.router.navigate(['rider-details'])
  }
  
  getWelcomeMessage()
  {

  //  console.log(this.service.executeHelloWorldBeanService());
   
    this.service.executeHelloWorldBeanService().subscribe(
      response=> this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    ); 

       //console.log("last line of getwelcome msg")
  }



  getWelcomeMessageWithParameter()
  {

  //  console.log(this.service.executeHelloWorldBeanService());
   
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response=> this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    ); 

       //console.log("last line of getwelcome msg")
  }















  handleSuccessfulResponse(response)
  {

    this.welcomemsgfromservice = response.message
        //  console.log(response);
          // console.log(response.message)
  }

  handleErrorResponse(error)
  {
  //  console.log(error)
    //console.log(error.error)
    //onsole.log(error.error.message)
    this.welcomemsgfromservice = error.error.message
  }

}
