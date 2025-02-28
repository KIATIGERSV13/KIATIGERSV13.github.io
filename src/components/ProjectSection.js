import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper,
  Chip,
  Collapse,
  Grid,
  Divider,
  IconButton,
  useTheme
} from '@mui/material';
import { 
  AccessTime as TimeIcon,
  KeyboardArrowDown as ExpandMoreIcon,
  KeyboardArrowUp as ExpandLessIcon,
  Description as DescriptionIcon,
  Visibility as VisibilityIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Language as WebIcon
} from '@mui/icons-material';

function ProjectSection({ projects, onProjectSelect }) {
  const [expandedId, setExpandedId] = useState(null);
  const theme = useTheme();
  
  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // 프로젝트 종류에 따라 아이콘 선택
  const getProjectIcon = (title) => {
    if (title.includes('리눅스')) return <StorageIcon />;
    if (title.includes('네트워크')) return <WebIcon />;
    if (title.includes('AWS') || title.includes('클라우드')) return <CloudIcon />;
    if (title.includes('Kubernetes') || title.includes('CKA')) return <CodeIcon />;
    if (title.includes('VMware') || title.includes('가상화')) return <StorageIcon />;
    return <DescriptionIcon />;
  };

  // 배경 그라데이션 생성 함수
  const getGradient = (index) => {
    const gradients = [
      'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
      'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
      'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
    ];
    
    return gradients[index % gradients.length];
  };

  return (
    <Grid container spacing={3}>
      {projects.map((project, index) => (
        <Grid item xs={12} md={6} key={project.id}>
          <Paper
            elevation={3}
            sx={{
              height: '100%',
              borderRadius: 3,
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              border: '1px solid rgba(0,0,0,0.05)',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
              }
            }}
          >
            <Box
              sx={{
                height: 15,
                width: '100%',
                background: getGradient(index),
              }}
            />
            
            <Box sx={{ p: 3, flexGrow: 1 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'space-between',
                mb: 2
              }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Box sx={{ 
                    color: theme.palette.primary.main,
                    bgcolor: `${theme.palette.primary.main}10`,
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                  }}>
                    {getProjectIcon(project.title)}
                  </Box>
                  <Typography 
                    variant="h6"
                    color="primary"
                    sx={{ 
                      fontWeight: 'bold',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
                <IconButton 
                  size="small" 
                  onClick={() => handleExpand(project.id)}
                  sx={{ 
                    bgcolor: expandedId === project.id ? 'rgba(0,0,0,0.05)' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {expandedId === project.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                mb: 2,
                color: 'text.secondary',
                fontSize: '0.875rem'
              }}>
                <TimeIcon sx={{ fontSize: 16 }} />
                {project.period}
              </Box>
              
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  mb: 2,
                  flexGrow: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  height: expandedId === project.id ? 'auto' : '2.5rem'
                }}
              >
                {project.shortDescription || project.description.substring(0, 100) + '...'}
              </Typography>
              
              <Collapse in={expandedId === project.id} timeout="auto" unmountOnExit>
                <Box sx={{ my: 2 }}>
                  <Divider sx={{ mb: 2 }} />
                  
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  
                  <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                    사용 기술
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                    {Object.entries(project.tools).map(([category, tools]) => (
                      <Chip
                        key={category}
                        label={tools}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                    ))}
                  </Box>
                </Box>
              </Collapse>
            </Box>

            <Box 
              sx={{ 
                p: 2, 
                pt: 0,
                display: 'flex', 
                justifyContent: 'flex-end',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                mt: 'auto'
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<VisibilityIcon />}
                onClick={(e) => {
                  e.stopPropagation();
                  onProjectSelect(project);
                }}
                sx={{
                  borderRadius: 6,
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 'none',
                  px: 2,
                  py: 0.7,
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                  }
                }}
              >
                상세 보기
              </Button>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectSection;
