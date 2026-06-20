---
id: cylinder-flow
section: potential
order: 2
title: 一様流＋二重わき出し＝円柱まわりの流れ
formula: W(z) = U(z + a²/z)
issue: 380
prereq: [potential-stream-func]
---

# 一様流＋二重わき出し＝円柱まわりの流れ

> **ゴール**: 一様流とダブレット（二重わき出し）の複素速度ポテンシャルを足すだけで円柱まわりの流れが出る、を再現できる。表面速度 $u_\theta=-2U\sin\theta$、よどみ点、表面圧力分布、そして抗力ゼロ（ダランベールの背理）まで自力で出せる。

## 物理状況

ポテンシャル流れは**重ね合わせ**ができる（ラプラス方程式が線形だから）。一様流 $W=Uz$ に、原点に置いたダブレット $W=\mu/z$ を重ねると、ある半径 $a$ の円がちょうど流線になる。その円を固体の円柱とみなせば、円柱まわりの流れになる — 流れは円柱表面を「すり抜けない」境界をすでに満たしている。

@@FIG:cylinder-superpose@@

## 設定

- 一様流: 速度 $U$ で $x$ 軸正方向（$z=x+iy$、極座標 $z=re^{i\theta}$）
- ダブレット（二重わき出し）: 原点に置いた強さ $\mu$ のもの、$W_{\text{d}}=\mu/z$
- 求めるもの: 重ね合わせ $W(z)$、表面の速度・圧力、円柱に働く力

[[potential-stream-func]] の $W(z)=\phi+i\psi$、$dW/dz=u-iv$ を使う。

## ステップ1: 一様流とダブレットを重ね合わせる

$$
W(z)=\underbrace{Uz}_{\text{一様流}}+\underbrace{\frac{\mu}{z}}_{\text{ダブレット}}
$$

## ステップ2: 円が流線になる条件 → μ を決める

極座標 $z=re^{i\theta}$ で $1/z=\dfrac{1}{r}e^{-i\theta}$ を使い、流れ関数 $\psi=\operatorname{Im}W$ を取り出す:

$$
W=U r e^{i\theta}+\frac{\mu}{r}e^{-i\theta}
=\Big(Ur+\frac{\mu}{r}\Big)\cos\theta+i\Big(Ur-\frac{\mu}{r}\Big)\sin\theta
$$

$$
\psi=\Big(Ur-\frac{\mu}{r}\Big)\sin\theta
$$

$r=a$ で $\psi=0$（円が1本の流線）になるには $Ua-\mu/a=0$、すなわち $\mu=Ua^2$。

## ステップ3: 円柱まわりの複素速度ポテンシャル

$\mu=Ua^2$ を代入して:

$$
\boxed{\;W(z)=U\!\left(z+\frac{a^2}{z}\right)\;}
$$

このとき $\psi=U\!\left(r-\dfrac{a^2}{r}\right)\sin\theta$ であり、$r=a$ で $\psi=0$。円柱表面が流線になっている。

## ステップ4: 速度場（複素速度から）

$$
\frac{dW}{dz}=U\!\left(1-\frac{a^2}{z^2}\right)=u-iv
$$

極座標の速度成分は $\psi$ から直接読める:

$$
u_r=\frac{1}{r}\frac{\partial \psi}{\partial \theta}=U\!\left(1-\frac{a^2}{r^2}\right)\cos\theta,\qquad
u_\theta=-\frac{\partial \psi}{\partial r}=-U\!\left(1+\frac{a^2}{r^2}\right)\sin\theta
$$

$r=a$ で $u_r=0$（表面を貫かない＝境界条件 OK）。

## ステップ5: 表面速度

$r=a$ を代入すると $u_r=0$、接線速度だけが残る:

$$
u_\theta\big|_{r=a}=-U\Big(1+1\Big)\sin\theta=-2U\sin\theta
$$

$$
\boxed{\;u_\theta=-2U\sin\theta\;}
$$

- **よどみ点**: $u_\theta=0 \Rightarrow \theta=0,\ \pi$（前縁と後縁）。
- **最大速度点**: $|u_\theta|$ 最大は $\theta=\pm\pi/2$（上下）で $|u_\theta|=2U$（一様流の2倍）。

@@FIG:cylinder-surface@@

## ステップ6: 表面圧力分布（ベルヌーイ）

流線に沿ってベルヌーイの式が成り立つ。無限遠（$p_\infty,\ U$）と表面（$p,\ q=|u_\theta|=2U|\sin\theta|$）を結ぶ:

$$
p+\frac12\rho q^2=p_\infty+\frac12\rho U^2
$$

$$
p=p_\infty+\frac12\rho U^2\big(1-4\sin^2\theta\big)
$$

圧力係数で書くと $C_p=\dfrac{p-p_\infty}{\frac12\rho U^2}=1-4\sin^2\theta$。よどみ点（$\theta=0,\pi$）で $C_p=1$（最大圧）、上下（$\theta=\pm\pi/2$）で $C_p=-3$（最低圧）。

## ステップ7: 円柱に働く抗力（ダランベールの背理）

表面圧力を $x$ 方向に積分する。面素 $a\,d\theta$、外向き法線の $x$ 成分は $\cos\theta$:

$$
F_x=-\oint p\cos\theta\,a\,d\theta
=-a\int_0^{2\pi}\!\Big[p_\infty+\tfrac12\rho U^2(1-4\sin^2\theta)\Big]\cos\theta\,d\theta
$$

被積分関数の各項は $\displaystyle\int_0^{2\pi}\cos\theta\,d\theta=0$、$\displaystyle\int_0^{2\pi}\sin^2\theta\cos\theta\,d\theta=0$ なのですべて消える:

$$
\boxed{\;F_x=0\;}
$$

同様に上下対称なので揚力 $F_y=0$。完全流体では円柱に**力が働かない**（ダランベールの背理）。

## 結論

$$
\boxed{\;W(z)=U\!\left(z+\frac{a^2}{z}\right),\qquad u_\theta=-2U\sin\theta,\qquad F_x=0\;}
$$

一様流＋ダブレットの重ね合わせで円柱流れが出る。表面の最大速度は $2U$、圧力分布は前後・上下対称で、その対称性ゆえに抗力も揚力もゼロになる。

> **ポイント**: 抗力ゼロは「完全流体には粘性も剥離もないから後流ができず、前後対称」という理想化の帰結。現実の抗力は粘性・剥離が壊す対称性から生じる。揚力をゼロでなくすには、この対称性を**循環**で崩せばよい — それが次の[[kutta-joukowski]]。
