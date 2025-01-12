interface CardType {
  img: string;
  name: string;
  info: InfoItem[];
}

interface InfoItem {
  title: string;
  description: string;
}

export type { CardType, InfoItem };
