---
id: potential-stream-func
section: potential
order: 1
title: 速度ポテンシャル φ・流れ関数 ψ・複素速度ポテンシャル
formula: u = ∂φ/∂x = ∂ψ/∂y, v = ∂φ/∂y = −∂ψ/∂x, W(z) = φ + iψ
issue: 379
prereq: [continuity]
---

# 速度ポテンシャル φ・流れ関数 ψ・複素速度ポテンシャル

> **ゴール**: 「非回転だから $\phi$ が出る」「非圧縮2次元だから $\psi$ が出る」という2つの理由を分けて理解し、両者が**コーシー・リーマンの関係**で結ばれること、そして $W(z)=\phi+i\psi$ という1つの複素関数にまとまり $\dfrac{dW}{dz}=u-iv$ で速度が読めることを自分で再現できる。

## 物理状況

完全流体（非粘性）で渦なし・非圧縮の2次元流れを考える。このとき流れ場は**2つのスカラー関数** $\phi$（速度ポテンシャル）と $\psi$（流れ関数）だけで完全に記述できる。等ポテンシャル線 $\phi=\text{const}$ と流線 $\psi=\text{const}$ は互いに直交する格子をつくり、この格子を 1 つの複素関数 $W(z)$ に束ねるのがポテンシャル流れ理論の出発点である。

@@FIG:potential-grid@@

## 設定

2次元・定常・非圧縮・非回転（渦なし）の完全流体を考える。速度を $\mathbf{u}=(u,v)$、位置を $(x,y)$、複素座標を $z=x+iy$ とする。

- **非回転**: 渦度 $\omega=\dfrac{\partial v}{\partial x}-\dfrac{\partial u}{\partial y}=0$
- **非圧縮**: 連続の式 $\dfrac{\partial u}{\partial x}+\dfrac{\partial v}{\partial y}=0$（[[continuity]] より）

> **出発点（このページのアンカー）**: 新しい物理は持ち込まず、**非回転・非圧縮という2つの条件**だけを出発点にする。非回転からポテンシャル $\phi$ の定義 $\mathbf{u}=\nabla\phi$ が、非圧縮から流れ関数 $\psi$ の定義が生まれ、どちらも同じラプラス方程式 $\nabla^2\phi=\nabla^2\psi=0$ に帰着する。以降の円柱流れ・揚力はこの2つの定義の重ね合わせだけで解ける。

## ステップ1: 非回転 → 速度ポテンシャル φ の存在

ベクトル解析の定理「回転がゼロの場（$\nabla\times\mathbf{u}=0$）はあるスカラーの勾配で書ける」より、速度をスカラー $\phi$ の勾配として表せる:

$$
\mathbf{u}=\nabla\phi \quad\Longleftrightarrow\quad u=\frac{\partial \phi}{\partial x},\qquad v=\frac{\partial \phi}{\partial y}
$$

この $\phi$ を**速度ポテンシャル**と呼ぶ。実際これを渦度に入れると $\dfrac{\partial^2\phi}{\partial x\partial y}-\dfrac{\partial^2\phi}{\partial y\partial x}=0$ となり、非回転が自動的に満たされる。

## ステップ2: φ はラプラス方程式を満たす

$\mathbf{u}=\nabla\phi$ を非圧縮の連続の式 $\nabla\cdot\mathbf{u}=0$ に代入する:

$$
\nabla\cdot(\nabla\phi)=\nabla^2\phi=\frac{\partial^2\phi}{\partial x^2}+\frac{\partial^2\phi}{\partial y^2}=0
$$

つまり $\phi$ は**調和関数**（ラプラス方程式の解）。これがポテンシャル流れの支配方程式。

## ステップ3: 非圧縮2次元 → 流れ関数 ψ の存在

連続の式 $\dfrac{\partial u}{\partial x}+\dfrac{\partial v}{\partial y}=0$ は、あるスカラー $\psi$ を使って次のように置けば**恒等的に**満たされる:

$$
u=\frac{\partial \psi}{\partial y},\qquad v=-\frac{\partial \psi}{\partial x}
$$

確かめると $\dfrac{\partial u}{\partial x}+\dfrac{\partial v}{\partial y}=\dfrac{\partial^2\psi}{\partial x\partial y}-\dfrac{\partial^2\psi}{\partial y\partial x}=0$。この $\psi$ を**流れ関数**と呼ぶ。$\psi=\text{const}$ の線は流線そのものである（流線に沿って $\psi$ は変化しない）。

## ステップ4: ψ もラプラス方程式を満たす

$\psi$ の定義を非回転条件 $\dfrac{\partial v}{\partial x}-\dfrac{\partial u}{\partial y}=0$ に代入する:

