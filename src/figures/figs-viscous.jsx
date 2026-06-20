import { Caption } from './index.jsx'

// 3. 粘性層流セクションの図。light テーマ前提の明示色で描画。
//    主線 #2563eb / 補助 #475569,#94a3b8 / 強調 #b91c1c / 重力 #16a34a。

/* NS各項: 流体粒子に働く力（圧力・粘性・重力）と慣性のバランス */
function NSTerms() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 320" role="img" aria-label="流体粒子に働く圧力・粘性・重力と慣性のバランス">
        <defs>
          <marker id="ns-blue" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
          <marker id="ns-red" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#b91c1c" />
          </marker>
          <marker id="ns-green" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a" />
          </marker>
          <marker id="ns-amber" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#b45309" />
          </marker>
        </defs>
        {/* fluid particle */}
        <rect x="270" y="120" width="100" height="80" rx="8" fill="#eaf1fe" stroke="#2563eb" strokeWidth="2" />
        <text x="320" y="158" fontSize="14" fill="#14305f" textAnchor="middle" fontWeight="600">流体粒子</text>
        <text x="320" y="178" fontSize="12.5" fill="#475569" textAnchor="middle">ρ dV</text>

        {/* pressure: 高圧側から押す（左→右） */}
        <line x1="150" y1="160" x2="266" y2="160" stroke="#2563eb" strokeWidth="3" markerEnd="url(#ns-blue)" />
        <text x="150" y="148" fontSize="13.5" fill="#1d4ed8" fontWeight="600">−∇p（圧力）</text>
        <text x="150" y="200" fontSize="12" fill="#475569">高圧→低圧へ押す</text>

        {/* pressure right face push back */}
        <line x1="490" y1="160" x2="374" y2="160" stroke="#2563eb" strokeWidth="2" markerEnd="url(#ns-blue)" opacity="0.55" />
        <text x="412" y="148" fontSize="12" fill="#1d4ed8" opacity="0.8">p|x+dx</text>

        {/* viscous: せん断（上下の層がこする） */}
        <line x1="270" y1="108" x2="370" y2="108" stroke="#b45309" strokeWidth="2.6" markerEnd="url(#ns-amber)" />
        <line x1="370" y1="212" x2="270" y2="212" stroke="#b45309" strokeWidth="2.6" markerEnd="url(#ns-amber)" />
        <text x="320" y="98" fontSize="13" fill="#b45309" textAnchor="middle" fontWeight="600">μ∇²u（粘性）</text>
        <text x="320" y="232" fontSize="12" fill="#92651a" textAnchor="middle">隣の層がこすり、凸凹をならす</text>

        {/* gravity */}
        <line x1="320" y1="200" x2="320" y2="270" stroke="#16a34a" strokeWidth="3" markerEnd="url(#ns-green)" />
        <text x="332" y="262" fontSize="13.5" fill="#15803d" fontWeight="600">ρg（重力）</text>

        {/* inertia label = sum */}
        <text x="320" y="300" fontSize="13.5" fill="#b91c1c" textAnchor="middle" fontWeight="700">合力 = ρ·Du/Dt（慣性：非定常 + 対流）</text>
      </svg>
      <Caption>NSは流体粒子の <b>m a = F</b>。左辺の慣性 <b>ρ(∂u/∂t + u·∇u)</b> が、右辺の<b>圧力 −∇p</b>・<b>粘性 μ∇²u</b>・<b>重力 ρg</b> の合力に等しい。慣性÷粘性 = <b>Re = ρUL/μ</b>。Re が小さい層流では対流項を落とせ、各流れで「定常・完全発達・平行流」を課して残った項だけ解く。</Caption>
    </figure>
  )
}

