import { Caption } from './index.jsx'

// 4. 抗力・揚力・境界層セクションの図。light テーマ前提の明示色で描画。

/* 抗力・揚力の定義: 物体に働く合力を流れ方向(抗力)と直交(揚力)に分解 */
function DragLiftDecomp() {
  const rows = [40, 70, 100, 160, 190, 220]
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 280" role="img" aria-label="物体まわりの流れと抗力・揚力の分解">
        <defs>
          <marker id="dl-flow" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#94a3b8" />
          </marker>
          <marker id="dl-drag" markerWidth="11" markerHeight="11" refX="7" refY="4" orient="auto">
            <path d="M0,0 L9,4 L0,8 Z" fill="#b91c1c" />
          </marker>
          <marker id="dl-lift" markerWidth="11" markerHeight="11" refX="7" refY="4" orient="auto">
            <path d="M0,0 L9,4 L0,8 Z" fill="#2563eb" />
          </marker>
        </defs>
        {/* 一様流 U */}
        {rows.map((y, i) => (
          <line key={i} x1="20" y1={y} x2="150" y2={y} stroke="#94a3b8" strokeWidth="2" markerEnd="url(#dl-flow)" />
        ))}
        <text x="40" y="18" fontSize="15" fill="#475569" fontWeight="700">一様流 U</text>
        {/* 物体（翼断面風の楕円） */}
        <ellipse cx="320" cy="130" rx="78" ry="34" fill="#e2e8f0" stroke="#334155" strokeWidth="2" transform="rotate(-12 320 130)" />
        <text x="320" y="135" fontSize="13" fill="#334155" textAnchor="middle">物体（面積 A）</text>
        {/* 合力の作用点 */}
        <circle cx="320" cy="130" r="4" fill="#0f172a" />
        {/* 抗力 F_D（流れ方向 = x） */}
        <line x1="320" y1="130" x2="470" y2="130" stroke="#b91c1c" strokeWidth="3.5" markerEnd="url(#dl-drag)" />
        <text x="476" y="135" fontSize="15" fill="#b91c1c" fontWeight="700">F_D（抗力, 流れ方向）</text>
        {/* 揚力 F_L（直交 = y 上向き） */}
        <line x1="320" y1="130" x2="320" y2="40" stroke="#2563eb" strokeWidth="3.5" markerEnd="url(#dl-lift)" />
        <text x="330" y="48" fontSize="15" fill="#2563eb" fontWeight="700">F_L（揚力, 直交）</text>
        {/* 合力 F（破線） */}
        <line x1="320" y1="130" x2="452" y2="50" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5 4" />
        <text x="455" y="46" fontSize="13" fill="#7c3aed">合力 F</text>
      </svg>
      <Caption>表面の圧力＋せん断を全部足した合力 <b>F</b> を、流れに平行な成分（<b style={{color:'#b91c1c'}}>抗力 F_D</b>）と垂直な成分（<b style={{color:'#2563eb'}}>揚力 F_L</b>）に分解する。各成分を動圧 ½ρU² と代表面積 A で割ったものが C_D, C_L。</Caption>
    </figure>
  )
}

