import {
  CeleryIcon,
  CrustaceanIcon,
  EggIcon,
  FishIcon,
  GlutenIcon,
  LupinIcon,
  MilkIcon,
  MolluscIcon,
  MustardIcon,
  NutsIcon,
  PeanutIcon,
  SesameIcon,
  SoyIcon,
  SulphiteIcon,
} from "react-allergens";

export default function Allergens({ allergens }) {
  const allergenIcons = {
    CeleryIcon: CeleryIcon,
    CrustaceanIcon: CrustaceanIcon,
    EggIcon: EggIcon,
    FishIcon: FishIcon,
    GlutenIcon: GlutenIcon,
    LupinIcon: LupinIcon,
    MilkIcon: MilkIcon,
    MolluscIcon: MolluscIcon,
    MustardIcon: MustardIcon,
    NutsIcon: NutsIcon,
    PeanutIcon: PeanutIcon,
    SesameIcon: SesameIcon,
    SoyIcon: SoyIcon,
    SulphiteIcon: SulphiteIcon,
  };

  console.log(SoyIcon);

  return (
    <div className="allergens">
      {allergens.map((allergen) => {
        const Icon = allergenIcons[allergen];
        return Icon ? (
          <span key={allergen}>
            <Icon width={24} height={24} />
          </span>
        ) : null;
      })}
    </div>
  );
}
