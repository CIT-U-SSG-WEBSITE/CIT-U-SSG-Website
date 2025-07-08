export interface linkPair {
  name: string;
  href: string;
}

export interface linkGroup {
  title: string;
  links: linkPair[] | string;
}