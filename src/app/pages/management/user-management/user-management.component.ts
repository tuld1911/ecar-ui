import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BadgeComponent} from "../../../shared/components/ui/badge/badge.component";
import {ButtonComponent} from "../../../shared/components/ui/button/button.component";
import {TableDropdownComponent} from "../../../shared/components/common/table-dropdown/table-dropdown.component";
import {NgClass} from "@angular/common";
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {catchError, EMPTY, finalize, tap} from "rxjs";
import {User} from "../../../models/user";

interface Transaction {
    image: string;
    action: string;
    date: string;
    amount: string;
    category: string;
    status: "Success" | "Pending" | "Failed";
}

@Component({
  selector: 'app-user-management',
    imports: [
        BadgeComponent,
        ButtonComponent,
        TableDropdownComponent,
        NgClass
    ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit, AfterViewInit {
    searchValue = '';
    pageSize = 10;
    pageIndex = 0;
    totalItems = 0;
    totalPageNum = 0;
    isLoadingResults = true;
    dataSource: User[] = [];
    constructor(private auth: AuthService,
                private userService: UserService) {
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.onSearchUsers(0);
    }

    onSearchUsers(pageIndex: number) {
        this.isLoadingResults = true;
        this.userService.searchUsers(this.searchValue, this.pageSize, pageIndex).pipe(
            finalize(() => { this.isLoadingResults = false; }),
            catchError(err => {
                console.error(err);
                return EMPTY;
            })
        ).subscribe(res => {
            console.log(res);
            this.dataSource = res.content;
            this.totalItems = res.page.totalElements;
            this.totalPageNum = res.page.totalPages;
        });
    }

    currentPage = this.pageIndex + 1;

    get totalPages(): number {
        return this.totalPageNum;
    }

    get currentItems(): User[] {
        return this.dataSource;
    }

    goToPage(page: number) {
        this.onSearchUsers(page - 1);
        this.currentPage = page;
    }

    handleViewMore(item: Transaction) {
        // logic here
        console.log('View More:', item);
    }

    handleDelete(item: Transaction) {
        // logic here
        console.log('Delete:', item);
    }

    getBadgeColor(role: string): 'success' | 'warning' | 'error' {
        if (role === 'ADMIN') return 'success';
        if (role === 'Pending') return 'warning';
        return 'error';
    }
}
