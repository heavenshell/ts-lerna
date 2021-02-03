// Based from https://github.com/mudkipme/pokeapi-v2-typescript
export type APIResourceList<T> = {
  count: number
  next: string | null
  previous: string | null
  results: APIResource<T>[]
}

export type NamedAPIResourceList<T> = {
  count: number
  next: string | null
  previous: string | null
  results: NamedAPIResource<T>[]
}

export type APIResource<T = string> = {
  url: T
}

export type NamedAPIResource<T = string> = {
  name: T
  url: T
}

export type Berry = {
  id: number
  name: string
  growth_time: number
  max_harvest: number
  natural_gift_power: number
  size: number
  smoothness: number
  soil_dryness: number
  firmness: NamedAPIResource<BerryFirmness>
  flavors: BerryFlavorMap[]
  item: NamedAPIResource<Item>
  natural_gift_type: NamedAPIResource<Type>
}

export type BerryFlavorMap = {
  potency: number
  flavor: NamedAPIResource<BerryFlavor>
}

export type BerryFirmness = {
  id: number
  name: string
  berries: NamedAPIResource<Berry>[]
  names: Name[]
}

export type BerryFlavor = {
  id: number
  name: string
  berries: FlavorBerryMap[]
  contest_type: NamedAPIResource<ContestType>
  names: Name[]
}

export type FlavorBerryMap = {
  potency: number
  berry: NamedAPIResource<Berry>
}

export type ContestType = {
  id: number
  name: string
  berry_flavor: NamedAPIResource<BerryFlavor>
  names: ContestName[]
}

export type ContestName = {
  name: string
  color: string
  language: NamedAPIResource<Language>
}

export type ContestEffect = {
  id: number
  appeal: number
  jam: number
  effect_entries: Effect[]
  flavor_text_entries: FlavorText[]
}

export type SuperContestEffect = {
  id: number
  appeal: number
  flavor_text_entries: FlavorText[]
  moves: NamedAPIResource<Move>[]
}

export type EncounterMethod = {
  id: number
  name: string
  order: number
  names: Name[]
}

export type EncounterCondition = {
  id: number
  name: string
  names: Name[]
  values: NamedAPIResource<EncounterConditionValue>[]
}

export type EncounterConditionValue = {
  id: number
  name: string
  condition: NamedAPIResource<EncounterCondition>[]
  names: Name[]
}

export type EvolutionChain = {
  id: number
  baby_trigger_item: NamedAPIResource<Item>
  chain: ChainLink
}

export type ChainLink = {
  is_baby: boolean
  species: NamedAPIResource<PokemonSpecies>
  evolution_details: EvolutionDetail[]
  evolves_to: ChainLink[]
}

export type EvolutionDetail = {
  item: NamedAPIResource<Item>
  trigger: NamedAPIResource<EvolutionTrigger>
  gender: number
  held_item: NamedAPIResource<Item>
  known_move: NamedAPIResource<Move>
  known_move_type: NamedAPIResource<Type>
  location: NamedAPIResource<Location>
  min_level: number
  min_happiness: number
  min_beauty: number
  min_affection: number
  needs_overworld_rain: boolean
  party_species: NamedAPIResource<PokemonSpecies>
  party_type: NamedAPIResource<Type>
  relative_physical_stats: number
  time_of_day: string
  trade_species: NamedAPIResource<PokemonSpecies>
  turn_upside_down: boolean
}

export type EvolutionTrigger = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedAPIResource<PokemonSpecies>[]
}

export type Generation = {
  id: number
  name: string
  abilities: NamedAPIResource<Ability>[]
  names: Name[]
  main_region: NamedAPIResource<Region>
  moves: NamedAPIResource<Move>[]
  pokemon_species: NamedAPIResource<PokemonSpecies>[]
  types: NamedAPIResource<Type>[]
  version_groups: NamedAPIResource<VersionGroup>[]
}

