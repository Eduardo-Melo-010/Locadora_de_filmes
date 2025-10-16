export class Filme {
    private titulo: string;
    private ano: number;
    private genero: string;
    private valorLocacao: number;

    constructor (titulo: string, ano: number, genero: string, valorLocacao: number) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.valorLocacao = valorLocacao;
    }

    public getTitulo (): string {
        return this.titulo;
    }

    public getAno (): number {
        return this.ano;
    }

    public getGenero (): string {
        return this.genero;
    }

    public getValorLocacao (): number {
        return this.valorLocacao;
    }

    public setTitulo (titulo: string): void {
        this.titulo = titulo;
    }

    public setAno (ano: number): void {
        this.ano = ano;
    }

    public setGenero (genero: string): void {
        this.genero = genero;
    }

    public setValorLocacao (valorLocacao: number): void {
        this.valorLocacao = valorLocacao;
    }

    public toString (): string {
        return ` Título: ${this.titulo} - Ano: ${this.ano} - Gênero: ${this.genero} - Valor da Locação: ${this.valorLocacao}`;
    }
}