/* 運動量欠損: 後流の速度プロファイル(欠損)と上流一様流 U */
function WakeDeficit() {
  // 上流: 一様 U。下流: ガウス状に欠損したプロファイル
  const U = 150 // 矢印長(px)= U
  const xUp = 110
  const xDn = 430
  const yc = 140 // 後流中心
  const ys = [50, 80, 110, 140, 170, 200, 230]
  const deficit = (y) => {
    const d = Math.exp(-Math.pow((y - yc) / 45, 2)) // 0..1
    return U * (1 - 0.7 * d) // 中心で30%まで落ちる
  }
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="物体後流の速度欠損プロファイル">
        <defs>
          <marker id="wk-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb" />
          </marker>
          <marker id="wk-ahg" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#94a3b8" />
          </marker>
        </defs>
        {/* 上流 面① 一様流 */}
        <text x={xUp} y="30" fontSize="14" fill="#475569" fontWeight="700" textAnchor="middle">面① 一様流 U</text>
        {ys.map((y, i) => (
          <line key={i} x1={xUp - U} y1={y} x2={xUp} y2={y} stroke="#94a3b8" strokeWidth="2" markerEnd="url(#wk-ahg)" />
        ))}
        <line x1={xUp} y1="40" x2={xUp} y2="245" stroke="#64748b" strokeWidth="1.5" />
        {/* 物体 */}
        <ellipse cx="270" cy={yc} rx="26" ry="40" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
        <text x="270" y={yc + 5} fontSize="12" fill="#334155" textAnchor="middle">物体</text>
        {/* 下流 面② 欠損プロファイル */}
        <text x={xDn} y="30" fontSize="14" fill="#1d4ed8" fontWeight="700" textAnchor="middle">面② 後流 u(y)</text>
        {ys.map((y, i) => (
          <line key={i} x1={xDn} y1={y} x2={xDn + deficit(y)} y2={y} stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#wk-ah)" />
        ))}
        <line x1={xDn} y1="40" x2={xDn} y2="245" stroke="#64748b" strokeWidth="1.5" />
        {/* プロファイル外形線 */}
        <polyline points={ys.map((y) => `${xDn + deficit(y)},${y}`).join(' ')} fill="none" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="5 4" />
        {/* 欠損 (U-u) の注記（中心） */}
        <line x1={xDn + deficit(yc)} y1={yc} x2={xDn + U} y2={yc} stroke="#b91c1c" strokeWidth="2.5" />
        <text x={xDn + U + 6} y={yc + 5} fontSize="13" fill="#b91c1c" fontWeight="700">U − u（欠損）</text>
        {/* y 軸ラベル */}
        <text x={xDn - 14} y="48" fontSize="13" fill="#64748b">y</text>
      </svg>
      <Caption>上流（面①）は一様流 U。下流（面②）は物体の影響で中心ほど速度が落ち、<b style={{color:'#b91c1c'}}>欠損 (U−u)</b> ができる。この欠損が運ぶ運動量が抗力そのもの: <b>F_D = ∫ρu(U−u)dy</b>。後流の外では u=U で被積分は 0。</Caption>
    </figure>
  )
}

/* C_D–Re 曲線(両対数)の概形: ストークス → 一定 → ドラッグクライシス */
function CdReCurve() {
  // 横軸 log10(Re) を -1..7、縦軸 log10(Cd) をプロット領域に写像
  const x0 = 70, x1 = 600, y0 = 230, y1 = 40
  const reMin = -1, reMax = 7
  const cdMin = -1.3, cdMax = 2.6 // log10(Cd)
  const X = (logRe) => x0 + (logRe - reMin) / (reMax - reMin) * (x1 - x0)
  const Y = (logCd) => y0 + (logCd - cdMin) / (cdMax - cdMin) * (y1 - y0)
  // ストークス域 Cd=24/Re → logCd = log24 - logRe
  const stokes = []
  for (let lr = -1; lr <= 1; lr += 0.25) stokes.push(`${X(lr)},${Y(Math.log10(24) - lr)}`)
  // 中間〜一定域 ~0.45、その後クライシスで急落、再上昇気味
  const main = [
    [1, 0.5], [2, 0.0], [3, -0.35], [4, -0.35], [5.0, -0.3],
    [5.3, -0.34], [5.5, -1.0], [5.6, -1.05], [6.0, -0.9], [7, -0.8],
  ].map(([lr, lc]) => `${X(lr)},${Y(lc)}`)
  const grid = [-1, 0, 1, 2, 3, 4, 5, 6, 7]
  const cdTicks = [[-1, '0.1'], [0, '1'], [1, '10'], [2, '100']]
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 280" role="img" aria-label="球の抗力係数とレイノルズ数の両対数グラフ">
        {/* 軸枠 */}
        <line x1={x0} y1={y0} x2={x1} y2={y0} stroke="#334155" strokeWidth="1.5" />
        <line x1={x0} y1={y0} x2={x0} y2={y1} stroke="#334155" strokeWidth="1.5" />
        {/* 縦グリッド(Re) */}
        {grid.map((lr) => (
          <g key={lr}>
            <line x1={X(lr)} y1={y0} x2={X(lr)} y2={y1} stroke="#eef2f7" strokeWidth="1" />
            <text x={X(lr)} y={y0 + 16} fontSize="10.5" fill="#64748b" textAnchor="middle">{`10${supr(lr)}`}</text>
          </g>
        ))}
        {/* 横グリッド(Cd) */}
        {cdTicks.map(([lc, lab]) => (
          <g key={lc}>
            <line x1={x0} y1={Y(lc)} x2={x1} y2={Y(lc)} stroke="#eef2f7" strokeWidth="1" />
            <text x={x0 - 8} y={Y(lc) + 4} fontSize="10.5" fill="#64748b" textAnchor="end">{lab}</text>
          </g>
        ))}
        {/* ストークス則の直線(傾き-1) */}
        <polyline points={stokes.join(' ')} fill="none" stroke="#16a34a" strokeWidth="2.4" />
        <text x={X(-0.4)} y={Y(1.9)} fontSize="12" fill="#16a34a" fontWeight="700">C_D = 24/Re</text>
        {/* 主曲線 */}
        <polyline points={main.join(' ')} fill="none" stroke="#2563eb" strokeWidth="2.8" />
        {/* 一定域ラベル */}
        <text x={X(3.4)} y={Y(-0.05)} fontSize="11.5" fill="#475569">≈0.4–0.5（はく離・一定）</text>
        {/* ドラッグクライシス注記 */}
        <line x1={X(5.45)} y1={Y(-0.34)} x2={X(5.55)} y2={Y(-1.0)} stroke="#b91c1c" strokeWidth="1" strokeDasharray="3 3" />
        <text x={X(5.5)} y={Y(-1.25)} fontSize="11.5" fill="#b91c1c" fontWeight="700" textAnchor="middle">ドラッグ</text>
        <text x={X(5.5)} y={Y(-1.25) + 14} fontSize="11.5" fill="#b91c1c" fontWeight="700" textAnchor="middle">クライシス</text>
        {/* 軸ラベル */}
        <text x={(x0 + x1) / 2} y={y0 + 34} fontSize="13" fill="#334155" textAnchor="middle" fontWeight="600">Re = Ud/ν</text>
        <text x={x0 - 30} y={(y0 + y1) / 2} fontSize="13" fill="#334155" textAnchor="middle" fontWeight="600" transform={`rotate(-90 ${x0 - 30} ${(y0 + y1) / 2})`}>C_D</text>
      </svg>
      <Caption>球の C_D–Re（両対数）。低Reは<b style={{color:'#16a34a'}}> 24/Re</b>（傾き −1）、中間域ははく離して <b>≈0.4–0.5</b> でほぼ一定、Re≈3×10⁵ で境界層が乱流化して <b style={{color:'#b91c1c'}}>急落（ドラッグクライシス）</b>。</Caption>
    </figure>
  )
}

