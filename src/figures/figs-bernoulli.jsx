import { Caption } from './index.jsx'

// 2. ベルヌーイの定理セクションの図。light テーマ前提の明示色で描画。

/* ベルヌーイ: 流線に沿って高さ z・速度 u が変化する管路と微小要素 */
function BernoulliStreamline() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 320" role="img" aria-label="流線に沿って高さと速度が変化する管路と微小流体要素">
        <defs>
          <marker id="be-ah" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
          <marker id="be-g" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#b91c1c" />
          </marker>
        </defs>
        {/* tapering rising pipe */}
        <path d="M60 250 C 200 250 260 150 460 120 L 460 188 C 280 212 220 300 60 300 Z"
          fill="#eaf1fe" stroke="#2563eb" strokeWidth="2" />
        {/* streamline */}
        <path d="M70 270 C 210 270 270 178 450 152" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="6 4" />
        <text x="120" y="262" fontSize="13" fill="#1e3a8a">流線</text>
        {/* element ds */}
        <g>
          <rect x="250" y="196" width="34" height="22" rx="3" transform="rotate(-20 267 207)"
            fill="#fde68a" stroke="#b45309" strokeWidth="1.6" />
          <text x="300" y="200" fontSize="13" fill="#92651a">微小要素 dA·ds</text>
        </g>
        {/* velocity arrows: slow low, fast high */}
        <line x1="80" y1="276" x2="135" y2="276" stroke="#2563eb" strokeWidth="3" markerEnd="url(#be-ah)" />
        <text x="86" y="296" fontSize="13" fill="#14305f">u₁（遅い・太い）</text>
        <line x1="370" y1="150" x2="450" y2="146" stroke="#2563eb" strokeWidth="3" markerEnd="url(#be-ah)" />
        <text x="360" y="132" fontSize="13" fill="#14305f">u₂（速い・細い）</text>
        {/* heights */}
        <line x1="40" y1="300" x2="40" y2="276" stroke="#475569" strokeWidth="1.3" />
        <line x1="500" y1="300" x2="500" y2="150" stroke="#475569" strokeWidth="1.3" />
        <line x1="36" y1="300" x2="44" y2="300" stroke="#475569" strokeWidth="1.3" />
        <text x="512" y="230" fontSize="13" fill="#475569">z₂ &gt; z₁</text>
        <text x="20" y="290" fontSize="13" fill="#475569">z₁</text>
        {/* gravity */}
        <line x1="320" y1="60" x2="320" y2="100" stroke="#b91c1c" strokeWidth="2.4" markerEnd="url(#be-g)" />
        <text x="328" y="84" fontSize="13" fill="#b91c1c">g</text>
        {/* datum */}
        <line x1="40" y1="306" x2="520" y2="306" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
        <text x="524" y="310" fontSize="11.5" fill="#64748b">基準 z=0</text>
      </svg>
      <Caption>流線上の微小要素にニュートンの第二法則を立て、<b>圧力差</b>と<b>重力のs成分</b>を加速度 u·du/ds に結ぶ。s で積分すると p + ½ρu² + ρgz が流線上で一定。細く高い②では u が増えて静圧 p が下がる。</Caption>
    </figure>
  )
}

