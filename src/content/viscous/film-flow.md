---
id: film-flow
section: viscous
order: 5
title: 液膜流れ（重力・自由表面）
formula: u(y) = (ρg sinθ/μ)(δy − y²/2)
issue: 374
year: 2026
prereq: [navier-stokes]
---

# 液膜流れ（重力・自由表面）

> **ゴール**: 傾いた壁を重力で流れ落ちる厚さ $\delta$ の液膜で、駆動が圧力でなく**重力**、片側の境界が空気との**自由表面（$\tau=0$）**になる場合を解き、$u(y)=\dfrac{\rho g\sin\theta}{\mu}\left(\delta y-\dfrac{y^2}{2}\right)$ を再現できる。自由表面で「せん断応力ゼロ」がどう効くかを押さえる。

## 物理状況

水平から角度 $\theta$ 傾いた壁の上を、薄い液の膜が重力で流れ落ちる。壁側は滑りなしで止まり、表面側は空気に触れている。空気は粘性がほぼ無いので液を引きずらない → **自由表面ではせん断応力がゼロ**。駆動力は重力の壁に沿う成分 $g\sin\theta$。

@@FIG:film-profile@@

## 設定

- 壁面に沿って $x$（流下方向、下り勾配）、壁から垂直に $y$
- 壁 $y=0$、自由表面 $y=\delta$（膜厚 $\delta$）
- 流れは $x$ 方向のみ: $u=u(y)$、定常・完全発達
- 圧力勾配なし（表面は大気圧一定 $dp/dx=0$）、駆動は重力成分 $g\sin\theta$

## ステップ1: NSを簡略化する（重力が駆動）

[[navier-stokes]] の $x$ 成分。重力の $x$ 成分は $g_x=g\sin\theta$。定常・完全発達で慣性項を落とし、$dp/dx=0$ も落とすと:

$$
0=\underbrace{-\frac{\partial p}{\partial x}}_{=0}+\mu\frac{d^2u}{dy^2}+\rho g\sin\theta
$$

整理すると、粘性と重力のつり合い:

$$
\mu\frac{d^2u}{dy^2}=-\rho g\sin\theta\quad\Longrightarrow\quad \frac{d^2u}{dy^2}=-\frac{\rho g\sin\theta}{\mu}
$$

右辺は負の定数 — ポアズイユ（圧力勾配）の重力版で、やはり放物線になる。

## ステップ2: 1回目の積分（自由表面の境界条件）

積分すると:

$$
\frac{du}{dy}=-\frac{\rho g\sin\theta}{\mu}\,y+C_1
$$

**自由表面 $y=\delta$ ではせん断応力ゼロ** $\tau=\mu\,du/dy=0$、すなわち $\left.\dfrac{du}{dy}\right|_{y=\delta}=0$。これで $C_1$ が決まる:

$$
0=-\frac{\rho g\sin\theta}{\mu}\,\delta+C_1\quad\Rightarrow\quad C_1=\frac{\rho g\sin\theta}{\mu}\,\delta
$$

よって勾配は $\dfrac{du}{dy}=\dfrac{\rho g\sin\theta}{\mu}(\delta-y)$。表面で勾配0、壁で最大。

## ステップ3: 2回目の積分（壁の境界条件）

もう一度積分:

$$
u(y)=\frac{\rho g\sin\theta}{\mu}\left(\delta y-\frac{y^2}{2}\right)+C_2
$$

壁で滑りなし $u(0)=0$ より $C_2=0$。

## 結論

$$
\boxed{\;u(y)=\frac{\rho g\sin\theta}{\mu}\left(\delta y-\frac{y^2}{2}\right)\;}
$$

壁で0、表面で最大の放物線（ただし**頂点が表面側**にある半分の放物線）。

### 表面速度・平均速度・流量

**表面速度**は $y=\delta$:

$$
u_s=u(\delta)=\frac{\rho g\sin\theta}{\mu}\left(\delta^2-\frac{\delta^2}{2}\right)=\frac{\rho g\sin\theta}{2\mu}\,\delta^2
$$

**流量**（幅 $1$ あたり）と**平均速度**:

$$
q=\int_0^\delta u\,dy=\frac{\rho g\sin\theta}{\mu}\left[\frac{\delta y^2}{2}-\frac{y^3}{6}\right]_0^\delta=\frac{\rho g\sin\theta}{3\mu}\,\delta^3
$$

$$
\bar u=\frac{q}{\delta}=\frac{\rho g\sin\theta}{3\mu}\,\delta^2=\frac{2}{3}\,u_s
$$

流量は**膜厚の3乗 $\delta^3$ に比例**。

> **ポイント**: 液膜の肝は2つの境界条件の非対称さ — **壁は $u=0$、自由表面は $du/dy=0$**。「表面で勾配ゼロ」を入れる所で詰まりやすい（空気が引きずらない＝応力ゼロ、と物理で覚える）。駆動が圧力勾配 $-dp/dx$ から重力 $\rho g\sin\theta$ に置き換わっただけで、解き方はポアズイユと同型。
