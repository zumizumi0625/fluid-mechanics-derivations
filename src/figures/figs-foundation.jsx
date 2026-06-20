import { Caption } from './index.jsx'

// 0. 土台セクションの図。light テーマ前提の明示色で描画。

/* 連続の式: 固定した検査体積に出入りする質量流量 */
function ContinuityCV() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 300" role="img" aria-label="固定した検査体積に出入りする質量流量">
        <defs>
          <marker id="cv-ah" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
          </marker>
        </defs>
        {/* box */}
        <rect x="240" y="90" width="170" height="120" rx="6" fill="#eaf1fe" stroke="#2563eb" strokeWidth="2" />
        <text x="325" y="145" fontSize="15" fill="#14305f" textAnchor="middle" fontWeight="600">検査体積 dV</text>
        <text x="325" y="168" fontSize="13" fill="#475569" textAnchor="middle">= dx·dy·dz</text>
        {/* inflow */}
        <line x1="120" y1="150" x2="236" y2="150" stroke="#2563eb" strokeWidth="3" markerEnd="url(#cv-ah)" />
        <text x="120" y="138" fontSize="14" fill="#1e293b">流入</text>
        <text x="120" y="200" fontSize="14" fill="#14305f">ρu|ₓ · dy dz</text>
        {/* outflow */}
        <line x1="414" y1="150" x2="530" y2="150" stroke="#2563eb" strokeWidth="3" markerEnd="url(#cv-ah)" />
        <text x="470" y="138" fontSize="14" fill="#1e293b">流出</text>
        <text x="414" y="200" fontSize="14" fill="#14305f">ρu|ₓ₊dₓ · dy dz</text>
        {/* x axis */}
        <line x1="240" y1="240" x2="410" y2="240" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="240" y="262" fontSize="12.5" fill="#64748b" textAnchor="middle">x</text>
        <text x="410" y="262" fontSize="12.5" fill="#64748b" textAnchor="middle">x+dx</text>
        <line x1="240" y1="234" x2="240" y2="246" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="410" y1="234" x2="410" y2="246" stroke="#94a3b8" strokeWidth="1.5" />
      </svg>
      <Caption>左面から入った質量流量と右面から出た質量流量の<b>差</b>が、箱の中の質量の増減になる。差を取ってテイラー展開すると <b>∂(ρu)/∂x · dV</b> が現れ、3方向足すと発散 ∇·(ρu) に束ねられる。</Caption>
    </figure>
  )
}

/* レイノルズ数: 層流 vs 乱流 */
function ReynoldsRegime() {
  const lam = [70, 95, 120, 145]
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 260" role="img" aria-label="低Reの層流と高Reの乱流の比較">
        <defs>
          <marker id="re-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#475569" />
          </marker>
        </defs>
        {/* laminar */}
        <text x="150" y="40" fontSize="15" fill="#16a34a" textAnchor="middle" fontWeight="700">Re 小 → 層流</text>
        {lam.map((y, i) => (
          <line key={i} x1="40" y1={y} x2="260" y2={y} stroke="#16a34a" strokeWidth="2.2" markerEnd="url(#re-ah)" />
        ))}
        <text x="150" y="195" fontSize="13" fill="#475569" textAnchor="middle">粘性が支配・整った平行流</text>
        {/* turbulent */}
        <text x="490" y="40" fontSize="15" fill="#b91c1c" textAnchor="middle" fontWeight="700">Re 大 → 乱流</text>
        {lam.map((y, i) => (
          <path key={i} d={`M380 ${y} q 20 -14 40 0 t 40 0 t 40 0 t 40 0`} fill="none" stroke="#b91c1c" strokeWidth="2.2" markerEnd="url(#re-ah)" />
        ))}
        <text x="490" y="195" fontSize="13" fill="#475569" textAnchor="middle">慣性が支配・渦と乱れ</text>
        {/* divider */}
        <line x1="320" y1="20" x2="320" y2="210" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>
      <Caption>Re = ρUL/μ は<b>慣性力 ÷ 粘性力</b>。小さいほど粘性が整流して層流、大きいほど慣性が勝って乱流に崩れる。同じ Re・同じ形状なら流れは相似（相似則）→ 模型実験が成り立つ根拠。</Caption>
    </figure>
  )
}

/* せん断応力: 速度プロファイルの勾配 */
function ShearProfile() {
  const arrows = [
    { y: 60, len: 200 },
    { y: 90, len: 158 },
    { y: 120, len: 116 },
    { y: 150, len: 74 },
    { y: 180, len: 32 },
  ]
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 250" role="img" aria-label="壁近くの速度プロファイルとせん断応力">
        <defs>
          <marker id="sh-ah" markerWidth="9" markerHeight="9" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb" />
          </marker>
        </defs>
        {/* wall */}
        <rect x="80" y="200" width="380" height="14" fill="#94a3b8" />
        <text x="270" y="234" fontSize="12.5" fill="#64748b" textAnchor="middle">壁（u = 0, 滑りなし）</text>
        {/* y axis */}
        <line x1="80" y1="200" x2="80" y2="40" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#sh-ah)" />
        <text x="66" y="50" fontSize="13" fill="#64748b">y</text>
        {/* velocity arrows */}
        {arrows.map((a, i) => (
          <line key={i} x1="80" y1={a.y} x2={80 + a.len} y2={a.y} stroke="#2563eb" strokeWidth="2.4" markerEnd="url(#sh-ah)" />
        ))}
        {/* profile line connecting tips */}
        <polyline points={arrows.map((a) => `${80 + a.len},${a.y}`).join(' ')} fill="none" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="5 4" />
        <text x="300" y="80" fontSize="14" fill="#14305f">u(y)</text>
        {/* tau annotation */}
        <text x="360" y="135" fontSize="15" fill="#b45309" fontWeight="600">τ = μ · du/dy</text>
        <text x="360" y="158" fontSize="12.5" fill="#92651a">傾きが急なほど τ 大</text>
      </svg>
      <Caption>隣り合う流体層の速度差（勾配 du/dy）に比例して接線応力 τ が働く。比例係数が粘性 μ で、この比例関係が成り立つのが<b>ニュートン流体</b>。壁での値 τ_w = μ(du/dy)|₀ が抵抗の源。</Caption>
    </figure>
  )
}

export default {
  'continuity-cv': ContinuityCV,
  'reynolds-regime': ReynoldsRegime,
  'shear-profile': ShearProfile,
}
