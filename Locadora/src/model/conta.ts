import { Cliente } from "./cliente";
import { Filme } from "./filme";
import { Locacao } from "./locacao";

export class Conta {
    private cliente: Cliente;
    private saldoDevedor: number;
    private historicoLocacao: Locacao[];

    constructor (cliente: Cliente) {
        this.cliente = cliente;
        this.saldoDevedor = 0;
        this.historicoLocacao = [];
    }

public locarFilmes (filmes: Filme[]): void {
    if (filmes.length === 0) {
        console.log("Nenhum filme selecionado para locação.");
        return;
    }

const novaLocacao = new Locacao(new Date());

    filmes.forEach(filme => {
        novaLocacao.addFilme(filme);
    });

    this.historicoLocacao.push(novaLocacao);
    this.saldoDevedor += novaLocacao.getValorTotalAPagar();
    }

public pagarDebito (valor: number): void {
    if (valor <= 0) {
        console.log("Valor inválido para pagamento.");
        return;
    }

    if (valor >= this.saldoDevedor) {
        console.log("Pagamento completo! Saldo devedor zerado!");
        this.saldoDevedor = 0;
    } else {
        this.saldoDevedor -= valor;
        console.log(`Pagamento de R$${valor.toFixed(2)} efetuado. Novo saldo: R$${this.saldoDevedor.toFixed(2)}`);
    }
}

public extratoHistorico(): string {
    let extrato = `.:: Histórico de Locações de ${this.cliente.getNome()} ::.\n`;

    if (this.historicoLocacao.length === 0) {
      extrato += "Nenhuma locação registrada.\n";
    } else {
      this.historicoLocacao.forEach(locacao => {
        extrato += `${locacao.getDataLocacao().toString()} | ${locacao.listarFilmes()} | R$${locacao.getValorTotalAPagar().toFixed(2)}\n`;
      });
    }
     extrato += `\nSaldo devedor atual: R$${this.saldoDevedor.toFixed(2)}\n`;
    return extrato;
    }

  // === Getters ===
  public getCliente(): Cliente {
    return this.cliente;
  }

  public getSaldoDevedor(): number {
    return this.saldoDevedor;
  }

  public getHistoricoLocacao(): Locacao[] {
    return this.historicoLocacao;
  }

  // === Setters ===
  public setCliente(cliente: Cliente): void {
    this.cliente = cliente;
  }

  public setSaldoDevedor(valor: number): void {
    this.saldoDevedor = valor;
  }
}

