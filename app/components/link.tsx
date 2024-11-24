import {
  Link as RadixLink,
  LinkProps as RadixLinkProps,
} from "@radix-ui/themes";
import {
  Link as RemixLink,
  NavLink as RemixNavLink,
  NavLinkProps as RemixNavLinkProps,
} from "@remix-run/react";
import { RemixLinkProps } from "@remix-run/react/dist/components";
import clsx from "clsx";

export function Link({ to, children }: RadixLinkProps & RemixLinkProps) {
  return (
    <RadixLink asChild>
      <RemixLink suppressHydrationWarning={true} to={to} prefetch="intent">
        <span>{children}</span>
      </RemixLink>
    </RadixLink>
  );
}

export function NavLink({ to, children }: RadixLinkProps & RemixNavLinkProps) {
  return (
    <RemixNavLink to={to} prefetch="intent">
      {({ isActive }) => (
        <RadixLink
          asChild
          className={clsx(
            "hover:bg-gray-200 active:bg-gray-400 rounded-xl px-3 py-1",
            isActive && "bg-gray-200"
          )}
        >
          <span>{children}</span>
        </RadixLink>
      )}
    </RemixNavLink>
  );
}

// We don't tap into the radix theme if we do it this way. :sad-panda:
// export function NavLink({ to, children }: RadixLinkProps & RemixNavLinkProps) {
//   return (
//     <RemixNavLink
//       to={to}
//       className={({ isActive }) =>
//         clsx("hover:underline", isActive && "font-bold")
//       }
//     >
//       {children}
//     </RemixNavLink>
//   );
// }
