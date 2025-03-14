// Reference implementation of ScheduleComparison.tsx
// This file corresponds to screenshot: screencapture-preview-platsynkronisering-lovable-app-schema-2025-03-14-14_38_44.png

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComparisonTable } from "./ComparisonTable";
import { Scale, ArrowRight, ChevronDown } from "lucide-react";

export const ScheduleComparison = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jämför & Analysera</h1>
        <Button variant="outline" className="flex items-center gap-2">
          Välj scheman att jämföra
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader className="border-b bg-muted/10 pb-4 pt-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Schemaoptimering - Jämförelse</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Schedule A */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Stockholm Väst - v.32</h3>
                  <div className="text-sm text-muted-foreground">
                    2023-08-07 • Original
                  </div>
                </div>
                <Badge className="px-3 py-1 bg-blue-100 text-blue-800">
                  Poäng: 87
                </Badge>
              </div>
              <ComparisonTable scheduleId="sched-1" />
            </div>

            {/* Schedule B */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Stockholm Väst - v.32 (Optimerad)</h3>
                  <div className="text-sm text-muted-foreground">
                    2023-08-07 • Optimerad
                  </div>
                </div>
                <Badge className="px-3 py-1 bg-blue-100 text-blue-800">
                  Poäng: 92
                </Badge>
              </div>
              <ComparisonTable scheduleId="sched-2" />
            </div>
          </div>

          {/* Comparison Summary */}
          <div className="mt-8 flex justify-center">
            <Card className="border-2 border-blue-100 bg-blue-50 p-6 shadow-sm md:w-3/4">
              <div className="text-center">
                <Scale className="mx-auto mb-4 h-12 w-12 text-blue-700" />
                <h3 className="text-xl font-bold text-blue-900">Jämförelseresultat</h3>
                <p className="mt-2 text-blue-800">
                  Den optimerade versionen är 5.7% mer effektiv, med lägre kostnad och bättre personalutnyttjande.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-sm font-medium text-blue-800">Restidsreduktion</div>
                    <div className="text-2xl font-bold text-blue-900">
                      -30 min
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-800">Kostnadsreduktion</div>
                    <div className="text-2xl font-bold text-blue-900">
                      -3000 kr
                    </div>
                  </div>
                </div>

                <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                  Publicera optimerad version
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};