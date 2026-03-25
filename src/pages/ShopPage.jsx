import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ShoppingBag, ChevronRight } from 'lucide-react';

// ─────────────────────────────────────
//  PLACEHOLDER para produtos sem foto
// ─────────────────────────────────────
const PlaceholderImg = ({ emoji }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f4f1ea] to-[#e8e2d2] gap-2">
    <span className="text-5xl opacity-30">{emoji}</span>
    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Foto em breve</span>
  </div>
);

// ─────────────────────────────────────
//  DADOS — TERÇOS (por faixa de preço)
// ─────────────────────────────────────
const secoesTercos = [
  {
    faixa: 'R$ 50,00', priceNum: 50, modelos: [
      { id: 't1', name: 'Terço Especial (1)', tag: null },
      { id: 't2', name: 'Terço Especial (2)', tag: null },
    ]
  },
  {
    faixa: 'R$ 35,00', priceNum: 35, modelos: [
      { id: 't3', name: 'Terço Devocional (1)', tag: null },
      { id: 't4', name: 'Terço Devocional (2)', tag: null },
    ]
  },
  {
    faixa: 'R$ 30,00', priceNum: 30, modelos: [
      { id: 't5', name: 'Terço Clássico', tag: null },
    ]
  },
  {
    faixa: 'R$ 25,00', priceNum: 25, modelos: [
      { id: 't6', name: 'Terço Simples (1)', tag: null },
      { id: 't7', name: 'Terço Simples (2)', tag: null },
      { id: 't8', name: 'Terço com Imagem de Santo', tag: 'Com Imagem' },
    ]
  },
  {
    faixa: 'R$ 20,00', priceNum: 20, modelos: [
      { id: 't9', name: 'Terço do Dia (1)', tag: null },
      { id: 't10', name: 'Terço do Dia (2)', tag: null },
      { id: 't11', name: 'Terço do Dia (3)', tag: null },
      { id: 't12', name: 'Terço do Dia (4)', tag: null },
      { id: 't13', name: 'Terço do Dia (5)', tag: null },
      { id: 't14', name: 'Terço do Dia (6)', tag: null },
      { id: 't15', name: 'Terço do Dia (7)', tag: null },
      { id: 't20', name: 'Terço com Bolsinha', tag: 'Com Bolsinha' },
      { id: 't21', name: 'Terço com Imagem de Santo (1)', tag: 'Com Imagem' },
      { id: 't22', name: 'Terço com Imagem de Santo (2)', tag: 'Com Imagem' },
    ]
  },
  {
    faixa: 'R$ 20,00 – R$ 30,00', priceNum: 25, modelos: [
      { id: 't16', name: 'Terço Médio (1)', tag: null },
      { id: 't17', name: 'Terço Médio (2)', tag: null },
      { id: 't18', name: 'Terço Médio (3)', tag: null },
      { id: 't19', name: 'Terço Médio (4)', tag: null },
    ]
  },
  {
    faixa: 'R$ 15,00', priceNum: 15, modelos: [
      { id: 't24', name: 'Terço de Bolso', tag: null },
    ]
  },
  {
    faixa: 'R$ 10,00', priceNum: 10, modelos: [
      { id: 't23', name: 'Terço com Imagem', tag: 'Com Imagem' },
    ]
  },
  {
    faixa: 'R$ 6,00', priceNum: 6, modelos: [
      { id: 't25', name: 'Terço Miniatura com Imagem', tag: 'Com Imagem' },
    ]
  },
];

const produtosBiblias = [
  { id: 'b1', name: 'Bíblia Sagrada — Ed. Pastoral', price: 'R$ 65,00', description: 'Edição Pastoral com tradução acessível, notas de rodapé e capa luxo flexível. Indispensável para o estudo da Palavra.' },
  { id: 'b2', name: 'Bíblia Sagrada — Ed. Média', price: 'R$ 55,00', description: 'Edição compacta e de fácil transporte, ideal para acompanhar a liturgia das missas.' },
  { id: 'b3', name: 'Bíblia Sagrada — Ed. Ilustrada', price: 'R$ 65,00', description: 'Com ilustrações e mapas bíblicos. Excelente para estudo e catequese.' },
  { id: 'b4', name: 'Bíblia Sagrada — Ed. Econômica', price: 'R$ 44,00', description: 'Tradução fiel e conteúdo completo a um preço acessível. Perfeita para presentear.' },
  { id: 'b5', name: 'Bíblia Sagrada — Ed. de Bolso', price: 'R$ 42,00', description: 'Leve e prática, perfeita para levar para a missa ou grupos de oração.' },
];

