---
id: magnus
section: drag-lift
order: 4
title: マグヌス効果（回転球/円柱の揚力）
formula: F_L = ρUΓ
issue: 378
year: 2021
prereq: [drag-lift-def]
---

# マグヌス効果（回転球/円柱の揚力）

> **ゴール**: 回転する円柱まわりの流れを「一様流＋循環 $\Gamma$」の重ね合わせで作り、表面圧力を Bernoulli で出して周回積分すると、揚力が循環に比例 $F_L=\rho U\Gamma$（クッタ・ジューコフスキーの定理）になる、を自分で導けるようにする。回転方向と揚力の向きの関係まで言えるようにする。

## 物理状況

円柱を回すと、粘性で表面の流体が引きずられ、まわりに **循環 $\Gamma$**（渦）ができる。これを一様流 $U$ に重ねると、上面では一様流と回転が同じ向き → 流れが速く・圧力が低く、下面では逆向き → 遅く・圧力が高くなる。上下の圧力差が **揚力** を生む。これがマグヌス効果。

@@FIG:magnus-flow@@

## 設定

- 半径 $a$ の円柱（単位長あたり）。一様流 $U$ を $x$ 方向、循環 $\Gamma$（時計回りを正とする）。
- 非粘性・非圧縮のポテンシャル流で近似。表面の角度 $\theta$ は前方よどみ点まわりから測る。
- 円柱表面（$r=a$）の接線速度は、円柱まわり一様流（$-2U\sin\theta$）に循環による一様な速度 $-\dfrac{\Gamma}{2\pi a}$ を足したもの:

$$
u_\theta(\theta) = -2U\sin\theta - \frac{\Gamma}{2\pi a}
$$

## ステップ1: 表面圧力を Bernoulli で出す

表面は流線なので Bernoulli が使える。遠方で速度 $U$・圧力 $p_\infty$。表面速度の大きさ $|u_\theta|$ を使い:

$$
p(\theta) = p_\infty + \tfrac12\rho U^2 - \tfrac12\rho\,u_\theta^{\,2}
$$

## ステップ2: 揚力は圧力の y成分を周回積分

単位長あたりの圧力の力は $-p\,\mathbf{n}\,a\,d\theta$、外向き法線 $\mathbf{n}=(\cos\theta,\sin\theta)$。揚力は $y$ 成分なので:

$$
F_L = -\oint_0^{2\pi} p(\theta)\,\sin\theta\;a\,d\theta
$$

## ステップ3: $u_\theta^{\,2}$ を展開する

$$
u_\theta^{\,2} = \Big(2U\sin\theta + \frac{\Gamma}{2\pi a}\Big)^2
= 4U^2\sin^2\theta + \frac{2U\Gamma}{\pi a}\sin\theta + \Big(\frac{\Gamma}{2\pi a}\Big)^2
$$

$p(\theta)$ のうち $\theta$ に依らない定数項（$p_\infty+\tfrac12\rho U^2$ と $-\tfrac12\rho(\Gamma/2\pi a)^2$）は、$\oint\sin\theta\,d\theta=0$ なので揚力に効かない。

## ステップ4: 残る積分を計算する

$F_L=-a\oint p\sin\theta\,d\theta = +a\cdot\tfrac12\rho\oint u_\theta^{\,2}\sin\theta\,d\theta$。被積分の各項に $\sin\theta$ を掛けて $0\to2\pi$ で積分すると、奇関数の項は消え、$\sin^2\theta$ の項だけ残る:

$$
\oint_0^{2\pi}\sin^3\theta\,d\theta = 0,\qquad
\oint_0^{2\pi}\sin\theta\,d\theta = 0,\qquad
\oint_0^{2\pi}\sin^2\theta\,d\theta = \pi
$$

生き残るのは $\dfrac{2U\Gamma}{\pi a}\sin\theta$ の項だけ:

$$
\oint u_\theta^{\,2}\sin\theta\,d\theta = \frac{2U\Gamma}{\pi a}\oint\sin^2\theta\,d\theta = \frac{2U\Gamma}{\pi a}\cdot\pi = \frac{2U\Gamma}{a}
$$

## ステップ5: まとめる

$$
F_L = a\cdot\tfrac12\rho\cdot\frac{2U\Gamma}{a} = \rho U\Gamma
$$

## 結論

揚力は速度と循環の積に比例する。**クッタ・ジューコフスキーの定理**:

$$
\boxed{\;F_L = \rho\,U\,\Gamma\;}\qquad(\text{単位長あたり})
$$

向きは「一様流 $U$ を循環の向きへ $90^\circ$ 回した側」。表面が流れと同じ側へ動く面（上面）が低圧になり、揚力はそちら向き。摩擦抗力（流れ方向）とは独立で、揚力は流れに直交する。

> **ポイント**: 揚力 ∝ 循環 $\Gamma$ は翼にもそのまま効く普遍則（翼では循環がクッタ条件で決まる）。導出の急所は、Bernoulli の圧力を周回積分すると **$U$ と $\Gamma$ の積（交差項）だけが生き残る**こと。$\sin^2$ の積分 $=\pi$ がすべてを決める。係数は $\rho U\Gamma$、$\tfrac12$ は付かないことに注意。$C_L,\,A$ の定義は [[drag-lift-def]] を参照。
