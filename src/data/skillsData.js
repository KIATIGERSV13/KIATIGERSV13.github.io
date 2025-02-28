import { Storage as StorageIcon } from '@mui/icons-material';

export const skills = [
  {
    category: '리눅스 서버',
    icon: StorageIcon,
    items: [
      { name: 'Rocky Linux 9', type: 'OS' },
      { name: 'Ubuntu 20.04/22.04/24.04', type: 'OS' },
      { name: 'SSH, WEB, FTP', type: 'service' },
      { name: 'DNS, DHCP, NFS', type: 'service' },
    ]
  },
  // ...나머지 스킬 데이터
];

export const skillLogos = {
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
  'Raspberry Pi': {
    logo: 'https://i.namu.wiki/i/GyvYMBdFgynspO-SloseqTzqer8OXd9RNk_zoVeV6cdTZcw6qOEpj6pdvH6KsasxjYa-Lve4ecG1U-AbsLNwtQ.svg',
    url: 'https://www.raspberrypi.org/'
  },
  'HTML': {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  'Shell Script': {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/512px-Bash_Logo_Colored.svg.png',
    url: 'https://www.gnu.org/software/bash/'
  },
  'MariaDB': {
    logo: 'https://mariadb.org/wp-content/themes/twentynineteen-child/icons/mariadb_org_rgb_h.svg',
    url: 'https://mariadb.org/'
  }
};
