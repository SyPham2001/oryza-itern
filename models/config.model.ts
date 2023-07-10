import { Role } from '@/ultis/constant';

export interface SideNavItem {
    title: string;
    icon: any;
    gif?: any;
    path: string;
    roles: Role[];
}
export interface PaginationPayload {
    Current: number;
    Limit: number;
    TextSearch?: string;
}
export interface PaginationIDPayload {
    Current: number;
    Limit: number;
    TextSearch?: string;
    ID: string;
    IsCarInParking?: boolean;
    StartDate?: Date | null;
    EndDate?: Date | null;
}
// export interface DialogUpdate<T> {
//     open: boolean;
//     handleClose: () => void;
//     handleReload?: () => void;
//     item: T;
// }