export type Pokedex = {
  id: number
  name: string
  is_main_series: boolean
  descriptions: Description[]
  names: Name[]
  pokemon_entries: PokemonEntry[]
  region: NamedAPIResource<Region>
  version_groups: NamedAPIResource<VersionGroup>[]
}

export type PokemonEntry = {
  entry_number: number
  pokemon_species: NamedAPIResource<PokemonSpecies>
}

export type Version = {
  id: number
  name: string
  names: Name[]
  version_group: NamedAPIResource<VersionGroup>
}

export type VersionGroup = {
  id: number
  name: string
  order: number
  generation: NamedAPIResource<Generation>
  move_learn_methods: NamedAPIResource<MoveLearnMethod>[]
  pokedexes: NamedAPIResource<Pokedex>[]
  regions: NamedAPIResource<Region>[]
  versions: NamedAPIResource<Version>[]
}

export type Item = {
  id: number
  name: string
  cost: number
  fling_power: number
  fling_effect: NamedAPIResource<ItemFlingEffect>
  attributes: NamedAPIResource<ItemAttribute>[]
  category: ItemCategory
  effect_entries: VerboseEffect[]
  flavor_text_entries: VersionGroupFlavorText[]
  game_indices: GenerationGameIndex[]
  names: Name[]
  sprites: ItemSprites
  held_by_pokemon: ItemHolderPokemon[]
  baby_trigger_for: APIResource<EvolutionChain>
  machines: MachineVersionDetail[]
}

export type ItemSprites = {
  default: string
}

export type ItemHolderPokemon = {
  pokemon: string
  version_details: ItemHolderPokemonVersionDetail[]
}

export type ItemHolderPokemonVersionDetail = {
  rarity: string
  version: NamedAPIResource<Version>
}

export type ItemAttribute = {
  id: number
  name: string
  items: NamedAPIResource<Item>[]
  names: Name[]
  descriptions: Description[]
}

export type ItemCategory = {
  id: number
  name: string
  items: NamedAPIResource<Item>[]
  names: Name[]
  pocket: NamedAPIResource<ItemPocket>
}

export type ItemFlingEffect = {
  id: number
  name: string
  effect_entries: Effect[]
  items: NamedAPIResource<Item>
}

export type ItemPocket = {
  id: number
  name: string
  categories: NamedAPIResource<ItemCategory>[]
  names: Name[]
}

export type Location = {
  id: number
  name: string
  region: NamedAPIResource<Region>
  names: Name[]
  game_indices: GenerationGameIndex[]
  areas: NamedAPIResource<LocationArea>[]
}

export type LocationArea = {
  id: number
  name: string
  game_index: number
  encounter_method_rates: EncounterMethodRate[]
  location: NamedAPIResource<Region>
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}

export type EncounterMethodRate = {
  encounter_method: NamedAPIResource<EncounterMethod>
  version_details: EncounterVersionDetails[]
}

export type EncounterVersionDetails = {
  rate: number
  version: NamedAPIResource<Version>
}

export type PokemonEncounter = {
  pokemon: NamedAPIResource<Pokemon>
  version_details: VersionEncounterDetail[]
}

export type PalParkArea = {
  id: number
  name: string
  names: Name[]
  pokemon_encounters: PalParkEncounterSpecies[]
}

export type PalParkEncounterSpecies = {
  base_score: number
  rate: number
  pokemon_species: NamedAPIResource<PokemonSpecies>
}

export type Region = {
  id: number
  locations: NamedAPIResource<Location>[]
  name: string
  names: Name[]
  main_generation: NamedAPIResource<Generation>
  pokedexes: NamedAPIResource<Pokedex>[]
  version_groups: NamedAPIResource<VersionGroup>[]
}

export type Machine = {
  id: number
  item: NamedAPIResource<Item>
  move: NamedAPIResource<Move>
  version_group: NamedAPIResource<VersionGroup>
}

