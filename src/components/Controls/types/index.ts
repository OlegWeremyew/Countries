interface OptionType {
  value: string;
  label: string;
}

interface ControlsType {
  onSearch: (search: string, regionValue: string) => void;
}

export type { OptionType, ControlsType };
