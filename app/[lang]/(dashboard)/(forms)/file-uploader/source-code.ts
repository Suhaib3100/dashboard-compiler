export const basicFileUpload =`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const BasicFileUploader = () => {
  return (
    <div className="flex flex-col gap-3">
      <Label>Upload File</Label>
      <Input type="file" variant="flat" />
    </div>
  );
};

export default BasicFileUploader;`
export const fileUploadWithButton =`"use client"
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
              <Upload className="mr-2 h-4 w-4" /> Choose File
            </div>
          </Button>
          <Input type="file" className="hidden" />
        </Label>
        <Label>
          <div>
            <Button asChild color="success">
              <div>
                Choose File <Upload className="ml-2 h-4 w-4" />
              </div>
            </Button>
          </div>
          <Input type="file" className="hidden" />
        </Label>

        <Label>
          <div>
            <Button asChild color="info" variant="outline">
              <div>
                Choose File <Upload className=" ml-2 h-4 w-4" />
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
          <Input type="file" className="hidden" id="circle_file_1" />
          <Upload className="text-default-400" />
        </Label>
        <Label htmlFor="circle_file_1" className="h-12 w-12 rounded-full flex items-center justify-center  border border-default-300 border-dashed">
          <Input type="file" className="hidden" id="circle_file_1" />
          <Upload className="text-default-400 h-5 w-5" />
        </Label>
        <Label htmlFor="circle_file_1" className="h-9 w-9 rounded-full flex items-center justify-center  bg-default-100">
          <Input type="file" className="hidden" id="circle_file_1" />
          <Upload className="text-default-400 h-4 w-4" />
        </Label>
      </div>
    </div>
  );
};
export default FileUploadWithButton;`