/* 全圧・静圧・動圧: 物体前縁のよどみ点と静圧孔・全圧孔 */
function TotalStaticDynamic() {
  const stream = [70, 110, 150, 190, 230]
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="物体前縁のよどみ点と静圧孔・全圧孔">
        <defs>
          <marker id="ts-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#475569" />
          </marker>
        </defs>
        {/* approaching streamlines */}
        {stream.map((y, i) => (
          <line key={i} x1="30" y1={y} x2="150" y2={y} stroke="#475569" strokeWidth="1.8" markerEnd="url(#ts-ah)" />
        ))}
        <text x="40" y="56" fontSize="13" fill="#475569">一様流 u, 静圧 p</text>
        {/* blunt body */}
        <path d="M360 60 C 300 60 270 110 270 150 C 270 190 300 240 360 240 L 520 240 L 520 60 Z"
          fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
        <text x="430" y="155" fontSize="14" fill="#334155" textAnchor="middle">物体</text>
        {/* stagnation streamline */}
        <line x1="30" y1="150" x2="266" y2="150" stroke="#b91c1c" strokeWidth="2.2" markerEnd="url(#ts-ah)" />
        {/* stagnation point */}
        <circle cx="270" cy="150" r="6" fill="#b91c1c" />
        <text x="150" y="142" fontSize="13" fill="#b91c1c">よどみ点 u=0</text>
        <text x="282" y="128" fontSize="13" fill="#b91c1c" fontWeight="600">全圧 pₜ</text>
        {/* full-pressure hole (front) */}
        <line x1="270" y1="150" x2="250" y2="150" stroke="#b91c1c" strokeWidth="4" />
        <text x="180" y="180" fontSize="12.5" fill="#b91c1c">全圧孔（正面）</text>
        {/* static hole (side, parallel to flow) */}
        <circle cx="430" cy="60" r="4" fill="#2563eb" />
        <text x="300" y="46" fontSize="12.5" fill="#2563eb">静圧孔（側面・流れに平行）→ p</text>
        {/* relation */}
        <text x="330" y="285" fontSize="15" fill="#14305f" textAnchor="middle" fontWeight="600">pₜ = p + ½ρu²</text>
      </svg>
      <Caption>よどみ点では流れが正面衝突して u=0。上流（速度 u・静圧 p）から同じ流線でここまで来ると、動圧 ½ρu² が全部圧力に変わり<b>全圧 pₜ</b>になる。静圧孔は流れに平行な側面、全圧孔は正面に開ける。</Caption>
    </figure>
  )
}

/* ピトー静圧管: 全圧口・静圧口・マノメータの差圧 Δp */
function PitotTube() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 320" role="img" aria-label="ピトー静圧管の断面と差圧マノメータ">
        <defs>
          <marker id="pt-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#475569" />
          </marker>
        </defs>
        {/* incoming flow */}
        {[70, 100, 130].map((y, i) => (
          <line key={i} x1="20" y1={y} x2="110" y2={y} stroke="#475569" strokeWidth="1.8" markerEnd="url(#pt-ah)" />
        ))}
        <text x="24" y="56" fontSize="13" fill="#475569">流れ u, ρ</text>
        {/* probe body */}
        <path d="M120 100 L 360 100 L 360 130 L 150 130 A 30 30 0 0 1 120 100 Z"
          fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        {/* nose (total pressure port) */}
        <circle cx="120" cy="100" r="5" fill="#b91c1c" />
        <text x="70" y="92" fontSize="12.5" fill="#b91c1c">全圧口 → pₜ</text>
        {/* static port */}
        <circle cx="250" cy="100" r="4" fill="#2563eb" />
        <text x="210" y="86" fontSize="12.5" fill="#2563eb">静圧口 → p</text>
        {/* inner tube to total */}
        <line x1="120" y1="100" x2="120" y2="115" stroke="#b91c1c" strokeWidth="2" />
        {/* tubes down to manometer */}
        <path d="M330 130 L 330 200 L 300 200 L 300 250" fill="none" stroke="#b91c1c" strokeWidth="2" />
        <path d="M250 100 L 250 160 L 420 160 L 420 250" fill="none" stroke="#2563eb" strokeWidth="2" />
        {/* U-tube manometer */}
        <path d="M300 250 C 300 295 420 295 420 250" fill="none" stroke="#334155" strokeWidth="2.4" />
        <line x1="300" y1="250" x2="300" y2="280" stroke="#334155" strokeWidth="2.4" />
        <line x1="420" y1="250" x2="420" y2="258" stroke="#334155" strokeWidth="2.4" />
        {/* manometer fluid levels show difference */}
        <line x1="300" y1="280" x2="300" y2="288" stroke="#0e7490" strokeWidth="6" />
        <line x1="420" y1="258" x2="420" y2="266" stroke="#0e7490" strokeWidth="6" />
        {/* delta p bracket */}
        <line x1="450" y1="262" x2="450" y2="284" stroke="#b45309" strokeWidth="1.6" />
        <line x1="446" y1="262" x2="454" y2="262" stroke="#b45309" strokeWidth="1.6" />
        <line x1="446" y1="284" x2="454" y2="284" stroke="#b45309" strokeWidth="1.6" />
        <text x="458" y="278" fontSize="13" fill="#b45309">h_m</text>
        {/* formula */}
        <text x="120" y="200" fontSize="15" fill="#14305f" fontWeight="600">Δp = pₜ − p = ½ρu²</text>
        <text x="120" y="224" fontSize="14" fill="#b91c1c" fontWeight="600">→ u = √(2Δp/ρ)</text>
      </svg>
      <Caption>先端の<b>全圧口</b>（流れに正面・pₜ）と側面の<b>静圧口</b>（流れに平行・p）の差圧をマノメータの液柱差 h_m で読む。差圧は動圧そのもの Δp=½ρu² なので、u=√(2Δp/ρ) で流速に戻せる。</Caption>
    </figure>
  )
}

