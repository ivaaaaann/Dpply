export interface DropdownProps {
  items: DropdownItem[];
}

export interface DropdownItem {
  title: string;
  func: () => void;
}
