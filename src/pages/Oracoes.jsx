import React, { useState } from 'react';
import { Star, ChevronDown, Layers, CircleDot, Wheat, BookOpen, Sparkles } from 'lucide-react';

// ─────────────────────────────────────
//  CATEGORIAS
// ─────────────────────────────────────
const categorias = [
  { id: 'destaque', label: 'Destaque', icon: Star, cor: 'from-parish-terracotta to-[#a0422a]', corBg: 'bg-parish-terracotta/10', corTexto: 'text-parish-terracotta' },
  { id: 'basicas', label: 'Básicas', icon: BookOpen, cor: 'from-[#3b6fa0] to-[#2a5480]', corBg: 'bg-blue-50', corTexto: 'text-blue-700' },
  { id: 'missa', label: 'Missa', icon: Layers, cor: 'from-parish-brown to-[#5a3e28]', corBg: 'bg-amber-50', corTexto: 'text-amber-800' },
  { id: 'eucaristia', label: 'Eucaristia', icon: Wheat, cor: 'from-[#a07830] to-[#7a5a20]', corBg: 'bg-yellow-50', corTexto: 'text-yellow-800' },
  { id: 'tercos', label: 'Terços', icon: CircleDot, cor: 'from-[#3a6b4a] to-[#2a5038]', corBg: 'bg-green-50', corTexto: 'text-green-800' },
  { id: 'outras', label: 'Outras', icon: Sparkles, cor: 'from-[#6a3a90] to-[#4a2070]', corBg: 'bg-purple-50', corTexto: 'text-purple-800' },
];

