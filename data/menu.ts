export interface MenuItem {
  id: number;
  nome: string;
  prezzo: number;
  ingredienti: string;
  tags: string[];
  image?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "panini",
    label: "I Nostri Panini",
    items: [
      { id: 1, nome: "CLASSICO", prezzo: 5.50, ingredienti: "Salsiccia, provola e friarielli", tags: ["classico"], image: "/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg" },
      { id: 2, nome: "SPECIAL", prezzo: 8.50, ingredienti: "Doppio hamburger, bacon, cheddar, patatine", tags: ["bestseller", "doppio"], image: "/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg" },
      { id: 3, nome: "GIO' KROC", prezzo: 7.00, ingredienti: "Hamburger di scottona, cotto, provola e crocchè", tags: ["scottona"], image: "/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg" },
      { id: 4, nome: "CICEROTTO", prezzo: 6.00, ingredienti: "Porchetta, provola, cotto, patatine", tags: ["classico"], image: "/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg" },
      { id: 5, nome: "GIO' PAPAS", prezzo: 7.00, ingredienti: "Hamburger di salsiccia, provola, parmigiana di patate, maionese al tarallo", tags: ["napoletano"], image: "/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg" },
      { id: 6, nome: "DOUBLE CHEF", prezzo: 10.00, ingredienti: "Doppio hamburger di scottona, bacon, cheddar, anelli di cipolla", tags: ["doppio", "bestseller", "scottona"], image: "/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg" },
      { id: 7, nome: "WAFFLE CHEF", prezzo: 9.00, ingredienti: "Hamburger, cheddar, bacon, waffle fries", tags: ["speciale"], image: "/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg" },
      { id: 8, nome: "L'IRRESISTIBILE", prezzo: 8.00, ingredienti: "Cotoletta ripiena di cotto e sottiletta, cotto, sottiletta, patate al forno", tags: ["speciale"], image: "/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg" },
      { id: 9, nome: "CREMOSO", prezzo: 8.50, ingredienti: "Hamburger di scottona, provola, speck, crema di friarielli", tags: ["scottona", "napoletano"], image: "/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg" },
      { id: 10, nome: "BUFALINO", prezzo: 9.00, ingredienti: "Hamburger di scottona, bocconcini di bufala, prosciutto crudo, rucola, datterino giallo", tags: ["scottona", "premium"], image: "/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg" },
      { id: 11, nome: "NAPUL'È", prezzo: 6.50, ingredienti: "Polpette di scottona, provola, parmigiana di melanzane", tags: ["napoletano"], image: "/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg" },
      { id: 12, nome: "DONNA FORTUNA", prezzo: 7.00, ingredienti: "Polpettine di scottona, provola, melanzane a funghetti", tags: ["napoletano"], image: "/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg" },
      { id: 13, nome: "PISTACCHIOTTO", prezzo: 9.00, ingredienti: "Hamburger di scottona, mozzarella impanata, crema di pistacchio, mortadella", tags: ["premium", "speciale"], image: "/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg" },
      { id: 14, nome: "LUCIFER", prezzo: 9.00, ingredienti: "Hamburger di scottona, bacon, cheddar, patate al forno e polpettine fritte", tags: ["spicy", "speciale"], image: "/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg" },
      { id: 15, nome: "NERANO", prezzo: 9.00, ingredienti: "Hamburger di marchiagiana, vellutata di zucchine, provola e speck", tags: ["premium", "napoletano"], image: "/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg" },
      { id: 16, nome: "BANDITOS", prezzo: 7.50, ingredienti: "Banditos, cheddar, bacon e patate al forno", tags: ["speciale"], image: "/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg" },
    ]
  },
  {
    id: "bestseller",
    label: "Bestseller",
    items: [
      { id: 2, nome: "SPECIAL", prezzo: 8.50, ingredienti: "Doppio hamburger, bacon, cheddar, patatine", tags: ["bestseller"], image: "/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg" },
      { id: 6, nome: "DOUBLE CHEF", prezzo: 10.00, ingredienti: "Doppio hamburger di scottona, bacon, cheddar, anelli di cipolla", tags: ["bestseller"], image: "/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg" },
      { id: 10, nome: "BUFALINO", prezzo: 9.00, ingredienti: "Hamburger di scottona, bocconcini di bufala, prosciutto crudo, rucola, datterino giallo", tags: ["premium"], image: "/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg" },
      { id: 13, nome: "PISTACCHIOTTO", prezzo: 9.00, ingredienti: "Hamburger di scottona, mozzarella impanata, crema di pistacchio, mortadella", tags: ["premium"], image: "/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg" },
      { id: 9, nome: "CREMOSO", prezzo: 8.50, ingredienti: "Hamburger di scottona, provola, speck, crema di friarielli", tags: ["scottona"], image: "/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg" },
    ]
  },
  {
    id: "napoletani",
    label: "Napoletani",
    items: [
      { id: 1, nome: "CLASSICO", prezzo: 5.50, ingredienti: "Salsiccia, provola e friarielli", tags: ["classico"], image: "/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg" },
      { id: 5, nome: "GIO' PAPAS", prezzo: 7.00, ingredienti: "Hamburger di salsiccia, provola, parmigiana di patate, maionese al tarallo", tags: ["napoletano"], image: "/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg" },
      { id: 11, nome: "NAPUL'È", prezzo: 6.50, ingredienti: "Polpette di scottona, provola, parmigiana di melanzane", tags: ["napoletano"], image: "/images/imgi_17_493933554_1246686730796585_8221335887692093935_n.jpg" },
      { id: 12, nome: "DONNA FORTUNA", prezzo: 7.00, ingredienti: "Polpettine di scottona, provola, melanzane a funghetti", tags: ["napoletano"], image: "/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg" },
      { id: 15, nome: "NERANO", prezzo: 9.00, ingredienti: "Hamburger di marchiagiana, vellutata di zucchine, provola e speck", tags: ["napoletano"], image: "/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg" },
    ]
  },
  {
    id: "premium",
    label: "Premium",
    items: [
      { id: 10, nome: "BUFALINO", prezzo: 9.00, ingredienti: "Hamburger di scottona, bocconcini di bufala, prosciutto crudo, rucola, datterino giallo", tags: ["premium"], image: "/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg" },
      { id: 13, nome: "PISTACCHIOTTO", prezzo: 9.00, ingredienti: "Hamburger di scottona, mozzarella impanata, crema di pistacchio, mortadella", tags: ["premium"], image: "/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg" },
      { id: 15, nome: "NERANO", prezzo: 9.00, ingredienti: "Hamburger di marchiagiana, vellutata di zucchine, provola e speck", tags: ["premium"], image: "/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg" },
      { id: 6, nome: "DOUBLE CHEF", prezzo: 10.00, ingredienti: "Doppio hamburger di scottona, bacon, cheddar, anelli di cipolla", tags: ["premium"], image: "/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg" },
    ]
  },
];