/* クエット流れ: 上壁がUで動く2平板間の直線速度プロファイル */
function CouetteProfile() {
  const ys = [40, 70, 100, 130, 160] // 上(速)→下(遅)
  // u = U/h y ; 上壁 y=h で U, 下壁 y=0 で 0。図では上=動壁。
  const lens = [180, 135, 90, 45, 0] // 上ほど長い矢印（速い）
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 230" role="img" aria-label="上壁がUで動くクエット流れの直線速度分布">
        <defs>
          <marker id="cou-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb" />
          </marker>
          <marker id="cou-wall" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#b91c1c" />
          </marker>
        </defs>
        {/* moving top wall */}
        <rect x="120" y="20" width="380" height="12" fill="#b91c1c" />
        <line x1="360" y1="14" x2="470" y2="14" stroke="#b91c1c" strokeWidth="2.5" markerEnd="url(#cou-wall)" />
        <text x="475" y="18" fontSize="14" fill="#b91c1c" fontWeight="700">U</text>
        <text x="130" y="14" fontSize="12.5" fill="#b91c1c">上壁が U で移動（y=h, u=U）</text>
        {/* fixed bottom wall */}
        <rect x="120" y="178" width="380" height="12" fill="#94a3b8" />
        <text x="130" y="208" fontSize="12.5" fill="#64748b">下壁 静止（y=0, u=0）</text>
        {/* velocity arrows */}
        {ys.map((y, i) => (
          <line key={i} x1="120" y1={y} x2={120 + lens[i]} y2={y} stroke="#2563eb" strokeWidth="2.3" markerEnd="url(#cou-ah)" />
        ))}
        {/* straight profile line */}
        <polyline points={ys.map((y, i) => `${120 + lens[i]},${y}`).join(' ')} fill="none" stroke="#1e3a8a" strokeWidth="2.4" />
        <text x="320" y="120" fontSize="15" fill="#14305f" fontWeight="600">u(y) = (U/h) y</text>
        {/* y axis */}
        <line x1="120" y1="178" x2="120" y2="20" stroke="#64748b" strokeWidth="1.3" />
        <text x="104" y="105" fontSize="13" fill="#64748b">y</text>
      </svg>
      <Caption>圧力勾配ゼロ＋上壁駆動 → <b>d²u/dy² = 0</b> なので速度は壁から壁へ<b>直線</b>。勾配 du/dy = U/h が一定だから、せん断応力 <b>τ = μU/h</b> も流体内どこでも一定。</Caption>
    </figure>
  )
}

/* 平板ポアズイユ: 静止2平板間の放物線プロファイルと圧力勾配 */
function PoiseuillePlatesProfile() {
  const cy = 115 // 中央 y=0 の描画位置
  const half = 80 // h/2 の描画長
  // 放物線: 速度 ∝ (1 - (y/(h/2))^2)。最大長 maxLen を中央に。
  const maxLen = 200
  const rows = []
  for (let k = -4; k <= 4; k++) {
    const yn = k / 4 // -1..1
    const y = cy + yn * half
    const len = maxLen * (1 - yn * yn)
    rows.push({ y, len })
  }
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 250" role="img" aria-label="静止2平板間ポアズイユ流れの放物線速度分布">
        <defs>
          <marker id="poi-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb" />
          </marker>
          <marker id="poi-p" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a" />
          </marker>
        </defs>
        {/* walls */}
        <rect x="120" y={cy - half - 12} width="360" height="12" fill="#94a3b8" />
        <rect x="120" y={cy + half} width="360" height="12" fill="#94a3b8" />
        <text x="128" y={cy - half - 18} fontSize="12" fill="#64748b">壁 y = +h/2（u=0）</text>
        <text x="128" y={cy + half + 26} fontSize="12" fill="#64748b">壁 y = −h/2（u=0）</text>
        {/* velocity arrows */}
        {rows.map((r, i) => (
          <line key={i} x1="120" y1={r.y} x2={120 + r.len} y2={r.y} stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#poi-ah)" />
        ))}
        {/* parabola */}
        <path d={`M120 ${cy - half} Q ${120 + maxLen * 2} ${cy} 120 ${cy + half}`} fill="none" stroke="#1e3a8a" strokeWidth="2.4" />
        {/* center line */}
        <line x1="120" y1={cy} x2="490" y2={cy} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <text x="332" y={cy - 6} fontSize="13.5" fill="#14305f">u_max（中央 y=0）</text>
        {/* pressure gradient */}
        <line x1="150" y1="232" x2="300" y2="232" stroke="#16a34a" strokeWidth="3" markerEnd="url(#poi-p)" />
        <text x="306" y="236" fontSize="12.5" fill="#15803d" fontWeight="600">−dp/dx &gt; 0（圧力で押す向き）</text>
      </svg>
      <Caption>静止壁＋一定の圧力勾配 → <b>μ d²u/dy² = dp/dx</b>（右辺が定数）なので速度は<b>放物線</b>。中央で最大、両壁で0。平均速度は最大の <b>2/3</b>、幅 b あたり流量は <b>Q = b h³(−dp/dx)/12μ</b>。</Caption>
    </figure>
  )
}

