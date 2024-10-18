"use client";

import Card from "@/components/ui/card-snippet";
import FileUploaderMultiple from "./file-uploader-multiple";
import FileUploaderSingle from "./file-uploader-single";
import FileUploaderRestrictions from "./file-uploader-restrictions";
import BasicFileUploader from "./basic-file-uploader";
import FileUploadWithButton from "./fileupload-with-button";
import {
  basicFileUpload,
  fileUploadWithButton,
  fileUploaderWithRestrictions,
  multipleFileUploader,
  singleFileUploader,
} from "./source-code";

const FileUploaderPage = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Basic File Upload" code={basicFileUpload}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            File input elements enable users to select one or multiple files
            from their device storage. Once selected, the files can be submitted
            to a server through form submission.
          </p>
          <BasicFileUploader />
        </Card>
        <Card title="File Upload with Button" code={fileUploadWithButton}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            Apply our unique design to the file upload button for a more
            distinctive and cohesive visual appeal.
          </p>
          <FileUploadWithButton />
        </Card>
      </div>
      <div className="col-span-2">
        <Card title="Upload Multiple Files" code={multipleFileUploader}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4 max-w-2xl">
            Upload multiple files and images here. They will display
            individually, and you can remove or delete them one by one or all at
            once.
          </p>
          <FileUploaderMultiple />
        </Card>
      </div>
      <Card title="Upload Single File" code={singleFileUploader}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4 max-w-2xl">
          Upload one file at a time, and you have the option to delete the
          uploaded file.
        </p>
        <FileUploaderSingle />
      </Card>
      <Card
        title="Upload Files with Restrictions"
        code={fileUploaderWithRestrictions}
      >
        <p className="text-sm text-default-400 dark:text-default-600  mb-4 max-w-2xl">
          File upload has restrictions; not all types are accepted. Only
          compatible files can be uploaded to this platform.
        </p>
        <FileUploaderRestrictions />
      </Card>
    </div>
  );
};

export default FileUploaderPage;