$$
\frac{\partial}{\partial x}\!\left(-\frac{\partial \psi}{\partial x}\right)-\frac{\partial}{\partial y}\!\left(\frac{\partial \psi}{\partial y}\right)=-\nabla^2\psi=0
\;\;\Longrightarrow\;\; \nabla^2\psi=0
$$

$\phi$ と同じく $\psi$ も調和関数。**$\phi$ は連続の式から、$\psi$ は非回転条件からラプラス方程式を得る**点が対になっている。

## ステップ5: コーシー・リーマンの関係（φ と ψ の橋渡し）

$u,v$ を $\phi$ で表した式（ステップ1）と $\psi$ で表した式（ステップ3）を等しいと置く:

$$
\boxed{\;u=\frac{\partial \phi}{\partial x}=\frac{\partial \psi}{\partial y},\qquad v=\frac{\partial \phi}{\partial y}=-\frac{\partial \psi}{\partial x}\;}
$$

これは複素関数論の**コーシー・リーマン方程式**そのものである。したがって $\phi$ を実部、$\psi$ を虚部にもつ複素関数は**正則（解析的）**になる。

## ステップ6: φ と ψ の直交性

等ポテンシャル線の法線方向は $\nabla\phi$、流線の法線方向は $\nabla\psi$。両勾配の内積を取ると:

$$
\nabla\phi\cdot\nabla\psi=\frac{\partial\phi}{\partial x}\frac{\partial\psi}{\partial x}+\frac{\partial\phi}{\partial y}\frac{\partial\psi}{\partial y}
= u\,(-v)+v\,(u)=0
$$

勾配どうしが直交 → **等ポテンシャル線 $\phi=\text{const}$ と流線 $\psi=\text{const}$ は至る所で直交する**。図の直交格子はこの帰結。

## ステップ7: 複素速度ポテンシャル W(z) と複素速度

$\phi,\psi$ がコーシー・リーマンを満たすので、次の**複素速度ポテンシャル**を定義できる:

$$
W(z)=\phi(x,y)+i\,\psi(x,y),\qquad z=x+iy
$$

$W$ は正則なので微分 $dW/dz$ は方向によらず一意。実軸方向（$dz=dx$）で微分すると:

$$
\frac{dW}{dz}=\frac{\partial \phi}{\partial x}+i\frac{\partial \psi}{\partial x}
= u+i(-v)=u-iv
$$

## 結論

ポテンシャル流れは、1つの正則関数 $W(z)$ にすべての情報が詰まっている:

$$
\boxed{\;W(z)=\phi+i\psi,\qquad \frac{dW}{dz}=u-iv\;}
$$

$\phi,\psi$ はともにラプラス方程式 $\nabla^2\phi=\nabla^2\psi=0$ を満たし、コーシー・リーマンの関係 $u=\phi_x=\psi_y,\ v=\phi_y=-\psi_x$ で結ばれ、$\phi=\text{const}$ と $\psi=\text{const}$ は直交する。

## つながり

- **⚡ 電磁気（主役の同型）**: 速度ポテンシャル $\phi$ が $\nabla^2\phi=0$ を満たすのは、電荷のない領域の**静電ポテンシャル** $\nabla^2\phi_e=0$ と全く同じラプラス方程式。$\mathbf{u}=\nabla\phi$ は $\mathbf{E}=-\nabla\phi_e$ と同型で、等ポテンシャル線と流線（電気力線にあたる）が直交するのも共通。ポテンシャル流れの境界値問題は、そっくり静電場の問題に翻訳できる。
- **⚡ 複素解析の同型**: $\phi,\psi$ がコーシー・リーマンを満たし $W(z)=\phi+i\psi$ が正則になる構造は、2次元の静電場を複素ポテンシャルで解く手法と同一。$\phi=\text{const}$ と $\psi=\text{const}$ の直交格子は、静電場の等電位線と電気力線が作る直交網と同じもの。
- **🌀 流体内のつながり**: ここで定義した $W(z)$ と複素速度 $dW/dz=u-iv$ がそのまま[円柱まわりの流れ](#/cylinder-flow)・[揚力](#/kutta-joukowski)の土台になる。出発点の質量保存は[連続の式](#/continuity)。

> **ポイント**: 「非回転 → $\phi$（連続の式でラプラス）」「非圧縮2次元 → $\psi$（非回転でラプラス）」と**出所を逆に覚える**のが整理の鍵。複素速度は $u+iv$ ではなく**$u-iv$**（虚部の符号が反転）であることが計算ミスの定番。以降の円柱流れ・揚力はすべて $W(z)$ を足し合わせるだけで解ける。
