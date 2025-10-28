import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MaintenanceHistorySearch} from "../models/maintenance-history-search";
import {ScheduleRequest} from "../models/schedule-request";

@Injectable({providedIn: 'root'})
export class MaintenanceService {
    private api = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    getMaintenanceHistory(searchValue: string, pageSize: number, pageIndex: number): Observable<any> {
        const searchRequest = new MaintenanceHistorySearch(searchValue, pageIndex, pageSize);
        return this.http.post<any>(`${this.api}/api/maintenance/history`, searchRequest);
    }

    createSchedule(request: ScheduleRequest): Observable<any> {
        return this.http.post<any>(`${this.api}/api/maintenance/create`, request);
    }
}