// 上付き指数文字(10^n の n)を作る簡易ヘルパ
function supr(n) {
  const map = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷' }
  return String(n).split('').map((c) => map[c] || c).join('')
}

/* 境界層はく離の比較: 層流(早期はく離・広い後流) vs 乱流(遅延はく離・狭い後流) */
function SeparationCompare() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="層流境界層と乱流境界層のはく離比較">
        <defs>
          <marker id="sp-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#475569" />
          </marker>
        </defs>
        {/* 仕切り */}
        <line x1="320" y1="20" x2="320" y2="280" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* 左: 層流(早期はく離) */}
        <text x="160" y="34" fontSize="14" fill="#1d4ed8" fontWeight="700" textAnchor="middle">層流境界層</text>
        <text x="160" y="52" fontSize="11.5" fill="#475569" textAnchor="middle">はく離が早い → 広い後流</text>
        {/* 流入 */}
        {[90, 120].map((y, i) => (
          <line key={i} x1="20" y1={y} x2="70" y2={y} stroke="#94a3b8" strokeWidth="2" markerEnd="url(#sp-ah)" />
        ))}
        {/* 球(円) */}
        <circle cx="150" cy="150" r="55" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
        {/* はく離点(前寄り, 約90°位置) */}
        <circle cx="120" cy="100" r="4" fill="#b91c1c" />
        <circle cx="120" cy="200" r="4" fill="#b91c1c" />
        <text x="78" y="92" fontSize="11" fill="#b91c1c" fontWeight="700">はく離</text>
        {/* 広い後流(破線の包絡) */}
        <path d="M120 100 Q 230 70 280 60" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="6 4" />
        <path d="M120 200 Q 230 230 280 240" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="6 4" />
        <text x="235" y="155" fontSize="12" fill="#1d4ed8" textAnchor="middle">広い後流</text>
        <text x="235" y="172" fontSize="11" fill="#b91c1c" textAnchor="middle">→ C_D 大</text>

        {/* 右: 乱流(はく離遅延) */}
        <text x="480" y="34" fontSize="14" fill="#16a34a" fontWeight="700" textAnchor="middle">乱流境界層</text>
        <text x="480" y="52" fontSize="11.5" fill="#475569" textAnchor="middle">はく離が遅れる → 狭い後流</text>
        {[90, 120].map((y, i) => (
          <line key={i} x1="340" y1={y} x2="390" y2={y} stroke="#94a3b8" strokeWidth="2" markerEnd="url(#sp-ah)" />
        ))}
        <circle cx="470" cy="150" r="55" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
        {/* はく離点(後寄り, 約130°) */}
        <circle cx="495" cy="103" r="4" fill="#b91c1c" />
        <circle cx="495" cy="197" r="4" fill="#b91c1c" />
        <text x="500" y="96" fontSize="11" fill="#b91c1c" fontWeight="700">はく離（後方へ）</text>
        {/* 狭い後流 */}
        <path d="M495 103 Q 560 110 590 120" fill="none" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 4" />
        <path d="M495 197 Q 560 190 590 180" fill="none" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 4" />
        <text x="560" y="146" fontSize="12" fill="#16a34a" textAnchor="middle">狭い後流</text>
        <text x="560" y="163" fontSize="11" fill="#16a34a" textAnchor="middle">→ C_D 小</text>
      </svg>
      <Caption>逆圧力勾配に対し、<b style={{color:'#16a34a'}}>乱流境界層</b>は混合で壁近くまで運動量を運ぶため、<b style={{color:'#1d4ed8'}}>層流</b>より<b>はく離点が後方へ</b>ずれる。後流が狭まり圧力抗力が減る — これがドラッグクライシスとゴルフボールのディンプルの原理。</Caption>
    </figure>
  )
}

