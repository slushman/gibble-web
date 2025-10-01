export interface StateInfo {
  name: string;
  slug: string;
  region: string;
}

export interface RegionInfo {
  name: string;
  slug: string;
  states: string[];
}

export const REGIONS: Record<string, RegionInfo> = {
  national: {
    name: 'National Chains',
    slug: 'national',
    states: ['national'],
  },
  west: {
    name: 'West',
    slug: 'west',
    states: ['colorado', 'california', 'nevada', 'utah', 'arizona', 'new-mexico'],
  },
  northwest: {
    name: 'Northwest',
    slug: 'northwest',
    states: ['washington', 'oregon', 'idaho', 'montana', 'wyoming'],
  },
  southwest: {
    name: 'Southwest',
    slug: 'southwest',
    states: ['texas', 'oklahoma', 'arkansas', 'louisiana'],
  },
  midwest: {
    name: 'Midwest',
    slug: 'midwest',
    states: ['illinois', 'indiana', 'iowa', 'kansas', 'michigan', 'minnesota', 'missouri', 'nebraska', 'north-dakota', 'ohio', 'south-dakota', 'wisconsin'],
  },
  northeast: {
    name: 'Northeast',
    slug: 'northeast',
    states: ['maine', 'new-hampshire', 'vermont', 'massachusetts', 'rhode-island', 'connecticut', 'new-york', 'new-jersey', 'pennsylvania'],
  },
  southeast: {
    name: 'Southeast',
    slug: 'southeast',
    states: ['maryland', 'delaware', 'virginia', 'west-virginia', 'kentucky', 'tennessee', 'north-carolina', 'south-carolina', 'georgia', 'florida', 'alabama', 'mississippi'],
  },
};

export const STATES: Record<string, StateInfo> = {
  national: { name: 'National Chains', slug: 'national', region: 'national' },
  colorado: { name: 'Colorado', slug: 'colorado', region: 'west' },
  california: { name: 'California', slug: 'california', region: 'west' },
  nevada: { name: 'Nevada', slug: 'nevada', region: 'west' },
  utah: { name: 'Utah', slug: 'utah', region: 'west' },
  arizona: { name: 'Arizona', slug: 'arizona', region: 'west' },
  'new-mexico': { name: 'New Mexico', slug: 'new-mexico', region: 'west' },
  washington: { name: 'Washington', slug: 'washington', region: 'northwest' },
  oregon: { name: 'Oregon', slug: 'oregon', region: 'northwest' },
  idaho: { name: 'Idaho', slug: 'idaho', region: 'northwest' },
  montana: { name: 'Montana', slug: 'montana', region: 'northwest' },
  wyoming: { name: 'Wyoming', slug: 'wyoming', region: 'northwest' },
  texas: { name: 'Texas', slug: 'texas', region: 'southwest' },
  oklahoma: { name: 'Oklahoma', slug: 'oklahoma', region: 'southwest' },
  arkansas: { name: 'Arkansas', slug: 'arkansas', region: 'southwest' },
  louisiana: { name: 'Louisiana', slug: 'louisiana', region: 'southwest' },
  illinois: { name: 'Illinois', slug: 'illinois', region: 'midwest' },
  indiana: { name: 'Indiana', slug: 'indiana', region: 'midwest' },
  iowa: { name: 'Iowa', slug: 'iowa', region: 'midwest' },
  kansas: { name: 'Kansas', slug: 'kansas', region: 'midwest' },
  michigan: { name: 'Michigan', slug: 'michigan', region: 'midwest' },
  minnesota: { name: 'Minnesota', slug: 'minnesota', region: 'midwest' },
  missouri: { name: 'Missouri', slug: 'missouri', region: 'midwest' },
  nebraska: { name: 'Nebraska', slug: 'nebraska', region: 'midwest' },
  'north-dakota': { name: 'North Dakota', slug: 'north-dakota', region: 'midwest' },
  ohio: { name: 'Ohio', slug: 'ohio', region: 'midwest' },
  'south-dakota': { name: 'South Dakota', slug: 'south-dakota', region: 'midwest' },
  wisconsin: { name: 'Wisconsin', slug: 'wisconsin', region: 'midwest' },
  maine: { name: 'Maine', slug: 'maine', region: 'northeast' },
  'new-hampshire': { name: 'New Hampshire', slug: 'new-hampshire', region: 'northeast' },
  vermont: { name: 'Vermont', slug: 'vermont', region: 'northeast' },
  massachusetts: { name: 'Massachusetts', slug: 'massachusetts', region: 'northeast' },
  'rhode-island': { name: 'Rhode Island', slug: 'rhode-island', region: 'northeast' },
  connecticut: { name: 'Connecticut', slug: 'connecticut', region: 'northeast' },
  'new-york': { name: 'New York', slug: 'new-york', region: 'northeast' },
  'new-jersey': { name: 'New Jersey', slug: 'new-jersey', region: 'northeast' },
  pennsylvania: { name: 'Pennsylvania', slug: 'pennsylvania', region: 'northeast' },
  maryland: { name: 'Maryland', slug: 'maryland', region: 'southeast' },
  delaware: { name: 'Delaware', slug: 'delaware', region: 'southeast' },
  virginia: { name: 'Virginia', slug: 'virginia', region: 'southeast' },
  'west-virginia': { name: 'West Virginia', slug: 'west-virginia', region: 'southeast' },
  kentucky: { name: 'Kentucky', slug: 'kentucky', region: 'southeast' },
  tennessee: { name: 'Tennessee', slug: 'tennessee', region: 'southeast' },
  'north-carolina': { name: 'North Carolina', slug: 'north-carolina', region: 'southeast' },
  'south-carolina': { name: 'South Carolina', slug: 'south-carolina', region: 'southeast' },
  georgia: { name: 'Georgia', slug: 'georgia', region: 'southeast' },
  florida: { name: 'Florida', slug: 'florida', region: 'southeast' },
  alabama: { name: 'Alabama', slug: 'alabama', region: 'southeast' },
  mississippi: { name: 'Mississippi', slug: 'mississippi', region: 'southeast' },
};

export const ALLERGEN_INFO: Record<string, { name: string; slug: string }> = {
  gluten: { name: 'Gluten-Free', slug: 'gluten-free' },
  dairy: { name: 'Dairy-Free', slug: 'dairy-free' },
  vegan: { name: 'Vegan', slug: 'vegan' },
  vegetarian: { name: 'Vegetarian', slug: 'vegetarian' },
  nut: { name: 'Nut-Free', slug: 'nut-free' },
  soy: { name: 'Soy-Free', slug: 'soy-free' },
  egg: { name: 'Egg-Free', slug: 'egg-free' },
  shellfish: { name: 'Shellfish-Free', slug: 'shellfish-free' },
  fish: { name: 'Fish-Free', slug: 'fish-free' },
};

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function getStateBySlug(slug: string): StateInfo | undefined {
  return STATES[slug];
}

export function getRegionBySlug(slug: string): RegionInfo | undefined {
  return REGIONS[slug];
}

export function getAllergenBySlug(slug: string): { name: string; slug: string } | undefined {
  return Object.values(ALLERGEN_INFO).find(a => a.slug === slug);
}