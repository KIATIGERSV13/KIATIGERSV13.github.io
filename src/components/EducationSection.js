import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Chip, 
  Grid,
  LinearProgress,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { 
  School as SchoolIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

function EducationSection({ educations }) {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 교육 진행 상태 계산 (시작일과 종료일 기준)
  const calculateProgress = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const today = new Date();

    // 아직 시작 안함
    if (today < startDate) return 0;
    
    // 이미 완료
    if (today > endDate) return 100;

    // 진행 중
    const total = endDate - startDate;
    const current = today - startDate;
    return Math.floor((current / total) * 100);
  };

  return (
    <Grid container spacing={3}>
      {educations.map((edu) => {
        const progress = calculateProgress(edu.startDate, edu.endDate);
        const isExpanded = expanded[edu.id];
        const isCompleted = progress === 100;
        const isOngoing = progress > 0 && progress < 100;
        
        return (
          <Grid item xs={12} key={edu.id}>
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0,0,0,0.06)',
                position: 'relative',
                '&:hover': {
                  boxShadow: '0 8px 25px -5px rgba(0,0,0,0.1)',
                  transform: 'translateY(-3px)',
                }
              }}
            >
              {/* 상태 배지 */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 1
                }}
              >
                <Chip
                  label={isCompleted ? "완료" : isOngoing ? "진행 중" : "예정"}
                  color={isCompleted ? "success" : isOngoing ? "primary" : "default"}
                  size="small"
                  sx={{ 
                    fontWeight: 'medium',
                    '& .MuiChip-label': { px: 1 }
                  }}
                />
              </Box>
              
              {/* 헤더 영역 */}
              <Box
                sx={{
                  p: 3,
                  pb: 1,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 2, sm: 3 },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                }}
              >
                {/* 기관 로고 */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    bgcolor: 'rgba(44, 111, 187, 0.05)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(0,0,0,0.06)',
                    p: 1,
                  }}
                >
                  {edu.logo ? (
                    <Box 
                      component="img" 
                      src={edu.logo}
                      alt={edu.institution}
                      sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  ) : (
                    <SchoolIcon 
                      sx={{ 
                        fontSize: 40, 
                        color: 'primary.main' 
                      }} 
                    />
                  )}
                </Box>

                {/* 교육 정보 */}
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="h6" 
                    color="primary"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {edu.title}
                  </Typography>
                  
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 2,
                      mt: 1,
                    }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 0.5, 
                        color: 'text.secondary',
                        fontSize: '0.875rem'
                      }}
                    >
                      <SchoolIcon fontSize="small" />
                      <Typography variant="body2" noWrap>
                        {edu.institution}
                      </Typography>
                    </Box>
                    
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 0.5, 
                        color: 'text.secondary',
                        fontSize: '0.875rem'
                      }}
                    >
                      <TimeIcon fontSize="small" />
                      <Typography variant="body2" noWrap>
                        {edu.period}
                      </Typography>
                    </Box>
                    
                    {edu.location && (
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 0.5, 
                          color: 'text.secondary',
                          fontSize: '0.875rem'
                        }}
                      >
                        <LocationIcon fontSize="small" />
                        <Typography variant="body2" noWrap>
                          {edu.location}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
                
                <IconButton onClick={() => toggleExpand(edu.id)}>
                  {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Box>
              
              {/* 진행 상태 바 */}
              <Box
                sx={{
                  px: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 0.5
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={progress} 
                    sx={{ 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: 'rgba(0,0,0,0.05)'
                    }}
                  />
                </Box>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  fontWeight="medium"
                  sx={{ minWidth: 40 }}
                >
                  {progress}%
                </Typography>
              </Box>
              
              {/* 추가 정보 (접었다 펼칠 수 있는 내용) */}
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <Box sx={{ p: 3, pt: 0 }}>
                  <Divider sx={{ my: 2 }} />
                  
                  {/* 교육 내용 */}
                  <Typography variant="body2" paragraph>
                    {edu.description}
                  </Typography>
                  
                  {/* 교육 과목 */}
                  {edu.subjects && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                        교육 과목
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                        {edu.subjects.map((subject, index) => (
                          <Chip
                            key={index}
                            label={subject}
                            size="small"
                            variant="outlined"
                            color="primary"
                            sx={{ fontWeight: 500 }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                  
                  {/* 성과 목록 */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                        학습 성과
                      </Typography>
                      <List dense disablePadding>
                        {edu.achievements.map((achievement, index) => (
                          <ListItem 
                            key={index} 
                            disablePadding
                            sx={{ py: 0.5 }}
                          >
                            <ListItemText
                              primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <CheckCircleIcon color="primary" fontSize="small" />
                                  <Typography variant="body2">{achievement}</Typography>
                                </Box>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}
                </Box>
              </Collapse>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default EducationSection;