/* ハーゲン・ポアズイユ: 同軸円柱の力のつり合い */
function HPShell() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 260" role="img" aria-label="円管内の同軸円柱にかかる圧力差と粘性力のつり合い">
        <defs>
          <marker id="hp-blue" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
          <marker id="hp-amber" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#b45309" />
          </marker>
        </defs>
        {/* pipe walls */}
        <rect x="100" y="40" width="440" height="10" fill="#94a3b8" />
        <rect x="100" y="210" width="440" height="10" fill="#94a3b8" />
        <text x="106" y="34" fontSize="12" fill="#64748b">管壁 r = a（u=0）</text>
        {/* axis */}
        <line x1="100" y1="130" x2="560" y2="130" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5 4" />
        <text x="546" y="124" fontSize="12" fill="#94a3b8">軸 r=0</text>
        {/* coaxial cylinder */}
        <rect x="200" y="95" width="220" height="70" fill="#eaf1fe" stroke="#2563eb" strokeWidth="1.8" />
        <text x="310" y="120" fontSize="13" fill="#14305f" textAnchor="middle" fontWeight="600">同軸円柱（半径 r, 長さ L）</text>
        {/* radius bracket */}
        <line x1="200" y1="130" x2="200" y2="165" stroke="#1d4ed8" strokeWidth="1.2" strokeDasharray="3 3" />
        <text x="186" y="152" fontSize="12" fill="#1d4ed8">r</text>
        {/* pressure force forward */}
        <line x1="150" y1="130" x2="198" y2="130" stroke="#2563eb" strokeWidth="3" markerEnd="url(#hp-blue)" />
        <text x="120" y="118" fontSize="12.5" fill="#1d4ed8" fontWeight="600">p·πr²</text>
        <line x1="470" y1="130" x2="422" y2="130" stroke="#2563eb" strokeWidth="2" markerEnd="url(#hp-blue)" opacity="0.55" />
        <text x="476" y="118" fontSize="12" fill="#1d4ed8" opacity="0.8">(p−Δp)·πr²</text>
        {/* viscous on lateral surface (backward, both top edges) */}
        <line x1="370" y1="92" x2="270" y2="92" stroke="#b45309" strokeWidth="2.6" markerEnd="url(#hp-amber)" />
        <line x1="370" y1="168" x2="270" y2="168" stroke="#b45309" strokeWidth="2.6" markerEnd="url(#hp-amber)" />
        <text x="320" y="84" fontSize="12.5" fill="#b45309" textAnchor="middle" fontWeight="600">粘性 τ·2πrL（外側の遅い流体が引き止める）</text>
        <text x="320" y="248" fontSize="13" fill="#475569" textAnchor="middle">つり合い: (−dp/dx)L·πr² = |τ(r)|·2πrL ⇒ |τ| = (r/2)(−dp/dx)</text>
      </svg>
      <Caption>半径 r の同軸円柱で力をつり合わせる。端面を押す<b>圧力差</b>と、側面で外側の遅い流体が引き止める<b>粘性</b>が拮抗。τ = (r/2)(−dp/dx) に <b>τ = μ du/dr</b> を入れて積分すると放物線が出る。</Caption>
    </figure>
  )
}

/* ハーゲン・ポアズイユ: 円管断面の放物線（回転放物面）分布 */
function HPProfile() {
  const cy = 120
  const a = 90 // 管半径の描画長
  const maxLen = 210
  const rows = []
  for (let k = -4; k <= 4; k++) {
    const rn = k / 4
    const y = cy + rn * a
    const len = maxLen * (1 - rn * rn)
    rows.push({ y, len })
  }
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 260" role="img" aria-label="円管層流の放物線速度分布">
        <defs>
          <marker id="hpp-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb" />
          </marker>
        </defs>
        {/* walls */}
        <rect x="120" y={cy - a - 12} width="360" height="12" fill="#94a3b8" />
        <rect x="120" y={cy + a} width="360" height="12" fill="#94a3b8" />
        <text x="128" y={cy - a - 18} fontSize="12" fill="#64748b">管壁 r = a（u=0）</text>
        <text x="128" y={cy + a + 26} fontSize="12" fill="#64748b">管壁 r = a（u=0）</text>
        {/* axis */}
        <line x1="120" y1={cy} x2="480" y2={cy} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <text x="486" y={cy + 4} fontSize="12" fill="#94a3b8">軸 r=0</text>
        {/* arrows */}
        {rows.map((r, i) => (
          <line key={i} x1="120" y1={r.y} x2={120 + r.len} y2={r.y} stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#hpp-ah)" />
        ))}
        {/* parabola */}
        <path d={`M120 ${cy - a} Q ${120 + maxLen * 2} ${cy} 120 ${cy + a}`} fill="none" stroke="#1e3a8a" strokeWidth="2.4" />
        <text x="345" y={cy - 6} fontSize="14" fill="#14305f">u_max =（a²/4μ)(−dp/dx)</text>
        <text x="250" y={cy + a - 8} fontSize="13" fill="#14305f">u(r) ∝ (a²−r²)</text>
      </svg>
      <Caption>解は中心が最も速い<b>放物線</b>（断面では回転放物面）。円環 2πr dr で積分すると <b>Q = πa⁴(−dp/dx)/8μ</b>、流量は半径の<b>4乗</b>に効く。平均速度は最大の <b>1/2</b>（平板の 2/3 と違う）。</Caption>
    </figure>
  )
}