export type Move = {
  id: number
  name: string
  accuracy: number
  effect_chance: number
  pp: number
  priority: number
  power: number
  contest_combos: ContestComboSets
  contest_type: NamedAPIResource<ContestType>
  contest_effect: APIResource<ContestEffect>
  damage_class: NamedAPIResource<MoveDamageClass>
  effect_entries: VerboseEffect[]
  effect_changes: AbilityEffectChange[]
  flavor_text_entries: MoveFlavorText[]
  generation: NamedAPIResource<Generation>
  machines: MachineVersionDetail[]
  meta: MoveMetaData
  names: Name[]
  past_values: PastMoveStatValues[]
  stat_changes: MoveStatChange[]
  super_contest_effect: APIResource<SuperContestEffect>
  target: NamedAPIResource<MoveTarget>
  type: NamedAPIResource<Type>
}

export type ContestComboSets = {
  normal: ContestComboDetail
  super: ContestComboDetail
}

export type ContestComboDetail = {
  use_before: NamedAPIResource<Move>[]
  use_after: NamedAPIResource<Move>[]
}

export type MoveFlavorText = {
  flavor_text: string
  language: NamedAPIResource<Language>
  version_group: NamedAPIResource<VersionGroup>
}

export type MoveMetaData = {
  ailment: NamedAPIResource<MoveAilment>
  category: NamedAPIResource<MoveCategory>
  min_hits: number
  max_hits: number
  min_turns: number
  max_turns: number
  drain: number
  healing: number
  crit_rate: number
  ailment_chance: number
  flinch_chance: number
  stat_chance: number
}

export type MoveStatChange = {
  change: number
  stat: NamedAPIResource<Stat>
}

export type PastMoveStatValues = {
  accuracy: PastMoveStatValues
  effect_chance: number
  power: number
  pp: number
  effect_entries: VerboseEffect[]
  type: NamedAPIResource<Type>
  version_group: NamedAPIResource<VersionGroup>
}

export type MoveAilment = {
  id: number
  name: string
  moves: NamedAPIResource<Move>[]
  names: Name[]
}

export type MoveBattleStyle = {
  id: number
  name: string
  names: Name[]
}

export type MoveCategory = {
  id: number
  name: string
  moves: NamedAPIResource<Move>[]
  descriptions: Description[]
}

export type MoveDamageClass = {
  id: number
  name: string
  descriptions: Description[]
  moves: NamedAPIResource<Move>[]
  names: Name[]
}

export type MoveLearnMethod = {
  id: number
  name: string
  descriptions: Description[]
  names: Name[]
  version_groups: NamedAPIResource<VersionGroup>[]
}

export type MoveTarget = {
  id: number
  name: string
  descriptions: Description[]
  moves: NamedAPIResource<Move>[]
  names: Name[]
}

export type Ability = {
  id: number
  name: string
  is_main_series: boolean
  generation: NamedAPIResource<Generation>
  names: Name[]
  effect_entries: Effect[]
  effect_changes: AbilityEffectChange[]
  flavor_text_entries: AbilityFlavorText[]
  pokemon: AbilityPokemon[]
}

export type AbilityEffectChange = {
  effect_entries: Effect[]
  version_group: NamedAPIResource<VersionGroup>
}

export type AbilityFlavorText = {
  flavor_text: string
  language: NamedAPIResource<Language>
  version_group: NamedAPIResource<VersionGroup>
}

export type AbilityPokemon = {
  is_hidden: boolean
  slot: number
  pokemon: NamedAPIResource<Pokemon>
}

export type Characteristic = {
  id: number
  gene_modulo: number
  possible_values: number[]
}

export type EggGroup = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedAPIResource<PokemonSpecies>[]
}

export type Gender = {
  id: number
  name: string
  pokemon_species_details: PokemonSpeciesGender[]
  required_for_evolution: NamedAPIResource<PokemonSpecies>[]
}

export type PokemonSpeciesGender = {
  rate: number
  pokemon_species: NamedAPIResource<PokemonSpecies>
}

export type GrowthRate = {
  id: number
  name: string
  formula: string
  descriptions: Description[]
  levels: GrowthRateExperienceLevel[]
  pokemon_species: NamedAPIResource<PokemonSpecies>[]
}

