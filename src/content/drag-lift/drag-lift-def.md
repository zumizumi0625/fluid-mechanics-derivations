---
id: drag-lift-def
section: drag-lift
order: 1
title: 抗力・揚力の定義（無次元化）
formula: F_D = C_D·½ρU²A, F_L = C_L·½ρU²A
issue: 375
prereq: [reynolds]
---

# 抗力・揚力の定義（無次元化）

> **ゴール**: 物体が流れから受ける力を、流れ方向の **抗力** $F_D$ と直交方向の **揚力** $F_L$ に分け、動圧 $\tfrac12\rho U^2$ と代表面積 $A$ で割って無次元の係数 $C_D, C_L$ を定義する流れを、自分の手で再現できる。なぜ $\tfrac12\rho U^2 A$ で割るのか（次元解析）まで言えるようにする。

## 物理状況

一様流 $U$ の中に物体を置くと、表面のいたるところで **圧力** と **せん断応力** が働く。これを全部足し合わせた合力を、流れに平行な成分（抗力 $F_D$）と流れに垂直な成分（揚力 $F_L$）に分解する。力そのものは $U$ や物体サイズで桁が変わるので、**動圧と面積で割って無次元化**しておくと、形が同じ物体どうしを Re だけで比較できる。

**出発点は「物体に働く力 ＝ 表面に働く圧力とせん断応力の積分」という定義そのもの**。ここに新しい物理は足さず、次元解析で「力 ＝ (無次元数)×動圧×面積」の形を見抜き、その無次元数を $C_D, C_L$ と名付けるだけが本ページの仕事。

@@FIG:drag-lift-decomp@@

## 設定

- 一様流の速度 $U$、流体密度 $\rho$、粘性 $\mu$。
- 物体表面 $S$ 上の外向き単位法線を $\mathbf{n}$、圧力 $p$、粘性応力ベクトルを $\boldsymbol{\tau}$ とする。
- 流れ方向の単位ベクトルを $\mathbf{e}_x$（抗力方向）、それに直交する向きを $\mathbf{e}_y$（揚力方向）とする。

## ステップ1: 物体に働く合力は「圧力＋せん断」の表面積分

表面の各微小面 $dS$ には、圧力による法線力 $-p\,\mathbf{n}\,dS$ と、粘性によるせん断力 $\boldsymbol{\tau}\,dS$ が働く。全表面で積分すると合力 $\mathbf{F}$:

$$
\mathbf{F} = \oint_S \big(-p\,\mathbf{n} + \boldsymbol{\tau}\big)\,dS
$$

## ステップ2: 流れ方向と直交方向に分解する

合力を $\mathbf{e}_x$（抗力）と $\mathbf{e}_y$（揚力）に射影する。これがそれぞれの定義:

$$
\begin{aligned}
F_D &= \mathbf{F}\cdot\mathbf{e}_x = \oint_S \big(-p\,\mathbf{n}+\boldsymbol{\tau}\big)\cdot\mathbf{e}_x\,dS \\
F_L &= \mathbf{F}\cdot\mathbf{e}_y = \oint_S \big(-p\,\mathbf{n}+\boldsymbol{\tau}\big)\cdot\mathbf{e}_y\,dS
\end{aligned}
$$

> 抗力は「圧力抗力（形状抗力）」と「摩擦抗力」の和、という分け方も同じ式から出る（$-p\mathbf{n}$ が前者、$\boldsymbol{\tau}$ が後者）。

## ステップ3: 次元解析で「力 ∝ 動圧 × 面積」を見抜く

力 $F$ がどの量で決まるかを並べると $F = f(\rho, U, L, \mu)$。次元は $[F]=\mathrm{ML T^{-2}}$。動圧 $\tfrac12\rho U^2$ は単位面積あたりの力（$[\rho U^2]=\mathrm{M L^{-1}T^{-2}}$）の次元を持つので、これに面積 $A\sim L^2$ を掛けると力の次元になる:

