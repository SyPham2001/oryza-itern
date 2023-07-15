import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import Image from 'next/image';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 589,
    height: 400,
    bgcolor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: 20,
    p: 4,
};


export default function ModalEditAlarm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack direction="column">
                    <Typography
                        id="modal-modal-title"
                        fontSize={15}
                        textAlign="center"
                        fontWeight={700}
                    >
                        Chỉnh Sửa Thông Tin Bộ Báo Động
                    </Typography>
                    <Box mt={2}>
                        <TextField
                            fullWidth
                            id="outlined-uncontrolled"
                            defaultValue="Báo Động Oryza"
                            variant="outlined"
                        />
                    </Box>
                    <Stack direction="row" mt={2}>
                        <Stack direction="column">
                            <Typography>Tỉnh , thành phố</Typography>
                            <TextField
                                sx={{ width: 250 }}
                                id="outlined-uncontrolled"
                                defaultValue="Bình Dương"
                                variant="outlined"
                            />
                        </Stack>
                        <Stack direction="column" ml={3}>
                            <Typography>Quận, huyện, thị xã</Typography>
                            <TextField
                                sx={{ width: 250 }}
                                id="outlined-uncontrolled"
                                defaultValue="Bình Dương"
                                variant="outlined"
                            />
                        </Stack>
                    </Stack>
                    <Stack direction="row" mt={2}>
                        <Stack direction="column">
                            <Typography>Tỉnh , thành phố</Typography>
                            <TextField
                                sx={{ width: 250 }}
                                id="outlined-uncontrolled"
                                defaultValue="Bình Dương"
                                variant="outlined"
                            />
                        </Stack>
                        <Stack direction="column" ml={3}>
                            <Typography>Quận, huyện, thị xã</Typography>
                            <TextField
                                sx={{ width: 250 }}
                                id="outlined-uncontrolled"
                                defaultValue="Bình Dương"
                                variant="outlined"
                            />
                        </Stack>
                    </Stack>
                    <Stack position="relative" mt={2} direction="row">
                        <Button
                            sx={{
                                borderRadius: '50%',
                                position: 'absolute',
                                right: '150px',
                                bgcolor: '#E94F4F4D',
                            }}
                        >
                            <Image alt="logo" src="/images/deleteIcon.svg" width={24} height={24} />
                        </Button>
                        <Button
                            sx={{
                                borderRadius: '10px',
                                position: 'absolute',
                                right: 6,
                                bgcolor: '#FFB862',
                            }}
                        >
                            <Typography color="#FFFFFF">Cập nhật</Typography>
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    );
}