export const bestsellers = [
  { id: 2, nome: "SPECIAL", prezzo: 8.50, ingredienti: ["Doppio hamburger", "Bacon", "Cheddar", "Patatine"], image: "/images/imgi_10_492826584_1246809604117631_7285508162846412022_n.jpg" },
  { id: 6, nome: "DOUBLE CHEF", prezzo: 10.00, ingredienti: ["Scottona x2", "Bacon", "Cheddar", "Cipolla"], image: "/images/imgi_20_492909934_1246274997504425_4233597304883957440_n.jpg" },
  { id: 10, nome: "BUFALINO", prezzo: 9.00, ingredienti: ["Scottona", "Bufala", "Crudo", "Rucola"], image: "/images/imgi_16_493798646_1246686570796601_8515134287953259017_n.jpg" },
  { id: 13, nome: "PISTACCHIOTTO", prezzo: 9.00, ingredienti: ["Scottona", "Mozzarella impanata", "Pistacchio", "Mortadella"], image: "/images/imgi_14_493317795_1246809567450968_6618052407358943490_n.jpg" },
  { id: 9, nome: "CREMOSO", prezzo: 8.50, ingredienti: ["Scottona", "Provola", "Speck", "Friarielli"], image: "/images/imgi_15_493277482_1246809710784287_1444198495234288352_n.jpg" },
];