/* 液膜流れ: 傾斜壁を流れ落ちる厚さδの膜と2つの境界条件 */
function FilmProfile() {
  // 傾斜壁を描く。壁に沿うx, 壁から垂直にy。
  // 単純化のため鉛直に近い断面で、壁=左、自由表面=右の半放物線。
  const rows = []
  // y=0(壁) → y=δ(表面)。u ∝ (δy - y²/2) は表面で最大、壁で0、表面で勾配0。
  const top = 50
  const bot = 200
  const n = 6
  for (let i = 0; i <= n; i++) {
    const yn = i / n // 0..1 を壁→表面に
    const len = 200 * (yn - 0.5 * yn * yn) / 0.5 // 正規化: 最大(yn=1)で 200
    const x = 150 + yn * 0 // 矢印は壁から水平に出す
    const yy = bot - yn * (bot - top)
    rows.push({ yy, len })
  }
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 260" role="img" aria-label="傾斜壁を流れ落ちる液膜の速度分布と境界条件">
        <defs>
          <marker id="film-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb" />
          </marker>
          <marker id="film-g" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a" />
          </marker>
        </defs>
        {/* solid wall (left, vertical-ish) */}
        <rect x="138" y="40" width="12" height="170" fill="#94a3b8" />
        <text x="60" y="130" fontSize="12.5" fill="#64748b">壁</text>
        <text x="40" y="148" fontSize="11.5" fill="#b91c1c">u=0（滑りなし）</text>
        {/* velocity arrows from wall */}
        {rows.map((r, i) => (
          <line key={i} x1="150" y1={r.yy} x2={150 + r.len} y2={r.yy} stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#film-ah)" />
        ))}
        {/* profile curve (half parabola, vertex at free surface top) */}
        <path d={`M150 ${200} Q 250 ${125} 350 ${50}`} fill="none" stroke="#1e3a8a" strokeWidth="2.4" />
        {/* free surface line */}
        <line x1="350" y1="40" x2="350" y2="210" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="6 4" />
        <text x="358" y="80" fontSize="12.5" fill="#0369a1" fontWeight="600">自由表面 y=δ</text>
        <text x="358" y="100" fontSize="11.5" fill="#0369a1">τ = μ du/dy = 0</text>
        <text x="358" y="120" fontSize="11.5" fill="#475569">（空気は引きずらない）</text>
        {/* thickness bracket */}
        <line x1="150" y1="225" x2="350" y2="225" stroke="#475569" strokeWidth="1.2" />
        <text x="240" y="243" fontSize="12.5" fill="#475569">膜厚 δ</text>
        {/* gravity */}
        <line x1="470" y1="70" x2="470" y2="160" stroke="#16a34a" strokeWidth="3" markerEnd="url(#film-g)" />
        <text x="482" y="120" fontSize="13" fill="#15803d" fontWeight="600">g</text>
        <text x="430" y="190" fontSize="12" fill="#15803d">駆動 = ρg sinθ</text>
      </svg>
      <Caption>駆動は重力の壁に沿う成分 <b>ρg sinθ</b>。境界条件が非対称で、<b>壁は u=0</b>・<b>自由表面は du/dy=0</b>（空気が引きずらない＝せん断ゼロ）。表面が最速で勾配ゼロの半放物線。表面速度 u_s = ρg sinθ·δ²/2μ、平均は 2/3 u_s。</Caption>
    </figure>
  )
}

export default {
  'ns-terms': NSTerms,
  'couette-profile': CouetteProfile,
  'poiseuille-plates-profile': PoiseuillePlatesProfile,
  'hp-shell': HPShell,
  'hp-profile': HPProfile,
  'film-profile': FilmProfile,
}
