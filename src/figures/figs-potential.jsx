import { Caption } from './index.jsx'

// 5. ポテンシャル流れの図。light テーマ前提の明示色で描画。
//   主線 #2563eb / 補助 #475569 / 強調 #b91c1c / ポテンシャル線 #16a34a

/* 1. 等ポテンシャル線 φ=const と流線 ψ=const の直交格子 */
function PotentialGrid() {
  const phi = [120, 200, 280, 360, 440, 520] // φ=const（流れに垂直）
  const psi = [60, 105, 150, 195, 240]       // ψ=const（流線）
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="等ポテンシャル線と流線の直交格子">
        <defs>
          <marker id="pg-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb" />
          </marker>
        </defs>
        {/* 流線 ψ=const（水平・流れ方向、矢印つき） */}
        {psi.map((y, i) => (
          <line key={`s${i}`} x1="90" y1={y} x2="560" y2={y} stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#pg-ah)" />
        ))}
        {/* 等ポテンシャル線 φ=const（鉛直、流線に直交） */}
        {phi.map((x, i) => (
          <line key={`p${i}`} x1={x} y1="45" x2={x} y2="255" stroke="#16a34a" strokeWidth="2.2" strokeDasharray="6 4" />
        ))}
        {/* 直交マーク（1か所） */}
        <rect x="280" y="150" width="10" height="10" fill="none" stroke="#b91c1c" strokeWidth="1.6" />
        <text x="300" y="140" fontSize="13" fill="#b91c1c">90°</text>
        {/* labels */}
        <text x="566" y="64" fontSize="14" fill="#1d4ed8" fontWeight="600">ψ = const（流線）</text>
        <text x="445" y="40" fontSize="14" fill="#15803d" fontWeight="600">φ = const</text>
        <text x="445" y="278" fontSize="12.5" fill="#15803d">等ポテンシャル線</text>
      </svg>
      <Caption>速度ポテンシャル φ の等値線（緑破線）と流れ関数 ψ の等値線＝<b>流線</b>（青）。コーシー・リーマンの関係 φₓ=ψ_y, φ_y=−ψₓ から両者は<b>至る所で直交</b>する。流れに沿う向きが ψ=const、それに垂直な等高線が φ=const。</Caption>
    </figure>
  )
}

/* 2. 一様流＋ダブレット → 円柱まわりの流れ（重ね合わせ） */
function CylinderSuperpose() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="一様流とダブレットの重ね合わせで円柱流れ">
        <defs>
          <marker id="cs-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb" />
          </marker>
        </defs>
        {/* 左: 一様流 */}
        <text x="95" y="35" fontSize="14" fill="#1d4ed8" textAnchor="middle" fontWeight="600">一様流 Uz</text>
        {[70, 110, 150, 190, 230].map((y, i) => (
          <line key={i} x1="30" y1={y} x2="160" y2={y} stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#cs-ah)" />
        ))}
        {/* + */}
        <text x="190" y="160" fontSize="26" fill="#475569" textAnchor="middle">+</text>
        {/* 中: ダブレット */}
        <text x="290" y="35" fontSize="14" fill="#b91c1c" textAnchor="middle" fontWeight="600">ダブレット μ/z</text>
        <circle cx="290" cy="150" r="3" fill="#b91c1c" />
        {[34, 58, 82].map((r, i) => (
          <circle key={`a${i}`} cx={290 - r * 0.55} cy="150" r={r * 0.55} fill="none" stroke="#dc7a7a" strokeWidth="1.6" />
        ))}
        {[34, 58, 82].map((r, i) => (
          <circle key={`b${i}`} cx={290 + r * 0.55} cy="150" r={r * 0.55} fill="none" stroke="#dc7a7a" strokeWidth="1.6" />
        ))}
        {/* = */}
        <text x="370" y="160" fontSize="26" fill="#475569" textAnchor="middle">=</text>
        {/* 右: 円柱流れ */}
        <text x="510" y="35" fontSize="14" fill="#14305f" textAnchor="middle" fontWeight="600">円柱まわり W=U(z+a²/z)</text>
        <circle cx="510" cy="150" r="40" fill="#eaf1fe" stroke="#14305f" strokeWidth="2" />
        <text x="510" y="155" fontSize="13" fill="#14305f" textAnchor="middle">a</text>
        {/* streamlines bending around cylinder */}
        {[60, 95, 205, 240].map((y, i) => (
          <line key={`f${i}`} x1="420" y1={y} x2="600" y2={y} stroke="#2563eb" strokeWidth="2" markerEnd="url(#cs-ah)" />
        ))}
        <path d="M420 150 Q470 150 478 120 Q495 95 555 95" fill="none" stroke="#2563eb" strokeWidth="2" />
        <path d="M420 150 Q470 150 478 180 Q495 205 555 205" fill="none" stroke="#2563eb" strokeWidth="2" />
        <path d="M555 95 Q545 150 555 205" fill="none" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cs-ah)" opacity="0" />
      </svg>
      <Caption>ラプラス方程式は線形なので<b>重ね合わせ</b>が効く。一様流 Uz とダブレット μ/z を足し、μ=Ua² と選ぶと半径 a の円がちょうど流線になる → その円を固体円柱とみなせば円柱まわりの流れ。</Caption>
    </figure>
  )
}

