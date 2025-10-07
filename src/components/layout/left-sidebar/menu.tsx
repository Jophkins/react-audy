import type { IMenuItem } from "@/types/menu.types";

type Props = {
  items: IMenuItem[];
  title?: string;
};

export function Menu({ items, title }: Props) {
  return (
    <div>
      {title && <div className="opacity-90 text-xxs uppercase text-bg-secondary font-medium mb-5">{title}</div>}
      <ul>
        {items.map(item => (
          <li key={item.name}>
            <a className="flex gap-3 items-center mb-5 group" href="#">
              {item.icon && <item.icon className="group-hover:text-primary duration-300 font-medium" />}
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