// ─────────────────────────────────────
//  DADOS — ORAÇÕES POR CATEGORIA
// ─────────────────────────────────────
const oracoesPorCategoria = {

  // ══════════════════════════════════
  //  DESTAQUE
  // ══════════════════════════════════
  destaque: [
    {
      titulo: "Oração a São Miguel Arcanjo",
      sub: "Pequeno Exorcismo de Leão XIII",
      destaque: true,
      texto: `São Miguel Arcanjo, defendei-nos no combate, sede o nosso refúgio contra as maldades e ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos, e vós, príncipe da milícia celeste, pela virtude divina, precipitai no inferno a satanás e aos outros espíritos malignos, que andam pelo mundo para perder as almas. Amém.`,
    },
  ],

  // ══════════════════════════════════
  //  BÁSICAS
  // ══════════════════════════════════
  basicas: [
    { titulo: "Sinal da Cruz", texto: `Em nome do Pai, e do Filho e do Espírito Santo. Amém.` },
    { titulo: "Pai Nosso", texto: `Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém.` },
    { titulo: "Ave Maria", texto: `Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.` },
    { titulo: "Glória ao Pai", sub: "Doxologia", texto: `Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre, pelos séculos dos séculos. Amém.` },
    { titulo: "Salve Rainha", texto: `Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus. Para que sejamos dignos das promessas de Cristo. Amém.` },
    { titulo: "Credo (Símbolo dos Apóstolos)", texto: `Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado. Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.` },
    { titulo: "Ato de Contrição", texto: `Meu Deus, porque sois infinitamente bom e digno de ser amado por cima de todas as coisas, pesa-me de vos ter ofendido e proponho firmemente, com o auxílio da vossa graça, emendar-me e afastar as ocasiões próximas de pecado. Senhor, misericórdia! Amém.` },
    { titulo: "Ângelo de Deus", sub: "Anjo da Guarda", texto: `Ângelo de Deus, que sois meu guardião, iluminai, guardai, dirigis e governai a mim, que vos fui confiado pela piedade celeste. Amém.` },
  ],

  // ══════════════════════════════════
  //  MISSA — MISSAL ROMANO
  // ══════════════════════════════════
  missa: [
    // ── RITOS INICIAIS ──
    { tipo: 'grupo', titulo: '✦ Ritos Iniciais' },
    {
      titulo: "Saudação Inicial",
      sub: "Ritos Iniciais — Missal Romano",
      texto: `O Senhor esteja convosco. — E com o seu espírito.

[Ou nas Missas com bispo:]
A paz esteja convosco. — E com o seu espírito.`,
    },
    {
      titulo: "Confiteor — Ato Penitencial (Forma A)",
      sub: "Ritos Iniciais — Missal Romano",
      texto: `Confesso a Deus Todo-Poderoso e a vós, irmãos e irmãs, que pequei muitas vezes, por pensamentos e palavras, por atos e omissões.
Por minha culpa, minha culpa, minha tão grande culpa.
E peço à Virgem Maria, aos anjos e santos, e a vós, irmãos e irmãs, que oreis por mim ao Senhor nosso Deus.

[Absolvição:]
O Deus Todo-Poderoso tenha misericórdia de nós, perdoe os nossos pecados e nos conduza à vida eterna. Amém.`,
    },
    {
      titulo: "Ato Penitencial — Forma B",
      sub: "Ritos Iniciais — Missal Romano",
      texto: `Senhor, tende misericórdia de nós. — Pois pecamos contra vós.
Mostrai-nos, Senhor, a vossa misericórdia. — E dai-nos a vossa salvação.`,
    },
    {
      titulo: "Kyrie — Senhor, tende piedade",
      sub: "Ritos Iniciais — Missal Romano",
      texto: `Senhor, tende piedade de nós. — Senhor, tende piedade.
Cristo, tende piedade de nós. — Cristo, tende piedade.
Senhor, tende piedade de nós. — Senhor, tende piedade.`,
    },
    {
      titulo: "Glória",
      sub: "Hino dos Anjos — Ritos Iniciais",
      texto: `Glória a Deus nas alturas,
e paz na terra aos homens por Ele amados.
Senhor Deus, Rei dos céus, Deus Pai todo-poderoso,
nós vos louvamos, nós vos bendizemos, nós vos adoramos,
nós vos glorificamos, nós vos damos graças por vossa imensa glória.
Senhor Jesus Cristo, Filho Unigênito, Senhor Deus, Cordeiro de Deus, Filho do Pai,
vós que tirais o pecado do mundo, tende piedade de nós;
vós que tirais o pecado do mundo, acolhei a nossa súplica;
vós que estais à direita do Pai, tende piedade de nós.
Porque só vós sois o Santo, só vós o Senhor, só vós o Altíssimo,
Jesus Cristo, com o Espírito Santo
na glória de Deus Pai. Amém.`,
    },
    {
      titulo: "Oração Coleta",
      sub: "Ritos Iniciais — Missal Romano",
      texto: `[O sacerdote convida:]
Oremos.

[Pausa de silêncio, depois a coleta própria do dia.]

Conclusão breve: "...por Nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, Deus, por todos os séculos dos séculos. Amém."`,
    },

    // ── LITURGIA DA PALAVRA ──
    { tipo: 'grupo', titulo: '✦ Liturgia da Palavra' },
    {
      titulo: "Aclamação ao Evangelho — Aleluia",
      sub: "Liturgia da Palavra — Missal Romano",
      texto: `Aleluia, Aleluia. [Versículo próprio do dia] Aleluia.

[Na Quaresma, em vez de Aleluia:]
Glória e louvor a vós, Senhor Jesus Cristo.
[Ou:] Louvor e glória a vós, Senhor Jesus.`,
    },
    {
      titulo: "Credo Niceno-Constantinopolitano",
      sub: "Profissão de Fé — Liturgia da Palavra",
      texto: `Creio em um só Deus,
Pai todo-poderoso, Criador do céu e da terra,
de todas as coisas visíveis e invisíveis.
Creio em um só Senhor, Jesus Cristo,
Filho Unigênito de Deus, nascido do Pai antes de todos os séculos:
Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro;
gerado, não criado, consubstancial ao Pai.
Por ele todas as coisas foram feitas;
e por nós, homens, e para nossa salvação, desceu dos céus:
★ e se encarnou pelo Espírito Santo, no seio da Virgem Maria, e se fez homem.
Também por nós foi crucificado sob Pôncio Pilatos,
padeceu e foi sepultado.
Ressuscitou ao terceiro dia, conforme as Escrituras,
e subiu aos céus, onde está sentado à direita do Pai.
E de novo há de vir em sua glória, para julgar os vivos e os mortos;
e o seu reino não terá fim.
Creio no Espírito Santo, Senhor que dá a vida,
e procede do Pai e do Filho;
e com o Pai e o Filho é adorado e glorificado:
ele que falou pelos profetas.
Creio na Igreja una, santa, católica e apostólica.
Professo um só batismo para a remissão dos pecados.
Espero a ressurreição dos mortos e a vida do mundo que há de vir. Amém.

(★ Genuflexão ou profunda inclinação)`,
    },
    {
      titulo: "Oração Universal dos Fiéis",
      sub: "Liturgia da Palavra — Missal Romano",
      texto: `[O sacerdote ou diácono anuncia cada intenção:]
Oremos ao Senhor. — Senhor, ouvi a nossa oração.
[Ou:] Senhor, escutai-nos. — Senhor, ouvi-nos.

Intenções habituais:
1. Pela santa Igreja Católica e pelo Santo Padre...
2. Pelos que governam as nações...
3. Pelos que sofrem, pelos enfermos e necessitados...
4. Pela nossa comunidade paroquial...
5. Pelos nossos irmãos falecidos...

[Conclusão pelo sacerdote:] "Senhor nosso Deus, escutai benignamente a oração da vossa Igreja..."`,
    },

    // ── LITURGIA EUCARÍSTICA ──
    { tipo: 'grupo', titulo: '✦ Liturgia Eucarística' },
    {
      titulo: "Apresentação do Pão",
      sub: "Liturgia Eucarística — Missal Romano",
      texto: `Bendito sejais, Senhor, Deus do universo, por este pão que recebemos da vossa bondade e do fruto da terra e do trabalho dos homens; nós vo-lo apresentamos: ele vai se tornar o pão da vida.
— Bendito seja Deus para sempre.`,
    },
    {
      titulo: "Apresentação do Vinho",
      sub: "Liturgia Eucarística — Missal Romano",
      texto: `Bendito sejais, Senhor, Deus do universo, por este vinho que recebemos da vossa bondade e do fruto da videira e do trabalho dos homens; nós vo-lo apresentamos: ele vai se tornar a nossa bebida espiritual.
— Bendito seja Deus para sempre.`,
    },
    {
      titulo: "Lavabo",
      sub: "Liturgia Eucarística — Missal Romano",
      texto: `Lavai-me bem das minhas culpas, Senhor, e purificai-me dos meus pecados. (Sl 51,4)`,
    },
    {
      titulo: "Orai, Irmãos (Orate Fratres)",
      sub: "Liturgia Eucarística — Missal Romano",
      texto: `[Sacerdote:] Orai, irmãos e irmãs, para que o meu sacrifício, que é também o vosso, seja aceito por Deus, Pai Todo-Poderoso.

[Povo:] O Senhor receba das vossas mãos este sacrifício, para louvor e glória do seu nome, para bem nosso e de toda a sua Igreja.`,
    },
    {
      titulo: "Prefácio — Diálogo",
      sub: "Liturgia Eucarística — Missal Romano",
      texto: `O Senhor esteja convosco. — E com o seu espírito.
Corações ao alto! — Temo-los voltados para o Senhor.
Rendamos graças ao Senhor nosso Deus. — É justo e necessário.`,
    },
    {
      titulo: "Santo (Sanctus)",
      sub: "Liturgia Eucarística — Missal Romano",
      texto: `Santo, Santo, Santo, Senhor Deus do universo!
O céu e a terra proclamam a vossa glória.
Hosana nas alturas!
Bendito o que vem em nome do Senhor.
Hosana nas alturas!`,
    },

    // ── RITO DA COMUNHÃO ──
    { tipo: 'grupo', titulo: '✦ Rito da Comunhão' },
    {
      titulo: "Pai Nosso — Introdução",
      sub: "Rito da Comunhão — Missal Romano",
      texto: `Obedecendo ao preceito do Salvador e seguindo o seu ensinamento divino, ousamos dizer:

Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal.`,
    },
    {
      titulo: "Libera nos — Embolismo",
      sub: "Rito da Comunhão — Missal Romano",
      texto: `Livrai-nos, Senhor, de todos os males e dai a paz em nossos dias; para que, ajudados pela vossa misericórdia, vivamos sempre livres do pecado e preservados de toda turbação, enquanto esperamos a feliz esperança e a vinda de Jesus Cristo, nosso Salvador.

[Povo:] Pois vosso é o Reino, o poder e a glória, para sempre, Senhor.`,
    },
    {
      titulo: "Oração pela Paz",
      sub: "Rito da Comunhão — Missal Romano",
      texto: `Senhor Jesus Cristo, que dissestes aos vossos apóstolos: "A paz eu vos deixo, a minha paz eu vos dou"; não olheis os nossos pecados, mas a fé da vossa Igreja; e, de acordo com a vossa vontade, dai-lhe a paz e a unidade. Vós que viveis e reinais pelos séculos dos séculos. Amém.

[Sacerdote:] A paz do Senhor esteja sempre convosco.
[Povo:] E com o seu espírito.

[Diácono ou sacerdote:] Dai-vos mutuamente a paz.`,
    },
    {
      titulo: "Cordeiro de Deus (Agnus Dei)",
      sub: "Rito da Comunhão — Missal Romano",
      texto: `Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós.
Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós.
Cordeiro de Deus, que tirais o pecado do mundo, dai-nos a paz.`,
    },
    {
      titulo: "Oração antes da Comunhão (sacerdote)",
      sub: "Rito da Comunhão — Missal Romano",
      texto: `[Forma breve — Sacerdote:]
Senhor Jesus Cristo, Filho de Deus vivo, que, por vontade do Pai e com a cooperação do Espírito Santo, destes a vossa vida para vivificar o mundo, libertai-me, por este santo sacramento, de todos os meus pecados e de todo o mal; fazei que me conserve sempre fiel às vossas ordens e não me deixeis afastar de vós de forma alguma. Amém.`,
    },
    {
      titulo: "Oração antes da Comunhão (fiéis)",
      sub: "Rito da Comunhão — Missal Romano",
      texto: `Senhor, eu não sou digno de que entreis na minha morada, mas dizei uma palavra e serei salvo.`,
    },
    {
      titulo: "Fórmula da Comunhão",
      sub: "Rito da Comunhão — Missal Romano",
      texto: `[Ministro:] O Corpo de Cristo. — Amém.
[Ministro:] O Sangue de Cristo. — Amém.`,
    },
    {
      titulo: "Oração após a Comunhão",
      sub: "Rito da Comunhão — Missal Romano",
      texto: `[Exemplo — coleta de pós-comunhão:]
Senhor nosso Deus, o que recebemos da vossa mesa santa nos purifique e nos una cada vez mais a Jesus Cristo, vosso Filho, que convosco vive e reina pelos séculos dos séculos. Amém.`,
    },

    // ── RITOS FINAIS ──
    { tipo: 'grupo', titulo: '✦ Ritos Finais' },
    {
      titulo: "Avisos e Bênção Solene",
      sub: "Ritos Finais — Missal Romano",
      texto: `[Após os avisos, o sacerdote convida:]
O Senhor esteja convosco. — E com o seu espírito.
Curvai a cabeça e recebei a bênção de Deus.

[Bênção Trinitária:]
Deus Todo-Poderoso vos abençoe: o Pai, ☩ o Filho e o Espírito Santo. Amém.`,
    },
    {
      titulo: "Bênção Solene — forma expandida",
      sub: "Ritos Finais — Missal Romano",
      texto: `O Senhor Todo-Poderoso afaste de vós todo o mal e faça que os vossos dias sejam de paz.
— Amém.
Ele que vos libertou do pecado vos mantenha fiéis ao Bem.
— Amém.
Que olhe para vós com benevolência e vos conceda a paz.
— Amém.
E a bênção de Deus Todo-Poderoso, Pai ☩ Filho e Espírito Santo, desça sobre vós e convosco permaneça para sempre.
— Amém.`,
    },
    {
      titulo: "Missão — Fórmulas de Envio",
      sub: "Ritos Finais — Missal Romano",
      texto: `[O sacerdote ou diácono escolhe uma das formas:]

1. Ide, a Missa está encerrada.
2. Ide em paz.
3. Ide anunciar o Evangelho do Senhor.
4. Podeis ir em paz, glorificando o Senhor com a vossa vida.

[Povo:] Graças a Deus.`,
    },
  ],

  // ══════════════════════════════════
  //  ORAÇÕES EUCARÍSTICAS
  // ══════════════════════════════════
  eucaristia: [
    // ── ORAÇÕES EUCARÍSTICAS PRINCIPAIS ──
    { tipo: 'grupo', titulo: '✦ Orações Eucarísticas I – IV' },
    {
      titulo: "OE I — Cânon Romano",
      sub: "A oração mais antiga da Igreja — séc. IV",
      texto: `Por isso, Pai misericordioso, nós vos suplicamos e pedimos por Jesus Cristo, vosso Filho e Senhor nosso, que aceiteis e abençoeis estes dons, estas oferendas, estes santos e imaculados sacrifícios, que vos oferecemos em primeiro lugar pela vossa santa Igreja católica...

[Epiclese:]
Rogai-vos, portanto, Senhor, que aceiteis graciosamente e abençoeis estas oferendas. Fazei-as perfeitas, aprovadas, espirituais e agradáveis, para que sejam para nós o Corpo e o Sangue de vosso amado Filho, Nosso Senhor Jesus Cristo.

[Narrativa da Instituição — mesma em todas as OE:]
Na véspera de sua paixão, ele tomou o pão em suas santas e veneráveis mãos, e com os olhos levantados ao céu, para vós, ó Deus, seu Pai todo-poderoso, dando graças, abençoou-o, partiu-o, e deu-o a seus discípulos, dizendo:
"TOMAI E COMEI TODOS, POIS ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."

Do mesmo modo, ao fim da ceia, tomou este cálice glorioso em suas santas e veneráveis mãos, dando graças, abençoou-o e deu-o a seus discípulos, dizendo:
"TOMAI E BEBEI TODOS, POIS ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA ALIANÇA NOVA E ETERNA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA A REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."

[Aclamação:]
— Anunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!

[Doxologia final — mesma em todas as OE:]
Por Cristo, com Cristo, em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda a honra e toda a glória, agora e para sempre.
— Amém.`,
    },
    {
      titulo: "OE II — de São Hipólito",
      sub: "A mais breve das orações principais (séc. III)",
      texto: `É verdadeiramente justo e necessário rendermos graças em todo o tempo e em todo o lugar por Cristo, vosso amado Filho. Por ele criastes todas as coisas; o enviastes como nosso Salvador e Redentor, encarnado pelo Espírito Santo e nascido da Virgem.

[Epiclese:]
Santificai estas oferendas, derramando sobre elas o vosso Espírito, para que se tornem o Corpo ☩ e o Sangue de Jesus Cristo, nosso Senhor.

[Narrativa da Instituição — cf. OE I]

[Aclamações possíveis:]
— Anunciamos, a vossa morte, Senhor, e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!
— Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos a vossa morte, Senhor, esperando a vossa vinda na glória.
— Salvador do mundo, salvai-nos, vós que nos libertastes pela vossa cruz e ressurreição.

[Doxologia — cf. OE I]`,
    },
    {
      titulo: "OE III",
      sub: "Para Domingos e festas — Missal Romano",
      texto: `Pai verdadeiramente Santo, de quem procede todo bem e que santificais com vosso Espírito tudo o que existe; nunca cessais de reunir para vós um povo que vos ofereça, do Oriente ao Ocidente, um sacrifício agradável ao vosso nome.

[Epiclese:]
Santificai, pois, com o mesmo Espírito, estas oferendas que vos apresentamos, para que se tornem o Corpo ☩ e o Sangue de vosso Filho Jesus Cristo, nosso Senhor, que nos ordenou celebrar estes mistérios.

[Narrativa da Instituição — cf. OE I]

[Aclamações — mesmas da OE II]

[Doxologia — cf. OE I]`,
    },
    {
      titulo: "OE IV",
      sub: "Prefácio imutável — visão global da história da salvação",
      texto: `Confessamos, Pai Santo, que sois grande e que fizestes todas as vossas obras com sabedoria e amor. À vossa imagem criastes o homem, confiando-lhe o cuidado de todo o universo, para que, servindo só a vós, Criador, governasse toda criatura.

[Epiclese:]
Olhai, Senhor, esta oblação que colocamos diante de vós, e reconhecei nela a oblação perfeita que vosso Filho único ofereceu às vossas mãos. Concedei a todos os que partilham deste pão e deste cálice serem reunidos pelo Espírito Santo em um único corpo, para que em Cristo sejam viva oferenda para o louvor da vossa glória.

[Narrativa da Instituição — cf. OE I]

[Aclamações — mesmas da OE II]

[Doxologia — cf. OE I]`,
    },

    // ── ORAÇÕES EUCARÍSTICAS — MISSAS COM CRIANÇAS ──
    { tipo: 'grupo', titulo: '✦ Para Missas com Crianças (MC I–III)' },
    {
      titulo: "OE para Missas com Crianças I (MC I)",
      sub: "Para assembleias infantis — Diretório de Missas com Crianças",
      texto: `Pai, como é bom que possamos chamar-vos Pai! Vós, que sois o mais poderoso de todos, quisestes ser também o nosso Pai e chamar-nos vossos filhos, para que pudéssemos chegar sempre ao vosso coração...

[Aclamação característica:]
— Louvamos-vos, ó Deus, louvamos-vos! Damos-vos graças!

[Epiclese:]
Enviai o vosso Espírito Santo sobre este pão e sobre este vinho, para que se tornem o Corpo e o Sangue de Jesus Cristo vosso Filho.

[Narrativa da Instituição — cf. OE I]

[Aclamação:]
— Louvamos-vos, ó Deus, louvamos-vos! Damos-vos graças!

[Doxologia — cf. OE I]`,
    },
    {
      titulo: "OE para Missas com Crianças II (MC II)",
      sub: "Para assembleias infantis — Diretório de Missas com Crianças",
      texto: `Pai do céu, graças vos damos por todas as coisas grandes e belas que fizestes para nós. Por todas as maravilhas que nos preparastes neste mundo e na nossa terra...

[Aclamação característica:]
— Santo, Santo, Santo é o Senhor, nosso Deus!

[Epiclese:]
Nós vos pedimos: enviai o vosso Espírito sobre este pão e este vinho, para que se tornem para nós o Corpo e o Sangue de Jesus Cristo.

[Narrativa da Instituição — cf. OE I]

[Aclamação:]
— Santo, Santo, Santo é o Senhor, nosso Deus!

[Doxologia — cf. OE I]`,
    },
    {
      titulo: "OE para Missas com Crianças III (MC III)",
      sub: "Para assembleias infantis — Diretório de Missas com Crianças",
      texto: `Pai, que nos amais muito, nós cremos em vós, mesmo sem vos poder ver. Cremos que estais sempre perto de nós, mesmo quando não sentimos a vossa presença...

[Aclamação característica:]
— Glória a Deus e paz na terra!

[Epiclese:]
Enviai o vosso Espírito Santo sobre este pão e sobre este vinho, para que Jesus esteja presente entre nós no seu Corpo e no seu Sangue.

[Narrativa da Instituição — cf. OE I]

[Aclamação:]
— Glória a Deus e paz na terra!

[Doxologia — cf. OE I]`,
    },

    // ── ORAÇÕES EUCARÍSTICAS — DIVERSAS CIRCUNSTÂNCIAS ──
    { tipo: 'grupo', titulo: '✦ Para Diversas Circunstâncias (DC I–IV)' },
    {
      titulo: "OE para Diversas Circunstâncias I — A Igreja em Caminho",
      sub: "Para diversas circunstâncias — Missal Romano",
      texto: `Verdadeiramente, Senhor, é nosso dever e nossa salvação dar-vos graças e louvar sempre o vosso nome, pois o que criastes bondosamente mereceu ser governado por vós com maior bondade ainda; porque, ainda que tenhamos pecado, tendes misericórdia de todos, para que vos busquemos e vos encontremos.

[Epiclese:]
Vós, Senhor, sois o Deus vivo e verdadeiro. Santificai, pois, estas oferendas com o orvalho do vosso Espírito, para que se tornem para nós o Corpo ☩ e o Sangue de Jesus Cristo, vosso Filho e nosso Senhor.

[Narrativa da Instituição — cf. OE I]

[Aclamações possíveis — cf. OE II]

[Doxologia — cf. OE I]`,
    },
    {
      titulo: "OE para Diversas Circunstâncias II — Deus Guia Sua Igreja",
      sub: "Para diversas circunstâncias — Missal Romano",
      texto: `Bendito sois vós, Senhor, que amais os homens e os criastes para louvarem a vossa glória, para servirem a vós com alegria, para alcançar por vós a santidade. Por isso nos fostes ao encontro em toda a história da salvação...

[Epiclese:]
Portanto, Pai, santificai agora estas oferendas com o mesmo Espírito pelo qual quisestes que vosso Filho Jesus Cristo se tornasse para nós o sacramento da salvação.

[Narrativa da Instituição — cf. OE I]

[Aclamações possíveis — cf. OE II]

[Doxologia — cf. OE I]`,
    },
    {
      titulo: "OE para Diversas Circunstâncias III — Jesus, Modelo de Caridade",
      sub: "Para diversas circunstâncias — Missal Romano",
      texto: `Vós sois o Deus da ternura e do amor, que jamais abandonastes os homens depois do pecado de Adão e Eva. Prometestes-lhes a salvação e enviastes vossos profetas para os guiar no caminho da vida...

[Epiclese:]
Olhai, Senhor, estas oferendas que apresentamos à vossa majestade: glorificai-as com o mesmo Espírito que ressuscitou Jesus dos mortos, para que possam tornar-se o Corpo ☩ e o Sangue do vosso Filho.

[Narrativa da Instituição — cf. OE I]

[Aclamações possíveis — cf. OE II]

[Doxologia — cf. OE I]`,
    },
    {
      titulo: "OE para Diversas Circunstâncias IV — Jesus Caminha Conosco",
      sub: "Para diversas circunstâncias — Missal Romano",
      texto: `Bendito sois vós, nosso Pai, que convidais os homens a reunir-se ao redor do vosso Filho Jesus Cristo e a lhe render graças, porque ele honrou a vossa aliança e nos revelou o vosso amor...

[Epiclese:]
Santificai estas oferendas, Pai, enviando sobre elas o vosso Espírito, para que todo aquele que participar desta mesa possa receber o Corpo ☩ e o Sangue do vosso Filho amado.

[Narrativa da Instituição — cf. OE I]

[Aclamações possíveis — cf. OE II]

[Doxologia — cf. OE I]`,
    },

    // ── ORAÇÕES EUCARÍSTICAS DE RECONCILIAÇÃO ──
    { tipo: 'grupo', titulo: '✦ Orações Eucarísticas de Reconciliação (R I–II)' },
    {
      titulo: "OE de Reconciliação I",
      sub: "Para celebrações de reconciliação — Missal Romano",
      texto: `Vós sois o Deus da paz, que amais os homens e os quereis reconciliar convosco. Quando os homens se afastaram de vós pela desobediência e pelo pecado, não os abandonastes, mas, em vossa misericórdia, fostes-lhes ao encontro de muitas maneiras...

[Epiclese:]
Olhai com bondade esta oblação que a vossa Igreja vos oferece; reconhecei nela a oblação perfeita de vosso Filho que vos reconciliou conosco. Concedei que possamos receber o seu Corpo ☩ e o seu Sangue, e ficarmos cheios do Espírito Santo, para que nos tornemos em Cristo uma só oblação para o louvor da vossa glória.

[Narrativa da Instituição — cf. OE I]

[Aclamação:]
— Morrestes, Senhor, por amor de todos; e ressuscitastes para salvar a todos nós.

[Doxologia — cf. OE I]`,
    },
    {
      titulo: "OE de Reconciliação II",
      sub: "Para celebrações de reconciliação — Missal Romano",
      texto: `Vós, Senhor, sois o Deus de todo o universo. Vosso nome é grande e eterno; vossas obras são maravilhosas e grandiosas; vossa fidelidade dura para sempre. Haveis escolhido a estirpe de Abraão, de Isaque e de Jacó...

[Epiclese:]
Por isso, Pai, rogai-vos: enviai o vosso Espírito, que santifique este pão e este cálice, para que se tornem o Corpo ☩ e o Sangue de Jesus Cristo, vosso Filho, nosso Senhor, que vos ordenou celebrar estes mistérios.

[Narrativa da Instituição — cf. OE I]

[Aclamação:]
— Todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos a vossa morte, Senhor, esperando a vossa vinda na glória.

[Doxologia — cf. OE I]`,
    },
  ],

  // ══════════════════════════════════
  //  TERÇOS
  // ══════════════════════════════════
  tercos: [
    {
      titulo: "Como rezar o Terço do Rosário",
      sub: "Guia completo com todos os mistérios",
      texto: `1. Sinal da Cruz e Credo
2. Pai Nosso
3. 3 Ave Marias (fé, esperança, caridade)
4. Glória ao Pai
5. Para cada um dos 5 mistérios:
   — Anunciar o mistério
   — Pai Nosso
   — 10 Ave Marias
   — Glória ao Pai
   — Jaculatória de Fátima
6. Salve Rainha ao final

✦ GOZOSOS (Seg. e Sáb.): Anunciação · Visitação · Natal · Apresentação · Encontro no Templo
✦ LUMINOSOS (Qui.): Batismo · Caná · Anúncio do Reino · Transfiguração · Eucaristia
✦ DOLOROSOS (Ter. e Sex.): Agonia · Flagelação · Coroação · Caminho da Cruz · Crucificação
✦ GLORIOSOS (Qua. e Dom.): Ressurreição · Ascensão · Pentecostes · Assunção · Coroação de Maria`,
    },
    { titulo: "Jaculatória de Fátima", sub: "Ao final de cada dezena", texto: `Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas para o céu, principalmente as que mais precisarem da vossa misericórdia. Amém.` },
    {
      titulo: "Terço da Misericórdia",
      sub: "Revelado a Santa Faustina Kowalska",
      texto: `Início: Sinal da Cruz, Pai Nosso, Ave Maria, Credo.

Contas grandes: "Pai Eterno, ofereço-vos o Corpo, o Sangue, a Alma e a Divindade de vosso caríssimo Filho, Nosso Senhor Jesus Cristo, em expiação pelos nossos pecados e os do mundo inteiro."

Contas pequenas (10×): "Pelos dolorosos sofrimentos de Jesus, tende misericórdia de nós e do mundo inteiro."

Final (3×): "Santo Deus, Santo Forte, Santo Imortal, tende misericórdia de nós e do mundo inteiro."`,
    },
    {
      titulo: "Terço dos Santos Arcanjos",
      sub: "São Miguel, São Gabriel e São Rafael",
      texto: `Início: Sinal da Cruz, Credo.

Para cada arcanjo: 1 Pai Nosso + 3 Ave Marias + Glória ao Pai.

✦ São Miguel: "São Miguel Arcanjo, defendei-nos no combate..."
✦ São Gabriel: "São Gabriel Arcanjo, mensageiro de Deus, anunciai-nos as boas novas e fortalecei nossa fé. Amém."
✦ São Rafael: "São Rafael Arcanjo, médico de Deus, guiai nossos passos e curai nossas doenças da alma e do corpo. Amém."`,
    },
  ],

  // ══════════════════════════════════
  //  OUTRAS
  // ══════════════════════════════════
  outras: [
    { titulo: "Memorare", sub: "Oração a Nossa Senhora", texto: `Lembrai-vos, ó piíssima Virgem Maria, que jamais se ouviu dizer que algum daqueles que recorreram à vossa proteção, imploraram o vosso auxílio e pediram o vosso amparo fosse por vós abandonado. Animado por semelhante confiança, a vós recorro, ó Mãe, Virgem das Virgens, e, gemendo sob o peso dos meus pecados, me prostro a vossos pés. Ó Mãe do Verbo Encarnado, não desprezeis as minhas súplicas, mas ouvi-as e atendei-as benignamente. Amém.` },
    { titulo: "Sub Tuum Praesidium", sub: "A mais antiga oração a Maria (séc. III)", texto: `Sob a vossa proteção nos refugiamos, Santa Mãe de Deus; não desprezeis nossas súplicas em nossas necessidades, mas livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita. Amém.` },
    { titulo: "Oração antes das Refeições", texto: `Abençoai, Senhor, os alimentos que vamos tomar e os que os prepararam. Lembrai-vos dos que têm fome. Amém.` },
    { titulo: "Oração após as Refeições", texto: `Nós vos agradecemos, Senhor, por todos os vossos benefícios, vós que viveis e reinais pelos séculos dos séculos. Amém.` },
    { titulo: "Oração da Manhã", texto: `Ó meu Deus, ofereço-vos neste dia, todas as minhas orações, trabalhos, alegrias e sofrimentos, em união com o Sagrado Coração de Jesus, por amor de Deus. Amém.` },
    { titulo: "Oração da Noite", texto: `Meu Deus, antes de adormecer, ofereço-vos meu coração. Guardai-me desta noite, afastai de mim os maus sonhos e os maus pensamentos. Dai descanso ao meu corpo e à minha alma. Amém.` },
  ],
};

