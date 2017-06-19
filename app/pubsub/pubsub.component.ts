
import { Component, Input } from '@angular/core'
import { Customer } from '../event/customer'
import { PubSubService } from '../services/pubsub.service'


@Component({
    selector: 'pubsub',
    template:
    ` 
 <link href="/app/assets/css/section.css" rel="stylesheet" />


 <div class="wrap">    
    <div class="box fleft comp1"><consumer></consumer></div>
    <div class="box fleft comp2"><producer></producer></div>
    <div class="box fleft comp3"><consumer2></consumer2></div>
</div>
 

   
  `
})
export class PubSubComponent {

}

// <h1>Pub Sub Using Observables</h1>
//     <producer></producer>
//     <br/><br/>
//     <consumer></consumer>
//      <br/><br/>
//      <consumer2></consumer2>