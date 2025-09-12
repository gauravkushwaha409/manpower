export interface INotification {
  id: number;
  iconType: "UserPlus" | "FileText" | "Globe" | "Languages"; 
  title: string;
  description: string;
  time: string;
  read?: boolean;
}