export type GrowthRateExperienceLevel = {
  level: number
  experience: number
}

export type Nature = {
  id: number
  name: string
  decreased_stat: NamedAPIResource<Stat>
  increased_stat: NamedAPIResource<Stat>
  hates_flavor: NamedAPIResource<BerryFlavor>
  likes_flavor: NamedAPIResource<BerryFlavor>
  pokeathlon_stat_changes: NatureStatChange[]
  move_battle_style_preferences: MoveBattleStylePreference[]
  names: Name[]
}

export type NatureStatChange = {
  max_change: number
  pokeathlon_stat: NamedAPIResource<PokeathlonStat>
}

export type MoveBattleStylePreference = {
  low_hp_preference: number
  high_hp_preference: number
  move_battle_style: NamedAPIResource<MoveBattleStyle>
}

export type PokeathlonStat = {
  id: number
  name: string
  names: Name[]
  affecting_natures: NaturePokeathlonStatAffectSets
}

export type NaturePokeathlonStatAffectSets = {
  increase: NaturePokeathlonStatAffect[]
  decrease: NaturePokeathlonStatAffect[]
}

export type NaturePokeathlonStatAffect = {
  max_change: number
  nature: NamedAPIResource<Nature>
}

export type Pokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbility[]
  forms: NamedAPIResource<PokemonForm>[]
  game_indices: VersionGameIndex[]
  held_items: PokemonHeldItem[]
  location_area_encounters: string
  moves: PokemonMove[]
  sprites: PokemonSprites
  species: NamedAPIResource<PokemonSpecies>
  stats: PokemonStat[]
  types: PokemonType[]
}

export type PokemonAbility = {
  is_hidden: boolean
  slot: number
  ability: NamedAPIResource<Ability>
}

export type PokemonType = {
  slot: number
  type: NamedAPIResource<Type>
}

export type PokemonHeldItem = {
  item: NamedAPIResource<Item>
  version_details: PokemonHeldItemVersion[]
}

export type PokemonHeldItemVersion = {
  version: NamedAPIResource<Version>
  rarity: number
}

export type PokemonMove = {
  move: NamedAPIResource<Move>
  version_group_details: PokemonMoveVersion[]
}

export type PokemonMoveVersion = {
  move_learn_method: NamedAPIResource<MoveLearnMethod>
  version_group: NamedAPIResource<VersionGroup>
  level_learned_at: number
}

export type PokemonStat = {
  stat: NamedAPIResource<Stat>
  effort: number
  base_stat: number
}

export type PokemonSprites = {
  front_default: string
  front_shiny: string
  front_female: string
  front_shiny_female: string
  back_default: string
  back_shiny: string
  back_female: string
  back_shiny_female: string
}

export type LocationAreaEncounter = {
  location_area: NamedAPIResource<LocationArea>
  version_details: VersionEncounterDetail[]
}

export type PokemonColor = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedAPIResource<PokemonSpecies>[]
}

export type PokemonForm = {
  id: number
  name: string
  order: number
  form_order: number
  is_default: boolean
  is_battle_only: boolean
  is_mega: boolean
  form_name: string
  pokemon: NamedAPIResource<Pokemon>
  sprites: PokemonFormSprites
  version_group: NamedAPIResource<VersionGroup>
  names: Name[]
  form_names: Name[]
}

export type PokemonFormSprites = {
  front_default: string
  front_shiny: string
  back_default: string
  back_shiny: string
}

export type PokemonHabitat = {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedAPIResource<PokemonSpecies>[]
}

export type PokemonShape = {
  id: number
  name: string
  awesome_names: AwesomeName[]
  names: Name[]
  pokemon_species: PokemonSpecies[]
}

export type AwesomeName = {
  awesome_name: string
  language: NamedAPIResource<Language>
}

