import { map } from "rxjs/operators";
import { Card, ICard } from "./../models/card.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { apiUrl } from "../constants/default.constant";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  public list(): Observable<ICard[]> {
    return this.http
      .get<ICard[]>(apiUrl)
      .pipe(map((posts) => posts.filter((_post) => _post.isOurData == true)));
  }

  public add(userData): Observable<ICard> {
    return this.http.post<ICard>(apiUrl, {
      ...userData,
      isOurData: true,
    });
  }
}
