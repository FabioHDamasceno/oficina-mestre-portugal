import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter } from "lucide-react";

const Ordens = () => {
  const ordens = [
    {
      id: "OS-001",
      cliente: "João Silva",
      veiculo: "Volkswagen Golf 2018",
      servico: "Revisão Geral",
      status: "Em Andamento",
      dataEntrada: "2024-01-08",
      previsaoEntrega: "2024-01-10",
      valor: "€320.00"
    },
    {
      id: "OS-002", 
      cliente: "Maria Santos",
      veiculo: "Toyota Corolla 2020",
      servico: "Troca de Óleo",
      status: "Aguardando",
      dataEntrada: "2024-01-08",
      previsaoEntrega: "2024-01-09",
      valor: "€80.00"
    },
    {
      id: "OS-003",
      cliente: "António Costa", 
      veiculo: "BMW X3 2019",
      servico: "Diagnóstico Motor",
      status: "Concluída",
      dataEntrada: "2024-01-05",
      previsaoEntrega: "2024-01-07",
      valor: "€150.00"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aguardando":
        return "bg-status-pending text-white";
      case "Em Andamento":
        return "bg-status-in-progress text-white";
      case "Concluída":
        return "bg-status-completed text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Ordens de Serviço</h1>
          <p className="text-muted-foreground">Gerir e acompanhar todos os serviços</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover transition-smooth">
          <Plus className="w-4 h-4 mr-2" />
          Nova Ordem
        </Button>
      </div>

      {/* Filtros e pesquisa */}
      <Card className="shadow-card">
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Pesquisar por cliente, veículo ou ordem..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de ordens */}
      <div className="grid gap-4">
        {ordens.map((ordem) => (
          <Card key={ordem.id} className="shadow-card hover:shadow-elevated transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{ordem.id}</CardTitle>
                  <p className="text-muted-foreground">{ordem.cliente}</p>
                </div>
                <Badge className={getStatusColor(ordem.status)}>
                  {ordem.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Veículo</p>
                  <p className="text-sm">{ordem.veiculo}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Serviço</p>
                  <p className="text-sm">{ordem.servico}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Previsão</p>
                  <p className="text-sm">{ordem.previsaoEntrega}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Valor</p>
                  <p className="text-sm font-semibold">{ordem.valor}</p>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" size="sm">
                  Ver Detalhes
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

export default Ordens;