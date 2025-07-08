import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { 
  Car, 
  Users, 
  TrendingUp, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Euro,
  Wrench
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral das operações da oficina</p>
      </div>

      {/* Métricas principais */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Ordens em Aberto"
          value={12}
          change="+2 desde ontem"
          changeType="positive"
          icon={Car}
          description="Serviços pendentes"
        />
        <MetricCard
          title="Clientes Ativos"
          value={248}
          change="+15 este mês"
          changeType="positive"
          icon={Users}
          description="Base de clientes"
        />
        <MetricCard
          title="Receita Mensal"
          value="€12.450"
          change="+8.2% vs mês anterior"
          changeType="positive"
          icon={Euro}
          description="Faturação atual"
        />
        <MetricCard
          title="Agendamentos Hoje"
          value={8}
          change="3 confirmados"
          changeType="neutral"
          icon={Calendar}
          description="Próximos atendimentos"
        />
      </div>

      {/* Resumo operacional */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              Ordens de Serviço
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-status-pending"></div>
                <span className="text-sm">Aguardando</span>
              </div>
              <span className="font-semibold">5</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-status-in-progress"></div>
                <span className="text-sm">Em Andamento</span>
              </div>
              <span className="font-semibold">7</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-status-completed"></div>
                <span className="text-sm">Concluídas</span>
              </div>
              <span className="font-semibold">23</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Alertas de Estoque
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Itens com estoque baixo:
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Óleo Motor 5W30</span>
                <span className="text-xs bg-warning text-warning-foreground px-2 py-1 rounded">2 unidades</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Filtro de Ar</span>
                <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded">0 unidades</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Pastilhas de Freio</span>
                <span className="text-xs bg-warning text-warning-foreground px-2 py-1 rounded">3 unidades</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Resumo Financeiro
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Receitas (mês)</span>
              <span className="font-semibold text-success">€12.450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Despesas (mês)</span>
              <span className="font-semibold text-destructive">€4.320</span>
            </div>
            <div className="flex justify-between items-center border-t pt-2">
              <span className="text-sm font-medium">Lucro Líquido</span>
              <span className="font-bold text-success">€8.130</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agendamentos próximos */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Próximos Agendamentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: "09:00", client: "João Silva", service: "Revisão Geral", status: "confirmado" },
              { time: "10:30", client: "Maria Santos", service: "Troca de Óleo", status: "confirmado" },
              { time: "14:00", client: "António Costa", service: "Diagnóstico", status: "pendente" },
              { time: "15:30", client: "Ana Ferreira", service: "Alinhamento", status: "confirmado" },
            ].map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-mono bg-primary text-primary-foreground px-2 py-1 rounded">
                    {appointment.time}
                  </div>
                  <div>
                    <p className="font-medium">{appointment.client}</p>
                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs ${
                  appointment.status === "confirmado" 
                    ? "bg-success text-success-foreground" 
                    : "bg-warning text-warning-foreground"
                }`}>
                  {appointment.status}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;