export type PokemonSpecies = {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: NamedAPIResource<GrowthRate>
  pokedex_numbers: PokemonSpeciesDexEntry[]
  egg_groups: NamedAPIResource<EggGroup>[]
  color: NamedAPIResource<PokemonColor>
  shape: NamedAPIResource<PokemonShape>
  evolves_from_species: NamedAPIResource<PokemonSpecies>
  evolution_chain: APIResource<EvolutionChain>
  habitat: NamedAPIResource<PokemonHabitat>
  generation: NamedAPIResource<Generation>
  names: Name[]
  pal_park_encounters: PalParkEncounterArea[]
  flavor_text_entries: FlavorText[]
  form_descriptions: Description[]
  genera: Genus[]
  varieties: PokemonSpeciesVariety[]
}

export type Genus = {
  genus: string
  language: NamedAPIResource<Language>
}

export type PokemonSpeciesDexEntry = {
  entry_number: number
  pokedex: NamedAPIResource<Pokedex>
}

export type PalParkEncounterArea = {
  base_score: number
  rate: number
  area: NamedAPIResource<PalParkArea>
}

export type PokemonSpeciesVariety = {
  is_default: boolean
  pokemon: NamedAPIResource<Pokemon>
}

export type Stat = {
  id: number
  name: string
  game_index: number
  is_battle_only: boolean
  affecting_moves: MoveStatAffectSets
  affecting_natures: NatureStatAffectSets
  characteristics: APIResource<Characteristic>
  move_damage_class: NamedAPIResource<MoveDamageClass>
  names: Name[]
}

export type MoveStatAffectSets = {
  increase: MoveStatAffect[]
  decrease: MoveStatAffect[]
}

export type MoveStatAffect = {
  change: number
  move: NamedAPIResource<Move>
}

export type NatureStatAffectSets = {
  increase: NamedAPIResource<Nature>[]
  decrease: NamedAPIResource<Nature>[]
}

export type Type = {
  id: number
  name: string
  damage_relations: TypeRelations
  game_indices: GenerationGameIndex[]
  generation: NamedAPIResource<Generation>
  move_damage_class: NamedAPIResource<MoveDamageClass>
  names: Name[]
  pokemon: TypePokemon[]
  moves: NamedAPIResource<Move>[]
}

export type TypePokemon = {
  slot: number
  pokemon: NamedAPIResource<Pokemon>
}

export type TypeRelations = {
  no_damage_to: NamedAPIResource<Type>[]
  half_damage_to: NamedAPIResource<Type>[]
  double_damage_to: NamedAPIResource<Type>[]
  no_damage_from: NamedAPIResource<Type>[]
  half_damage_from: NamedAPIResource<Type>[]
  double_damage_from: NamedAPIResource<Type>[]
}

export type Language = {
  id: number
  name: string
  official: boolean
  iso639: string
  iso3166: string
  names: Name[]
}

export type Description = {
  description: string
  language: NamedAPIResource<Language>
}

export type Effect = {
  effect: string
  language: NamedAPIResource<Language>
}

export type Encounter = {
  min_level: number
  max_level: number
  condition_values: NamedAPIResource<EncounterConditionValue>[]
  chance: number
  method: NamedAPIResource<EncounterMethod>
}

export type FlavorText = {
  flavor_text: string
  language: NamedAPIResource<Language>
}

export type GenerationGameIndex = {
  game_index: number
  generation: NamedAPIResource<Generation>
}

export type MachineVersionDetail = {
  machine: APIResource<Machine>
  version_group: NamedAPIResource<VersionGroup>
}

export type Name = {
  name: string
  language: NamedAPIResource<Language>
}

export type VerboseEffect = {
  effect: string
  short_effect: string
  language: NamedAPIResource<Language>
}

export type VersionEncounterDetail = {
  version: NamedAPIResource<Version>
  max_chance: number
  encounter_details: Encounter[]
}

export type VersionGameIndex = {
  game_index: number
  version: NamedAPIResource<Version>
}

export type VersionGroupFlavorText = {
  text: string
  language: NamedAPIResource<Language>
  version_group: NamedAPIResource<VersionGroup>
}