/* 3. 円柱表面の速度・よどみ点・最大速度点 */
function CylinderSurface() {
  const cx = 320, cy = 150, a = 80
  // 表面接線速度ベクトル u_θ = -2U sinθ（大きさ ∝ |sinθ|）
  const angs = [30, 60, 90, 120, 150, 210, 240, 270, 300, 330]
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="円柱表面の速度分布とよどみ点">
        <defs>
          <marker id="cu-ah" markerWidth="8" markerHeight="8" refX="6" refY="3.2" orient="auto">
            <path d="M0,0 L6.5,3.2 L0,6.4 Z" fill="#2563eb" />
          </marker>
        </defs>
        {/* incoming uniform flow */}
        {[70, 230].map((y, i) => (
          <line key={i} x1="20" y1={y} x2="120" y2={y} stroke="#94a3b8" strokeWidth="2" markerEnd="url(#cu-ah)" />
        ))}
        <text x="40" y="58" fontSize="13" fill="#64748b">U</text>
        {/* cylinder */}
        <circle cx={cx} cy={cy} r={a} fill="#eaf1fe" stroke="#14305f" strokeWidth="2" />
        {/* tangential velocity arrows on surface */}
        {angs.map((deg, i) => {
          const t = (deg * Math.PI) / 180
          const px = cx + a * Math.cos(t)
          const py = cy - a * Math.sin(t)
          const mag = 34 * Math.abs(Math.sin(t))
          // tangent direction (-sinθ, -cosθ) gives flow sense over top toward +x
          const tx = -Math.sin(t), ty = -Math.cos(t)
          return (
            <line key={i} x1={px} y1={py} x2={px + mag * tx} y2={py - mag * ty}
              stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#cu-ah)" />
          )
        })}
        {/* stagnation points θ=0, π */}
        <circle cx={cx + a} cy={cy} r="5" fill="#b91c1c" />
        <circle cx={cx - a} cy={cy} r="5" fill="#b91c1c" />
        <text x={cx - a - 10} y={cy + 26} fontSize="12.5" fill="#b91c1c" textAnchor="end">前よどみ点 θ=π</text>
        <text x={cx + a + 10} y={cy + 26} fontSize="12.5" fill="#b91c1c">後よどみ点 θ=0</text>
        {/* max speed points top/bottom */}
        <text x={cx} y={cy - a - 12} fontSize="12.5" fill="#15803d" textAnchor="middle">θ=π/2: |u_θ|=2U（最大）</text>
        <text x={cx} y={cy + a + 26} fontSize="12.5" fill="#15803d" textAnchor="middle">θ=3π/2: |u_θ|=2U</text>
        {/* angle label */}
        <text x={cx + 6} y={cy - 6} fontSize="12.5" fill="#475569">θ</text>
      </svg>
      <Caption>表面接線速度 u_θ=−2U sinθ（矢印長 ∝ |sinθ|）。前後の<b>よどみ点</b>（赤, θ=0,π）で速度ゼロ、上下（θ=±π/2）で最大 2U。前後・上下対称なので圧力も対称 → 抗力も揚力もゼロ（ダランベールの背理）。</Caption>
    </figure>
  )
}

