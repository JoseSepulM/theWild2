export interface User {
    username: string;
    password: string;
    role: string;
    correo: string;
  }
  
  export const data_dataUsuarios: User[] = [
    {
      username: "Pedro_21",
      correo: "pedro_21@gmail.com",
      password: "Adm2024",
      role: "user"
    },
    {
      username: "Juan_photo",
      correo: "juan_photo@gmail.com",
      password: "Mango2098",
      role: "user"
    },
    {
      username: "Maria_sal",
      correo: "maria_sal@gmail.com",
      password: "MarSal890",
      role: "user"
    },
    {
      username: "Admin_user",
      correo: "admin_user@gmail.com",
      password: "aus_3033",
      role: "admin"
    }
];
  