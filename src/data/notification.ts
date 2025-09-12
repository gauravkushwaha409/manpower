export interface Notification {
  id: number;
  iconType: "UserPlus" | "FileText" | "Globe" | "Languages"; 
  title: string;
  description: string;
  time: string;
  read?: boolean;
}

export const initialNotifications: Notification[] = [
  {
    id: 1,
    iconType: "UserPlus",
    title: "New User Added",
    description: "New User, Joe is added",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    iconType: "FileText",
    title: "Medical Report Required",
    description: "3 candidates need to submit medical documents",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    iconType: "UserPlus",
    title: "New Candidate Added",
    description: "New Candidate, Suman Bhatta is added",
    time: "3 Days ago",
    read: false,
  },
  {
    id: 4,
    iconType: "UserPlus",
    title: "New Candidate Added",
    description: "New Candidate, Suman Bhatta is added",
    time: "3 Days ago",
    read: false,
  },
  {
    id: 5,
    iconType: "FileText",
    title: "New Pre- Application Received",
    description: "New Pre- application of 5 Candidates is added",
    time: "5 Days ago",
    read: false,
  },
  {
    id: 6,
    iconType: "Globe",
    title: "New Country Added",
    description: "5 New Country is added",
    time: "5 Days ago",
    read: false,
  },
  {
    id: 7,
    iconType: "Languages",
    title: "New Language Added",
    description: "5 New Language is added",
    time: "5 Days ago",
    read: false,
  },
];