/* 4. 循環つき円柱まわりの非対称流れと揚力 */
function CirculationFlow() {
  const cx = 300, cy = 155, a = 70
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 320" role="img" aria-label="循環つき円柱まわりの流れと揚力">
        <defs>
          <marker id="cf-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb" />
          </marker>
          <marker id="cf-lift" markerWidth="11" markerHeight="11" refX="5" refY="8" orient="auto">
            <path d="M0,8 L5,0 L10,8 Z" fill="#b91c1c" />
          </marker>
          <marker id="cf-circ" markerWidth="10" markerHeight="10" refX="5" refY="4" orient="auto">
            <path d="M0,0 L9,4 L0,8 Z" fill="#7c3aed" />
          </marker>
        </defs>
        {/* incoming flow */}
        <text x="40" y="40" fontSize="14" fill="#64748b">一様流 U →</text>
        {/* streamlines: crowded on top (faster), sparse below */}
        {/* top streamlines (close together = fast) */}
        <path d="M30 60 Q230 55 300 70 Q370 55 580 60" fill="none" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cf-ah)" />
        <path d="M30 88 Q235 82 300 92 Q365 82 580 88" fill="none" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cf-ah)" />
        {/* bottom streamlines (far apart = slow) */}
        <path d="M30 250 Q235 262 300 250 Q365 262 580 250" fill="none" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cf-ah)" />
        <path d="M30 295 Q235 305 300 295 Q365 305 580 295" fill="none" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cf-ah)" />
        {/* cylinder */}
        <circle cx={cx} cy={cy} r={a} fill="#eaf1fe" stroke="#14305f" strokeWidth="2" />
        {/* circulation arrow (Γ>0 counterclockwise, near-full arc) */}
        <path d={`M ${cx + 36} ${cy} A 36 36 0 1 1 ${cx} ${cy - 36}`} fill="none" stroke="#7c3aed" strokeWidth="2.4" markerEnd="url(#cf-circ)" />
        <text x={cx} y={cy + 6} fontSize="15" fill="#7c3aed" textAnchor="middle" fontWeight="700">Γ</text>
        <text x={cx} y={cy + 24} fontSize="11.5" fill="#7c3aed" textAnchor="middle">循環</text>
        {/* lift vector (downward for Γ>0 CCW with U to +x) */}
        <line x1={cx + 110} y1={cy} x2={cx + 110} y2={cy + 70} stroke="#b91c1c" strokeWidth="3" markerEnd="url(#cf-lift)" />
        <text x={cx + 118} y={cy + 45} fontSize="14" fill="#b91c1c" fontWeight="700">F_L = ρUΓ</text>
        {/* shifted stagnation points (both lowered) */}
        <circle cx={cx - 50} cy={cy + 49} r="4.5" fill="#16a34a" />
        <circle cx={cx + 50} cy={cy + 49} r="4.5" fill="#16a34a" />
        <text x={cx} y={cy + a + 30} fontSize="11.5" fill="#15803d" textAnchor="middle">よどみ点が下へ移動（対称性が崩れる）</text>
        <text x="430" y="40" fontSize="12" fill="#1d4ed8">上面：流線が密＝高速・低圧</text>
        <text x="430" y="315" fontSize="12" fill="#1d4ed8">下面：流線が疎＝低速・高圧</text>
      </svg>
      <Caption>円柱流れに循環 Γ（紫, 反時計回り）を重ねると上下対称が崩れ、上面で高速・低圧、下面で低速・高圧に。ベルヌーイの圧力差の合力が<b>揚力</b> F_L=ρUΓ（赤, 一様流に直交）。よどみ点（緑）は下側へ移動する。抗力は完全流体では依然ゼロ。</Caption>
    </figure>
  )
}

/* 5. ジューコフスキー変換: z平面の円 → ζ平面の図形 */
function JoukowskiMap() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="ジューコフスキー変換による円から平板・翼への写像">
        <defs>
          <marker id="jm-ah" markerWidth="11" markerHeight="11" refX="7" refY="4" orient="auto">
            <path d="M0,0 L9,4 L0,8 Z" fill="#475569" />
          </marker>
        </defs>
        {/* z-plane */}
        <text x="150" y="35" fontSize="15" fill="#14305f" textAnchor="middle" fontWeight="600">z 平面</text>
        {/* axes */}
        <line x1="50" y1="170" x2="250" y2="170" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="150" y1="80" x2="150" y2="260" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* circle radius c centered origin */}
        <circle cx="150" cy="170" r="58" fill="#eaf1fe" stroke="#2563eb" strokeWidth="2.2" />
        <text x="150" y="174" fontSize="12.5" fill="#1d4ed8" textAnchor="middle">|z|=c</text>
        {/* critical points z=±c */}
        <circle cx="208" cy="170" r="4.5" fill="#b91c1c" />
        <circle cx="92" cy="170" r="4.5" fill="#b91c1c" />
        <text x="208" y="160" fontSize="11.5" fill="#b91c1c" textAnchor="middle">z=c</text>
        <text x="92" y="160" fontSize="11.5" fill="#b91c1c" textAnchor="middle">z=−c</text>
        {/* mapping arrow */}
        <line x1="270" y1="170" x2="350" y2="170" stroke="#475569" strokeWidth="2.5" markerEnd="url(#jm-ah)" />
        <text x="310" y="155" fontSize="15" fill="#334155" textAnchor="middle" fontWeight="600">ζ = z + c²/z</text>
        {/* ζ-plane */}
        <text x="490" y="35" fontSize="15" fill="#14305f" textAnchor="middle" fontWeight="600">ζ 平面</text>
        <line x1="380" y1="170" x2="600" y2="170" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="490" y1="80" x2="490" y2="260" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* flat plate: segment -2c..2c on real axis */}
        <line x1="410" y1="170" x2="570" y2="170" stroke="#b91c1c" strokeWidth="4" />
        <circle cx="570" cy="170" r="4.5" fill="#b91c1c" />
        <circle cx="410" cy="170" r="4.5" fill="#b91c1c" />
        <text x="570" y="192" fontSize="11.5" fill="#b91c1c" textAnchor="middle">ζ=2c</text>
        <text x="410" y="192" fontSize="11.5" fill="#b91c1c" textAnchor="middle">ζ=−2c</text>
        <text x="490" y="220" fontSize="12.5" fill="#334155" textAnchor="middle">長さ 4c の平板</text>
      </svg>
      <Caption>中心原点・半径 c の円（z 平面）は、ζ=z+c²/z で実軸上の<b>長さ 4c の平板</b>に写る。z=±c は dζ/dz=0 の特異点で、ここだけ角度が 2 倍になり後縁の<b>尖り</b>が生まれる。ラプラス方程式は写像で保たれるので、円の流れがそのまま平板の流れになる。</Caption>
    </figure>
  )
}

