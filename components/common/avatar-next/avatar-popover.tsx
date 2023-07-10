import { Box, Popover, Stack, SxProps, Theme } from '@mui/material';
import { useRef, useState } from 'react';

export interface IAvartarPopoverProps {
    sx?: SxProps<Theme>;
    btn: React.ReactNode;
    children?: React.ReactNode;
}
const BACKEND_DOMAIN = process.env.NEXT_PUBLIC_SERVER_PARKING_DOMAIN;

export default function AvartarPopover(props: IAvartarPopoverProps) {
    const { children, sx, btn } = props;
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    return (
        <Stack>
            <Box ref={ref} onClick={() => setOpen(true)}>
                {btn}
            </Box>
            {open && children ? (
                <Popover
                    open={open}
                    anchorEl={ref.current}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        ...sx,
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    {children}
                </Popover>
            ) : (
                <></>
            )}
        </Stack>
    );
}
