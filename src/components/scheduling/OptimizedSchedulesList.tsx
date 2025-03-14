// Reference implementation of OptimizedSchedulesList.tsx
// This file corresponds to screenshot: screencapture-preview-platsynkronisering-lovable-app-schema-2025-03-14-14_36_59.png

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, BarChart2, Calendar } from "lucide-react";

export const OptimizedSchedulesList = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Optimerade Scheman</h1>
        <Button className="gap-2">
          <BarChart2 className="h-4 w-4" />
          Skapa ny optimering
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Optimerade scheman</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Add your optimized schedules list here */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Stockholm Väst - Vecka 32</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2023-08-07</span>
                  <Badge variant="outline">Optimerad</Badge>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-brand-50 text-brand-700">92% effektivitet</Badge>
                <Button variant="ghost" size="sm">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};