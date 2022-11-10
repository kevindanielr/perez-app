import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class EmpleadoService {
  constructor(private http: HttpService, private httpClient: HttpClient) {}

  apiURL = environment.API_URL;

  // Funcion que obtiene producto
  getProximosIngresos() {
    return this.http.get("rest/incapacidades/getFinIncapacidadVacacion");
  }

}
