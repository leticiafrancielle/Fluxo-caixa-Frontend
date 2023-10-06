import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagamentoSaldoConsolidado } from '../models/pagamentoSaldoConsolidado';
import { Pagamento } from '../models/pagamento';
import { env } from '../environments/env';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private readonly baseUrl = env.baseUrl;

  constructor(private http: HttpClient) { }

  public buscarPagamentos(): Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(`${this.baseUrl}/listar-pagamentos`)
  }

  public buscarPagamentosComSaldoConsolidado(dataReferencia: Date): Observable<PagamentoSaldoConsolidado> {
    return this.http.get<PagamentoSaldoConsolidado>(`${this.baseUrl}/listar-saldo-consolidado?dataReferencia=${dataReferencia}`);
  }

  public cadastrarPagamento(pagamento: Pagamento): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cadastrar-pagamento`, pagamento)
  }
}
