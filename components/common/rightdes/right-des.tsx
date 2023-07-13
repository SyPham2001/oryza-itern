import { Box, Divider, Stack, SvgIcon, Typography, colors } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
export default function Description() {
    const tableTextDefault = {
        color: '#55595D',
    };
    function createData(name: string, phone: string, updated: string) {
        return { name, phone, updated };
    }
    const rows = [
        createData('Lê Thành Hiếu', '0967738406', ''),
        createData('Lê Thành Hiếu', '0967738406', ''),
        createData('Lê Thành Hiếu', '0967738406', ''),
        createData('Lê Thành Hiếu', '0967738406', 'noupdated'),
    ];
    const styled = {
        color: 'red',
    };
    const styled2 = {
        color: 'green',
    };

    return (
        <div>
            <Stack direction="column">
                <Box p={2}>
                    <Stack direction="row" alignItems="center">
                        <Typography mr={2} fontSize={20}>
                            Thông Tin Sản Phẩm
                        </Typography>

                        <Divider style={{ flexGrow: 1 }} />

                        <Box ml={2} color="primary">
                            <Image src="/images/penIcon.svg" alt="penIcon" width={24} height={24} />
                        </Box>
                    </Stack>
                    <Box p={2}>
                        <Stack direction="row">
                            <Stack direction="column">
                                <Box sx={tableTextDefault}>
                                    <Typography fontSize={14} mb={2}>
                                        Tên Client:{' '}
                                    </Typography>
                                    <Typography fontSize={14}>Phiên Bản Phần Mềm: </Typography>
                                </Box>
                            </Stack>
                            <Stack direction="column" ml={8}>
                                <Box sx={tableTextDefault}>
                                    <Typography fontSize={14} color="#000000">
                                        Báo động Oryza{' '}
                                    </Typography>
                                    <Typography fontSize={14} color="#000000" mt={2}>
                                        1.0.64 LTS - 18-06-2023{' '}
                                    </Typography>
                                    <Typography
                                        fontSize={14}
                                        fontStyle="italic"
                                        color={tableTextDefault}
                                    >
                                        @ power by Oryza Systems (Oryza JSC)
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>

                        <Stack direction="column" mt={3}>
                            <Box sx={tableTextDefault}>
                                <Stack fontSize={14} direction="row" mb={2}>
                                    <Typography fontSize={14}>Mã Thiết Bị</Typography>
                                    <Typography fontSize={14} ml={2} mr={2} color="#000000">
                                        F4BBC490BF
                                    </Typography>

                                    <Image
                                        src="images/copyIcon.svg"
                                        alt="icon"
                                        width={24}
                                        height={24}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </Stack>
                                <Stack direction="row">
                                    <Typography fontSize={14}>Địa Chỉ </Typography>

                                    <Typography fontSize={14} ml={2} color="#000000">
                                        420/3A QL13 Thuận An, Bình Dương
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box p={2}>
                    <Stack direction="row" alignItems="center">
                        <Typography mr={2} fontSize={20}>
                            Lời Thoại Cuộc Gọi
                        </Typography>

                        <Divider style={{ flexGrow: 1 }} />

                        <Box ml={2}>
                            <Image src="/images/penIcon.svg" alt="penIcon" width={24} height={24} />
                        </Box>
                    </Stack>
                    <Box p={2}>
                        <Typography color={tableTextDefault} fontSize={14}>
                            Cướp Cướp Cướp... ngân hàng Vietcombannk Hiện đang bị cướp ....Cướp Cướp
                            Cướp ngân hàng vietcombank Hiện đang bị cướp
                        </Typography>
                    </Box>
                </Box>
                <Box p={2}>
                    <Stack direction="row" alignItems="center">
                        <Typography mr={2} fontSize={20}>
                            Danh Bạ (4)
                        </Typography>

                        <Divider style={{ flexGrow: 1 }} />

                        <Stack ml={2} direction="row">
                            <Image
                                src="/images/plusIcon.svg"
                                alt="penIcon"
                                width={24}
                                height={24}
                            />
                            <Image
                                src="/images/historyIcon.svg"
                                alt="penIcon"
                                width={24}
                                height={24}
                                style={{ marginLeft: '10px' }}
                            />
                        </Stack>
                    </Stack>

                    <Stack direction="column" mt={3}>
                        <Box sx={tableTextDefault}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: '#55595D' }}>
                                                Họ Và Tên
                                            </TableCell>
                                            <TableCell align="left" sx={{ color: '#55595D' }}>
                                                Số Điện Thoại
                                            </TableCell>
                                            <TableCell align="right" sx={{ color: '#55595D' }}>
                                                Trạng Thái Cập Nhật
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    sx={{ color: '#55595D' , bgcolor : '#D9D9D933'}}

                                                >
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="left" sx={{ color: '#55595D', bgcolor : '#D9D9D933' }}>
                                                    {row.phone}
                                                </TableCell>
                                                <TableCell align="right" sx={{ color: '#55595D', bgcolor : '#D9D9D933' }}>
                                                    {row.updated === 'noupdated' ? (
                                                        <Typography color="#E94F4F" fontSize={14}>
                                                            Chưa cập nhật
                                                        </Typography>
                                                    ) : (
                                                        <Typography color="#5EB14A" fontSize={14}>
                                                            Đã cập nhật
                                                        </Typography>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </div>
    );
}
