// セクション定義（導出リスト_流体力学.md の6区分に対応）。
// key は content/<key>/ ディレクトリ名と一致させる。priority は院試での重要度。
export const SECTIONS = [
  { key: 'foundation', n: 0, emoji: '🧱', title: '土台', note: '最初にこれ。質量保存・相似則・構成則', priority: '必須' },
  { key: 'momentum', n: 1, emoji: '🚀', title: '運動量保存則', note: '★最重要・ほぼ毎年', priority: '★最優先' },
  { key: 'bernoulli', n: 2, emoji: '💨', title: 'ベルヌーイの定理と応用', note: '★4/5年', priority: '★最優先' },
  { key: 'viscous', n: 3, emoji: '🌊', title: '粘性層流の速度分布', note: '★3/5年・NS簡略化が肝', priority: '★最優先' },
  { key: 'drag-lift', n: 4, emoji: '🪽', title: '抗力・揚力・境界層', note: '2/5年。定義＋運動量欠損まで', priority: '優先' },
  { key: 'potential', n: 5, emoji: '🌀', title: 'ポテンシャル流れ', note: '難・最後でOK／難関年のみ', priority: '余裕があれば' },
]

export const SECTION_BY_KEY = Object.fromEntries(SECTIONS.map((s) => [s.key, s]))
