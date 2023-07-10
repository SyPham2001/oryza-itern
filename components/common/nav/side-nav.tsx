import { itemsMenu } from '@/mocks/index';
import InfoIcon from '@mui/icons-material/Info';
import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { AvatarCustom } from '../avatar-next/avatar-custom';
import AvartarPopover from '../avatar-next/avatar-popover';
import { SideNavItem } from '@/models/index';
export interface ISideNavProps {}
const BACKEND_DOMAIN = process.env.NEXT_PUBLIC_SERVER_PARKING_DOMAIN;

export default function SideNav(props: ISideNavProps) {
    const router = useRouter();
    const { pathname } = router;

    const profile: any = {};

    const handleLogout = () => {};

    return (
        <Stack
            sx={{
                width: '80px',
                height: '100%',
                py: 2,
                flexDirection: 'row',
                background: '#55595D',
            }}
        >
            <Stack flex={1} alignItems={'center'} spacing={1}>
                <Stack
                    onClick={() => {
                        router.push('/');
                    }}
                    sx={{ cursor: 'pointer' }}
                >
                    <Avatar
                        src="/logo/logo-white.png"
                        alt="photo"
                        style={{
                            width: '100%',
                            maxWidth: '150px',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '0px',
                            padding: '0px 10px',
                        }}
                    />
                </Stack>
                <Stack flex={1} spacing={1} component={'nav'}>
                    <Divider
                        sx={{
                            backgroundColor: '#fff',
                        }}
                    />
                    {itemsMenu.map((item: SideNavItem, index: number) => {
                        const isActive = pathname == item.path;
                        return (
                            <Tooltip key={index} title={item.title} placement="right">
                                <Button
                                    sx={{
                                        py: 1,
                                        maxWidth: 54,
                                        minWidth: 54,
                                        minHeight: 54,
                                        bgcolor: isActive ? '#000' : 'transparent',
                                        borderRadius: '15px',
                                        boxShadow: isActive
                                            ? '0px 2px 2px rgba(0, 0, 0, 0.25)'
                                            : 'none',
                                    }}
                                    onClick={() => {
                                        if (router.pathname === item.path) return;
                                        router.push(item.path);
                                    }}
                                    variant={isActive ? 'contained' : 'text'}
                                    color="secondary"
                                >
                                    {isActive && item.gif ? (
                                        <Avatar
                                            src={item.gif}
                                            alt=""
                                            sizes="small"
                                            style={{ borderRadius: 0, width: 24, height: 24 }}
                                        ></Avatar>
                                    ) : (
                                        <item.icon />
                                    )}
                                </Button>
                            </Tooltip>
                        );
                    })}
                </Stack>

                <Avatar
                    src={'/gif/help.gif'}
                    alt=""
                    sizes="small"
                    style={{ borderRadius: 0, width: 24, height: 24 }}
                />

                <AvartarPopover btn={<AvatarCustom src={''} type="square" />}>
                    <Stack sx={{ padding: '15px' }} spacing={'10px'}>
                        <Stack>
                            <Stack direction="row" alignItems={'center'}>
                                <Typography sx={{ fontWeight: 700 }}>{profile?.Name}</Typography>
                                <Box>
                                    <IconButton
                                        onClick={() => {
                                            router.push('/profile');
                                        }}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                </Box>
                            </Stack>
                            <Typography sx={{ fontWeight: 300, fontSize: '10px' }}>
                                {`${profile?.Phone ? profile.Phone : 'chưa có phone.'} - ${
                                    profile?.Email ? profile.Email : 'chưa có mail.'
                                }`}
                            </Typography>
                        </Stack>
                        <Stack
                            onClick={handleLogout}
                            sx={{
                                padding: '10px 80px',
                                backgroundColor: '#55595D',
                                boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            <Typography
                                sx={{ fontWeight: 700, color: '#fff', textTransform: 'uppercase' }}
                            >
                                Đăng Xuất
                            </Typography>
                        </Stack>
                    </Stack>
                </AvartarPopover>
            </Stack>
        </Stack>
    );
}
