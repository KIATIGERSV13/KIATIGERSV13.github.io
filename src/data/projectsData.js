export const projects = [
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
