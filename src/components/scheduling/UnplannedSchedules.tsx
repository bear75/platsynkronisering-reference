// Reference implementation of UnplannedSchedules.tsx
// This file corresponds to screenshot: screencapture-preview-platsynkronisering-lovable-app-schema-2025-03-14-14_36_38.png

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Plus, Calendar } from "lucide-react";

export const UnplannedSchedules = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Original Scheman</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Skapa nytt schema
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Ladda upp schema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-6 border-2 border-dashed rounded-lg">
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold">Dra och släpp JSON-fil här</h3>
              <p className="mt-1 text-sm text-gray-500">eller klicka för att välja fil</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Add your schedule list table here */}
    </div>
  );
};