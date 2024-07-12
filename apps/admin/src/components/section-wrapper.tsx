import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';

import { cn } from '@repo/ui/libs/utils';

const SectionWrapper = forwardRef<HTMLLIElement, ComponentPropsWithRef<'li'>>(
  ({ className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        'hidden h-full flex-col space-y-4 lg:flex lg:pb-6 lg:pt-24',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  ),
);
SectionWrapper.displayName = 'SectionWrapper';

export { SectionWrapper };
