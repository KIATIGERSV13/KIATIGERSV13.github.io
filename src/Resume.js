import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import ProjectDetail from './components/ProjectDetail';
import SkillSection from './components/SkillSection';
import CertificateSection from './components/CertificateSection';
import ProjectSection from './components/ProjectSection';
import EducationSection from './components/EducationSection';
import { projects } from './data/projectsData';
import { skillLogos } from './data/skillsData';
import { certificates } from './data/certificatesData';
import { educations } from './data/educationData';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// 테마 설정
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c6fbb', // 좀 더 선명한 파란색
      light: '#5a8dd6',
      dark: '#1e4c82',
    },
    secondary: {
      main: '#ff6b6b', // 액센트 색상
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
      card: 'linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%)',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Pretendard', 'Roboto', sans-serif",
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.3px',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '-0.2px',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          transition: '0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
            transform: 'translateY(-3px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '6px 16px',
        },
      },
    },
  },
});

function Resume() {
  const [selectedProject, setSelectedProject] = useState(null);

  // 이미지 경로를 process.env.PUBLIC_URL로 수정
  const profileImagePath = `${process.env.PUBLIC_URL}/images/윤재영 증명사진.jpg`;

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          bgcolor: '#f0f2f5', 
          minHeight: '100vh', 
          py: 5,
          backgroundImage: 'linear-gradient(120deg, #f0f2f5 0%, #e6f0f9 100%)',
        }}
      >
        <Container maxWidth="md">
          {/* 프로필 카드 - 사진 부분 개선 */}
          <Card 
            sx={{
              mb: 5,
              position: 'relative',
              overflow: 'hidden',
              background: 'white',
            }}
          >
            {/* 상단 색상 배너 */}
            <Box
              sx={{
                height: 15,
                width: '100%',
                bgcolor: 'primary.main',
                background: 'linear-gradient(90deg, #2c6fbb, #5a8dd6)',
              }}
            />
            
            {/* 포지션 태그 */}
            <Box 
              sx={{
                position: 'absolute',
                top: 25,
                right: 30,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                py: 0.5,
                px: 2,
                fontWeight: 'medium',
                fontSize: '0.9rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                zIndex: 1,
              }}
            >
              클라우드 엔지니어
            </Box>

            {/* 프로필 내용 */}
            <Box 
              sx={{ 
                p: 4,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                gap: { xs: 3, sm: 4 },
              }}
            >
              {/* 수정된 사진 컨테이너 */}
              <Box 
                sx={{ 
                  position: 'relative',
                  width: { xs: 140, sm: 160 },  // 약간 작게 조정
                  height: { xs: 180, sm: 210 }, // 비율 유지
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box 
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 2,
                    background: 'linear-gradient(120deg, rgba(44, 111, 187, 0.05), rgba(90, 141, 214, 0.1))',
                  }}
                />
                
                <Box
                  component="img"
                  src={profileImagePath} // 수정된 경로 사용
                  alt="프로필 사진"
                  sx={{
                    width: '90%',
                    height: '90%',
                    objectFit: 'contain', // 이미지 비율 유지
                    borderRadius: 1.5,
                    position: 'relative', 
                    zIndex: 1,
                    filter: 'contrast(1.05)',
                  }}
                />

                {/* 장식 요소 */}
                <Box sx={{
                  position: 'absolute',
                  top: -5,
                  left: -5,
                  width: 20,
                  height: 20,
                  borderLeft: '2px solid',
                  borderTop: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '2px 0 0 0',
                  opacity: 0.7,
                }} />
                <Box sx={{
                  position: 'absolute',
                  bottom: -5,
                  right: -5,
                  width: 20,
                  height: 20,
                  borderRight: '2px solid',
                  borderBottom: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '0 0 2px 0',
                  opacity: 0.7,
                }} />
              </Box>
              
              {/* 정보 */}
              <Box 
                sx={{ 
                  flex: 1,
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                {/* 이름 */}
                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="h3" 
                    component="h1" 
                    color="primary"
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 0.5,
                      fontSize: { xs: '2rem', sm: '2.5rem' }
                    }}
                  >
                    윤재영
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                    (Yoon Jae Young)
                  </Typography>
                </Box>

                {/* 자기소개 */}
                <Typography 
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{ 
                    mb: 2.5,
                    lineHeight: 1.7 
                  }}
                >
                  클라우드 환경에서의 인프라 구축과 운영에 열정이 있는 신입 클라우드 엔지니어입니다.
                  리눅스와 윈도우 서버 관리, Docker, Kubernetes, AWS 등 클라우드 기술 역량을 보유하고 있습니다.
                </Typography>

                {/* 연락처 */}
                <Box 
                  sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: { xs: 1.5, sm: 3 },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  {/* 이메일 */}
                  <Box 
                    component="a" 
                    href="mailto:jon0402@naver.com"
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <Box 
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                      sx={{ width: 20, height: 20 }}
                    />
                    <Typography fontWeight="medium">
                      jon0402@naver.com
                    </Typography>
                  </Box>
                  
                  {/* GitHub */}
                  <Box 
                    component="a"
                    href="https://github.com/KIATIGERSV13"
                    target="_blank"
                    rel="noopener"
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <Box 
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      sx={{ width: 20, height: 20 }}
                    />
                    <Typography fontWeight="medium">
                      GitHub
                    </Typography>
                  </Box>
                </Box>
                
                {/* 키워드 */}
                <Box sx={{ 
                  mt: 3, 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 1,
                  justifyContent: { xs: 'center', sm: 'flex-start' } 
                }}>
                  {['Linux', 'Windows Server', 'Docker', 'Kubernetes', 'AWS'].map((keyword) => (
                    <Chip 
                      key={keyword}
                      label={keyword}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{ fontWeight: 500 }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Card>

          {/* 교육이력 카드 - 개선된 버전 */}
          <Card sx={{ mb: 4 }}>
            <CardHeader 
              title={<Typography variant="h5" color="primary">교육이력</Typography>}
              sx={{
                borderBottom: '1px solid #e0e0e0',
                bgcolor: 'rgba(44, 111, 187, 0.05)',
                px: 3,
                py: 2,
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <EducationSection educations={educations} />
            </CardContent>
          </Card>

          {/* 자격증, 보유 기술, 프로젝트 카드는 동일한 스타일 적용 */}
          <Card sx={{ mb: 4 }}>
            <CardHeader 
              title={<Typography variant="h5" color="primary">자격증</Typography>}
              sx={{
                borderBottom: '1px solid #e0e0e0',
                bgcolor: 'rgba(44, 111, 187, 0.05)',
                px: 3,
                py: 2,
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <CertificateSection certificates={certificates} />
            </CardContent>
          </Card>

          <Card sx={{ mb: 4 }}>
            <CardHeader 
              title={<Typography variant="h5" color="primary">보유 기술</Typography>}
              sx={{
                borderBottom: '1px solid #e0e0e0',
                bgcolor: 'rgba(44, 111, 187, 0.05)',
                px: 3,
                py: 2,
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <SkillSection skillLogos={skillLogos} />
            </CardContent>
          </Card>

          <Card sx={{ mb: 4 }}>
            <CardHeader 
              title={<Typography variant="h5" color="primary">프로젝트</Typography>}
              sx={{
                borderBottom: '1px solid #e0e0e0',
                bgcolor: 'rgba(44, 111, 187, 0.05)',
                px: 3,
                py: 2,
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <ProjectSection 
                projects={projects} 
                onProjectSelect={setSelectedProject} 
              />
            </CardContent>
          </Card>
        </Container>
      </Box>

      <ProjectDetail
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </ThemeProvider>
  );
}

export default Resume;
