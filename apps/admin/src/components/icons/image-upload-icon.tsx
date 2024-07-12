import type { SVGProps } from 'react';

export const UploadImageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="23"
      fill="none"
      viewBox="0 0 22 23"
      {...props}
    >
      <path
        fill="#04A88C"
        d="M18.417 9.333a1.083 1.083 0 00-1.084 1.084v3.661l-1.603-1.603a3.022 3.022 0 00-4.258 0l-.758.77-2.687-2.698a3.023 3.023 0 00-4.257 0L2.167 12.16V6.083A1.083 1.083 0 013.25 5h8.667a1.083 1.083 0 000-2.167H3.25A3.25 3.25 0 000 6.083v13.239a3.023 3.023 0 003.012 3.011h13.476c.294-.002.586-.046.867-.13a2.968 2.968 0 002.167-2.87v-8.916a1.084 1.084 0 00-1.105-1.084zM3.25 20.167a1.083 1.083 0 01-1.083-1.084v-3.867l3.13-3.13a.845.845 0 011.192 0l8.093 8.08H3.25zm14.083-1.084c-.007.21-.074.413-.195.585l-4.896-4.918.769-.758a.836.836 0 011.192 0l3.13 3.152v1.94zm3.25-16.25H19.5V1.75a1.083 1.083 0 10-2.167 0v1.083H16.25a1.083 1.083 0 100 2.167h1.083v1.083a1.084 1.084 0 002.167 0V5h1.083a1.084 1.084 0 000-2.167z"
      />
    </svg>
  );
};