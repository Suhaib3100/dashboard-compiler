"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UploadCloud, Upload } from "lucide-react";

const FileUploadWithButton = () => {
  return (
    <div className="flex  flex-col gap-5">
      <div className='flex items-center flex-wrap gap-4'>
        <Label>
          <Button asChild>
            <div>
              <Upload className="me-2 h-4 w-4" /> Choose File
            </div>
          </Button>
          <Input type="file" className="hidden" />
        </Label>
        <Label>
          <div>
            <Button asChild color="success">
              <div>
                Choose File <Upload className="ms-2 h-4 w-4" />
              </div>
            </Button>
          </div>
          <Input type="file" className="hidden" />
        </Label>

        <Label>
          <div>
            <Button asChild color="info" variant="outline">
              <div>
                Choose File <Upload className=" ms-2 h-4 w-4" />
              </div>
            </Button>
          </div>
          <Input type="file" className="hidden" />
        </Label>
      </div>
      <div className='flex items-center flex-wrap gap-4'>
        <Label>
          <div>
            <Button asChild >
              <div>
                <UploadCloud className='h-4 w-4' />
              </div>
            </Button>
          </div>
          <Input type="file" className="hidden" />
        </Label>
        <Label>
          <div>
            <Button asChild color="warning" variant="outline">
              <div>
                <UploadCloud className='h-4 w-4' />
              </div>
            </Button>
          </div>
          <Input type="file" className="hidden" />
        </Label>
      </div>
      <div className="flex items-center flex-wrap gap-5">
        <Label htmlFor="circle_file_1" className="h-[68px] w-[68px] rounded-full flex items-center justify-center  border border-default-300 border-dashed">
          <div>
            <Input type="file" className="hidden" id="circle_file_1" />
            <Upload className="text-default-400" />
          </div>
        </Label>
        <Label htmlFor="circle_file_1" className="h-12 w-12 rounded-full flex items-center justify-center  border border-default-300 border-dashed">
          <div>
            <Input type="file" className="hidden" id="circle_file_1" />
            <Upload className="text-default-400 h-5 w-5" />
          </div>
        </Label>
        <Label htmlFor="circle_file_1" className="h-9 w-9 rounded-full flex items-center justify-center  bg-default-100">
          <div>
            <Input type="file" className="hidden" id="circle_file_1" />
            <Upload className="text-default-400 h-4 w-4" />
          </div>
        </Label>
      </div>
    </div>
  );
};

export default FileUploadWithButton;