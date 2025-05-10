declare interface CustomButtonProps {
  text: string;
  styles?: string;
  arrowStyles?: string;
}

declare interface PostProps {
  id: number;
  src: string[];
  date: string;
  comments: string;
  text: string;
}

declare interface Application {
  surname: string;
  firstName: string;
  otherName: string;
  email: string;
  phone: string;
  category: 'Full Time' | 'Part Time';
  program: 'HND' | 'ND';
  gender: 'Male' | 'Female';
  department: string;
  password: string;
  confirmPassword: string;
  transactionId?: string;
  applicationId?: string;
}
