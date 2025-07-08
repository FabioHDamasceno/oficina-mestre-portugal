import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard } from "lucide-react";

const Faturacao = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Faturação</h1>
          <p className="text-muted-foreground">Emissão de faturas, notas fiscais e recibos</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover transition-smooth">
          <FileText className="w-4 h-4 mr-2" />
          Nova Fatura
        </Button>
      </div>

      <div className="text-center text-muted-foreground py-12">
        <CreditCard className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-semibold mb-2">Módulo de Faturação</h3>
        <p>Funcionalidades detalhadas em desenvolvimento</p>
      </div>
    </div>
  );
};

export default Faturacao;