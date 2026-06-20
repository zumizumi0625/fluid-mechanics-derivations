---
id: poiseuille-plates
section: viscous
order: 3
title: 平行平板間ポアズイユ流れ
formula: u(y) = (1/2μ)(−dp/dx)(h²/4 − y²)
issue: 372
year: 2023
prereq: [navier-stokes]
---

# 平行平板間ポアズイユ流れ

> **ゴール**: 静止した2平板の間を圧力差で押し流す流れで、ナビエ・ストークスが $\mu\dfrac{d^2u}{dy^2}=\dfrac{dp}{dx}$ まで潰れ、速度が**放物線** $u(y)=\dfrac{1}{2\mu}\left(-\dfrac{dp}{dx}\right)\!\left(\dfrac{h^2}{4}-y^2\right)$ になる、を再現できる。最大速度・流量・平均速度まで出す。

## 物理状況

間隔 $h$ の2枚の固定平板の隙間に、**上流の圧力を高く・下流を低く**して流体を押し込む。両壁では滑りなしで止まり、中央が一番速い。クエットと違って動く壁はなく、駆動はもっぱら**圧力勾配**。

@@FIG:poiseuille-plates-profile@@

## 設定

- 板の中央を原点に取り、壁は $y=\pm h/2$（隙間の全幅が $h$）
- 流れは $x$ 方向のみ: $\mathbf{u}=(u(y),0,0)$
- 圧力勾配 $\dfrac{dp}{dx}<0$（下流ほど低い）を一定値として与える
- 定常・完全発達・水平

## ステップ1: NSを簡略化する

[[navier-stokes]] の $x$ 成分から、定常・完全発達で慣性項を落とす:

$$
\rho\Big(\underbrace{\tfrac{\partial u}{\partial t}}_{=0}+\underbrace{u\tfrac{\partial u}{\partial x}}_{=0}\Big)=-\frac{\partial p}{\partial x}+\mu\frac{\partial^2 u}{\partial y^2}
$$

残るのは粘性と圧力のつり合い。$u=u(y)$、$dp/dx$ は定数なので常微分で:

$$
\mu\frac{d^2 u}{dy^2}=\frac{dp}{dx}
$$

**右辺が定数**なのがクエットとの違い（あちらは $0$）。だから解は2次関数になる。

## ステップ2: 1回目の積分（対称性で定数を消す）

両辺を $y$ で積分:

$$
\mu\frac{du}{dy}=\frac{dp}{dx}\,y+C_1
$$

流れは中央 $y=0$ について上下対称なので、中央で速度は最大 → 勾配ゼロ $\left.\dfrac{du}{dy}\right|_{y=0}=0$。よって $C_1=0$:

$$
\frac{du}{dy}=\frac{1}{\mu}\frac{dp}{dx}\,y
$$

## ステップ3: 2回目の積分と境界条件

もう一度積分:

$$
u(y)=\frac{1}{2\mu}\frac{dp}{dx}\,y^2+C_2
$$

滑りなし $u(\pm h/2)=0$ より:

$$
0=\frac{1}{2\mu}\frac{dp}{dx}\frac{h^2}{4}+C_2\quad\Rightarrow\quad C_2=-\frac{1}{2\mu}\frac{dp}{dx}\frac{h^2}{4}
$$

## 結論

$C_2$ を戻し、$-dp/dx>0$ でくくると**上に凸の放物線**:

$$
\boxed{\;u(y)=\frac{1}{2\mu}\left(-\frac{dp}{dx}\right)\!\left(\frac{h^2}{4}-y^2\right)\;}
$$

### 最大速度・流量・平均速度

**最大速度**は中央 $y=0$:

$$
u_{\max}=u(0)=\frac{1}{2\mu}\left(-\frac{dp}{dx}\right)\frac{h^2}{4}=\frac{h^2}{8\mu}\left(-\frac{dp}{dx}\right)
$$

**流量**（奥行き幅 $b$ あたり）は断面で積分:

$$
Q=b\int_{-h/2}^{h/2}\!u\,dy=\frac{b}{2\mu}\!\left(-\frac{dp}{dx}\right)\!\int_{-h/2}^{h/2}\!\!\left(\frac{h^2}{4}-y^2\right)dy=\frac{b\,h^3}{12\mu}\left(-\frac{dp}{dx}\right)
$$

（積分は $\int_{-h/2}^{h/2}(h^2/4-y^2)\,dy=h^3/6$。）**平均速度**は $Q$ を断面積 $bh$ で割って:

$$
\bar u=\frac{Q}{bh}=\frac{h^2}{12\mu}\left(-\frac{dp}{dx}\right)=\frac{2}{3}\,u_{\max}
$$

> **ポイント**: 平板ポアズイユは $\mu u''=dp/dx$（右辺定数）→ 放物線。覚える数は「平均は最大の $2/3$」「流量は $h^3$ に比例」。円管ハーゲン・ポアズイユでは同じ流れが $a^4$ 依存に変わる（断面の効き方が違う）— 次ページで対比。
