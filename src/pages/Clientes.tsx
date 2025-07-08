import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Mail, Phone } from "lucide-react";

const Clientes = () => {
  const clientes = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao.silva@email.com",
      telefone: "+351 912 345 678",
      endereco: "Rua das Flores, 123, Lisboa",
      totalServicos: 12,
      ultimoServico: "2024-01-08",
      valorTotal: "€2.340,00"
    },
    {
      id: 2,
      nome: "Maria Santos",
      email: "maria.santos@email.com", 
      telefone: "+351 923 456 789",
      endereco: "Avenida Central, 456, Porto",
      totalServicos: 8,
      ultimoServico: "2024-01-05",
      valorTotal: "€1.680,00"
    },
    {
      id: 3,
      nome: "António Costa",
      email: "antonio.costa@email.com",
      telefone: "+351 934 567 890",
      endereco: "Praça da República, 789, Braga",
      totalServicos: 15,
      ultimoServico: "2024-01-03",
      valorTotal: "€3.250,00"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
          <p className="text-muted-foreground">Gerir a base de clientes da oficina</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover transition-smooth">
          <Plus className="w-4 h-4 mr-2" />
          Novo Cliente
        </Button>
      </div>

      {/* Barra de pesquisa */}
      <Card className="shadow-card">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Pesquisar clientes por nome, email ou telefone..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </CardContent>
      </Card>

      {/* Lista de clientes */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {clientes.map((cliente) => (
          <Card key={cliente.id} className="shadow-card hover:shadow-elevated transition-smooth">
            <CardHeader>
              <CardTitle className="text-lg">{cliente.nome}</CardTitle>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  {cliente.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  {cliente.telefone}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Endereço</p>
                  <p className="text-sm">{cliente.endereco}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Serviços</p>
                    <p className="text-lg font-semibold">{cliente.totalServicos}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Valor Total</p>
                    <p className="text-lg font-semibold text-success">{cliente.valorTotal}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground">Último Serviço</p>
                  <p className="text-sm">{cliente.ultimoServico}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Ver Histórico
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary-hover">
                    Editar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Clientes;