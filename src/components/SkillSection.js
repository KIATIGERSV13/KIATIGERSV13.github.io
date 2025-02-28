import React, { useRef, useEffect, useMemo } from 'react';
import { Box, Typography, Chip, Grid, Paper, Tooltip } from '@mui/material';

function SkillSection({ skillLogos }) {
  // 카테고리 참조 객체 생성
  const categoryRefs = useRef({});
  
  const skillGroups = useMemo(() => ({
    '운영체제': ['Rocky Linux', 'Ubuntu', 'Windows Server', 'Shell Script'],
    '컨테이너 및 오케스트레이션': ['Docker', 'Kubernetes'],
    '클라우드': ['AWS', 'Google Cloud'],  
    '네트워크': ['Cisco'],
    '개발도구': ['Github', 'Git'],
    '프로그래밍 언어': ['JavaScript', 'Python', 'C'],  // 새로운 그룹 추가
    '프론트엔드': ['HTML', 'CSS', 'react'],  
    '데이터베이스': ['MySQL', 'MariaDB'],
    '가상화': ['VMware', 'VirtualBox'],
    '임베디드': ['Arduino', 'Raspberry Pi'],
  }), []);

  // 기술별 중요도
  const importance = {
    'Rocky Linux': 4,
    'Ubuntu': 5,
    'Windows Server': 3,
    'Docker': 5,
    'Kubernetes': 5,
    'AWS': 5,
    'Google Cloud': 3,  
    'Cisco': 4,
    'Github': 3,
    'Git': 4,
    'MySQL': 3,
    'VMware': 4,
    'VirtualBox': 3,
    'Arduino': 2,
    'react': 3,
    'Raspberry Pi': 3,
    'HTML': 4,
    'CSS': 4,  
    'Shell Script': 4,
    'MariaDB': 3,
    'JavaScript': 4,  // 추가
    'Python': 4,      // 추가
    'C': 3,           // 추가
  };

  // 그룹별 색상
  const groupColors = {
    '운영체제': '#3498db',
    '컨테이너 및 오케스트레이션': '#2ecc71',
    '클라우드': '#9b59b6',
    '네트워크': '#e74c3c',
    '개발도구': '#f39c12',
    '프로그래밍 언어': '#27ae60',  // 새 카테고리 색상 추가
    '프론트엔드': '#e67e22',
    '데이터베이스': '#1abc9c',
    '가상화': '#34495e',
    '임베디드': '#7f8c8d',
  };

  // 스크롤 처리 함수
  const scrollToCategory = (category) => {
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // ref 초기화 - 의존성 배열에 skillGroups 추가
  useEffect(() => {
    Object.keys(skillGroups).forEach(group => {
      categoryRefs.current[group] = categoryRefs.current[group] || null;
    });
  }, [skillGroups]); // skillGroups 의존성 추가

  return (
    <>
      <Box sx={{ mb: 4, position: 'sticky', top: 0, zIndex: 10, bgcolor: 'white', py: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
          기술 카테고리:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {Object.entries(groupColors).map(([group, color]) => (
            <Chip 
              key={group}
              label={group}
              onClick={() => scrollToCategory(group)}
              sx={{ 
                bgcolor: color,
                color: 'white',
                fontWeight: 'medium',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9,
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease'
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {Object.entries(skillGroups).map(([group, skillNames]) => (
        <Box 
          key={group} 
          sx={{ mb: 6 }}
          ref={el => categoryRefs.current[group] = el}
          id={`category-${group}`}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 3,
              color: groupColors[group], 
              borderBottom: `2px solid ${groupColors[group]}`,
              display: 'inline-block',
              pb: 0.5,
              pl: 1
            }}
          >
            {group}
          </Typography>
          
          <Grid container spacing={3}>
            {skillNames.map(name => {
              const { logo, url } = skillLogos[name];
              const size = 20 + (importance[name] * 10);
              
              return (
                <Grid item xs={6} sm={4} md={3} key={name}>
                  <Tooltip title={`클릭하여 ${name} 공식 웹사이트로 이동`}>
                    <Paper
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      elevation={2}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1.5,
                        p: 2,
                        height: '100%',
                        borderRadius: 4,
                        border: `1px solid ${groupColors[group]}20`,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        bgcolor: 'white',
                        mt: 1,
                        mb: 1,
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '4px',
                          bgcolor: groupColors[group],
                        },
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: `0 10px 25px -10px ${groupColors[group]}80`,
                          '& .skill-logo': {
                            transform: 'scale(1.15) rotate(5deg)',
                          }
                        },
                        textDecoration: 'none'
                      }}
                    >
                      <Box 
                        className="skill-logo"
                        sx={{ 
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}
                      >
                        <Box 
                          component="img" 
                          src={logo}
                          alt={name}
                          sx={{
                            width: size,
                            height: size,
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 3px 5px rgba(0,0,0,0.1))'
                          }}
                        />
                      </Box>

                      <Box sx={{ textAlign: 'center' }}>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontWeight: 600, 
                            color: 'text.primary',
                            mb: 0.5
                          }}
                        >
                          {name}
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Box 
                              key={i}
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                mx: 0.2,
                                bgcolor: i < importance[name] ? groupColors[group] : '#e0e0e0'
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Paper>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ))}
    </>
  );
}

export default SkillSection;
