import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Typography, 
  Box,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { PDFViewer } from '@react-pdf/renderer';

function ProjectDetail({ open, onClose, project }) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>{project.title}</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>프로젝트 개요</Typography>
          <Typography paragraph>{project.description}</Typography>
        </Box>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>프로젝트 기간</Typography>
          <Typography>{project.period}</Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>담당 역할</Typography>
          <List>
            {project.myRole.map((role, index) => (
              <ListItem key={index}>
                <ListItemText primary={role} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>프로젝트 상세 자료</Typography>
          <Box sx={{ height: '500px', width: '100%' }}>
            <iframe
              src={`${process.env.PUBLIC_URL}${project.pdfUrl}`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="project-pdf"
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDetail;
