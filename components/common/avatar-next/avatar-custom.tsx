import { Stack, SxProps, Theme } from '@mui/material';
import Image from 'next/image';

export interface IAvatarCustomProps {
    src?: string;
    size?: number;
    alt?: string;
    type?: 'circle' | 'square';
    author?: boolean;
    sx?: SxProps<Theme>;
}

export const AvatarCustom = (props: IAvatarCustomProps) => {
    const { src, size, alt, type, sx } = props;

    return (
        <Stack sx={sx}>
            <Stack
                sx={{
                    borderRadius: type === 'square' ? 2 : '100rem',
                    overflow: 'hidden',
                    width: size ? size : 50,
                    height: size ? size : 50,
                    position: 'relative',
                    border: '2px solid #fff',
                    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                    backgroundColor: '#fff',
                }}
            >
                <Image
                    src={src ? src : '/static/avatar/user.PNG'}
                    alt={alt ? alt : 'avatar'}
                    width={200}
                    height={200}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                    }}
                />
            </Stack>
        </Stack>
    );
};
