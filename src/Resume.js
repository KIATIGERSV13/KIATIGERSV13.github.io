import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Button from '@mui/material/Button';
import ProjectDetail from './components/ProjectDetail';

// PDF worker 설정
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "리눅스 프로젝트",
      shortDescription: "리눅스 기반 서버 관리 시스템 개발",
      period: "2024.10.14 - 2024.10.17",
      description: `다양한 서비스를 제공할 수 있는 안정적인 서버 환경을 조성, 사용자 그룹관리, 디스크 및 리소스 구성작업을 통해 효율적인 시스템 운영`,
      myRole: [
        "사용자 및 그룹 등록",
        "디스크 추가 후 LVM구성 및 쿼터 설정",
        "SSH, XRDP, DNS, DHCP, httpd, FTP, NFS 등 서버 구성",
      ],
      pdfUrl: "pdf/linux-project.pdf"
    },
    {
      id: 2,
      title: "IOU WEB 이용한 네트워크 프로젝트",
      shortDescription: "",
      period: "2023.07 - 2023.12",
      description: `온라인 교육 콘텐츠를 제공하는 웹 플랫폼 개발 프로젝트입니다.
      - 실시간 스트리밍 강의 시스템
      - 대화형 학습 콘텐츠
      - 학습 진도 관리 시스템`,
      myRole: [
        "프론트엔드 리드 개발자",
        "학습자 대시보드 개발",
        "실시간 스트리밍 플레이어 구현",
        "반응형 웹 디자인 적용"
      ],
      pdfUrl: "pdf/BSFAN(2조)_네트워크 프로젝트.pdf"
    },
    {
      id: 3,
      title: "AWS 클라우드 프로젝트",
      shortDescription: "AWS를 사용한 클라우드 환경 구성",
      period: "2025.01.31 - 2025.02.05",
      description: `EC2 인스턴스를 사용하여 서버 구성하고 VPC를  설정하여 네트워크를 프라이빗과 퍼블릭으로 분리 및 Auto Scaling을 구현하여 트래픽 급증에 대비`,
      myRole: [
        "VPC 구성 및 생성(서브넷, 라우팅테이블)",
        "EC2 생성",
        "탄력적 IP 사용 및 로드밸런서 연결",
        "오토스케일링 구현",
        "S3 생성 및 업로드"
      ],
      pdfUrl: "pdf/AWS 프로젝트_2조(bsfan).pdf"
    },
    {
        id: 4,
        title: "AWS 클라우드 프로젝트",
        shortDescription: "AWS EKS를 Cluster 생성 및 ELB 구성",
        period: "2025.01.31 - 2025.02.05",
        description: `EC2 인스턴스를 사용하여 서버 구성하고 VPC를  설정하여 네트워크를 프라이빗과 퍼블릭으로 분리 및 Auto Scaling을 구현하여 트래픽 급증에 대비`,
        myRole: [
          "VPC 구성 및 생성(서브넷, 라우팅테이블)",
          "EC2 생성",
          "탄력적 IP 사용 및 로드밸런서 연결",
          "오토스케일링 구현",
          "S3 생성 및 업로드"
        ],
        pdfUrl: "pdf/AWS 프로젝트_2조(bsfan).pdf"
      },
      {
        id: 5,
        title: "AWS 클라우드 프로젝트",
        shortDescription: "AWS EKS를 Cluster 생성 및 ELB 구성",
        period: "2025.01.31 - 2025.02.05",
        description: `EC2 인스턴스를 사용하여 서버 구성하고 VPC를  설정하여 네트워크를 프라이빗과 퍼블릭으로 분리 및 Auto Scaling을 구현하여 트래픽 급증에 대비`,
        myRole: [
          "VPC 구성 및 생성(서브넷, 라우팅테이블)",
          "EC2 생성",
          "탄력적 IP 사용 및 로드밸런서 연결",
          "오토스케일링 구현",
          "S3 생성 및 업로드"
        ],
        pdfUrl: "pdf/AWS 프로젝트_2조(bsfan).pdf"
      }
  ];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err) {
    console.error('PDF 로딩 에러:', err);
    setError('PDF 파일을 불러오는데 실패했습니다.');
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          윤재영
        </Typography>
        <Typography variant="subtitle1">
          클라우드 엔지니어 | github.com/KIATIGERSV13 | jon0402@naver.com
        </Typography>
      </Box>
      <Card sx={{ mb: 3 }}>
        <CardHeader title="학력" />
        <CardContent>
          <Typography variant="body1">
            명지전문대학, 정보통신공학과 전문학사 ( 2021 - 2025 )
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ mb: 3 }}>
        <CardHeader title="교육이력" />
        <CardContent>
          <List>
            <ListItem>클라우드 기반 정보시스템 구축 전문가 양성 - 대우능력 개발원 (2024.09 ~ 2025.03)</ListItem>
            {/* 추가 교육 이력... */}
          </List>
        </CardContent>
      </Card>
      <Card sx={{ mb: 3 }}>
        <CardHeader title="자격증" />
        <CardContent>
          <List>
            <ListItem>Certified Kubernetes Administrator (CKA) - The Linux Foundation(2025.02)</ListItem>
            <ListItem>AWS Certified Data Engineer - Associate(DEA-C01) - AWS(2025.01)</ListItem>
            <ListItem>리눅스마스터 2급 - 한국정보통신진흥협회(2025.01)</ListItem>
            <ListItem>네트워크관리사 2급 - 한국정보통신자격협회(2025.01)</ListItem>
            {/* 추가 자격증... */}
          </List>
        </CardContent>
      </Card>
      <Card sx={{ mb: 3 }}>
        <CardHeader title="보유 기술" />
        <CardContent>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            {/* 헤더 행 */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr 2fr',
              bgcolor: '#f5f5f5',
              borderBottom: '1px solid #e0e0e0',
            }}>
              <Typography sx={{ p: 1, fontWeight: 'bold', borderRight: '1px solid #e0e0e0' }}>스킬명</Typography>
              <Typography sx={{ p: 1, fontWeight: 'bold', borderRight: '1px solid #e0e0e0' }}>버전/운용도구</Typography>
              <Typography sx={{ p: 1, fontWeight: 'bold' }}>내용</Typography>
            </Box>
            
            {/* 리눅스 서버 행 */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr 2fr',
              '&:hover': { bgcolor: '#f8f9fa' },
              borderBottom: '1px solid #e0e0e0',
            }}>
              <Typography sx={{ p: 1, borderRight: '1px solid #e0e0e0' }}>리눅스 서버</Typography>
              <Typography sx={{ p: 1, borderRight: '1px solid #e0e0e0' }}>
                • VMware Pro 17<br />
                • Linux Rocky9<br />
                • Ubuntu 20.04/22.04/24.04
              </Typography>
              <Typography sx={{ p: 1 }}>
                • 서버 관리: SSH, WEB, FTP, NFS, SAMBA, DNS, DHCP<br />
                • 시스템 관리: 사용자/관리자 명령어, 네트워크, 보안
              </Typography>
            </Box>

            {/* 윈도우 서버 행 */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr 2fr',
              '&:hover': { bgcolor: '#f8f9fa' },
              borderBottom: '1px solid #e0e0e0',
            }}>
              <Typography sx={{ p: 1, borderRight: '1px solid #e0e0e0' }}>윈도우 서버</Typography>
              <Typography sx={{ p: 1, borderRight: '1px solid #e0e0e0' }}>
                • Window Server 2012<br />
                • Window Server 2016<br />
                • Window Server 2022
              </Typography>
              <Typography sx={{ p: 1 }}>
                • IIS, Active Directory 운영<br />
                • 기본 네트워크 및 서버 관리
              </Typography>
            </Box>

            {/* 네트워크 행 */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr 2fr',
              '&:hover': { bgcolor: '#f8f9fa' },
              borderBottom: '1px solid #e0e0e0',
            }}>
              <Typography sx={{ p: 1, borderRight: '1px solid #e0e0e0' }}>네트워크</Typography>
              <Typography sx={{ p: 1, borderRight: '1px solid #e0e0e0' }}>
                • Cisco Packet Tracer<br />
                • GNS3 1.3.9<br />
                • IOU WEB<br />
                • Xshell 8
              </Typography>
              <Typography sx={{ p: 1 }}>
                • 네트워크 프로토콜: RIP, OSPF, EIGRP<br />
                • 네트워크 기술: NAT, VLAN, VTP, STP
              </Typography>
            </Box>

            {/* 클라우드 행 */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr 2fr',
              '&:hover': { bgcolor: '#f8f9fa' },
            }}>
              <Typography sx={{ p: 1, borderRight: '1px solid #e0e0e0' }}>클라우드</Typography>
              <Typography sx={{ p: 1, borderRight: '1px solid #e0e0e0' }}>
                • Docker 27.3.1<br />
                • Kubernetes 1.28.4<br />
                • VMware Pro 17<br />
                • VirtualBox 7.1.6
              </Typography>
              <Typography sx={{ p: 1 }}>
                • Docker: 이미지 관리, 컨테이너 구축<br />
                • Kubernetes: Pod, Deployment, Ingress, NetPolicy<br />
                • AWS: EC2, VPC, RDS, IAM, EKS
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ mb: 3 }}>
        <CardHeader title="프로젝트" />
        <CardContent>
          <List>
            {projects.map((project) => (
              <ListItem key={project.id}>
                <Box sx={{ width: '100%' }}>
                  <Typography variant="body1" gutterBottom>
                    {project.title} - {project.shortDescription}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    size="small"
                    onClick={() => setSelectedProject(project)}
                  >
                    더 보기
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      
      <ProjectDetail
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </Container>
  );
}

export default Resume;