/* トリチェリ: 水位 h のタンクと側面の小孔 */
function TorricelliTank() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 320" role="img" aria-label="水位hのタンクと側面小孔からの流出">
        <defs>
          <marker id="to-ah" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
        </defs>
        {/* tank walls */}
        <path d="M120 60 L 120 270 L 360 270 L 360 60" fill="none" stroke="#334155" strokeWidth="2.5" />
        {/* water */}
        <rect x="120" y="90" width="240" height="180" fill="#dbeafe" />
        {/* free surface */}
        <line x1="120" y1="90" x2="360" y2="90" stroke="#2563eb" strokeWidth="2" />
        <text x="180" y="82" fontSize="13" fill="#14305f">① 自由表面: p₀, u₁≈0</text>
        {/* orifice on side near bottom */}
        <rect x="356" y="240" width="8" height="16" fill="#ffffff" stroke="#b91c1c" strokeWidth="1.5" />
        {/* jet */}
        <path d="M364 248 C 400 250 430 264 452 296" fill="none" stroke="#2563eb" strokeWidth="3" markerEnd="url(#to-ah)" />
        <text x="386" y="240" fontSize="13" fill="#14305f">② 小孔: p₀, u</text>
        {/* height h */}
        <line x1="90" y1="90" x2="90" y2="248" stroke="#b45309" strokeWidth="1.6" />
        <line x1="85" y1="90" x2="95" y2="90" stroke="#b45309" strokeWidth="1.6" />
        <line x1="85" y1="248" x2="95" y2="248" stroke="#b45309" strokeWidth="1.6" />
        <text x="62" y="172" fontSize="15" fill="#b45309" fontWeight="600">h</text>
        {/* datum */}
        <line x1="120" y1="248" x2="470" y2="248" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
        <text x="474" y="252" fontSize="11.5" fill="#64748b">基準 z=0</text>
        {/* result */}
        <text x="430" y="160" fontSize="16" fill="#b91c1c" textAnchor="middle" fontWeight="700">u = √(2gh)</text>
        <text x="430" y="184" fontSize="12.5" fill="#475569" textAnchor="middle">自由落下と同じ</text>
      </svg>
      <Caption>表面①と孔②はどちらも大気圧 p₀。タンクが大きく u₁≈0 とすると、両辺の p₀ が消え位置エネルギー ρgh が運動エネルギー ½ρu² に全変換 → <b>u=√(2gh)</b>。高さ h から落とした物体の速度と一致する。</Caption>
    </figure>
  )
}

