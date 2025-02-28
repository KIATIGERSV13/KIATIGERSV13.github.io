import React from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';

function CertificateSection({ certificates }) {
  return (
    <Grid container spacing={3}>
      {certificates.map((cert, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Paper 
            elevation={0}
            sx={{
              p: 0,
              height: '100%',
              display: 'flex',
              alignItems: 'stretch',
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid #e8e8e8',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                transform: 'translateY(-2px)',
                borderColor: 'primary.light',
              }
            }}
          >
            <Box
              sx={{
                width: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(44, 111, 187, 0.05)',
                borderRight: '1px solid #e8e8e8',
                p: 2
              }}
            >
              <Box
                component="img"
                src={cert.logo}
                alt={cert.title}
                sx={{
                  width: 50,
                  height: 50,
                  objectFit: 'contain'
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography 
                variant="subtitle1" 
                fontWeight="bold"
                sx={{ mb: 0.5 }}
              >
                {cert.title}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: '0.85rem'
                }}
              >
                <Box component="span" sx={{ opacity: 0.7, mr: 1 }}>
                  {cert.organization}
                </Box>
                <Box 
                  component="span" 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    fontSize: '0.7rem', 
                    px: 1, 
                    py: 0.3, 
                    borderRadius: 5,
                    ml: 'auto'
                  }}
                >
                  {cert.date}
                </Box>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default CertificateSection;