const produtosCrucifixos = [
  { id: 'c1', name: 'Crucifixo de Parede', price: 'R$ 50,00', description: 'Crucifixo decorativo em resina com detalhes dourados. Para abençoar e decorar o lar.' },
  { id: 'c2', name: 'Crucifixo de Mesa', price: 'R$ 35,00', description: 'Crucifixo para mesa ou oratório. Acabamento cuidadoso, ideal para o ambiente de oração.' },
  { id: 'c3', name: 'Crucifixo Pequeno', price: 'R$ 30,00', description: 'Menor e ideal para quarto ou oratório particular. Belíssimo acabamento.' },
];

const produtosImagens = [
  { id: 'i1', name: 'Imagem Sacra — Série R$28', price: 'R$ 28,00', description: 'Imagens sacras em resina com pintura artesanal. Consulte os modelos disponíveis via WhatsApp.' },
  { id: 'i2', name: 'Imagem Sacra — Série R$35', price: 'R$ 35,00', description: 'Imagens sacras premium com mais detalhes e acabamento refinado. Consulte os modelos via WhatsApp.' },
];

// ─────────────────────────────────────
//  CARD DE PRODUTO GENÉRICO
// ─────────────────────────────────────
const ProductCard = ({ id, name, price, description, tag, emoji, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col"
  >
    <div className="h-44 overflow-hidden relative bg-gray-50 shrink-0">
      <PlaceholderImg emoji={emoji} />
      {tag && (
        <span className="absolute top-2 left-2 bg-parish-gold text-parish-dark text-[9px] font-bold px-2.5 py-0.5 uppercase tracking-wider rounded-full shadow-sm">
          {tag}
        </span>
      )}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="bg-white/90 text-gray-800 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md">
          Ver Detalhes
        </span>
      </div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-serif font-bold text-gray-800 text-sm leading-snug mb-2 flex-grow">{name}</h3>
      <div className="flex justify-between items-center pt-3 border-t border-gray-50 mt-1">
        <span className="text-base font-bold text-parish-terracotta">{price}</span>
        <div className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-parish-gold group-hover:text-parish-dark transition-colors flex items-center justify-center text-gray-400">
          <ShoppingBag size={13} />
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────
//  CABEÇALHO DE SEÇÃO
// ─────────────────────────────────────
const SectionHeader = ({ emoji, title, subtitle, id }) => (
  <div id={id} className="flex items-center gap-4 mb-6">
    <div className="w-12 h-12 bg-parish-dark text-white rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-md">
      {emoji}
    </div>
    <div>
      <h2 className="text-2xl font-serif font-bold text-parish-dark">{title}</h2>
      {subtitle && <p className="text-sm text-gray-400 mt-0.5">{subtitle}</p>}
    </div>
    <div className="flex-grow h-px bg-gradient-to-r from-gray-200 to-transparent ml-2" />
  </div>
);

// ─────────────────────────────────────
//  MODAL
// ─────────────────────────────────────
const Modal = ({ product, onClose, onOrder }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-fadeIn">
        <div className="h-52 bg-gray-100 relative">
          <PlaceholderImg emoji={product.emoji} />
          {product.tag && (
            <span className="absolute top-4 left-4 bg-parish-gold text-parish-dark text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {product.tag}
            </span>
          )}
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/80 p-1.5 rounded-full text-gray-600 shadow-sm backdrop-blur-md">
            <X size={18} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-xs font-bold text-parish-terracotta uppercase tracking-widest mb-1">{product.categoria}</p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">{product.name}</h2>
          {product.price && <p className="text-xl font-bold text-gray-700 mb-3">{product.price}</p>}
          <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5 text-xs text-amber-700">
            <b>ℹ️ Somente encomendas.</b> Clique abaixo para encomendar e combinar retirada na paróquia.
          </div>
          <button
            onClick={() => onOrder(product.name)}
            className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.01] shadow-lg shadow-green-600/20"
          >
            <MessageCircle size={18} />
            Encomendar pelo WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────
//  COMPONENTE PRINCIPAL
// ─────────────────────────────────────
const ShopPage = () => {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [modal]);

  const handleOrder = (name) => {
    const phone = '5511150505716';
    const msg = `Olá! Gostaria de encomendar o item: *${name}* que vi no site da Paróquia São Miguel.\n\nAinda está disponível? Qual seria o próximo passo para retirada? Obrigado!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const openModal = (product) => setModal(product);

  // "Âncoras" do menu rápido
  const ancoras = [
    { label: '📿 Terços', id: 'tercos' },
    { label: '📖 Bíblias', id: 'biblias' },
    { label: '✝️ Crucifixos', id: 'crucifixos' },
    { label: '🕊️ Imagens', id: 'imagens' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen pt-20 pb-24">

      {/* ── HERO ── */}
      <div className="bg-parish-dark text-white py-14 md:py-20 relative overflow-hidden mb-0">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-parish-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Loja Paroquial</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">Artigos Religiosos</h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base mb-5">
            Adquira produtos que evangelizam. Toda a renda reverte para as obras da comunidade.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/40 text-green-300 px-4 py-2 rounded-full text-sm font-bold">
            <MessageCircle size={15} />
            Somente encomendas — WhatsApp (11) 5050-5716
          </div>
        </div>
      </div>

      {/* ── MENU DE NAVEGAÇÃO RÁPIDA ── */}
      <div className="sticky top-[64px] z-30 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2.5 scrollbar-hide">
            {ancoras.map(a => (
              <button
                key={a.id}
                onClick={() => scrollTo(a.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-parish-dark hover:text-white transition-all whitespace-nowrap shrink-0"
              >
                {a.label}
                <ChevronRight size={12} className="opacity-40" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 space-y-20">

        {/* ══════ SEÇÃO 1: TERÇOS ══════ */}
        <section>
          <SectionHeader id="tercos" emoji="📿" title="Terços" subtitle="Vários modelos disponíveis, separados por faixa de preço" />

          <div className="space-y-10">
            {secoesTercos.map((grupo) => (
              <div key={grupo.faixa}>
                {/* Separador de preço */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-parish-terracotta/10 border border-parish-terracotta/20 text-parish-terracotta text-xs font-bold px-3 py-1.5 rounded-full shrink-0">
                    {grupo.faixa}
                  </span>
                  <div className="flex-grow h-px bg-gray-200" />
                  <span className="text-[11px] text-gray-400 font-bold shrink-0">
                    {grupo.modelos.length} {grupo.modelos.length === 1 ? 'modelo' : 'modelos'}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {grupo.modelos.map(m => (
                    <ProductCard
                      key={m.id}
                      id={m.id}
                      name={m.name}
                      price={grupo.faixa}
                      description="Terço artesanal produzido para devoção diária. Disponível para encomenda via WhatsApp."
                      tag={m.tag}
                      emoji="📿"
                      onClick={() => openModal({ ...m, price: grupo.faixa, categoria: 'Terços', emoji: '📿', description: 'Terço artesanal produzido para devoção diária. Disponível para encomenda via WhatsApp.' })}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ SEÇÃO 2: BÍBLIAS ══════ */}
        <section>
          <SectionHeader id="biblias" emoji="📖" title="Bíblias" subtitle="Edições variadas para todos os perfis de leitura" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {produtosBiblias.map(p => (
              <ProductCard
                key={p.id}
                {...p}
                emoji="📖"
                onClick={() => openModal({ ...p, categoria: 'Bíblias', emoji: '📖' })}
              />
            ))}
          </div>
        </section>

        {/* ══════ SEÇÃO 3: CRUCIFIXOS ══════ */}
        <section>
          <SectionHeader id="crucifixos" emoji="✝️" title="Crucifixos" subtitle="Para abençoar o lar e os momentos de oração" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
            {produtosCrucifixos.map(p => (
              <ProductCard
                key={p.id}
                {...p}
                emoji="✝️"
                onClick={() => openModal({ ...p, categoria: 'Crucifixos', emoji: '✝️' })}
              />
            ))}
          </div>
        </section>

        {/* ══════ SEÇÃO 4: IMAGENS ══════ */}
        <section>
          <SectionHeader id="imagens" emoji="🕊️" title="Imagens" subtitle="Peças sacras para seu oratório ou presente de fé" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {produtosImagens.map(p => (
              <ProductCard
                key={p.id}
                {...p}
                emoji="🕊️"
                onClick={() => openModal({ ...p, categoria: 'Imagens', emoji: '🕊️' })}
              />
            ))}
          </div>
        </section>

        {/* ── RODAPÉ DA LOJA ── */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
          <MessageCircle size={30} className="text-green-600 mx-auto mb-3" />
          <h3 className="font-serif font-bold text-gray-800 text-lg mb-2">Como encomendar?</h3>
          <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
            Entre em contato pelo WhatsApp, informe o produto desejado e combine a retirada na sede da paróquia. <b>Não realizamos entregas.</b>
          </p>
          <a
            href="https://wa.me/5511150505716?text=Olá! Gostaria de saber mais sobre os produtos da loja paroquial."
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-green-600/20 text-sm"
          >
            <MessageCircle size={17} />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>

      {/* ── MODAL ── */}
      <Modal product={modal} onClose={() => setModal(null)} onOrder={handleOrder} />

    </div>
  );
};

export default ShopPage;