import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Euro, FileText } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";

const Financeiro = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financeiro</h1>
          <p className="text-muted-foreground">Controle de receitas, despesas e relatórios</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover transition-smooth">
          <FileText className="w-4 h-4 mr-2" />
          Novo Lançamento
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Receitas (Mês)"
          value="€12.450"
          change="+12.5% vs mês anterior"
          changeType="positive"
          icon={TrendingUp}
        />
        <MetricCard
          title="Despesas (Mês)"
          value="€4.320"
          change="+5.2% vs mês anterior"
          changeType="negative"
          icon={TrendingDown}
        />
        <MetricCard
          title="Lucro Líquido"
          value="€8.130"
          change="+18.3% vs mês anterior"
          changeType="positive"
          icon={Euro}
        />
        <MetricCard
          title="Contas a Receber"
          value="€2.680"
          description="7 faturas pendentes"
          icon={FileText}
        />
      </div>

      <div className="text-center text-muted-foreground py-12">
        <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-semibold mb-2">Módulo Financeiro</h3>
        <p>Funcionalidades detalhadas em desenvolvimento</p>
      </div>
    </div>
  );
};

export default Financeiro;