/* 拡張ベルヌーイ: 2断面とエネルギー線(EL)・動水勾配線(HGL) */
function ExtendedBernoulliEL() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 320" role="img" aria-label="管路の2断面とエネルギー線・動水勾配線">
        <defs>
          <marker id="eb-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#475569" />
          </marker>
        </defs>
        {/* datum */}
        <line x1="50" y1="290" x2="600" y2="290" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
        <text x="54" y="305" fontSize="11.5" fill="#64748b">基準 z=0</text>
        {/* pipe */}
        <path d="M80 250 L 560 235" fill="none" stroke="#334155" strokeWidth="10" strokeLinecap="round" opacity="0.35" />
        <text x="300" y="270" fontSize="12.5" fill="#475569">管路（流れ →）</text>
        {/* EL: slightly downward (loss) */}
        <line x1="80" y1="80" x2="560" y2="130" stroke="#b91c1c" strokeWidth="2.4" />
        <text x="450" y="108" fontSize="13" fill="#b91c1c" fontWeight="600">EL（全ヘッド）</text>
        {/* HGL: below EL by velocity head */}
        <line x1="80" y1="135" x2="560" y2="175" stroke="#2563eb" strokeWidth="2.2" strokeDasharray="6 4" />
        <text x="430" y="195" fontSize="13" fill="#2563eb" fontWeight="600">HGL（p/ρg + z）</text>
        {/* section 1 verticals */}
        <line x1="140" y1="290" x2="140" y2="80" stroke="#cbd5e1" strokeWidth="1.2" />
        <line x1="140" y1="80" x2="140" y2="108" stroke="#16a34a" strokeWidth="6" />
        <text x="96" y="74" fontSize="12" fill="#16a34a">u₁²/2g</text>
        <line x1="140" y1="108" x2="140" y2="248" stroke="#0e7490" strokeWidth="6" />
        <text x="148" y="180" fontSize="12" fill="#0e7490">p₁/ρg</text>
        <line x1="140" y1="248" x2="140" y2="290" stroke="#a16207" strokeWidth="6" />
        <text x="148" y="276" fontSize="12" fill="#a16207">z₁</text>
        <text x="128" y="304" fontSize="13" fill="#14305f" fontWeight="600">①</text>
        {/* section 2 verticals */}
        <line x1="500" y1="290" x2="500" y2="123" stroke="#cbd5e1" strokeWidth="1.2" />
        <line x1="500" y1="123" x2="500" y2="167" stroke="#16a34a" strokeWidth="6" />
        <text x="508" y="140" fontSize="12" fill="#16a34a">u₂²/2g</text>
        <line x1="500" y1="167" x2="500" y2="240" stroke="#0e7490" strokeWidth="6" />
        <text x="508" y="208" fontSize="12" fill="#0e7490">p₂/ρg</text>
        <line x1="500" y1="240" x2="500" y2="290" stroke="#a16207" strokeWidth="6" />
        <text x="508" y="270" fontSize="12" fill="#a16207">z₂</text>
        <text x="492" y="304" fontSize="13" fill="#14305f" fontWeight="600">②</text>
        {/* head loss h_L between EL ideal and actual */}
        <line x1="560" y1="80" x2="560" y2="130" stroke="#b45309" strokeWidth="1.6" />
        <line x1="556" y1="80" x2="564" y2="80" stroke="#b45309" strokeWidth="1.6" />
        <line x1="556" y1="130" x2="564" y2="130" stroke="#b45309" strokeWidth="1.6" />
        <line x1="80" y1="80" x2="560" y2="80" stroke="#b45309" strokeWidth="1" strokeDasharray="4 3" />
        <text x="566" y="108" fontSize="13" fill="#b45309" fontWeight="600">h_L</text>
      </svg>
      <Caption>各ヘッド（速度 u²/2g・圧力 p/ρg・位置 z）を積み上げた高さが<b>EL</b>。理想なら水平だが、損失 h_L のぶん下流へ下がる。EL から速度ヘッドぶん下が<b>HGL</b>。①=②+h_L のエネルギー収支がそのまま図になる。</Caption>
    </figure>
  )
}

export default {
  'bernoulli-streamline': BernoulliStreamline,
  'total-static-dynamic': TotalStaticDynamic,
  'pitot-tube': PitotTube,
  'torricelli-tank': TorricelliTank,
  'extended-bernoulli-el': ExtendedBernoulliEL,
}
