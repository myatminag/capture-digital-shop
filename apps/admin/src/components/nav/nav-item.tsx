import Link from 'next/link';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui/libs/utils';

import { useAppSelector } from '@store/hook';

interface NavLinkProps {
  path: string;
  name: string;
  icon: ReactNode;
}

export const NavItem = ({ path, name, icon }: NavLinkProps) => {
  const pathname = usePathname();

  const isExpandable = useAppSelector((state) => state.expandable.isExpandable);

  return (
    <Link
      className={cn('flex items-center py-2.5 pl-3 text-sm text-neutral-950', {
        'text-brand-700 border-brand-600 border-r-[3px] bg-[#E4FEF7] font-semibold':
          pathname === path,
        'border-none bg-transparent': !isExpandable,
      })}
      href={path}
    >
      {icon}
      {isExpandable ? name : null}
    </Link>
  );
};
