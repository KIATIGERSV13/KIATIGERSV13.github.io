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
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Router as RouterIcon,
  Computer as ComputerIcon,
} from '@mui/icons-material';

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
      tools: {
        OS: "Rocky Linux 9",
        software: "VMware Workstation Pro 17"
      },
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
      shortDescription: "복잡한 물리적 네트워크 구성을 효율적인 논리적 네트워크로 구현",
      period: "2024.11.28 - 2024.12.02",
      tools: {
        software: "GNS3 1.3.9, IOU WEB, Xshell 8"
      },
      description: `VLAN, VTP, STP, EtherChannel 등 네트워크 기술을 활용하여 물리적 네트워크를 논리적으로 구성하고 라우팅 프로토콜을 설정하여 효율적인 통신 구축`,
      myRole: [
        "SWITCH: VTP, STP, VLAN, EtherChannel",
        "ROUTER: RIP, OSPF, EIGRP, ABR, SUMMARIZATION",
      ],
      pdfUrl: "pdf/BSFAN(2조)_네트워크 프로젝트.pdf"
    },
    {
      id: 3,
      title: "CKA 시험 대비 프로젝트",
      shortDescription: "CKA 자격증 시험 대비와 kubernetes 기본 개념 학습",
      period: "2025.01.31 - 2025.02.05",
      tools: {
        OS: "Ubuntu 20.04",
        platform: "Kubernetes 1.28.4",
        software: "Docker 27.3.1, VMware Workstation Pro 17"
      },
      description: `Kubernetes 클러스터를 구성하고 Pod를 배포하여 서비스를 운영하며 네트워크 정책을 설정하여 보안을 강화`,
      myRole: [
        "Kubernetes 클러스터 구성",
        "Pod 배포 및 서비스 운영",
        "ingress, network policy 설정",
        "node관리"
      ],
      pdfUrl: "pdf/BSFAN_k8s-kubernetes_프로젝트.pdf"
    },
    {
      id: 4,
      title: "AWS 클라우드 프로젝트 1",
      shortDescription: "AWS를 사용한 클라우드 환경 구성",
      period: "2025.01.31 - 2025.02.05",
      tools: {
        cloud: "AWS EC2, VPC, S3, ELB, Auto Scaling",
      },
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
        title: "AWS 클라우드 프로젝트 2",
        shortDescription: "AWS EKS를 Cluster 생성 및 ELB 구성",
        period: "2025.02.19 - 2025.02.26",
        tools: {
          cloud: "AWS IAM, EKS, EC2, VPC, NLB, ALB",
          platform: "Kubernetes v1.31, v1.28",
          software: "Xshell 8, eksctl, kubectl"
        },
        description: `AWS EKS를 이용하여 쿠버네티스 클러스터를 생성하고 웹 애플리케이션을 배포하며 NLB, ALB를 설정하여 외부에서 접속 가능하도록 구성`,
        myRole: [
          "Bastion server 생성 및 키페어를 이용해 Xshell에 연결",
          "AWS EKS, eksctl를 이용한 쿠버네티스 클러스터 생성",
          "웹 애플리케이션 배포 및 NLB, ALB 설정",
        ],
        pdfUrl: "pdf/AWS EKS PROJECT.pdf"
      },
      {
        id: 6,
        title: "VMware vShere 가상화 프로젝트",
        shortDescription: "VMware vShere를 이용한 가상화 환경 구축",
        period: "2025.01.03 - 2025.01.07",
        tools: {
          OS: "Windows Server 2012",
          software: "VMware pro 17 , VMware vSphere, vCenter Server"
        },
        description: `VMware vShere를 이용하여 가상화 환경을 구축하고 가상머신을 생성하여 서버를 운영`,
        myRole: [
          "VMware vShere 설치 및 가상화 환경 구축",
          "가상머신 생성 및 서버 운영",
          "vCenter 서버 구성 및 관리",
        ],
        pdfUrl: "pdf/BSFAN_vSphere 가상화.pdf"
      }
  ];

  const skills = [
    {
      category: '리눅스 서버',
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      items: [
        { name: 'Rocky Linux 9', type: 'OS' },
        { name: 'Ubuntu 20.04/22.04/24.04', type: 'OS' },
        { name: 'SSH, WEB, FTP', type: 'service' },
        { name: 'DNS, DHCP, NFS', type: 'service' },
      ]
    },
    {
      category: '윈도우 서버',
      icon: <ComputerIcon sx={{ fontSize: 40 }} />,
      items: [
        { name: 'Windows Server 2012/2016/2022', type: 'OS' },
        { name: 'IIS', type: 'service' },
        { name: 'Active Directory', type: 'service' },
      ]
    },
    {
      category: '네트워크',
      icon: <RouterIcon sx={{ fontSize: 40 }} />,
      items: [
        { name: 'Cisco Packet Tracer', type: 'tool' },
        { name: 'GNS3, IOU WEB', type: 'tool' },
        { name: 'RIP, OSPF, EIGRP', type: 'protocol' },
        { name: 'VLAN, VTP, STP', type: 'technology' },
      ]
    },
    {
      category: '클라우드',
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      items: [
        { name: 'Docker 27.3.1', type: 'container' },
        { name: 'Kubernetes 1.28.4', type: 'orchestration' },
        { name: 'AWS EC2, VPC, RDS', type: 'cloud' },
        { name: 'AWS IAM, EKS', type: 'cloud' },
      ]
    },
  ];

  const certificates = [
    {
      title: "Certified Kubernetes Administrator (CKA)",
      organization: "The Linux Foundation",
      date: "2025.02",
      logo: "https://training.linuxfoundation.org/wp-content/uploads/2018/06/logo_cka_whitetext.png"
    },
    {
      title: "AWS Certified Data Engineer - Associate(DEA-C01)",
      organization: "AWS",
      date: "2025.01",
      logo: "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png"
    },
    {
      title: "리눅스마스터 2급",
      organization: "한국정보통신진흥협회",
      date: "2025.01",
      logo: "https://www.ihd.or.kr/common/images/sub/bi_linux.png"
    },
    {
      title: "네트워크관리사 2급",
      organization: "한국정보통신자격협회",
      date: "2025.01",
      logo: "https://cdn.imweb.me/thumbnail/20231030/9b5c4dec80918.jpg"
    },
    {
      title: "무인동력비행장치 4종(무인멀티콥터)",
      organization: "한국안전교통공단",
      date: "2025.02",
      logo: "https://i.namu.wiki/i/6iW7cRgPs67lNUPK8LuZCkR4DcXz5AC1BrsGpbyR45wTqyVfIY17GiCrnQ8H4t4Kd1uMJa137O8bosZT7mifdQ.svg"
    }
  ];

  const skillLogos = {
    'Rocky Linux': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Rocky_Linux_logo.svg/2048px-Rocky_Linux_logo.svg.png',
      url: 'https://rockylinux.org/'
    },
    'Ubuntu': {
      logo: 'https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png',
      url: 'https://ubuntu.com/'
    },
    'Windows Server': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Windows_logo_-_2021.svg/150px-Windows_logo_-_2021.svg.png',
      url: 'https://www.microsoft.com/en-us/windows-server'
    },
    'Docker': {
      logo: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
      url: 'https://www.docker.com/'
    },
    'Kubernetes': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
      url: 'https://kubernetes.io/'
    },
    'AWS': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/150px-Amazon_Web_Services_Logo.svg.png',
      url: 'https://aws.amazon.com/'
    },
    'Cisco': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/150px-Cisco_logo_blue_2016.svg.png',
      url: 'https://www.cisco.com/'
    },
    'Github': {
      logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      url: 'https://github.com/'
    },
    'Git': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/150px-Git-logo.svg.png',
      url: 'https://git-scm.com/'
    },
    'MySQL': {
      logo: 'https://i.namu.wiki/i/vkGpBcmks1_NcJW0HUFa6jlwlM6h11B-8nxRRX4bYC703H4nLo7j4dQdRCC32gz8Q-BqRcAnQgFSXMjB8jPohg.svg',
      url: 'https://www.mysql.com/'
    },
    'VMware': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vmware_workstation_16_icon.svg/1200px-Vmware_workstation_16_icon.svg.png',
      url: 'https://www.vmware.com/'
    },
    'VirtualBox': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Virtualbox_logo.png/150px-Virtualbox_logo.png',
      url: 'https://www.virtualbox.org/'
    },
    'Arduino': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/150px-Arduino_Logo.svg.png',
      url: 'https://www.arduino.cc/'
    },
    'react': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/150px-React-icon.svg.png',
      url: 'https://reactjs.org/'
    },
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err) {
    console.error('PDF 로딩 에러:', err);
    setError('PDF 파일을 불러오는데 실패했습니다.');
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ 
        textAlign: 'center', 
        mb: 5,
        p: 3,
        bgcolor: '#f8f9fa',
        borderRadius: 2,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          mb: 2
        }}>
          <Box
            component="img"
            src="/images/윤재영 증명사진.jpg"
            alt="프로필 사진"
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #1976d2',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          />
          <Box>
            <Typography variant="h3" component="h1" gutterBottom color="primary">
              윤재영
            </Typography>
            <Typography variant="h6" color="primary">
              (Yoon Jae Young)
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#666' }}>
              클라우드 엔지니어
            </Typography>
          </Box>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: 3,
          mt: 2
        }}>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>
            github.com/KIATIGERSV13
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>
            jon0402@naver.com
          </Typography>
        </Box>
      </Box>

      <Card sx={{ 
        mb: 3,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
      }}>
        <CardHeader 
          title={
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              교육이력
            </Typography>
          }
          sx={{
            borderBottom: '2px solid #e0e0e0',
            bgcolor: '#f8f9fa'
          }}
        />
        <CardContent sx={{ p: 3 }}>
          <List>
            <ListItem>클라우드 기반 정보시스템 구축 전문가 양성 - 대우능력 개발원 (2024.09 ~ 2025.03)</ListItem>
            {/* 추가 교육 이력... */}
          </List>
        </CardContent>
      </Card>

      <Card sx={{ 
        mb: 3,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
      }}>
        <CardHeader 
          title={
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              자격증
            </Typography>
          }
          sx={{
            borderBottom: '2px solid #e0e0e0',
            bgcolor: '#f8f9fa'
          }}
        />
        <CardContent sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {certificates.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={0}
                  sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 1,
                    '&:hover': {
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }
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
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cert.organization} ({cert.date})
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ 
        mb: 3,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
      }}>
        <CardHeader 
          title={
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              보유 기술
            </Typography>
          }
          sx={{
            borderBottom: '2px solid #e0e0e0',
            bgcolor: '#f8f9fa'
          }}
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Grid container spacing={2} justifyContent="center">
                  {Object.entries(skillLogos).map(([name, { logo, url }]) => (
                    <Grid item key={name} xs={4} sm={3} md={2}>
                      <Box
                        component="a"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 1,
                          textDecoration: 'none',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            transition: 'transform 0.3s ease',
                            '& img': {
                              opacity: 0.8
                            }
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={logo}
                          alt={name}
                          sx={{
                            width: 60,
                            height: 60,
                            objectFit: 'contain',
                            transition: 'opacity 0.3s ease'
                          }}
                        />
                        <Typography 
                          variant="body2" 
                          align="center"
                          sx={{ 
                            fontWeight: 'medium',
                            color: '#1976d2'
                          }}
                        >
                          {name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ 
        mb: 3,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
      }}>
        <CardHeader 
          title={
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              프로젝트
            </Typography>
          }
          sx={{
            borderBottom: '2px solid #e0e0e0',
            bgcolor: '#f8f9fa'
          }}
        />
        <CardContent sx={{ p: 3 }}>
          <List sx={{ 
            '& .MuiListItem-root': { 
              mb: 2,
              p: 2,
              bgcolor: '#f8f9fa',
              borderRadius: 1,
              border: '1px solid #e0e0e0',
              '&:hover': {
                bgcolor: '#f5f5f5'
              }
            }
          }}>
            {projects.map((project) => (
              <ListItem key={project.id}>
                <Box sx={{ width: '100%' }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ color: '#1976d2' }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{ color: '#666', mb: 2 }}
                  >
                    {project.shortDescription}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    size="small"
                    onClick={() => setSelectedProject(project)}
                    sx={{
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        bgcolor: '#1976d2',
                        color: 'white'
                      }
                    }}
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
