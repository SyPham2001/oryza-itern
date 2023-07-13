import * as React from 'react';
import { Stack, Typography, Box, Icon, SvgIcon } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
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
                            <SvgIcon>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 5.25H20"
                                        stroke="#595959"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12 9.75H20"
                                        stroke="#595959"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12 14.25H20"
                                        stroke="#595959"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M4 18.75H20"
                                        stroke="#595959"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8 9.5L4 12L8 14.5V9.5Z"
                                        fill="#595959"
                                        stroke="#595959"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </SvgIcon>
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
                                <SvgIcon>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.1419 21.5854C7.46635 21.0866 5.9749 20.1604 4.79393 18.9333C5.2345 18.4111 5.5 17.7365 5.5 16.9998C5.5 15.343 4.15685 13.9998 2.5 13.9998C2.39977 13.9998 2.3007 14.0047 2.203 14.0143C2.0699 13.3636 2 12.6899 2 11.9998C2 10.9545 2.16039 9.94667 2.4579 8.99952C2.47191 8.99972 2.48594 8.99982 2.5 8.99982C4.15685 8.99982 5.5 7.65667 5.5 5.99982C5.5 5.52417 5.3893 5.07437 5.1923 4.67481C6.34875 3.5995 7.76025 2.79477 9.32605 2.36133C9.8222 3.33385 10.8333 3.99982 12 3.99982C13.1667 3.99982 14.1778 3.33385 14.674 2.36133C16.2398 2.79477 17.6512 3.5995 18.8077 4.67481C18.6107 5.07437 18.5 5.52417 18.5 5.99982C18.5 7.65667 19.8432 8.99982 21.5 8.99982C21.5141 8.99982 21.5281 8.99972 21.5421 8.99952C21.8396 9.94667 22 10.9545 22 11.9998C22 12.6899 21.9301 13.3636 21.797 14.0143C21.6993 14.0047 21.6002 13.9998 21.5 13.9998C19.8432 13.9998 18.5 15.343 18.5 16.9998C18.5 17.7365 18.7655 18.4111 19.2061 18.9333C18.0251 20.1604 16.5336 21.0866 14.8581 21.5854C14.4714 20.3757 13.338 19.4998 12 19.4998C10.662 19.4998 9.5286 20.3757 9.1419 21.5854Z"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </SvgIcon>
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
                            <Box color="#000000" paddingLeft={7} paddingTop={1.5}>
                                <SvgIcon>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.1419 21.5854C7.46635 21.0866 5.9749 20.1604 4.79393 18.9333C5.2345 18.4111 5.5 17.7365 5.5 16.9998C5.5 15.343 4.15685 13.9998 2.5 13.9998C2.39977 13.9998 2.3007 14.0047 2.203 14.0143C2.0699 13.3636 2 12.6899 2 11.9998C2 10.9545 2.16039 9.94667 2.4579 8.99952C2.47191 8.99972 2.48594 8.99982 2.5 8.99982C4.15685 8.99982 5.5 7.65667 5.5 5.99982C5.5 5.52417 5.3893 5.07437 5.1923 4.67481C6.34875 3.5995 7.76025 2.79477 9.32605 2.36133C9.8222 3.33385 10.8333 3.99982 12 3.99982C13.1667 3.99982 14.1778 3.33385 14.674 2.36133C16.2398 2.79477 17.6512 3.5995 18.8077 4.67481C18.6107 5.07437 18.5 5.52417 18.5 5.99982C18.5 7.65667 19.8432 8.99982 21.5 8.99982C21.5141 8.99982 21.5281 8.99972 21.5421 8.99952C21.8396 9.94667 22 10.9545 22 11.9998C22 12.6899 21.9301 13.3636 21.797 14.0143C21.6993 14.0047 21.6002 13.9998 21.5 13.9998C19.8432 13.9998 18.5 15.343 18.5 16.9998C18.5 17.7365 18.7655 18.4111 19.2061 18.9333C18.0251 20.1604 16.5336 21.0866 14.8581 21.5854C14.4714 20.3757 13.338 19.4998 12 19.4998C10.662 19.4998 9.5286 20.3757 9.1419 21.5854Z"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </SvgIcon>
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
