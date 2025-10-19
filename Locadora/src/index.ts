import { Cliente } from "./model/cliente";
import { Conta } from "./model/conta";
import { Filme } from "./model/filme";


const filmes: Filme [] = [    
  new Filme("Matrix", 1999, "Ficção", 10),
  new Filme("Titanic", 1997, "Romance", 8),
  new Filme("Avatar", 2009, "Aventura", 12),
  new Filme("Gladiador", 2000, "Ação", 9),
  new Filme("Inception", 2010, "Ficção", 11),
  new Filme("O Rei Leão", 1994, "Animação", 7),
  new Filme("Os Vingadores", 2012, "Ação", 13),
  new Filme("Jurassic Park", 1993, "Aventura", 9),
  new Filme("Homem de Ferro", 2008, "Ação", 10),
  new Filme("Interestelar", 2014, "Ficção", 14),
];

const cliente1 = new Cliente ("Eduardo Melo", "111.111.111-11", "Recife - PE", "(81) 99999-9999");
const cliente2 = new Cliente ("Ana Souza", "222.222.222-22", "Olinda - PE", "(81) 98888-8888");
const cliente3 = new Cliente ("Carlos Lima", "333.333.333-33", "Jaboatão - PE", "(81) 97777-7777");

const conta1 = new Conta (cliente1);
const conta2 = new Conta (cliente2);
const conta3 = new Conta (cliente3);

conta1.locarFilmes ([filmes[0], filmes[1]]);
conta1.locarFilmes ([filmes[4], filmes[9]]);
conta1.locarFilmes ([filmes[2]]);
conta1.pagarDebito (10);


console.log(conta1.extratoHistorico());
console.log("Saldo Devedor:", conta1.getSaldoDevedor().toFixed(2), "\n");
