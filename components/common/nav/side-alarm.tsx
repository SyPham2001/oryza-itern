import * as React from 'react';
import { Stack, Typography, Box, Icon, SvgIcon } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import Image from 'next/image';
export default function SideAlarm() {
    return (
        <Stack maxHeight="100vh" sx={{ height: '100vh' }}>
            <Stack direction="column">
                <Box sx={{ p: 2 }}>
                    <Stack direction="row">
                        <Box paddingRight={0.5}>
                            <AccessAlarmIcon />
                        </Box>
                        <Stack direction="column" paddingRight={8}>
                            <Typography fontWeight={700} fontSize={24}>
                                Báo động Oryza
                            </Typography>
                            <Typography fontStyle="italic" fontSize={13} fontWeight="light">
                                420/3A Thuận An, Bình Dương
                            </Typography>
                        </Stack>
                        <Box>
                            <Image src="/images/menuIcon.svg" alt="icon" width={24} height={24} />
                        </Box>
                    </Stack>
                </Box>
                <Box p={2}>
                    <Stack>
                        <Stack
                            bgcolor="#067DC0"
                            width="300"
                            height="130px"
                            top="119px"
                            left="107px"
                            borderRadius="16px"
                            direction="row"
                        >
                            <Box color="#E94F4F" marginLeft={0.5} marginRight={0.5} mt={1.5}>
                                <FiberManualRecordRoundedIcon />
                            </Box>
                            <Stack direction="column">
                                <Typography
                                    fontWeight={700}
                                    fontSize={24}
                                    color="#FFFFFF"
                                    paddingTop={1}
                                >
                                    Báo động Oryza
                                </Typography>
                                <Typography
                                    fontStyle="italic"
                                    fontSize={13}
                                    fontWeight="light"
                                    color="#FFFFFF"
                                >
                                    420/3A Thuận An, Bình Dương
                                </Typography>
                            </Stack>
                            <Box paddingLeft={7} paddingTop={1.5}>
                                <Image
                                    src="/images/settingwhiteIcon.svg"
                                    alt="icon"
                                    width={24}
                                    height={24}
                                />
                            </Box>
                            <Box position="relative">
                                <Typography
                                    position="absolute"
                                    right={6}
                                    bottom={1.5}
                                    fontSize={40}
                                    color="#FFFFFF"
                                    fontWeight="bold"
                                >
                                    110
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>

                <Box p={2}>
                    <Stack>
                        <Stack
                            bgcolor="#55595D33"
                            width="300"
                            height="130px"
                            top="119px"
                            left="107px"
                            borderRadius="16px"
                            direction="row"
                        >
                            <Box color="#5EB14A" marginLeft={0.5} marginRight={0.5} mt={1.5}>
                                <FiberManualRecordRoundedIcon />
                            </Box>
                            <Stack direction="column">
                                <Typography
                                    fontWeight={700}
                                    fontSize={24}
                                    color="#000000"
                                    paddingTop={1}
                                >
                                    Báo động Oryza
                                </Typography>
                                <Typography
                                    fontStyle="italic"
                                    fontSize={13}
                                    fontWeight="light"
                                    color="#000000"
                                >
                                    420/3A Thuận An, Bình Dương
                                </Typography>
                            </Stack>
                            <Box paddingLeft={7} paddingTop={1.5}>
                                <Image
                                    src="/images/settingblackIcon.svg"
                                    alt="penIcon"
                                    width={24}
                                    height={24}
                                />
                            </Box>
                            <Box position="relative">
                                <Typography
                                    position="absolute"
                                    right={6}
                                    bottom={1.5}
                                    fontSize={40}
                                    color="#000000"
                                    fontWeight="bold"
                                >
                                    15
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    );
}
