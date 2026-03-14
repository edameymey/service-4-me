'use client';

import { useRef, useState } from 'react';
import { MAX_TOTAL_SIZE_BYTES, MAX_TOTAL_SIZE_MB, EXPERIENCE_LEVELS, URGENCY_LEVELS, CATEGORIES } from './constants/create';
import { CreateEnum, LevelEnum, UploadItem } from './types/create';
import { ArrowRightIcon, ChevronDownIcon, UploadCloudIcon } from './svgs';

const CreatePage = () => {
  const [tab, setTab] = useState<CreateEnum>(CreateEnum.OFFERING);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState<LevelEnum | ''>('');
  const [description, setDescription] = useState('');
  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const [uploadError, setUploadError] = useState('');
  const [servicePicture, setServicePicture] = useState<UploadItem[]>([]);
  const [servicePictureError, setServicePictureError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addPhotoRef = useRef<HTMLInputElement>(null);
  const servicePictureInputRef = useRef<HTMLInputElement>(null);
  const addServicePictureRef = useRef<HTMLInputElement>(null);

  const handleAcceptedFiles = (
    files: File[],
    currentUploads: UploadItem[],
    setUploadsState: React.Dispatch<React.SetStateAction<UploadItem[]>>,
    setUploadErrorState: React.Dispatch<React.SetStateAction<string>>,
    isFileTypeSupported: (type: string) => boolean
  ) => {
    const currentTotalSize = currentUploads.reduce(
      (total, item) => total + item.size,
      0
    );
    let nextTotalSize = currentTotalSize;
    const acceptedFiles: File[] = [];
    const rejectedFiles: string[] = [];

    files.forEach((file) => {
      if (!isFileTypeSupported(file.type)) {
        rejectedFiles.push(`${file.name} (unsupported type)`);
        return;
      }

      if (nextTotalSize + file.size > MAX_TOTAL_SIZE_BYTES) {
        rejectedFiles.push(
          `${file.name} (total limit ${MAX_TOTAL_SIZE_MB}MB exceeded)`
        );
        return;
      }

      acceptedFiles.push(file);
      nextTotalSize += file.size;
    });

    const mappedFiles = acceptedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      type: file.type,
      size: file.size,
    }));

    if (mappedFiles.length > 0) {
      setUploadsState((prev) => [...prev, ...mappedFiles]);
    }

    if (rejectedFiles.length > 0) {
      setUploadErrorState(
        `Some files were skipped: ${rejectedFiles.join(', ')}`
      );
      return;
    }

    setUploadErrorState('');
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleAcceptedFiles(
      files,
      uploads,
      setUploads,
      setUploadError,
      (type) => type.startsWith('image/') || type === 'application/pdf'
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    handleAcceptedFiles(
      files,
      uploads,
      setUploads,
      setUploadError,
      (type) => type.startsWith('image/') || type === 'application/pdf'
    );
    e.target.value = '';
  };

  const handleServicePictureFileDrop = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleAcceptedFiles(
      files,
      servicePicture,
      setServicePicture,
      setServicePictureError,
      (type) => type === 'image/png' || type === 'image/jpeg'
    );
  };

  const handleServicePictureFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files ?? []);
    handleAcceptedFiles(
      files,
      servicePicture,
      setServicePicture,
      setServicePictureError,
      (type) => type === 'image/png' || type === 'image/jpeg'
    );
    e.target.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[create-page] submit', {
      tab,
      title,
      category,
      level,
      description,
      uploads,
      servicePicture,
    });
  };

  const handleSaveDraft = () => {
    console.log('[create-page] save-draft', {
      tab,
      title,
      category,
      level,
      description,
      uploads,
      servicePicture,
    });
  };

  const levelOptions = tab === 'offering' ? EXPERIENCE_LEVELS : URGENCY_LEVELS;
  const levelLabel = tab === 'offering' ? 'Experience' : 'Urgency';

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#f2f4f7] px-4 py-10">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-7 flex rounded-full bg-[#f2f4f7] p-1">
          <button
            type="button"
            onClick={() => setTab(CreateEnum.OFFERING)}
            className={`flex-1 rounded-full py-2 text-sm font-medium transition-all ${tab === 'offering'
              ? 'bg-white text-[#161c24] shadow-sm'
              : 'text-[#637381]'
              }`}
          >
            I am offering a skill
          </button>
          <button
            type="button"
            onClick={() => setTab(CreateEnum.REQUESTING)}
            className={`flex-1 rounded-full py-2 text-sm font-medium transition-all ${tab === 'requesting'
              ? 'bg-white text-[#161c24] shadow-sm'
              : 'text-[#637381]'
              }`}
          >
            I am requesting a service
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" >
          <h2 className="text-xl font-bold text-[#161c24]">Listing Details</h2>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[#161c24]">
              Listing Title
            </label>
            <input
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Expert Web Development or Need help with Gardening"
              className="w-full rounded-lg border border-[#dfe3e8] px-4 py-2.5 text-sm text-[#161c24] placeholder:text-[#919eab] focus:border-[#85b065] focus:outline-none focus:ring-2 focus:ring-[#85b065]/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#161c24]">
                Category
              </label>
              <div className="relative">
                <select
                  value={category}
                  required
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-[#dfe3e8] bg-white px-4 py-2.5 text-sm text-[#637381] focus:border-[#85b065] focus:outline-none focus:ring-2 focus:ring-[#85b065]/20"
                >
                  <option value="" disabled className="text-[#919eab]">
                    Select category
                  </option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c} className="text-[#161c24]">
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#919eab]" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#161c24]">
                {levelLabel} {tab === 'requesting' ? '/ Urgency' : ''}
              </label>
              <div className="relative">
                <select
                  value={level}
                  required
                  onChange={(e) => setLevel(Number(e.target.value) as LevelEnum)}
                  className="w-full appearance-none rounded-lg border border-[#dfe3e8] bg-white px-4 py-2.5 text-sm text-[#637381] focus:border-[#85b065] focus:outline-none focus:ring-2 focus:ring-[#85b065]/20"
                >
                  <option value="" disabled className="text-[#919eab]">
                    Select level
                  </option>
                  {levelOptions.map((l, index) => (
                    <option key={l} value={index} className="text-[#161c24]">
                      {l}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#919eab]" />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[#161c24]">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Tell the community more about what you offer or need..."
              rows={5}
              className="w-full resize-y rounded-lg border border-[#dfe3e8] px-4 py-2.5 text-sm text-[#161c24] placeholder:text-[#919eab] focus:border-[#85b065] focus:outline-none focus:ring-2 focus:ring-[#85b065]/20"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-[#161c24]">Certificates</label>

            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
              onClick={() => fileInputRef.current?.click()}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#dfe3e8] bg-white py-8 transition-colors hover:border-[#85b065] hover:bg-[#ebf2e6]/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ebf2e6]">
                <UploadCloudIcon />
              </div>
              <p className="text-sm font-semibold text-[#161c24]">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-[#919eab]">
                SVG, PNG, JPG, GIF or PDF (max. {MAX_TOTAL_SIZE_MB}MB total)
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,application/pdf"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {uploadError && (
              <p className="text-xs font-medium text-[#d32f2f]">{uploadError}</p>
            )}

            {uploads.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {uploads.map((item, i) => (
                  <div
                    key={i}
                    className="relative h-24 w-24 overflow-hidden rounded-xl border border-[#dfe3e8]"
                  >
                    {item.type.startsWith('image/') ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.url}
                        alt={`upload-${i}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#f7f8fa] p-2 text-center">
                        <span className="text-xs font-semibold text-[#d32f2f]">PDF</span>
                        <span className="mt-1 line-clamp-2 text-[10px] leading-3 text-[#637381]">
                          {item.name}
                        </span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setUploads((prev) => prev.filter((_, idx) => idx !== i))
                      }
                      className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
                    >
                      ×
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addPhotoRef.current?.click()}
                  className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-[#dfe3e8] text-3xl text-[#919eab] hover:border-[#85b065] hover:text-[#85b065]"
                >
                  +
                  <input
                    ref={addPhotoRef}
                    type="file"
                    accept="image/*,application/pdf"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-[#161c24]">Service Pictures</label>

            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleServicePictureFileDrop}
              onClick={() => servicePictureInputRef.current?.click()}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#dfe3e8] bg-white py-8 transition-colors hover:border-[#85b065] hover:bg-[#ebf2e6]/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ebf2e6]">
                <UploadCloudIcon />
              </div>
              <p className="text-sm font-semibold text-[#161c24]">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-[#919eab]">
                PNG or JPEG (max. {MAX_TOTAL_SIZE_MB}MB total)
              </p>
              <input
                ref={servicePictureInputRef}
                type="file"
                accept="image/png,image/jpeg"
                multiple
                className="hidden"
                onChange={handleServicePictureFileChange}
              />
            </div>

            {servicePictureError && (
              <p className="text-xs font-medium text-[#d32f2f]">{servicePictureError}</p>
            )}

            {servicePicture.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {servicePicture.map((item, i) => (
                  <div
                    key={i}
                    className="relative h-24 w-24 overflow-hidden rounded-xl border border-[#dfe3e8]"
                  >
                    {item.type.startsWith('image/') ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.url}
                        alt={`upload-${i}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#f7f8fa] p-2 text-center">
                        <span className="text-xs font-semibold text-[#d32f2f]">PDF</span>
                        <span className="mt-1 line-clamp-2 text-[10px] leading-3 text-[#637381]">
                          {item.name}
                        </span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setServicePicture((prev) => prev.filter((_, idx) => idx !== i))
                      }
                      className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
                    >
                      ×
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addServicePictureRef.current?.click()}
                  className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-[#dfe3e8] text-3xl text-[#919eab] hover:border-[#85b065] hover:text-[#85b065]"
                >
                  +
                  <input
                    ref={addServicePictureRef}
                    type="file"
                    accept="image/png,image/jpeg"
                    multiple
                    className="hidden"
                    onChange={handleServicePictureFileChange}
                  />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#3d5a30] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2e4424]"
            >
              Post to Community
              <ArrowRightIcon />
            </button>
            <button
              type="button"
              onClick={handleSaveDraft}
              className="w-full py-2 text-center text-sm font-medium text-[#637381] hover:text-[#161c24]"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
