import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const Agendamento = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Agendamento</h1>
          <p className="text-muted-foreground">Agenda de serviços e horários disponíveis</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover transition-smooth">
          <Calendar className="w-4 h-4 mr-2" />
          Novo Agendamento
        </Button>
      </div>

      <div className="text-center text-muted-foreground py-12">
        <Clock className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-semibold mb-2">Módulo de Agendamento</h3>
        <p>Funcionalidades detalhadas em desenvolvimento</p>
      </div>
    </div>
  );
};

export default Agendamento;