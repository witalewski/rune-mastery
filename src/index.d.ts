interface Talent {
  id: string;
  name: string;
  iconIndex: number;
  selected: boolean;
}

interface TalentPath {
  id: string;
  name: string;
  talents: Talent[];
}
