import { ROLE, STATUS } from "../../../lib/enum";

export type STAFF_DATA_TYPE = {
  name: string;
  email: string;
  mobile: string;
  role: ROLE;
  status: STATUS;
  passport: string;
  course: string;
  academicYear: string;
  gender: string;
  address: string;
  birthDate: string; // Assuming birth date is represented as a string
};

export const STAFF_DATA: STAFF_DATA_TYPE[] = [
  {
    name: "Fatuma Yusuf",
    email: "fatuma.yusuf@example.com",
    mobile: "+255 754 123 456",
    role: ROLE.CASHIER,
    status: STATUS.ACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    course: "Accounting",
    academicYear: "2022/2023",
    gender: "Female",
    address: "Dar es Salaam, Tanzania",
    birthDate: "1990-05-15",
  },
  {
    name: "Rashid Salum",
    email: "rashid.salum@example.com",
    mobile: "+255 787 234 567",
    role: ROLE.CASHIER,
    status: STATUS.ACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    course: "Marketing",
    academicYear: "2021/2022",
    gender: "Male",
    address: "Arusha, Tanzania",
    birthDate: "1987-09-22",
  },
  {
    name: "Aisha Said",
    email: "aisha.said@example.com",
    mobile: "+255 716 345 678",
    role: ROLE.CASHIER,
    status: STATUS.INACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    course: "Computer Science",
    academicYear: "2023/2024",
    gender: "Female",
    address: "Dodoma, Tanzania",
    birthDate: "1995-03-10",
  },
  {
    name: "Hamisi Juma",
    email: "hamisi.juma@example.com",
    mobile: "+255 765 456 789",
    role: ROLE.CASHIER,
    status: STATUS.INACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    course: "Engineering",
    academicYear: "2022/2023",
    gender: "Male",
    address: "Zanzibar, Tanzania",
    birthDate: "1988-11-30",
  },
  {
    name: "Zainab Ali",
    email: "zainab.ali@example.com",
    mobile: "+255 754 567 890",
    role: ROLE.CASHIER,
    status: STATUS.ACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    course: "Medicine",
    academicYear: "2021/2022",
    gender: "Female",
    address: "Mwanza, Tanzania",
    birthDate: "1992-07-05",
  },
  {
    name: "Ahmed Mwinyi",
    email: "ahmed.mwinyi@example.com",
    mobile: "+255 783 678 901",
    role: ROLE.CASHIER,
    status: STATUS.INACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    course: "Law",
    academicYear: "2023/2024",
    gender: "Male",
    address: "Mbeya, Tanzania",
    birthDate: "1993-12-18",
  },
  {
    name: "Neema Hassan",
    email: "neema.hassan@example.com",
    mobile: "+255 712 789 012",
    role: ROLE.CASHIER,
    status: STATUS.ACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    course: "Finance",
    academicYear: "2022/2023",
    gender: "Female",
    address: "Kilimanjaro, Tanzania",
    birthDate: "1989-08-25",
  },
  {
    name: "Juma Ali",
    email: "juma.ali@example.com",
    mobile: "+255 787 890 123",
    role: ROLE.CASHIER,
    status: STATUS.ACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    course: "Education",
    academicYear: "2021/2022",
    gender: "Male",
    address: "Morogoro, Tanzania",
    birthDate: "1986-04-17",
  },
  {
    name: "Mariam Juma",
    email: "mariam.juma@example.com",
    mobile: "+255 767 901 234",
    role: ROLE.CASHIER,
    status: STATUS.INACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    course: "Psychology",
    academicYear: "2023/2024",
    gender: "Female",
    address: "Tanga, Tanzania",
    birthDate: "1994-10-12",
  },
  {
    name: "Hassan Said",
    email: "hassan.said@example.com",
    mobile: "+255 754 012 345",
    role: ROLE.CASHIER,
    status: STATUS.ACTIVE,
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    course: "Information Technology",
    academicYear: "2022/2023",
    gender: "Male",
    address: "Singida, Tanzania",
    birthDate: "1991-01-29",
  },
];
