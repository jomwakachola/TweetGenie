import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { PDFUploader } from '@/components/pdf/PDFUploader';

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tweet Writer</h1>
        </div>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            Upload your PDF document and our AI will transform its content into engaging tweets that capture your audience's attention.
          </p>
        </div>

        <PDFUploader />
      </div>
    </DashboardLayout>
  );
}