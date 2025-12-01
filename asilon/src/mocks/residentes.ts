export interface Residente {
  id: string;
  nome: string;
  idade: number;
  quarto: string;
  status: 'Ativo' | 'Inativo';
}

export const MOCK_RESIDENTES: Residente[] = [
  {
    id: "1",
    nome: "João da Silva",
    idade: 82,
    quarto: "101A",
    status: "Ativo",
  },
  {
    id: "2",
    nome: "Maria Oliveira",
    idade: 79,
    quarto: "102B",
    status: "Ativo",
  },
  {
    id: "3",
    nome: "Carlos Souza",
    idade: 91,
    quarto: "204A",
    status: "Inativo",
  },
  {
    id: "4",
    nome: "Ana Pereira",
    idade: 85,
    quarto: "101B",
    status: "Ativo",
  },
];