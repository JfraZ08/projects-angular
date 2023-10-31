import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/WebEnvironment';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  endpointUrl = environment.baseUrl;

  constructor(
    private HttpClient : HttpClient
  ) { 
    
  }

  get(name:string,login:string, password:string)//appel de name,login et password pour method post 
   {
      return this.HttpClient.post('http://localhost:5173/api/login',{name,login, password})// method post pour enregistrer l'inscription du client

   }


}