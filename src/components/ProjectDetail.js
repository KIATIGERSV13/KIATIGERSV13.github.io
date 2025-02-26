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
      <DialogTitle 
        sx={{
          borderBottom: '2px solid #1976d2',
          mb: 2,
          pb: 1
        }}
      >
        {project.title}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ 
          mb: 3,
          p: 2,
          bgcolor: '#f8f9fa',
          borderRadius: 1
        }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              color: '#1976d2',
              borderBottom: '1px solid #e0e0e0',
              pb: 1
            }}
          >
            프로젝트 개요
          </Typography>
          <Typography paragraph sx={{ pl: 1 }}>{project.description}</Typography>
        </Box>
        
        <Box sx={{ 
          mb: 3,
          p: 2,
          bgcolor: '#f8f9fa',
          borderRadius: 1
        }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              color: '#1976d2',
              borderBottom: '1px solid #e0e0e0',
              pb: 1
            }}
          >
            운영도구/버전
          </Typography>
          {project.tools && (
            <List dense sx={{ pl: 1 }}>
              {Object.entries(project.tools).map(([category, tools]) => (
                <ListItem key={category} sx={{ px: 0 }}>
                  <ListItemText
                    primary={
                      <Typography>
                        <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong> {tools}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        <Box sx={{ 
          mb: 3,
          p: 2,
          bgcolor: '#f8f9fa',
          borderRadius: 1
        }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              color: '#1976d2',
              borderBottom: '1px solid #e0e0e0',
              pb: 1
            }}
          >
            프로젝트 기간
          </Typography>
          <Typography sx={{ pl: 1 }}>{project.period}</Typography>
        </Box>

        <Box sx={{ 
          mb: 3,
          p: 2,
          bgcolor: '#f8f9fa',
          borderRadius: 1
        }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              color: '#1976d2',
              borderBottom: '1px solid #e0e0e0',
              pb: 1
            }}
          >
            담당 역할
          </Typography>
          <List sx={{ pl: 1 }}>
            {project.myRole.map((role, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemText 
                  primary={role}
                  sx={{
                    '& .MuiTypography-root': {
                      position: 'relative',
                      pl: 2,
                      '&::before': {
                        content: '"•"',
                        position: 'absolute',
                        left: 0
                      }
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              color: '#1976d2',
              borderBottom: '1px solid #e0e0e0',
              pb: 1
            }}
          >
            프로젝트 상세 자료
          </Typography>
          <Box sx={{ 
            height: '500px', 
            width: '100%',
            mt: 2,
            border: '1px solid #e0e0e0',
            borderRadius: 1,
            overflow: 'hidden'
          }}>
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
