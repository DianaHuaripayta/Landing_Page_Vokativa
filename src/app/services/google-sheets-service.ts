import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
interface Sheet {
  name: string;
  platform: string;
  technology: string;
  link: string;
}
@Injectable({
  providedIn: 'root'
})

export class GoogleSheetsService {

  private sheetId = '1MmxdPYIRnX75bod8PzYKpEZC0pbNBSXUgYSd4YNGW1c';
  private apiKey = 'AIzaSyB0jtKyg2GaqtK8ds1S-E8epcXlz27ig0I'; // Reemplaza con tu API Key

  constructor(private http: HttpClient) {}

  createSheet(
    name: string,
    email :string,
    message :string,
  ):Observable<Sheet>{
    return this.http.post<Sheet>(`${environment.CONNECTION_URL}`,{
      name,email,message
    })
  }
}
