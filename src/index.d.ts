interface Talent {
  id: string;
  name: string;
  selected: boolean;
}

interface TalentPath {
  id: string;
  name: string;
  talents: Talent[];
}
