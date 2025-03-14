// Reference implementation of ComparisonTable.tsx
// This file corresponds to screenshot: screencapture-preview-platsynkronisering-lovable-app-schema-2025-03-14-14_38_44.png

import { Progress } from "@/components/ui/progress";

interface ComparisonTableProps {
  scheduleId: string;
}

export const ComparisonTable = ({ scheduleId }: ComparisonTableProps) => {
  // Mock data - in real implementation, this would come from props or API
  const metrics = {
    staffUtilization: 78,
    travelTime: 450,
    travelDistance: 85.0,
    assignedVisits: 156,
    totalVisits: 159,
    staffCost: 45000,
  };

  return (
    <div className="space-y-3">
      <div>
        <div className="mb-1 flex items-center justify-between text-sm">
          <span>Personaleffektivitet</span>
          <span className="font-medium">{metrics.staffUtilization}%</span>
        </div>
        <Progress value={metrics.staffUtilization} className="h-2" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-md border bg-white p-3">
          <div className="text-xs text-muted-foreground">Restid</div>
          <div className="text-lg font-bold">{metrics.travelTime} min</div>
        </div>
        <div className="rounded-md border bg-white p-3">
          <div className="text-xs text-muted-foreground">Ressträcka</div>
          <div className="text-lg font-bold">{metrics.travelDistance} km</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-md border bg-white p-3">
          <div className="text-xs text-muted-foreground">Besök</div>
          <div className="text-lg font-bold">
            {metrics.assignedVisits}/{metrics.totalVisits}
          </div>
        </div>
        <div className="rounded-md border bg-white p-3">
          <div className="text-xs text-muted-foreground">Personalkostnad</div>
          <div className="text-lg font-bold">{metrics.staffCost} kr</div>
        </div>
      </div>
    </div>
  );
};