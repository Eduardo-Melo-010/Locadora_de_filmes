import { Filme } from "./filme";

export class locacao {
    private dataLocacao: Date;
    private valorTotalAPagar: number;
    private listaFilmes: Filme[];

    constructor (dataLocacao: Date) {
        this.dataLocacao = dataLocacao;
        this.valorTotalAPagar = 0;
        this.listaFilmes = [];
    }

    public addFilme (filme: Filme): void {
        this.listaFilmes.push(filme);
        this.valorTotalAPagar += filme.getValorLocacao();
    }

    public getDataLocacao (): Date {
        return this.dataLocacao;
    }

    public getListaFilmes (): Filme[] {
        return this.listaFilmes;
    }

    public getValorTotalAPagar (): number {
        return this.valorTotalAPagar;
    }

    public listarFilmes(): string {
        return this.listaFilmes.map(f => f.getTitulo()).join(", ");
    }

    public toString (): string{
        return `Data da Locação: ${this.dataLocacao} | Lista de Filmes: ${this.listaFilmes} | Valor total a pagar: R$${this.valorTotalAPagar.toFixed(2)}`;
    }
}