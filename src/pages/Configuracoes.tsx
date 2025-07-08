import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Building } from "lucide-react";

const Configuracoes = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
        <p className="text-muted-foreground">Configurações da oficina e sistema</p>
      </div>

      <div className="text-center text-muted-foreground py-12">
        <Building className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-semibold mb-2">Configurações da Oficina</h3>
        <p>Funcionalidades detalhadas em desenvolvimento</p>
      </div>
    </div>
  );
};

export default Configuracoes;