import { useState } from 'react';
import Dropzone from 'react-dropzone';

import Button from '@mui/material/Button';
import Icon from '../Icon/Icon';
interface FileUploadProps {
  iconName?: string;
  maxFiles?: number;
  maxSize?: string;
  errorText?: string;
  // Add any other props if needed
}

const FileUpload: React.FC<FileUploadProps> = ({
  iconName,
  maxFiles,
  maxSize,
  errorText,
  ...props
}) => {
  const [files, setFiles] = useState([]);

  // convert file size bytes to MB
  const bytesToMegaBytes = (bytes) => bytes / 1024 ** 2;

  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles, file) => {
    file(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  };

  // preview thumbs
  const thumbs = files.map((file) => (
    <div
      className="dz-preview dz-processing dz-image-preview dz-complete"
      key={file.name}
    >
      <div className="dz-image">
        <img src={file.preview} alt="preview" />
      </div>
    </div>
  ));

  return (
    <>
      <Dropzone
        onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}
        maxFiles={maxFiles}
        maxSize={Number(maxSize)}
        onDropRejected={() => alert(errorText)}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone dz-clickable">
            <input {...getInputProps()} />
            {files.length === 0 && (
              <div className="dz-message">
                <div className="dz-message-icon">
                  <Icon size="lg" name={iconName} />
                </div>
                <span className="dz-message-text">
                  Drag and drop file{' '}
                  <small>
                    {maxSize && 'Max ' + bytesToMegaBytes(maxSize) + ' MB'}
                  </small>
                </span>
                <div className="dz-message-btn mt-2">
                  <Button variant="contained" color="primary">
                    Upload
                  </Button>
                </div>
              </div>
            )}

            {thumbs}
          </div>
        )}
      </Dropzone>
    </>
  );
};

export default FileUpload;
