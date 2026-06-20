import { Caption } from './index.jsx'

// 1. 運動量保存セクションの図。light テーマ前提の明示色で描画。
//    主線 #2563eb / 補助 #475569 / 強調 #b91c1c。

/* 検査体積の運動量方程式: 任意CV・流入出面の法線nと速度u・運動量フラックス */
function MomentumCV() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 320" role="img" aria-label="任意形状の検査体積を貫く運動量フラックス">
        <defs>
          <marker id="mcv-u" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
          <marker id="mcv-n" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#b91c1c" />
          </marker>
        </defs>
        {/* arbitrary control volume (blob) */}
        <path d="M250 70 C 360 50 470 90 470 160 C 470 240 380 270 300 255 C 220 240 200 200 210 150 C 216 115 215 82 250 70 Z"
          fill="#eaf1fe" stroke="#2563eb" strokeWidth="2" />
        <text x="338" y="165" fontSize="15" fill="#14305f" textAnchor="middle" fontWeight="600">検査体積 CV</text>
        <text x="338" y="188" fontSize="12.5" fill="#475569" textAnchor="middle">境界 = 検査面 CS</text>

        {/* inflow face: velocity u_in into the CV, normal n outward (points left/out) */}
        <line x1="120" y1="120" x2="212" y2="120" stroke="#2563eb" strokeWidth="3" markerEnd="url(#mcv-u)" />
        <text x="120" y="108" fontSize="14" fill="#1e293b">流入 u_in</text>
        <line x1="214" y1="150" x2="158" y2="150" stroke="#b91c1c" strokeWidth="2" markerEnd="url(#mcv-n)" />
        <text x="150" y="170" fontSize="13" fill="#b91c1c">n（外向き）</text>
        <text x="118" y="206" fontSize="12.5" fill="#14305f">u·n &lt; 0（流入）</text>

        {/* outflow face: velocity u_out leaving, normal n outward (points right) */}
        <line x1="468" y1="170" x2="560" y2="170" stroke="#2563eb" strokeWidth="3" markerEnd="url(#mcv-u)" />
        <text x="500" y="158" fontSize="14" fill="#1e293b">流出 u_out</text>
        <line x1="466" y1="200" x2="522" y2="200" stroke="#b91c1c" strokeWidth="2" markerEnd="url(#mcv-n)" />
        <text x="486" y="220" fontSize="13" fill="#b91c1c">n（外向き）</text>
        <text x="470" y="244" fontSize="12.5" fill="#14305f">u·n &gt; 0（流出）</text>

        {/* flux annotation */}
        <text x="320" y="295" fontSize="13.5" fill="#475569" textAnchor="middle">面を貫く運動量フラックス ρu(u·n)dA</text>
      </svg>
      <Caption>各検査面で<b>外向き法線 n</b> をとると、<b>u·n</b> の符号が流出（＋）／流入（−）を自動で振り分ける。面を通る質量流量 ρ(u·n)dA が運ぶ運動量 u·[ρ(u·n)dA] の総和（＋非定常項）が外力に等しい。これが以降すべての問題の出発点。</Caption>
    </figure>
  )
}

/* 噴流が平板に当たり左右に分かれる: 検査体積と反作用の力 */
function JetPlate() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="静止平板に垂直に当たる噴流と反力">
        <defs>
          <marker id="jp-u" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
          <marker id="jp-f" markerWidth="11" markerHeight="11" refX="7" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 Z" fill="#b91c1c" />
          </marker>
        </defs>
        {/* plate */}
        <rect x="470" y="60" width="16" height="180" fill="#94a3b8" />
        <text x="478" y="258" fontSize="12.5" fill="#64748b" textAnchor="middle">静止平板</text>

        {/* incoming jet */}
        <rect x="110" y="142" width="350" height="16" fill="#dbeafe" />
        <line x1="120" y1="150" x2="455" y2="150" stroke="#2563eb" strokeWidth="3" markerEnd="url(#jp-u)" />
        <text x="200" y="134" fontSize="14" fill="#14305f">噴流 u, 断面 A, Q = Au</text>

        {/* split flows along plate (up & down) */}
        <path d="M462 146 q 12 -6 14 -50 v -30" fill="none" stroke="#2563eb" strokeWidth="3" markerEnd="url(#jp-u)" />
        <path d="M462 154 q 12 6 14 50 v 30" fill="none" stroke="#2563eb" strokeWidth="3" markerEnd="url(#jp-u)" />
        <text x="500" y="80" fontSize="13" fill="#14305f">u（x成分 0）</text>
        <text x="500" y="226" fontSize="13" fill="#14305f">u（x成分 0）</text>

        {/* control volume dashed */}
        <rect x="118" y="50" width="360" height="200" fill="none" stroke="#475569" strokeWidth="1.3" strokeDasharray="6 5" />
        <text x="138" y="68" fontSize="12.5" fill="#475569">検査体積</text>

        {/* reaction force on plate */}
        <line x1="500" y1="150" x2="580" y2="150" stroke="#b91c1c" strokeWidth="3.5" markerEnd="url(#jp-f)" />
        <text x="540" y="138" fontSize="15" fill="#b91c1c" textAnchor="middle" fontWeight="700">F = ρQu</text>
      </svg>
      <Caption>入口の x 運動量は ρQ·u、出口は板に沿って流れるので <b>x 成分 0</b>。差 ρQu ぶんの運動量を板が消し、その反作用が板を押す力 <b>F = ρQu = ρAu²</b>。まわりは大気圧なので圧力力は打ち消し合う。</Caption>
    </figure>
  )
}