$$
\big[\rho U^2\cdot A\big] = \mathrm{M L^{-1}T^{-2}}\cdot \mathrm{L^2} = \mathrm{M L\,T^{-2}} = [F]
$$

よって力は必ず $F = (\text{無次元数})\times \tfrac12\rho U^2 A$ の形に書ける。残った無次元数は $\mathrm{Re}=\rho UL/\mu$ の関数になる（バッキンガムの $\pi$ 定理）。

## ステップ4: 無次元係数として係数を定義する

ステップ3の「無次元数」を抗力係数 $C_D$・揚力係数 $C_L$ と名付ける。すなわち力を動圧 $\tfrac12\rho U^2$ と代表面積 $A$ で割ったもの:

$$
C_D \equiv \frac{F_D}{\tfrac12\rho U^2 A},\qquad
C_L \equiv \frac{F_L}{\tfrac12\rho U^2 A}
$$

## 結論

定義を力の形に戻すと:

$$
\boxed{\;F_D = C_D\cdot\tfrac12\rho U^2 A,\qquad F_L = C_L\cdot\tfrac12\rho U^2 A\;}
$$

ここで $C_D, C_L$ は形状が決まれば **レイノルズ数の関数** $C_D=C_D(\mathrm{Re})$（必要なら迎え角やマッハ数にも依存）。

### 代表面積 $A$ の取り方（ここが頻出の落とし穴）

$C_D, C_L$ は $A$ の定義とセットで初めて意味を持つ。慣習は対象で違う:

$$
A =
\begin{cases}
\text{前面投影面積（流れに垂直な影の面積）} & \text{球・円柱などの抗力体（bluff body）}\\[4pt]
\text{翼平面積（planform, 翼弦}\times\text{翼幅}） & \text{翼の揚力・抗力}
\end{cases}
$$

例: 直径 $d$ の球なら $A=\tfrac{\pi}{4}d^2$、長さ $\ell$・直径 $d$ の円柱（単位長あたりでなく全体）なら $A=\ell d$。

## つながり

- **📐 無次元化・相似則**: 力を動圧 $\tfrac12\rho U^2$ と面積 $A$ で割って残る無次元数が $C_D, C_L$。同じ「効果を1つの無次元数に畳む」操作が[レイノルズ数](#/reynolds) $\mathrm{Re}=UL/\nu$ で、形が相似な物体どうしは $C_D=C_D(\mathrm{Re})$ ひとつで比較できる（バッキンガムの $\pi$ 定理）。
- **🧱 材力（応力の表面積分）**: 合力 $\mathbf{F}=\oint_S(-p\,\mathbf{n}+\boldsymbol{\tau})\,dS$ は、応力テンソル $\boldsymbol{\sigma}$ を使えば $\oint_S \boldsymbol{\sigma}\cdot\mathbf{n}\,dS$。材力で断面の応力を積分して断面力を出すのと**同じ骨格**で、流体では $\boldsymbol{\sigma}=-p\,\mathbf{I}+\boldsymbol{\tau}$（静圧＋粘性応力）になっているだけ。
- **🌀 運動量欠損**: 表面の $p, \boldsymbol{\tau}$ を測らなくても、[運動量欠損](#/momentum-deficit)の検査体積（[検査体積の運動量保存](#/momentum-cv)）を使えば後流の速度プロファイルだけで同じ $F_D$ が出る。定義（この式）と検査体積（積分形）は同じ力の表と裏。

> **ポイント**: 「力 ＝ 係数 × 動圧 × 面積」。$\tfrac12$ を忘れず、$A$ が前面投影か翼平面かを最初に確認する。係数を出す問題は、まず $C=\dfrac{F}{\frac12\rho U^2 A}$ に数値を入れるだけ。$C_D$ が Re の関数になるのは [[reynolds]] の相似則から来ている。