/* 6. 中心をずらした円 → 翼断面（後縁カスプ） */
function JoukowskiAirfoil() {
  // ζ平面の翼型を点列で近似的に描く（中心をずらした円の像）。後縁を尖らせる。
  const pts = [
    [560, 170], [520, 150], [460, 136], [390, 130], [330, 134],
    [285, 146], [262, 160], [262, 176], [290, 188], [350, 198],
    [430, 200], [500, 192], [545, 180], [560, 170],
  ]
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 290" role="img" aria-label="中心をずらした円が翼断面に写る">
        <defs>
          <marker id="ja-ah" markerWidth="11" markerHeight="11" refX="7" refY="4" orient="auto">
            <path d="M0,0 L9,4 L0,8 Z" fill="#475569" />
          </marker>
        </defs>
        {/* z-plane: shifted circle through z=c */}
        <text x="120" y="32" fontSize="15" fill="#14305f" textAnchor="middle" fontWeight="600">z 平面（中心をずらした円）</text>
        <line x1="40" y1="165" x2="220" y2="165" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="130" y1="85" x2="130" y2="245" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* shifted circle: center left-up, passes through z=c (point at 195,165) */}
        <circle cx="118" cy="155" r="64" fill="#eaf1fe" stroke="#2563eb" strokeWidth="2.2" />
        <circle cx="118" cy="155" r="3" fill="#1d4ed8" />
        <text x="100" y="150" fontSize="11" fill="#1d4ed8">中心ずらし</text>
        {/* point z=c that circle passes through */}
        <circle cx="182" cy="165" r="4.5" fill="#b91c1c" />
        <text x="182" y="186" fontSize="11" fill="#b91c1c" textAnchor="middle">z=c を通す</text>
        {/* arrow */}
        <line x1="245" y1="160" x2="320" y2="160" stroke="#475569" strokeWidth="2.5" markerEnd="url(#ja-ah)" />
        <text x="283" y="145" fontSize="14" fill="#334155" textAnchor="middle" fontWeight="600">ζ=z+c²/z</text>
        {/* ζ-plane: airfoil */}
        <text x="450" y="32" fontSize="15" fill="#14305f" textAnchor="middle" fontWeight="600">ζ 平面（翼断面）</text>
        <path d={d} fill="#eaf1fe" stroke="#14305f" strokeWidth="2.2" strokeLinejoin="round" />
        {/* leading edge (round) */}
        <text x="250" y="150" fontSize="11.5" fill="#475569" textAnchor="middle">前縁（丸い）</text>
        {/* trailing edge cusp */}
        <circle cx="560" cy="170" r="4.5" fill="#b91c1c" />
        <text x="560" y="150" fontSize="11.5" fill="#b91c1c" textAnchor="middle">後縁（尖り）</text>
        <text x="430" y="232" fontSize="12" fill="#334155" textAnchor="middle">厚み＝中心の水平ずれ／反り＝鉛直ずれ</text>
      </svg>
      <Caption>円の中心を原点からずらし、点 z=c を必ず通す円を写すと、前縁が丸く後縁が尖った<b>翼断面</b>になる。中心の水平ずれが厚み、鉛直ずれがキャンバー（反り）を生む。後縁の尖り（特異点 z=c の像）に<b>クッタ条件</b>を課すと循環 Γ が一意に決まり、F_L=ρUΓ で揚力が定まる。</Caption>
    </figure>
  )
}

export default {
  'potential-grid': PotentialGrid,
  'cylinder-superpose': CylinderSuperpose,
  'cylinder-surface': CylinderSurface,
  'circulation-flow': CirculationFlow,
  'joukowski-map': JoukowskiMap,
  'joukowski-airfoil': JoukowskiAirfoil,
}