/* 噴流180°転向（バケット）: 入口+u, 出口-u の速度ベクトル */
function Jet180() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="180度転向する噴流と2倍の反力">
        <defs>
          <marker id="j180-u" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
          <marker id="j180-f" markerWidth="11" markerHeight="11" refX="7" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 Z" fill="#b91c1c" />
          </marker>
        </defs>
        {/* bucket (U shape) */}
        <path d="M470 70 a 90 90 0 0 1 0 160 L 470 230 L 470 200 a 60 60 0 0 0 0 -120 L 470 70 Z"
          fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
        <text x="505" y="155" fontSize="12.5" fill="#475569" textAnchor="middle">椀（バケット）</text>

        {/* incoming jet +u */}
        <line x1="120" y1="110" x2="455" y2="110" stroke="#2563eb" strokeWidth="3" markerEnd="url(#j180-u)" />
        <text x="180" y="96" fontSize="14" fill="#14305f">入口 +u</text>

        {/* U-turn path */}
        <path d="M458 114 a 46 46 0 0 1 0 76" fill="none" stroke="#2563eb" strokeWidth="3" />

        {/* outgoing jet -u */}
        <line x1="455" y1="190" x2="120" y2="190" stroke="#2563eb" strokeWidth="3" markerEnd="url(#j180-u)" />
        <text x="180" y="212" fontSize="14" fill="#14305f">出口 −u（真後ろ）</text>

        {/* reaction force */}
        <line x1="500" y1="150" x2="590" y2="150" stroke="#b91c1c" strokeWidth="3.5" markerEnd="url(#j180-f)" />
        <text x="545" y="138" fontSize="15" fill="#b91c1c" textAnchor="middle" fontWeight="700">F = 2ρQu</text>

        {/* momentum change note */}
        <text x="250" y="260" fontSize="13" fill="#475569" textAnchor="middle">運動量変化: (+u) → (−u) = 2u ぶん</text>
      </svg>
      <Caption>入口 +u・出口 −u（同じ大きさ逆向き）なので運動量は <b>2u ぶん</b>変化する。平板（u→0、変化 u）の<b>ちょうど2倍</b>: F = ρQ(u−(−u)) = <b>2ρQu</b>。「止める」より「跳ね返す」方が壁を強く押す。</Caption>
    </figure>
  )
}

