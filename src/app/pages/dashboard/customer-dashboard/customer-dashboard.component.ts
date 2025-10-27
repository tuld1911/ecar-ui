import { Component } from '@angular/core';
import {RecentOrdersComponent} from "../../../shared/components/ecommerce/recent-orders/recent-orders.component";
import {BadgeComponent} from "../../../shared/components/ui/badge/badge.component";

interface Product {
    id: number;
    name: string;
    variants: string;
    category: string;
    price: string;
    image: string;
    status: 'Delivered' | 'Pending' | 'Canceled';
}
@Component({
  selector: 'app-customer-dashboard',
    imports: [
        BadgeComponent
    ],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {



    tableData: Product[] = [
        {
            id: 1,
            name: "MacBook Pro 13”",
            variants: "2 Variants",
            category: "Laptop",
            price: "$2399.00",
            status: "Delivered",
            image: "/images/product/product-01.jpg",
        },
        {
            id: 2,
            name: "Apple Watch Ultra",
            variants: "1 Variant",
            category: "Watch",
            price: "$879.00",
            status: "Pending",
            image: "/images/product/product-02.jpg",
        },
        {
            id: 3,
            name: "iPhone 15 Pro Max",
            variants: "2 Variants",
            category: "SmartPhone",
            price: "$1869.00",
            status: "Delivered",
            image: "/images/product/product-03.jpg",
        },
        {
            id: 4,
            name: "iPad Pro 3rd Gen",
            variants: "2 Variants",
            category: "Electronics",
            price: "$1699.00",
            status: "Canceled",
            image: "/images/product/product-04.jpg",
        },
        {
            id: 5,
            name: "AirPods Pro 2nd Gen",
            variants: "1 Variant",
            category: "Accessories",
            price: "$240.00",
            status: "Delivered",
            image: "/images/product/product-05.jpg",
        },
    ];

    getBadgeColor(status: string): 'success' | 'warning' | 'error' {
        if (status === 'Delivered') return 'success';
        if (status === 'Pending') return 'warning';
        return 'error';
    }
}