export const multipleFileUploader =`" use client";
import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Upload } from "lucide-react";
const FileUploaderMultiple = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
    },
  });
  const renderFilePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <Image
          width={48}
          height={48}
          alt={file.name}
          src={URL.createObjectURL(file)}
          className=" rounded border p-0.5"
        />
      );
    } else {
      return <Icon icon="tabler:file-description" />;
    }
  };
  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
  };
  const fileList = files.map((file) => (
    <div
      key={file.name}
      className=" flex justify-between border px-3.5 py-3 my-6 rounded-md"
    >
      <div className="flex space-x-3 items-center">
        <div className="file-preview">{renderFilePreview(file)}</div>
        <div>
          <div className=" text-sm  text-card-foreground">{file.name}</div>
          <div className=" text-xs font-light text-muted-foreground">
            {Math.round(file.size / 100) / 10 > 1000 ? (
              <>{(Math.round(file.size / 100) / 10000).toFixed(1)}</>
            ) : (
              <>{(Math.round(file.size / 100) / 10).toFixed(1)}</>
            )}
            {" kb"}
          </div>
        </div>
      </div>
      <Button
        size="icon"
        color="destructive"
        variant="outline"
        className=" border-none rounded-full"
        onClick={() => handleRemoveFile(file)}
      >
        <Icon icon="tabler:x" className=" h-5 w-5" />
      </Button>
    </div>
  ));
  const handleRemoveAllFiles = () => {
    setFiles([]);
  };
  return (
    <Fragment>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className=" w-full text-center border-dashed border  rounded-md py-[52px] flex  items-center flex-col">
          <div className="h-12 w-12 inline-flex rounded-md bg-muted items-center justify-center mb-3">
            <Upload className="h-6 w-6 text-default-500" />
          </div>
          <h4 className=" text-2xl font-medium mb-1 text-card-foreground/80">
            Drop files here or click to upload.
          </h4>
          <div className=" text-xs text-muted-foreground">
            ( This is just a demo drop zone. Selected files are not actually
            uploaded.)
          </div>
        </div>
      </div>
      {files.length ? (
        <Fragment>
          <div>{fileList}</div>
          <div className=" flex justify-end space-x-2">
            <Button color="destructive" onClick={handleRemoveAllFiles}>
              Remove All
            </Button>
            <Button>Upload Files</Button>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};
export default FileUploaderMultiple;
`
export const singleFileUploader =`" use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button";
const FileUploaderSingle = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
    },
  });
  const img = files.map((file) => (
    <img
      key={file.name}
      alt={file.name}
      className="w-full h-full object-cover rounded-md"
      src={URL.createObjectURL(file)}
    />
  ));

  const closeTheFile = () => {
    setFiles([]);
  }
  return (
    <div className={files.length && "h-[300px] w-full"}>
      {files.length ? (
        <div className="w-full h-full relative">
          <Button
            type="button"
            className="absolute top-4 right-4 h-12 w-12 rounded-full bg-default-900 hover:bg-background hover:text-default-900 z-20"
            onClick={closeTheFile}
          >
            <span className="text-xl"><Icon icon="fa6-solid:xmark" /></span>
          </Button>
          {img}
        </div>
      ) : (
        <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />

            <div className="w-full text-center border-dashed border rounded-md py-[52px] flex items-center flex-col">
              <div className="h-12 w-12 inline-flex rounded-md bg-muted items-center justify-center mb-3">
              <Upload className="text-default-500" />
              </div>
              <h4 className="text-2xl font-medium mb-1 text-card-foreground/80">
                Drop files here or click to upload.
              </h4>
              <div className="text-xs text-muted-foreground">
                (This is just a demo drop zone. Selected files are not actually uploaded.)
              </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FileUploaderSingle;
`
export const fileUploaderWithRestrictions =`" use client";
import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import { useToast } from "@/components/ui/use-toast";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Upload } from "lucide-react";
const FileUploaderRestrictions = () => {
  const [files, setFiles] = useState([]);
  const { toast } = useToast();
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 2,
    maxSize: 2000000,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
    },
    onDropRejected: () => {
      toast({
        color: "destructive",
        title: "Error",
        description: "You can only upload 2 files & maximum size of 2 MB",
      });
    },
  });
  const renderFilePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <Image
          width={48}
          height={48}
          alt={file.name}
          src={URL.createObjectURL(file)}
          className=" rounded border p-0.5"
        />
      );
    } else {
      return <Icon icon="tabler:file-description" />;
    }
  };
  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
  };
  const fileList = files.map((file) => (
    <div
      key={file.name}
      className=" flex justify-between border px-3.5 py-3 my-6 rounded-md"
    >
      <div className="flex space-x-3 items-center">
        <div className="file-preview">{renderFilePreview(file)}</div>
        <div>
          <div className=" text-sm  text-card-foreground">{file.name}</div>
          <div className=" text-xs font-light text-muted-foreground">
            {Math.round(file.size / 100) / 10 > 1000 ? (
              <>{(Math.round(file.size / 100) / 10000).toFixed(1)}</>
            ) : (
              <>{(Math.round(file.size / 100) / 10).toFixed(1)}</>
            )}
            {" kb"}
          </div>
        </div>
      </div>
      <Button
        size="icon"
        color="destructive"
        variant="outline"
        className=" border-none rounded-full"
        onClick={() => handleRemoveFile(file)}
      >
        <Icon icon="tabler:x" className=" h-5 w-5" />
      </Button>
    </div>
  ));
  const handleRemoveAllFiles = () => {
    setFiles([]);
  };
  return (
    <Fragment>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className=" w-full text-center border-dashed border  rounded-md py-[52px] flex  items-center flex-col">
          <div className="h-12 w-12 inline-flex rounded-md bg-muted items-center justify-center mb-3">
            <Upload className="h-6 w-6 text-default-500" />
          </div>
          <h4 className=" text-2xl font-medium mb-1 text-card-foreground/80">
            Drop files here or click to upload.
          </h4>
          <div className=" text-xs text-muted-foreground">
            ( This is just a demo drop zone. Selected files are not actually
            uploaded.)
          </div>
        </div>
      </div>
      {files.length ? (
        <Fragment>
          <div>{fileList}</div>
          <div className=" flex justify-end space-x-2">
            <Button color="destructive" onClick={handleRemoveAllFiles}>
              Remove All
            </Button>
            <Button>Upload Files</Button>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};
export default FileUploaderRestrictions;
`