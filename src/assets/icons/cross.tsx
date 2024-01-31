import { Ref, SVGProps, forwardRef } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  return (
    <svg
      ref={ref}
      width='18'
      height='18'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'></path>
    </svg>
  );
};

export const CrossIcon = forwardRef(SvgComponent);