/* マグヌス効果: 回転円柱まわりの非対称流線と揚力の向き */
function MagnusFlow() {
  const cx = 300, cy = 150, a = 48
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="回転円柱まわりの非対称流れとマグヌス揚力">
        <defs>
          <marker id="mg-flow" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#94a3b8" />
          </marker>
          <marker id="mg-lift" markerWidth="11" markerHeight="11" refX="7" refY="4" orient="auto">
            <path d="M0,0 L9,4 L0,8 Z" fill="#2563eb" />
          </marker>
          <marker id="mg-spin" markerWidth="10" markerHeight="10" refX="5" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#b45309" />
          </marker>
        </defs>
        {/* 上面: 流線が詰まる(加速・低圧) */}
        <path d="M40 95 Q 200 70 300 70 T 560 95" fill="none" stroke="#2563eb" strokeWidth="2" markerEnd="url(#mg-flow)" />
        <path d="M40 110 Q 220 92 300 90 T 560 110" fill="none" stroke="#2563eb" strokeWidth="2" markerEnd="url(#mg-flow)" />
        <text x="120" y="78" fontSize="12" fill="#1d4ed8" fontWeight="700">上面: 加速 → 低圧</text>
        {/* 下面: 流線が広がる(減速・高圧) */}
        <path d="M40 205 Q 220 215 300 218 T 560 205" fill="none" stroke="#b91c1c" strokeWidth="2" markerEnd="url(#mg-flow)" />
        <path d="M40 225 Q 200 240 300 242 T 560 225" fill="none" stroke="#b91c1c" strokeWidth="2" markerEnd="url(#mg-flow)" />
        <text x="120" y="262" fontSize="12" fill="#b91c1c" fontWeight="700">下面: 減速 → 高圧</text>
        {/* 一様流の表示 */}
        <line x1="30" y1="150" x2="120" y2="150" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#mg-flow)" />
        <text x="40" y="142" fontSize="13" fill="#475569" fontWeight="700">U</text>
        {/* 円柱 */}
        <circle cx={cx} cy={cy} r={a} fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
        {/* 回転の矢印(反時計回り: 上面が流れ方向と同じ向きになるよう上が右へ) */}
        <path d={`M ${cx} ${cy - 26} A 26 26 0 1 1 ${cx - 26} ${cy}`} fill="none" stroke="#b45309" strokeWidth="2.4" markerEnd="url(#mg-spin)" />
        <text x={cx} y={cy + 6} fontSize="12" fill="#b45309" textAnchor="middle" fontWeight="700">Γ</text>
        {/* 揚力 F_L 上向き */}
        <line x1={cx} y1={cy} x2={cx} y2="40" stroke="#2563eb" strokeWidth="3.5" markerEnd="url(#mg-lift)" />
        <text x={cx + 8} y="50" fontSize="15" fill="#2563eb" fontWeight="700">F_L = ρUΓ</text>
      </svg>
      <Caption>回転（循環 <b style={{color:'#b45309'}}>Γ</b>）で上面は一様流と同じ向き → <b style={{color:'#1d4ed8'}}>加速・低圧</b>、下面は逆向き → <b style={{color:'#b91c1c'}}>減速・高圧</b>。上下の圧力差が<b style={{color:'#2563eb'}}>揚力 F_L=ρUΓ</b> を生む（クッタ・ジューコフスキー）。向きは U を Γ の向きへ 90° 回した側。</Caption>
    </figure>
  )
}

export default {
  'drag-lift-decomp': DragLiftDecomp,
  'wake-deficit': WakeDeficit,
  'cd-re-curve': CdReCurve,
  'separation-compare': SeparationCompare,
  'magnus-flow': MagnusFlow,
}
