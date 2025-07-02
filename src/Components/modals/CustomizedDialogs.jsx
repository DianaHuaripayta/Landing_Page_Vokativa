// CustomizedDialogs.jsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": { padding: theme.spacing(2) },
  "& .MuiDialogActions-root": { padding: theme.spacing(1) },
}));

export default function CustomizedDialogs({
  open,
  onClose,
  content,
  url,
  btnCloseText = "Cerrar",
  redirectUrl = null,
}) {
  const handleClose = () => {
    onClose(); // Cierra el modal
   if (redirectUrl) {
      window.open(redirectUrl, '_blank'); // Abre en nueva pestaña
    }
  };
  return (
    <BootstrapDialog onClose={onClose} open={open}>
      {/* <DialogTitle sx={{ m: 0, p: 2 }}>Inscripción</DialogTitle> */}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography>{content}</Typography>
        <img
          src={url}
          alt="Inscripción"
            onClick={handleClose} 
          style={{ cursor: 'pointer', width: "100%", height: "70vh", borderRadius: "8px"}}
        />
      </DialogContent>
      <DialogActions>
        {/* <Button  variant="contained"  color="secondary" autoFocus onClick={handleClose}>
          {btnCloseText}
        </Button>{" "} */}
      </DialogActions>
    </BootstrapDialog>
  );
}
