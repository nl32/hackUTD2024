import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}
export default function Popup(props: PopupProps) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '6px solid #ece7d8',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {props.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.content}
        </Typography>
        <Button onClick={props.onClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
