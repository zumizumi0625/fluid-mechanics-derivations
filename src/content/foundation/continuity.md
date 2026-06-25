---
id: continuity
section: foundation
order: 1
title: 連続の式（質量保存）
formula: ∂ρ/∂t + ∇·(ρu) = 0
issue: 357
---

# 連続の式（質量保存）

> **ゴール**: 空間に固定した箱に出入りする質量を数えるだけで $\dfrac{\partial \rho}{\partial t} + \nabla\cdot(\rho\mathbf{u}) = 0$ が出る、を自分の手で再現できる。非圧縮なら $\nabla\cdot\mathbf{u}=0$。

## 物理状況

検査体積は空間に**固定した小さな箱**。左右の面を通る質量流量の差が、箱の中の質量変化になる — これが核心。「箱に入った分から出た分を引けば、中身の増減になる」という当たり前の収支を式にするだけ。

@@FIG:continuity-cv@@

## 設定

出発点は**質量保存則**ひとつ。新しい物理は何も持ち込まず、「固定した検査体積に出入りする質量の収支」だけを式にする、という方針をまず宣言しておく。

空間に固定した微小直方体 $dx\,dy\,dz$（検査体積 $dV$）を考える。密度 $\rho$、速度 $\mathbf{u}=(u,v,w)$ はいずれも位置と時刻の関数とする。

## ステップ1: x方向の質量出入り（微小時間 $dt$ あたり）

面 $dy\,dz$ を単位時間に通過する質量流量は $(\rho u)\times(\text{面積})$。左面と右面で:

$$
\begin{aligned}
\text{左面}(x)\text{から流入} &: \rho u\big|_x \cdot dy\,dz \\
\text{右面}(x+dx)\text{から流出} &: \rho u\big|_{x+dx} \cdot dy\,dz
\end{aligned}
$$

## ステップ2: x方向の正味流出

流出から流入を引き、テイラー展開 $\rho u|_{x+dx} = \rho u|_x + \dfrac{\partial(\rho u)}{\partial x}dx$ を使う:

$$
\big[\rho u\big|_{x+dx} - \rho u\big|_x\big]\,dy\,dz = \frac{\partial(\rho u)}{\partial x}\,\underbrace{dx\,dy\,dz}_{dV}
$$

## ステップ3: y, z方向も同様に足す

3方向の正味流出を合計すると、発散 $\nabla\cdot$ の形に束ねられる:

$$
\left[\frac{\partial(\rho u)}{\partial x}+\frac{\partial(\rho v)}{\partial y}+\frac{\partial(\rho w)}{\partial z}\right]dV = \nabla\cdot(\rho\mathbf{u})\,dV
$$

## ステップ4: 質量保存則を課す

> 検査体積内の質量の増加率 ＝ 正味の流入率（＝ −正味流出）

箱の中の質量は $\rho\,dV$、その時間増加率は $\dfrac{\partial \rho}{\partial t}dV$。これが正味流出の符号を反転したものに等しい:

$$
\frac{\partial \rho}{\partial t}\,dV = -\nabla\cdot(\rho\mathbf{u})\,dV
$$

## 結論

両辺を $dV$ で割って移項すると、**連続の式**:

$$
\boxed{\;\frac{\partial \rho}{\partial t} + \nabla\cdot(\rho\mathbf{u}) = 0\;}
$$

### 非圧縮（$\rho =$ 一定）のとき

$\partial\rho/\partial t=0$ かつ $\rho$ を発散の外に出せるので:

$$
\nabla\cdot\mathbf{u} = \frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}+\frac{\partial w}{\partial z} = 0
$$

## つながり

- **🔥 熱力**: これは熱力で開放系（検査体積）にエネルギー収支を立てる前段の**質量保存**そのもの。質量流量 $\dot m=\rho u A$ の出入りを数える発想は、定常開放系で $\dot m_\text{in}=\dot m_\text{out}$ と置く連続式と同型で、保存量を「質量」から「エネルギー」に差し替えれば第一法則になる。
- **⚡ 電磁気**: 形が**電荷保存（連続の式）** $\dfrac{\partial \rho_e}{\partial t}+\nabla\cdot\mathbf{J}=0$ と完全に同じ。密度 $\rho\leftrightarrow$ 電荷密度 $\rho_e$、質量流束 $\rho\mathbf{u}\leftrightarrow$ 電流密度 $\mathbf{J}$ が対応する。「保存量は湧き出さない（発散＝時間変化の符号反転）」という構造は分野を問わず同じ。
- **🌀 流体内**: 非圧縮版 $\nabla\cdot\mathbf{u}=0$ は、この後の[ナビエ・ストークス](#/navier-stokes)や[クエット流れ](#/couette)で速度成分を絞り込む最初の拘束になる。

> **ポイント**: 「固定した箱に出入りする質量を数える → 保存」で出る。非圧縮は "湧き出しゼロ" の意味。以降のクエット／ポアズイユ流れでも、まずこの式で速度成分の関係を絞り込む。
