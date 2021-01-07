import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointsService } from '../common-utils/end-points.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private endPointsService: EndPointsService) { }

  login(credentials: any){
  return  this.httpClient.post(this.endPointsService.loginAPI, credentials, {observe: 'response'});
  }
}
