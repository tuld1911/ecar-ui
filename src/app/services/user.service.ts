import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserSearch} from "../models/user-search";


@Injectable({providedIn: 'root'})
export class UserService {
    private api = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    me() {
        return this.http.get<any>(`${this.api}/api/me`);
    }

    searchUsers(searchValue: string, pageSize: number, pageNumber: number): Observable<any> {
        const userSearch = new UserSearch(searchValue, pageNumber, pageSize);
        return this.http.post<any>(`${this.api}/api/users/search`, userSearch);
    }
}
