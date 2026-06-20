---
id: couette
section: viscous
order: 2
title: クエット流れ（平行平板・片壁移動）
formula: u(y) = (U/h) y
issue: 371
year: 2023
prereq: [navier-stokes]
---

# クエット流れ（平行平板・片壁移動）

> **ゴール**: 間隔 $h$ の2平板の上壁を $U$ で滑らせるだけの流れで、ナビエ・ストークスが $\dfrac{d^2u}{dy^2}=0$ まで潰れ、速度が**直線** $u(y)=\dfrac{U}{h}y$、せん断応力が**一定** $\tau=\mu U/h$ になる、を再現できる。

## 物理状況

上下2枚の平板の隙間に流体を満たし、**上の板だけ**を一定速度 $U$ で水平に引く。粘性で引きずられて流体が動くが、圧力差はかけない。下の板（静止）では流体も止まり、上の板では板と同じ $U$ で動く — その間がどうつながるかを求める。

@@FIG:couette-profile@@

## 設定

- 下壁 $y=0$（静止）、上壁 $y=h$（速度 $U$ で $+x$ 方向に移動）
- 流れは $x$ 方向のみ: $\mathbf{u}=(u(y),0,0)$
- 圧力勾配なし $\dfrac{dp}{dx}=0$、重力は流れ方向に効かない（水平）
- 定常・完全発達（$x$ 方向に変化しない）

## ステップ1: NSを簡略化する

[[navier-stokes]] の $x$ 成分から、効かない項を順に落とす:

$$
\rho\Big(\underbrace{\tfrac{\partial u}{\partial t}}_{=0\ \text{定常}}+\underbrace{u\tfrac{\partial u}{\partial x}}_{=0\ \text{完全発達}}\Big)=\underbrace{-\tfrac{\partial p}{\partial x}}_{=0\ \text{圧力勾配なし}}+\mu\Big(\underbrace{\tfrac{\partial^2 u}{\partial x^2}}_{=0}+\frac{\partial^2 u}{\partial y^2}\Big)
$$

連続の式 [[continuity]] $\partial u/\partial x=0$ より $u$ は $x$ によらず、$u=u(y)$ だけ。残るのは:

$$
\mu\frac{d^2 u}{dy^2}=0\quad\Longrightarrow\quad \frac{d^2u}{dy^2}=0
$$

## ステップ2: 2回積分する

$d^2u/dy^2=0$ を2回積分すると、未定の積分定数を $C_1,C_2$ として**1次関数**:

$$
\frac{du}{dy}=C_1\qquad\Longrightarrow\qquad u(y)=C_1y+C_2
$$

直線になるのは、駆動が「壁の動き」だけで内部に力源（圧力勾配）がないから。

## ステップ3: 境界条件（滑りなし）

壁では流体が壁と同じ速度になる（滑りなし条件）:

$$
\begin{aligned}
y=0:\ &u=0 \ \Rightarrow\ C_2=0\\
y=h:\ &u=U \ \Rightarrow\ C_1h+C_2=U\ \Rightarrow\ C_1=\frac{U}{h}
\end{aligned}
$$

## 結論

定数を戻すと、速度は壁から壁へ**まっすぐ**つながる:

$$
\boxed{\;u(y)=\frac{U}{h}\,y\;}
$$

### せん断応力は一定

ニュートン流体の $\tau=\mu\,du/dy$（[[shear-stress]]）に入れると、勾配が一定なので応力も一定:

$$
\tau=\mu\frac{du}{dy}=\mu\frac{U}{h}=\text{（$y$ によらず一定）}
$$

両壁・流体内のどこでも同じ $\tau=\mu U/h$。これは「上の板を引くのに必要な単位面積あたりの力」そのもの。

> **ポイント**: クエットは**圧力勾配ゼロ＋壁駆動**で $d^2u/dy^2=0$ → 直線。次のポアズイユは逆に**圧力勾配あり＋壁静止**で右辺が定数になり放物線。「直線か放物線か」は右辺（圧力勾配項）が0か否かで決まる、と対で覚える。軸受や潤滑膜のモデル。