/* ロータ推力: 流管が絞られ u0→u1→u2、ディスク前後の圧力ジャンプ */
function RotorThrust() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 320" role="img" aria-label="アクチュエータディスクを通る流管と速度・圧力変化">
        <defs>
          <marker id="rt-u" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
        </defs>
        {/* streamtube (contracting downstream as flow accelerates) */}
        <path d="M60 90 C 200 90 250 110 320 110 C 420 110 470 122 580 130"
          fill="none" stroke="#475569" strokeWidth="1.6" strokeDasharray="6 5" />
        <path d="M60 230 C 200 230 250 210 320 210 C 420 210 470 198 580 190"
          fill="none" stroke="#475569" strokeWidth="1.6" strokeDasharray="6 5" />

        {/* disk */}
        <line x1="320" y1="104" x2="320" y2="216" stroke="#b91c1c" strokeWidth="5" />
        <text x="320" y="240" fontSize="13" fill="#b91c1c" textAnchor="middle" fontWeight="600">ディスク S</text>

        {/* velocities */}
        <line x1="70" y1="160" x2="135" y2="160" stroke="#2563eb" strokeWidth="3" markerEnd="url(#rt-u)" />
        <text x="92" y="148" fontSize="14" fill="#14305f">u₀</text>
        <line x1="288" y1="160" x2="352" y2="160" stroke="#2563eb" strokeWidth="3" markerEnd="url(#rt-u)" />
        <text x="320" y="150" fontSize="13.5" fill="#14305f" textAnchor="middle">u₁</text>
        <line x1="500" y1="160" x2="585" y2="160" stroke="#2563eb" strokeWidth="3.4" markerEnd="url(#rt-u)" />
        <text x="540" y="148" fontSize="14" fill="#14305f">u₂ &gt; u₀</text>

        {/* pressure jump annotation */}
        <text x="300" y="285" fontSize="13" fill="#b91c1c" textAnchor="end">圧力 直前↓ p⁻</text>
        <text x="340" y="285" fontSize="13" fill="#b91c1c" textAnchor="start">直後↑ p⁺</text>
        <text x="320" y="305" fontSize="12.5" fill="#475569" textAnchor="middle">Δp = ½ρ(u₂² − u₀²),  u₁ = (u₀+u₂)/2</text>
      </svg>
      <Caption>流管の質量流量 ṁ = ρSu₁ は一定。推力は運動量から T = ṁ(u₂−u₀)、圧力からは T = ΔpS。ベルヌーイは<b>ディスクを跨げない</b>ので上流・下流で別々に立て、2つの推力表式を等置すると <b>u₁ = (u₀+u₂)/2</b>（ディスク面速度＝上下流の平均）。</Caption>
    </figure>
  )
}

/* 浅水波: 波に乗った系での段差をはさむ流入出、水深Dと微小変化δD */
function ShallowWave() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="波に乗った系で見た浅水波の段差と流入出">
        <defs>
          <marker id="sw-u" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
          <marker id="sw-d" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
            <path d="M4,0 L8,4 L4,8 L0,4 Z" fill="#475569" />
          </marker>
        </defs>
        {/* bed */}
        <rect x="60" y="230" width="520" height="12" fill="#a8a29e" />
        <text x="320" y="262" fontSize="12.5" fill="#78716c" textAnchor="middle">底（波に乗った系：波は静止、流れが定常）</text>

        {/* water: upstream depth D (right, shallower), step up to D+δD (left, deeper) */}
        <path d="M60 120 L 330 120 L 330 150 L 580 150 L 580 230 L 60 230 Z"
          fill="#dbeafe" stroke="#2563eb" strokeWidth="1.6" />
        <line x1="330" y1="120" x2="330" y2="150" stroke="#2563eb" strokeWidth="1.6" />

        {/* upstream (right side) inflow toward step: speed c, depth D */}
        <line x1="560" y1="190" x2="470" y2="190" stroke="#2563eb" strokeWidth="3" markerEnd="url(#sw-u)" />
        <text x="515" y="178" fontSize="14" fill="#14305f" textAnchor="middle">流速 c</text>
        <line x1="572" y1="155" x2="572" y2="225" stroke="#475569" strokeWidth="1.4" markerStart="url(#sw-d)" markerEnd="url(#sw-d)" />
        <text x="595" y="195" fontSize="14" fill="#14305f">D</text>

        {/* downstream (left side) outflow: speed c-δu, depth D+δD */}
        <line x1="240" y1="190" x2="150" y2="190" stroke="#2563eb" strokeWidth="3" markerEnd="url(#sw-u)" />
        <text x="195" y="210" fontSize="13.5" fill="#14305f" textAnchor="middle">c − δu</text>
        <line x1="78" y1="125" x2="78" y2="225" stroke="#475569" strokeWidth="1.4" markerStart="url(#sw-d)" markerEnd="url(#sw-d)" />
        <text x="92" y="118" fontSize="13.5" fill="#14305f">D+δD</text>

        {/* step label */}
        <text x="330" y="108" fontSize="13" fill="#b91c1c" textAnchor="middle">微小段差 δD</text>
      </svg>
      <Caption>波に乗った系では波が止まり、右から水深 D・流速 c で流れ込み、段差 δD を越えると水深 D+δD・流速 c−δu に変わる。質量保存 δu = cδD/D と運動量保存 gδD = cδu を連立すると <b>c = √(gD)</b>。水深だけで決まる＝非分散。</Caption>
    </figure>
  )
}

export default {
  'momentum-cv': MomentumCV,
  'jet-plate': JetPlate,
  'jet-180': Jet180,
  'rotor-thrust': RotorThrust,
  'shallow-wave': ShallowWave,
}
