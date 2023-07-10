import { SideNavItem } from '@/models/config.model';
import { Role } from '@/ultis/constant';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ParkingIcon from '@mui/icons-material/LocalParking';
import SettingsIcon from '@mui/icons-material/Settings';
export const itemsMenu: SideNavItem[] = [
    {
        roles: [],
        // roles: [Role.DASHBOARD, Role.ADMIN],
        title: 'Obox Alarm',
        path: '/',
        icon: ParkingIcon,
        gif: null,
    },
    {
        roles: [],
        // roles: [Role.ADMIN, Role.DECENTRALIZED_ACCESS, Role.STAFF_MANAGEMENT],
        title: 'Quản Trị Admin',
        path: '/admin',
        icon: AdminPanelSettingsIcon,
        gif: null,
    },
    {
        roles: [],
        // roles: [Role.ADMIN, Role.SETTING],
        title: 'Cài đặt',
        path: '/settings/member',
        icon: SettingsIcon,
        gif: '/gif/settings.gif',
    },
];
