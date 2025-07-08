import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, AlertTriangle, Package } from "lucide-react";

const Estoque = () => {
  const produtos = [
    {
      id: 1,
      nome: "Óleo Motor 5W30",
      categoria: "Óleos e Lubrificantes",
      quantidade: 2,
      minimo: 5,
      preco: "€35.50",
      fornecedor: "AutoPeças Lda",
      ultimaEntrada: "2024-01-05"
    },
    {
      id: 2,
      nome: "Filtro de Ar",
      categoria: "Filtros",
      quantidade: 0,
      minimo: 3,
      preco: "€12.80",
      fornecedor: "Filtros & Cia",
      ultimaEntrada: "2023-12-20"
    },
    {
      id: 3,
      nome: "Pastilhas de Freio",
      categoria: "Sistema de Freios",
      quantidade: 3,
      minimo: 5,
      preco: "€45.00",
      fornecedor: "FreioMax",
      ultimaEntrada: "2024-01-03"
    },
    {
      id: 4,
      nome: "Amortecedor Dianteiro",
      categoria: "Suspensão",
      quantidade: 8,
      minimo: 4,
      preco: "€125.00",
      fornecedor: "SuspensãoPro",
      ultimaEntrada: "2024-01-06"
    },
  ];

  const getStatusBadge = (quantidade: number, minimo: number) => {
    if (quantidade === 0) {
      return <Badge className="bg-destructive text-destructive-foreground">Esgotado</Badge>;
    } else if (quantidade <= minimo) {
      return <Badge className="bg-warning text-warning-foreground">Baixo</Badge>;
    } else {
      return <Badge className="bg-success text-success-foreground">Normal</Badge>;
    }
  };

  const produtosBaixo = produtos.filter(p => p.quantidade <= p.minimo);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestão de Estoque</h1>
          <p className="text-muted-foreground">Controlar produtos, peças e insumos</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Package className="w-4 h-4 mr-2" />
            Entrada de Estoque
          </Button>
          <Button className="bg-gradient-primary hover:bg-primary-hover transition-smooth">
            <Plus className="w-4 h-4 mr-2" />
            Novo Produto
          </Button>
        </div>
      </div>

      {/* Alertas de estoque baixo */}
      {produtosBaixo.length > 0 && (
        <Card className="shadow-card border-warning">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertTriangle className="w-5 h-5" />
              Alertas de Estoque ({produtosBaixo.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {produtosBaixo.map((produto) => (
                <div key={produto.id} className="flex justify-between items-center p-3 bg-warning/10 rounded-lg">
                  <div>
                    <p className="font-medium">{produto.nome}</p>
                    <p className="text-sm text-muted-foreground">
                      {produto.quantidade === 0 ? "Esgotado" : `Restam apenas ${produto.quantidade} unidades`}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Reabastecer
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pesquisa e filtros */}
      <Card className="shadow-card">
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <select className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Todas as categorias</option>
              <option>Óleos e Lubrificantes</option>
              <option>Filtros</option>
              <option>Sistema de Freios</option>
              <option>Suspensão</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de produtos */}
      <div className="grid gap-4">
        {produtos.map((produto) => (
          <Card key={produto.id} className="shadow-card hover:shadow-elevated transition-smooth">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{produto.nome}</h3>
                  <p className="text-muted-foreground">{produto.categoria}</p>
                </div>
                {getStatusBadge(produto.quantidade, produto.minimo)}
              </div>

              <div className="grid md:grid-cols-5 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Quantidade</p>
                  <p className="text-lg font-semibold">{produto.quantidade}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Estoque Mínimo</p>
                  <p className="text-sm">{produto.minimo}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Preço</p>
                  <p className="text-sm font-semibold">{produto.preco}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Fornecedor</p>
                  <p className="text-sm">{produto.fornecedor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Última Entrada</p>
                  <p className="text-sm">{produto.ultimaEntrada}</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" size="sm">
                  Ver Histórico
                </Button>
                <Button variant="outline" size="sm">
                  Entrada
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary-hover">
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Estoque;