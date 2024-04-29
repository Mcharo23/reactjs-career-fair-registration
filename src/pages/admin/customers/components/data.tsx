export type CUSTOMER_TYPE = {
  name: string;
  email: string;
  phoneNumber: string;
  gender: string;
  registrationNumber: string;
  cardNumber: string;
  birthDate: string;
  passport: string;
};

function generateRegistrationNumber(): string {
  const year = new Date().getFullYear().toString().slice(-2);
  const randomFourDigits = Math.floor(1000 + Math.random() * 9000);
  return `T${year}-03-${randomFourDigits}`;
}

export const CUSTOMER_DATA: CUSTOMER_TYPE[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+255 754 123 456",
    gender: "Male",
    registrationNumber: generateRegistrationNumber(),
    cardNumber: "789012345678",
    birthDate: "1985-10-15",
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phoneNumber: "+255 787 234 567",
    gender: "Female",
    registrationNumber: generateRegistrationNumber(),
    cardNumber: "987654321098",
    birthDate: "1990-05-20",
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
  },
  {
    name: "David Smith",
    email: "david.smith@example.com",
    phoneNumber: "+255 716 345 678",
    gender: "Male",
    registrationNumber: generateRegistrationNumber(),
    cardNumber: "123456789012",
    birthDate: "1988-03-25",
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phoneNumber: "+255 765 456 789",
    gender: "Female",
    registrationNumber: generateRegistrationNumber(),
    cardNumber: "012345678901",
    birthDate: "1992-08-10",
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
  },
  {
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    phoneNumber: "+255 754 567 890",
    gender: "Male",
    registrationNumber: generateRegistrationNumber(),
    cardNumber: "345678901234",
    birthDate: "1987-12-05",
    passport:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
  },
];
