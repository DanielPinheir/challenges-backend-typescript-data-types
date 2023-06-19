const users = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const usersFilter = (
  usersList: { nome: string; idade: number; status: boolean }[],
  name: string
): { nome: string; idade: number; status: boolean }[] => {
  return usersList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase())
  );
};

console.log(usersFilter(users, "gui"));
