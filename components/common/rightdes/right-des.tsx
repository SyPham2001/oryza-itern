import { Box, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';

export default function Description() {
    const tableTextDefault = {
        color: '#55595D',
    };
    return (
        <div>
            <Stack direction="column">
                <Box p={2}>
                    <Stack direction="row" alignItems="center">
                        <Typography mr={2} fontSize={20}>
                            Thông Tin Sản Phẩm
                        </Typography>
                        <Typography flex="1">
                            <Divider />
                        </Typography>
                        <Box ml={2} color="primary">
                            <SvgIcon>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 21H21.5"
                                        stroke="#55595D"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z"
                                        fill="white"
                                        stroke="#55595D"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </SvgIcon>
                        </Box>
                    </Stack>
                    <Box p={2}>
                        <Stack direction="column">
                            <Box sx={tableTextDefault}>
                                <Typography fontSize={14}>Tên Client: </Typography>
                                <Typography fontSize={14}>Phiên Bản Phần Mềm: </Typography>
                            </Box>
                        </Stack>
                        <Stack direction="column" mt={3}>
                            <Box sx={tableTextDefault}>
                                <Typography fontSize={14}>Mã Thiết Bị </Typography>
                                <Typography fontSize={14}>Địa Chỉ </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box p={2}>
                    <Stack direction="row" alignItems="center">
                        <Typography mr={2} fontSize={20}>
                            Lời Thoại Cuộc Gọi
                        </Typography>
                        <Typography flex="1">
                            <Divider />
                        </Typography>
                        <Box ml={2} color="primary">
                            <SvgIcon>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 21H21.5"
                                        stroke="#55595D"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z"
                                        fill="white"
                                        stroke="#55595D"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </SvgIcon>
                        </Box>
                    </Stack>
                    <Box p={2}>
                        <Stack direction="column">
                            <Box sx={tableTextDefault}>
                                <Typography fontSize={14}>Tên Client: </Typography>
                                <Typography fontSize={14}>Phiên Bản Phần Mềm: </Typography>
                            </Box>
                        </Stack>
                        <Stack direction="column" mt={3}>
                            <Box sx={tableTextDefault}>
                                <Typography fontSize={14}>Mã Thiết Bị </Typography>
                                <Typography fontSize={14}>Địa Chỉ </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box p={2}>
                    <Stack direction="row" alignItems="center">
                        <Typography mr={2} fontSize={20}>
                            Danh Bạ
                        </Typography>
                        <Typography flex="1">
                            <Divider />
                        </Typography>
                        <Box ml={2} color="primary">
                            <SvgIcon>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 21H21.5"
                                        stroke="#55595D"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z"
                                        fill="white"
                                        stroke="#55595D"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </SvgIcon>
                        </Box>
                    </Stack>
                    <Box p={2}>
                        <Stack direction="column">
                            <Box sx={tableTextDefault}>
                                <Typography fontSize={14}>Tên Client: </Typography>
                                <Typography fontSize={14}>Phiên Bản Phần Mềm: </Typography>
                            </Box>
                        </Stack>
                        <Stack direction="column" mt={3}>
                            <Box sx={tableTextDefault}>
                                <Typography fontSize={14}>Mã Thiết Bị </Typography>
                                <Typography fontSize={14}>Địa Chỉ </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </div>
    );
}
