import { Recipe } from '@/types';

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'kimchi-jjigae-recept',
    title: 'Kimchi Jjigae (Kimchi polévka)',
    excerpt:
      'Tradiční korejská kimchi polévka – výhřevná, pikantní a plná umami. Ideální na chladné česko-zimní večery.',
    content: `
## Kimchi Jjigae – Korejská kimchi polévka

Kimchi jjigae je pravděpodobně nejpopulárnější korejská polévka. Připravuje se ze zralého (fermentovaného) kimchi, vepřového masa nebo tofu a základního vývaru. Je to jídlo, které zahřeje na těle i duši.

### Ingredience (4 porce)

- 300 g zralého kimchi (ideálně našeho Kimchi Classic)
- 200 g vepřového boku (nebo tofu pro vegan verzi)
- 1 cibule
- 3 stroužky česneku
- 1 lžíce gochugaru
- 1 lžíce gochujang
- 500 ml vody nebo vývaru
- 1 balíček tofu (volitelné)
- 2 lžičky sezamového oleje
- Zelená cibulka na ozdobu

### Postup

1. Vepřový bok nakrájejte na kousky a osmažte v hrnci bez oleje, dokud nezačne pustit tuk.
2. Přidejte nakrájenou cibuli a česnek, orestujte 2 minuty.
3. Přidejte kimchi a gochujang, promíchejte a restujte 3 minuty.
4. Zalijte vodou nebo vývarem, přiveďte k varu.
5. Přidejte gochugaru a snižte teplotu. Vařte 15–20 minut.
6. Přidejte tofu a vařte dalších 5 minut.
7. Dochuťte sezamovým olejem, ozdobte zelenou cibulkou.

**Podávejte s miskou bílé rýže!**
    `,
    image: '/images/recipes/kimchi-jjigae.jpg',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'easy',
    tags: ['polévka', 'kimchi', 'korejská kuchyně', 'pikantní'],
    publishedAt: '2024-01-15',
    author: 'Kimchi Love',
    featuredProducts: ['kimchi-classic-1500'],
  },
  {
    id: '2',
    slug: 'bibimbap-barevna-miska',
    title: 'Bibimbap – Korejská barevná mísa',
    excerpt:
      'Bibimbap je ikonická korejská mísa s rýží, zeleninou, vajíčkem a pálivou gochujang omáčkou. Zdravé a krásné jídlo.',
    content: `
## Bibimbap – Mix-mix rýže

Bibimbap (비빔밥) doslova znamená "smíchaná rýže". Je to mísa bílé rýže přikrytá různou zeleninou, proteinem a nahoře s volským okem. Vše se promíchá s gochujang omáčkou před konzumací.

### Ingredience (2 porce)

- 2 porce vařené korejské rýže
- 100 g kimchi
- 1 mrkev (nakrájená na proužky)
- 1 cuketa (nakrájená na proužky)
- Hrst špenátu
- 200 g hovězího mletého masa
- 2 vejce
- 2 lžíce gochujang
- 1 lžíce sojové omáčky
- 1 lžíce sezamového oleje
- Sezamová semínka

### Postup

1. Každou zeleninu zvlášť orestujte na pánvi s trochou sezamového oleje a solí.
2. Mleté maso osmažte s sojovou omáčkou a trochou česneku.
3. Na pánvi připravte volské oko.
4. Do misky dejte rýži, rozmístěte zeleninu a maso do "paprsků".
5. Doprostřed položte vejce.
6. Přidejte lžíci gochujang.
7. Před jedením vše důkladně promíchejte!
    `,
    image: '/images/recipes/bibimbap.jpg',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: 2,
    difficulty: 'medium',
    tags: ['rýže', 'bibimbap', 'zdravé', 'korejská kuchyně'],
    publishedAt: '2024-01-22',
    author: 'Kimchi Love',
    featuredProducts: ['kimchi-classic-700', 'gochujang-500'],
  },
  {
    id: '3',
    slug: 'pajeon-cibulove-palacinkay',
    title: 'Pajeon – Korejské cibulové palačinky',
    excerpt:
      'Pajeon jsou korejské slané palačinky s jarní cibulkou. Křupavé, rychlé a báječné jako svačina nebo předkrm.',
    content: `
## Pajeon – Korejské cibulové palačinky

Pajeon (파전) jsou tradiční korejské slané palačinky s jarní cibulkou. Dají se obohacit o mořské plody, kimchi nebo jen zeleninu.

### Ingredience (4 ks)

- 200 g Pajeon Mix (naše)
- 200 ml studené vody
- 1 svazek jarní cibulky
- 2 vejce
- Volitelně: krevety, chobotnice nebo kimchi

**Na omáčku:**
- 3 lžíce sojové omáčky
- 1 lžíce rýžového octa
- 1 lžička sezamového oleje
- Chilli dle chuti

### Postup

1. Smíchejte Pajeon Mix s vodou a vejci do hladkého těsta.
2. Jarní cibulku nakrájejte na 5 cm kousky.
3. Na pánvi rozehřejte olej na střední teplotu.
4. Vylijte těsto a ihned dejte cibulku (a příp. mořské plody).
5. Pečte 3–4 minuty z každé strany dokud není zlatavé a křupavé.
6. Omáčku smíchejte a podávejte vedle.
    `,
    image: '/images/recipes/pajeon.jpg',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'easy',
    tags: ['palačinky', 'předkrm', 'svačina', 'korejská kuchyně'],
    publishedAt: '2024-02-05',
    author: 'Kimchi Love',
    featuredProducts: ['pajeon-mix-500'],
  },
  {
    id: '4',
    slug: 'tteokbokki-pikantni-ryzove-kolachy',
    title: 'Tteokbokki – Pikantní rýžové koláče',
    excerpt:
      'Tteokbokki je oblíbené korejské street food – rýžové koláče ve sladkokyselé pikantní omáčce gochujang.',
    content: `
## Tteokbokki – Korejské rýžové koláče

Tteokbokki (떡볶이) je jedno z nejoblíbenějších korejských street food jídel. Rýžové koláče ve sladkokyselé omáčce z gochujang jsou návykové a skvělé.

### Ingredience (2 porce)

- 300 g tteok (korejské rýžové koláče)
- 3 lžíce gochujang
- 1 lžíce sojové omáčky
- 1 lžíce cukru
- 2 stroužky česneku
- 500 ml vody
- Rybí koláče (eomuk) – volitelné
- Zelená cibulka a sezam na ozdobu

### Postup

1. Tteok nechte 30 minut namočit ve vodě (pokud jsou ze zmrazení).
2. Smíchejte gochujang, sojovou omáčku, cukr a cesnek.
3. V hrnci přiveďte vodu k varu.
4. Přidejte omáčku a tteok.
5. Vařte 8–10 minut, míchejte, dokud se omáčka nezahustí a tteok nezměknou.
6. Ozdobte zelenou cibulkou a sezamem.
    `,
    image: '/images/recipes/tteokbokki.jpg',
    prepTime: '35 min',
    cookTime: '15 min',
    servings: 2,
    difficulty: 'medium',
    tags: ['street food', 'pikantní', 'rýžové koláče', 'korejská kuchyně'],
    publishedAt: '2024-02-12',
    author: 'Kimchi Love',
    featuredProducts: ['gochujang-500'],
  },
];

export const getRecipeBySlug = (slug: string) => recipes.find((r) => r.slug === slug);
