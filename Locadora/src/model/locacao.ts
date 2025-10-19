import { Filme } from "./filme";

export class Locacao {
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

    public toString(): string {
        const dataFormatada = this.dataLocacao.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });

    return `Data da Locação: ${dataFormatada} | Filmes: ${this.listarFilmes()} | Valor total: R$ ${this.valorTotalAPagar.toFixed(2)}`;
    }
}