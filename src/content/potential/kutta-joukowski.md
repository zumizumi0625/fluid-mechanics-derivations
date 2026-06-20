---
id: kutta-joukowski
section: potential
order: 3
title: 循環Γと揚力＝クッタ・ジューコフスキーの定理
formula: F_L = ρUΓ
issue: 381
year: 2022
prereq: [cylinder-flow]
---

# 循環Γと揚力＝クッタ・ジューコフスキーの定理

> **ゴール**: 円柱流れに**循環**（渦）を 1 項足すと前後対称が崩れ、ブラジウスの公式で単位スパンあたり揚力 $F_L=\rho U\Gamma$、抗力ゼロが出る、を再現できる。翼が揚力を出す根拠そのもの。

## 物理状況

[[cylinder-flow]] では上下対称ゆえ揚力ゼロだった。そこに原点まわりの**循環**（自由渦）$-\dfrac{i\Gamma}{2\pi}\ln z$ を重ねると、円柱の上面と下面で流速に差ができ、ベルヌーイより圧力差が生じる。この圧力差の合力が揚力。揚力の大きさは循環 $\Gamma$ と一様流 $U$ だけで決まる — これがクッタ・ジューコフスキーの定理。

@@FIG:circulation-flow@@

## 設定

- 円柱流れ $W=U(z+a^2/z)$ に循環 $\Gamma$ の自由渦を重ねる
- 渦の複素ポテンシャル: $W_\Gamma=-\dfrac{i\Gamma}{2\pi}\ln z$（$\Gamma>0$ で反時計回り）
- 求めるもの: 表面速度の変化、よどみ点の移動、そして**力**（ブラジウスの公式）

## ステップ1: 循環つきの複素速度ポテンシャル

$$
W(z)=U\!\left(z+\frac{a^2}{z}\right)-\frac{i\Gamma}{2\pi}\ln z
$$

渦項の流れ関数は $\psi_\Gamma=\operatorname{Im}\!\left(-\dfrac{i\Gamma}{2\pi}\ln z\right)=-\dfrac{\Gamma}{2\pi}\ln r$。$r=\text{const}$（円）が流線なので、$r=a$ の円柱表面は依然として流線のまま（境界条件を壊さない）。

## ステップ2: 循環の意味（一周積分）

渦項だけの接線速度は $u_\theta=\dfrac{\Gamma}{2\pi r}$。円柱表面を一周する速度の線積分が循環:

$$
\oint \mathbf{u}\cdot d\mathbf{l}=\int_0^{2\pi}\frac{\Gamma}{2\pi a}\,a\,d\theta=\Gamma
$$

$\Gamma$ はまさに「流れの回りこみの強さ」。

## ステップ3: 表面速度とよどみ点の移動

表面（$r=a$）の接線速度は、円柱流れの $-2U\sin\theta$ に渦の $\dfrac{\Gamma}{2\pi a}$ が加わる:

$$
u_\theta\big|_{r=a}=-2U\sin\theta+\frac{\Gamma}{2\pi a}
$$

よどみ点 $u_\theta=0$ は $\sin\theta=\dfrac{\Gamma}{4\pi U a}$。$\Gamma>0$ では 2 つのよどみ点がともに下側へ寄り、**上下対称が崩れる**。上面で流速が増し（低圧）、下面で減る（高圧）→ 圧力差＝揚力。

## ステップ4: ブラジウスの公式

物体に働く力 $F_x,F_y$ は、物体を囲む閉曲線上の複素速度から計算できる（ブラジウスの公式）:

$$
F_x-iF_y=\frac{i\rho}{2}\oint\!\left(\frac{dW}{dz}\right)^2 dz
$$

複素速度を作る:

$$
\frac{dW}{dz}=U\!\left(1-\frac{a^2}{z^2}\right)-\frac{i\Gamma}{2\pi z}
$$

## ステップ5: 2乗して 1/z の係数（留数）を拾う

$$
\left(\frac{dW}{dz}\right)^2
=U^2\!\left(1-\frac{a^2}{z^2}\right)^2
-\frac{i U\Gamma}{\pi z}\!\left(1-\frac{a^2}{z^2}\right)
-\frac{\Gamma^2}{4\pi^2 z^2}
$$

第1項は $1/z$ を含まず、第3項は $1/z^2$。$1/z$ の係数を出すのは第2項の先頭だけ:

$$
[\,1/z\,]\text{の係数}=-\frac{i U\Gamma}{\pi}
$$

留数定理 $\displaystyle\oint\frac{dz}{z}=2\pi i$ より:

$$
\oint\!\left(\frac{dW}{dz}\right)^2 dz=2\pi i\left(-\frac{iU\Gamma}{\pi}\right)=2U\Gamma
$$

## ステップ6: 力を取り出す

$$
F_x-iF_y=\frac{i\rho}{2}\,(2U\Gamma)=i\rho U\Gamma
$$

実部と虚部を比べると:

$$
F_x=0\quad(\text{抗力ゼロ}),\qquad F_y=-\rho U\Gamma
$$

大きさは $|F_y|=\rho U\Gamma$。一様流 $U$ に直交する向きに働く。

## 結論

単位スパンあたりの揚力は、循環と一様流の積だけで決まる:

$$
\boxed{\;F_L=\rho U\Gamma\;}
$$

抗力は完全流体では依然ゼロ。揚力の向きは一様流に垂直で、循環の向きと逆側（$\Gamma>0$ 反時計回りなら下向き、翼で上向き揚力を得るには時計回りの循環が要る）。

> **ポイント**: 揚力は $\rho,U,\Gamma$ の 3 つだけ・**翼の形に直接よらない**のが定理の凄み。形は「$\Gamma$ をいくつに決めるか」を通してのみ効く（→ クッタ条件、[[joukowski-transform]]）。$F_L=\rho U\Gamma$ と「複素速度は $u-iv$」「ブラジウスは $\frac{i\rho}{2}\oint(dW/dz)^2dz$」をセットで暗記。
