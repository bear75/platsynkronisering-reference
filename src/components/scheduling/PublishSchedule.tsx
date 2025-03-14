// Reference implementation of PublishSchedule.tsx
// This file corresponds to screenshot: screencapture-preview-platsynkronisering-lovable-app-schema-2025-03-14-14_38_14.png

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, ArrowRight } from "lucide-react";

export const PublishSchedule = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Publicera Scheman</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Redo att publicera</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Stockholm Väst - Vecka 32</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2023-08-07</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Redo att publicera
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-brand-50 text-brand-700">92% effektivitet</Badge>
                <Button>
                  Publicera <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};