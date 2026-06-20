---
id: hagen-poiseuille
section: viscous
order: 4
title: ハーゲン・ポアズイユ（円管層流）
formula: Q = πa⁴(−dp/dx)/8μ
issue: 373
year: 2024
prereq: [navier-stokes]
---

# ハーゲン・ポアズイユ（円管層流）

> **ゴール**: 半径 $a$ の円管を圧力差で押す層流で、**半径 $r$ の同軸円柱にかかる力のつり合い**から速度 $u(r)=\dfrac{1}{4\mu}\left(-\dfrac{dp}{dx}\right)(a^2-r^2)$ と流量 $Q=\dfrac{\pi a^4}{8\mu}\left(-\dfrac{dp}{dx}\right)$ を出せる。**流量が半径の4乗 $a^4$ に効く**のが核心。

## 物理状況

円い管の中を、上流の圧力を高くして層流で押し流す。管壁では滑りなしで止まり、中心軸が一番速い放物線（回転放物面）になる。ここでは管の中の**半径 $r$ の同軸円柱**を取り出し、それを押す圧力と、外側の流体が引き止める粘性のつり合いで解く。

@@FIG:hp-shell@@

## 設定

- 円管半径 $a$、管軸方向 $x$、軸からの距離 $r$
- 流れは軸方向のみ・軸対称: $u=u(r)$
- 圧力勾配 $\dfrac{dp}{dx}<0$ 一定、定常・完全発達
- 長さ $L$・半径 $r$ の同軸円柱を検査体積にとる

@@FIG:hp-profile@@

## ステップ1: 同軸円柱の力のつり合い

長さ $L$・半径 $r$ の円柱に注目。完全発達した定常流では加速しないので、軸方向の力はつり合う。

- **圧力の力**（前後の端面 $\pi r^2$ にかかる差、流れを押す向き）:
$$
\big[p(x)-p(x+L)\big]\,\pi r^2=\left(-\frac{dp}{dx}\right)L\cdot\pi r^2
$$
- **粘性の力**（側面 $2\pi r L$ で外側の遅い流体が引き止める向き）: 大きさ $|\tau(r)|\cdot 2\pi r L$

両者がつり合う:

$$
\left(-\frac{dp}{dx}\right)L\,\pi r^2=|\tau(r)|\cdot 2\pi r L
$$

## ステップ2: せん断応力 τ(r)

$L$ と $\pi r$ で割ると、応力は半径に**比例**して大きくなる（中心で0、壁で最大）:

$$
|\tau(r)|=\frac{r}{2}\left(-\frac{dp}{dx}\right)
$$

これは速度分布をまだ使っていない、力のつり合いだけの結果。

## ステップ3: ニュートン流体の構成則を入れる

$\tau=\mu\,du/dr$（[[shear-stress]]）。$u$ は外ほど遅いので $du/dr<0$、応力の大きさは $|\tau|=-\mu\,du/dr$。ステップ2と等しいと置く:

$$
-\mu\frac{du}{dr}=\frac{r}{2}\left(-\frac{dp}{dx}\right)\quad\Longrightarrow\quad \frac{du}{dr}=\frac{1}{2\mu}\frac{dp}{dx}\,r
$$

## ステップ4: 積分と境界条件

$r$ で積分:

$$
u(r)=\frac{1}{4\mu}\frac{dp}{dx}\,r^2+C
$$

滑りなし $u(a)=0$ より $C=-\dfrac{1}{4\mu}\dfrac{dp}{dx}a^2$。代入してまとめる:

## 結論（速度分布）

$$
\boxed{\;u(r)=\frac{1}{4\mu}\left(-\frac{dp}{dx}\right)(a^2-r^2)\;}
$$

中心 $r=0$ で最大、壁 $r=a$ で $0$ の**放物線**。最大速度は $u_{\max}=\dfrac{a^2}{4\mu}\left(-\dfrac{dp}{dx}\right)$。

## ステップ5: 流量（ハーゲン・ポアズイユの法則）

半径 $r$・厚み $dr$ の円環 $dA=2\pi r\,dr$ を通る流量を足し上げる:

$$
Q=\int_0^a u(r)\,2\pi r\,dr=\frac{2\pi}{4\mu}\left(-\frac{dp}{dx}\right)\int_0^a (a^2-r^2)\,r\,dr
$$

$\displaystyle\int_0^a(a^2 r-r^3)\,dr=\frac{a^4}{2}-\frac{a^4}{4}=\frac{a^4}{4}$ なので:

$$
\boxed{\;Q=\frac{\pi a^4}{8\mu}\left(-\frac{dp}{dx}\right)\;}
$$

**流量は半径の4乗 $a^4$ に比例**。平均速度は $\bar u=\dfrac{Q}{\pi a^2}=\dfrac{a^2}{8\mu}\left(-\dfrac{dp}{dx}\right)=\dfrac{1}{2}u_{\max}$（平板の $2/3$ と違うことに注意）。

### 壁面せん断応力

ステップ2で $r=a$ とすれば、抵抗の源である壁応力が直ちに出る:

$$
\tau_0=\frac{a}{2}\left(-\frac{dp}{dx}\right)
$$

> **ポイント**: $Q\propto a^4$ が最重要。管径が2倍なら流量は16倍 — 血管の収縮や細管の詰まりが流れを激変させる理由。平板は $h^3$・$\bar u=\tfrac23 u_{\max}$、円管は $a^4$・$\bar u=\tfrac12 u_{\max}$、と対で暗記。導出は「同軸円柱の力のつり合い → $\tau=\mu u'$ を代入 → 積分」の3手。
