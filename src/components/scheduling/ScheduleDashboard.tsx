// Reference implementation of ScheduleDashboard.tsx
// This file corresponds to screenshot: screencapture-preview-platsynkronisering-lovable-app-schema-2025-03-14-14_37_54.png

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart2, Plus } from "lucide-react";

export const ScheduleDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
      <BarChart2 className="h-16 w-16 text-gray-300 mb-4" />
      <h2 className="text-xl font-semibold mb-2">Inga scheman valda</h2>
      <p className="text-muted-foreground text-center mb-6">
        Välj ett schema från listan eller skapa ett nytt för att se detaljerad information.
      </p>
      <Button className="gap-2">
        <Plus className="h-4 w-4" />
        Skapa nytt schema
      </Button>
    </div>
  );
};