import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from 'src/app/services/customer-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details: any = {};
  customerStatus: any = {};
  customerAddress: any = {};
  restaurantDetails: any = {};
  restaurantAddress: any = {};
  orderDetail: any = [];

  constructor(private customerDetailsService: CustomerDetailsService) { }

  ngOnInit() {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    this.customerDetailsService.customerDetails().subscribe(data => {
      this.details = data;
      this.customerStatus = this.details.data.customerStatus;
      this.customerAddress = this.customerStatus.address;
      this.restaurantDetails = this.details.data.restaurantStatus;
      this.restaurantAddress = this.restaurantDetails.address;
      this.orderDetail = this.details.data.orderDetails;
    });
  }

}
