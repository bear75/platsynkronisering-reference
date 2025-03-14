// Reference implementation of ScheduleConfigDetails.tsx
// This file corresponds to screenshot: screencapture-preview-platsynkronisering-lovable-app-schema-2025-03-14-14_37_41.png

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Car, Clock, MapPin, Users } from "lucide-react";

export const ScheduleConfigDetails = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Optimeringsparametrar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label>Minimera körsträcka</Label>
                  <Car className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Prioritera optimering av körsträcka
                </p>
              </div>
              <Input className="w-24" defaultValue="8" type="number" min="1" max="10" />
            </div>
            
            {/* Add more configuration options */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};