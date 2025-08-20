// Mock data for dashboard - will be replaced with real API calls

export const mockFiles = [
  {
    id: '1',
    name: 'Project Presentation.pptx',
    size: 15728640, // 15MB
    type: 'presentation',
    modified: '2 hours ago',
    isShared: false
  },
  {
    id: '2',
    name: 'Vacation Photos.zip',
    size: 524288000, // 500MB
    type: 'archive',
    modified: '1 day ago',
    isShared: true
  },
  {
    id: '3',
    name: 'Budget Spreadsheet.xlsx',
    size: 2097152, // 2MB
    type: 'spreadsheet',
    modified: '3 days ago',
    isShared: false
  },
  {
    id: '4',
    name: 'Meeting Recording.mp4',
    size: 1073741824, // 1GB
    type: 'video',
    modified: '1 week ago',
    isShared: false
  },
  {
    id: '5',
    name: 'Team Documents',
    size: 0,
    type: 'folder',
    modified: '2 weeks ago',
    isShared: true
  },
  {
    id: '6',
    name: 'Profile Picture.jpg',
    size: 5242880, // 5MB
    type: 'image',
    modified: '1 month ago',
    isShared: false
  }
];

export const mockStats = {
  totalFiles: 156,
  totalFolders: 12,
  sharedFiles: 23,
  recentUploads: 8
};