// ─────────────────────────────────────
//  ACCORDION ITEM
// ─────────────────────────────────────
const OracaoItem = ({ item, index, aberta, setAberta, catInfo }) => {
  const isOpen = aberta === index;
  const Icon = catInfo.icon;

  // Separador de grupo (não é clicável)
  if (item.tipo === 'grupo') {
    return (
      <div className="flex items-center gap-3 pt-4 pb-1">
        <div className={`h-0.5 w-5 bg-gradient-to-r ${catInfo.cor} rounded-full opacity-60`} />
        <span className={`text-[11px] font-bold uppercase tracking-widest ${catInfo.corTexto} shrink-0`}>
          {item.titulo}
        </span>
        <div className={`flex-grow h-px bg-gradient-to-r ${catInfo.cor} opacity-20 rounded-full`} />
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer
        ${isOpen
          ? 'shadow-xl ring-2 ring-parish-gold/30 bg-white'
          : 'bg-white/80 hover:bg-white shadow-sm hover:shadow-md border border-gray-100'
        }`}
      onClick={() => setAberta(isOpen ? -1 : index)}
    >
      <div className={`p-5 flex items-center justify-between gap-3 ${item.destaque ? 'bg-gradient-to-r from-parish-terracotta/8 to-transparent' : ''}`}>
        <div className="flex items-center gap-4 min-w-0">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${isOpen ? `bg-gradient-to-br ${catInfo.cor} text-white shadow-md` : `${catInfo.corBg} ${catInfo.corTexto}`}`}>
            {item.destaque ? <Star size={18} /> : <Icon size={18} />}
          </div>
          <div className="min-w-0">
            <h3 className={`font-serif font-bold text-base leading-tight ${item.destaque ? 'text-parish-terracotta' : 'text-parish-dark'}`}>
              {item.titulo}
            </h3>
            {item.sub && (
              <p className="text-[11px] text-gray-400 uppercase tracking-wide mt-0.5 truncate">{item.sub}</p>
            )}
          </div>
        </div>
        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-parish-gold/20 text-parish-gold rotate-180' : 'bg-gray-100 text-gray-400'}`}>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-[4000px]' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 border-t border-dashed border-gray-100">
          <div className={`h-0.5 w-12 bg-gradient-to-r ${catInfo.cor} rounded-full mb-4 opacity-60`} />
          <p className="text-gray-700 leading-[1.9] font-serif text-base md:text-lg text-justify whitespace-pre-line">
            {item.texto}
          </p>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────
//  PÁGINA PRINCIPAL
// ─────────────────────────────────────
const Oracoes = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('destaque');
  const [aberta, setAberta] = useState(0);

  const catInfo = categorias.find(c => c.id === categoriaAtiva);
  const oracoes = oracoesPorCategoria[categoriaAtiva] || [];
  const Icon = catInfo.icon;

  const handleCategoria = (id) => {
    setCategoriaAtiva(id);
    setAberta(0);
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] pt-20 pb-32 md:pb-20 overflow-x-hidden">

      {/* ── HERO ── */}
      <div className="relative bg-parish-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-parish-gold/10 rounded-full blur-3xl -mt-20 -mr-20 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-parish-gold mb-5">
            <Star size={12} fill="currentColor" />
            Espiritualidade — Missal Romano
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
            Orações do Cristão
          </h1>
          <p className="text-white/60 italic text-lg max-w-lg mx-auto font-serif">
            "A oração é a respiração da alma."
          </p>
          <div className="w-24 h-0.5 bg-parish-gold/60 mx-auto mt-6 rounded-full" />
        </div>
      </div>

      {/* ── ABAS STICKY ── */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/80 sticky top-[64px] z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categorias.map(cat => {
              const CatIcon = cat.icon;
              const isActive = categoriaAtiva === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoria(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0
                    ${isActive
                      ? `bg-gradient-to-br ${cat.cor} text-white shadow-md scale-[1.03]`
                      : 'text-gray-500 hover:bg-gray-100'
                    }`}
                >
                  <CatIcon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className="max-w-5xl mx-auto px-4 pt-8">

        {/* Card da categoria ativa */}
        <div className={`flex items-center gap-4 mb-6 p-5 rounded-2xl bg-gradient-to-br ${catInfo.cor} text-white shadow-lg`}>
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Icon size={24} />
          </div>
          <div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Seção</p>
            <h2 className="text-xl font-serif font-bold">{catInfo.label}</h2>
          </div>
          <div className="ml-auto text-white/50 text-sm font-bold">
            {oracoes.filter(o => !o.tipo).length} orações
          </div>
        </div>

        {/* Lista */}
        <div className="space-y-2">
          {oracoes.map((item, index) => (
            <OracaoItem
              key={`${categoriaAtiva}-${index}`}
              item={item}
              index={index}
              aberta={aberta}
              setAberta={setAberta}
              catInfo={catInfo}
            />
          ))}
        </div>

        <div className="mt-14 text-center pb-4">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Paróquia São Miguel Arcanjo</p>
          <p className="text-gray-300 text-xs mt-1 italic">Conforme o Missal Romano — 3ª edição típica</p>
        </div>
      </div>
    </div>
  );
};

export default Oracoes;