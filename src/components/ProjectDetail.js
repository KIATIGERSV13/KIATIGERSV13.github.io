import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent,
  DialogActions, 
  Typography, 
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Tabs,
  Tab,
  Chip,
  Grid,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Close as CloseIcon,
  InsertDriveFile as FileIcon,
  CalendarToday as CalendarIcon,
  PersonOutline as PersonIcon,
  Build as ToolsIcon,
  Settings as SettingsIcon,
  Storage as DatabaseIcon,
  Computer as ComputerIcon,
  Cloud as CloudIcon,
  Code as CodeIcon
} from '@mui/icons-material';
import { skillLogos } from '../data/skillsData'; // 기술 로고 데이터 import

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
      style={{ height: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 3, height: '100%' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function ProjectDetail({ open, onClose, project }) {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  if (!project) return null;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // 기술 카테고리에 따라 아이콘 및 색상 선택
  const getCategoryIcon = (category) => {
    category = category.toLowerCase();
    if (category.includes('os')) return <ComputerIcon />;
    if (category.includes('platform')) return <CodeIcon />;
    if (category.includes('cloud')) return <CloudIcon />;
    if (category.includes('software')) return <SettingsIcon />;
    if (category.includes('database')) return <DatabaseIcon />;
    return <ToolsIcon />;
  };

  // 카테고리별 색상
  const getCategoryColor = (category) => {
    category = category.toLowerCase();
    if (category.includes('os')) return '#3498db';
    if (category.includes('platform')) return '#2ecc71';
    if (category.includes('cloud')) return '#9b59b6';
    if (category.includes('software')) return '#e67e22';
    if (category.includes('database')) return '#1abc9c';
    return '#34495e';
  };

  // 기술 이름으로 로고 찾기
  const findLogo = (toolName) => {
    // 도구 이름에서 버전 번호 제거 (예: "Docker 27.3.1" -> "Docker")
    const baseName = toolName.split(' ')[0].trim();
    
    // skillLogos에서 일치하는 항목 찾기
    for (const [name, logoData] of Object.entries(skillLogos)) {
      if (name === baseName || baseName.includes(name) || name.includes(baseName)) {
        return logoData.logo;
      }
    }
    
    // 기본 아이콘 반환
    return null;
  };

  // 탭 콘텐츠 - 기술 스택 부분 수정
  const renderTechStackTab = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.dark">
        기술 스택
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(project.tools).map(([category, tools]) => {
          const color = getCategoryColor(category);
          const icon = getCategoryIcon(category);
          const toolArray = typeof tools === 'string' ? tools.split(',') : [tools];
          
          return (
            <Grid item xs={12} sm={6} key={category}>
              <Paper
                elevation={2}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: `1px solid ${color}30`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 10px 20px -10px ${color}80`,
                  }
                }}
              >
                {/* 상단 색상 바 */}
                <Box
                  sx={{
                    height: 6,
                    width: '100%',
                    bgcolor: color,
                  }}
                />
                
                {/* 카테고리 헤더 */}
                <Box 
                  sx={{ 
                    p: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    borderBottom: `1px dashed ${color}40`
                  }}
                >
                  <Box 
                    sx={{ 
                      color: 'white', 
                      bgcolor: color,
                      borderRadius: '50%',
                      width: 36,
                      height: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography 
                    variant="subtitle1" 
                    fontWeight="bold" 
                    color={color}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {category}
                  </Typography>
                </Box>
                
                {/* 기술 목록 - 로고 추가 */}
                <Box sx={{ p: 2 }}>
                  <Grid container spacing={1.5}>
                    {toolArray.map((tool, i) => {
                      const toolName = tool.trim();
                      const logo = findLogo(toolName);
                      
                      return (
                        <Grid item key={i}>
                          <Chip
                            avatar={logo ? 
                              <Box 
                                component="img" 
                                src={logo} 
                                sx={{ 
                                  width: 24, 
                                  height: 24, 
                                  objectFit: 'contain',
                                  borderRadius: 0,
                                  ml: '8px' // 왼쪽 여백 조정
                                }} 
                              /> : undefined
                            }
                            label={toolName}
                            sx={{
                              fontWeight: 500,
                              bgcolor: `${color}15`,
                              color: color,
                              border: `1px solid ${color}30`,
                              py: 2.2, // 높이 조정
                              pl: logo ? 0.5 : 2, // 로고가 있을 때와 없을 때 패딩 조정
                              '& .MuiChip-label': {
                                px: 1.5 // 라벨 패딩
                              },
                              '&:hover': {
                                bgcolor: `${color}25`,
                              }
                            }}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      fullScreen={fullScreen}
      PaperProps={{
        elevation: 24,
        sx: {
          borderRadius: 3,
          overflow: 'hidden',
          maxHeight: '90vh'
        }
      }}
    >
      <DialogTitle 
        sx={{
          p: 2,
          background: 'linear-gradient(135deg, #1976d2 0%, #5a8dd6 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Typography variant="h5" component="h2" fontWeight="bold">
            {project.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
            <CalendarIcon fontSize="small" />
            <Typography variant="body2">
              {project.period}
            </Typography>
          </Box>
        </Box>
        <IconButton 
          edge="end" 
          color="inherit" 
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.95rem'
            }
          }}
        >
          <Tab label="개요" icon={<PersonIcon />} iconPosition="start" />
          <Tab label="기술 스택" icon={<ToolsIcon />} iconPosition="start" />
          <Tab label="PDF 문서" icon={<FileIcon />} iconPosition="start" />
        </Tabs>
      </Box>
      
      <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '60vh' }}>
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.dark">
              프로젝트 개요
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              {project.description}
            </Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.dark">
              담당 역할
            </Typography>
            <List disablePadding>
              {project.myRole.map((role, index) => (
                <ListItem 
                  key={index} 
                  disableGutters 
                  sx={{ 
                    py: 0.5,
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' }
                  }}
                >
                  <ListItemText 
                    primary={
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          position: 'relative',
                          pl: 3,
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 8,
                            height: 8,
                            bgcolor: 'primary.main',
                            borderRadius: '50%'
                          }
                        }}
                      >
                        {role}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>
        
        <TabPanel value={tabValue} index={1}>
          {renderTechStackTab()}
        </TabPanel>
        
        <TabPanel value={tabValue} index={2} sx={{ height: '100%' }}>
          <Box sx={{ height: '100%' }}>
            <iframe
              src={`${process.env.PUBLIC_URL}${project.pdfUrl}`}
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: 8 }}
              title="project-pdf"
            />
          </Box>
        </TabPanel>
      </DialogContent>
      
      <DialogActions sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
        <Button 
          onClick={onClose} 
          variant="outlined"
          sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
        >
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProjectDetail;
