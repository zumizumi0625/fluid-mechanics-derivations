---
id: navier-stokes
section: viscous
order: 1
title: ナビエ・ストークス方程式を書き下す
formula: ρ(∂u/∂t + u·∇u) = −∇p + μ∇²u + ρg
issue: 370
prereq: [continuity, shear-stress]
---

# ナビエ・ストークス方程式を書き下す

> **ゴール**: 流体の小さなかたまりに**ニュートンの運動方程式 $m\mathbf{a}=\mathbf{F}$** を当てはめ、力を「圧力・粘性・重力」に分けるだけで $\rho\left(\dfrac{\partial \mathbf{u}}{\partial t}+\mathbf{u}\cdot\nabla\mathbf{u}\right)=-\nabla p+\mu\nabla^2\mathbf{u}+\rho\mathbf{g}$ が出る、を再現できる。各項の意味とオーダーを押さえ、以降の流れ（クエット／ポアズイユ／液膜）の**簡略化の土台**にする。

## 物理状況

空間を流れていく**流体粒子**（微小なかたまり）を1つ追いかける。この粒子に働く力は3種類しかない — 周りの流体が押す**圧力**、隣の層がこすってくる**粘性（せん断）**、そして**重力**。これらの合力が、粒子の質量×加速度に等しい。NS方程式は「$m\mathbf{a}=\mathbf{F}$ を流体に書いただけ」のもの。

@@FIG:ns-terms@@

## 設定

密度 $\rho$（非圧縮で一定とする）、速度場 $\mathbf{u}=(u,v,w)$、圧力 $p$。粘性係数 $\mu$ は一定のニュートン流体。微小直方体 $dV=dx\,dy\,dz$ のかたまりに注目し、質量は $\rho\,dV$。

**この導出の出発点は2つだけ** — ①**運動量保存**（ニュートンの第2法則 $m\mathbf{a}=\mathbf{F}$）と、②せん断応力をひずみ速度で結ぶ**ニュートン流体の構成則** $\tau=\mu\,\partial u/\partial y$（[[shear-stress]]）。新しい物理は足さず、この2つを微小体積に当てて力を圧力・粘性・重力に分けるだけで NS が出る。

## ステップ1: 加速度＝物質微分（左辺）

速度 $\mathbf{u}(x,y,z,t)$ は場所と時刻の関数。粒子は動きながら場所を変えるので、その加速度は単なる $\partial\mathbf{u}/\partial t$ ではなく、**移動による変化**も足した**物質微分** $\dfrac{D\mathbf{u}}{Dt}$ になる:

$$
\frac{D\mathbf{u}}{Dt}=\underbrace{\frac{\partial \mathbf{u}}{\partial t}}_{\text{非定常項}}+\underbrace{(\mathbf{u}\cdot\nabla)\mathbf{u}}_{\text{対流（移流）項}}
$$

連鎖律 $\dfrac{d}{dt}\mathbf{u}(x(t),\dots,t)=\dfrac{\partial\mathbf{u}}{\partial t}+\dfrac{dx}{dt}\dfrac{\partial\mathbf{u}}{\partial x}+\cdots$ で、$dx/dt=u$ などを入れれば $(\mathbf{u}\cdot\nabla)\mathbf{u}$ が出る。

## ステップ2: 質量×加速度

かたまりの運動方程式は $(\text{質量})\times(\text{加速度})=(\text{合力})$。単位体積あたりにするため両辺を $dV$ で割ると、左辺は:

$$
\rho\frac{D\mathbf{u}}{Dt}=\rho\left(\frac{\partial \mathbf{u}}{\partial t}+(\mathbf{u}\cdot\nabla)\mathbf{u}\right)
$$

あとは右辺の**単位体積あたりの力**を圧力・粘性・重力に分けて足していく。

## ステップ3: 圧力による力

かたまりの左右の面にかかる圧力の差が正味の力を生む。$x$ 方向だけ見ると、左面 $p|_x$ が押す力と右面 $p|_{x+dx}$ が押し返す力の差:

$$
\big[p|_x-p|_{x+dx}\big]\,dy\,dz=-\frac{\partial p}{\partial x}\,dV
$$

3方向まとめると、単位体積あたりの圧力の力は $-\nabla p$。**圧力は高い方から低い方へ押す**ので負符号。

## ステップ4: 粘性による力（ニュートン流体の構成則）

隣り合う層の速度差がせん断応力を生む。ニュートン流体では $\tau=\mu\dfrac{\partial u}{\partial y}$（[[shear-stress]]）。応力は面の位置で変わるので、向かい合う面の応力差が正味の力になる。たとえば $x$ 方向運動量に効く $\tau_{yx}=\mu\,\partial u/\partial y$ の $y$ 方向の差分は:

$$
\frac{\partial}{\partial y}\left(\mu\frac{\partial u}{\partial y}\right)dV=\mu\frac{\partial^2 u}{\partial y^2}\,dV
$$

$x,y,z$ すべての向きの応力差を集めると、単位体積あたりの粘性力は $\mu\nabla^2\mathbf{u}$ に束ねられる。**$\nabla^2$（ラプラシアン）は「周りより速いか遅いか」を測る量**で、速度の凸凹をならす向きに働く。

## ステップ5: 重力（外力）

単位体積あたりの重力は $\rho\mathbf{g}$。鉛直下向きにかかる。これで右辺の3つの力がそろった。

## 結論

ステップ2の左辺＝ステップ3〜5の力の和、で**ナビエ・ストークス方程式**（非圧縮・粘性一定）:

$$
\boxed{\;\rho\left(\frac{\partial \mathbf{u}}{\partial t}+(\mathbf{u}\cdot\nabla)\mathbf{u}\right)=-\nabla p+\mu\nabla^2\mathbf{u}+\rho\mathbf{g}\;}
$$

左辺は**慣性**（流れの勢い）、右辺は順に**圧力勾配・粘性・重力**。連続の式 [[continuity]] $\nabla\cdot\mathbf{u}=0$ と連立して速度場が決まる。

### 各項のオーダーと簡略化の方針

代表速度 $U$・代表長さ $L$ で各項を見積もると:

$$
\underbrace{\rho\frac{U^2}{L}}_{\text{対流（慣性）}}\quad\text{vs}\quad\underbrace{\mu\frac{U}{L^2}}_{\text{粘性}}\qquad\Rightarrow\qquad
\frac{\text{慣性}}{\text{粘性}}=\frac{\rho U L}{\mu}=Re
$$

比がレイノルズ数 $Re$。**層流（$Re$ 小）では慣性項 $(\mathbf{u}\cdot\nabla)\mathbf{u}$ が小さく落とせる**。さらに各流れで効く仮定を入れて項を消す:

$$
\begin{aligned}
\text{定常} &: \ \partial\mathbf{u}/\partial t=0\\
\text{完全発達・平行流} &: \ (\mathbf{u}\cdot\nabla)\mathbf{u}=0\ (\text{流れ方向に変化しない})\\
\text{圧力勾配を与える} &: \ -\partial p/\partial x\ \text{だけ残す}
\end{aligned}
$$

この消し方こそ次ページ以降の主役。残るのは「粘性項＝圧力勾配（または重力）」の単純な2階常微分方程式になる。

## つながり

- **🧱 材力（構成則・弾性平衡との対比）**: 静的な固体のつり合いは $\nabla\cdot\boldsymbol{\sigma}+\rho\mathbf{g}=0$（応力テンソルの発散＝外力）。材力はここに応力をひずみで結ぶ構成則 $\sigma=E\varepsilon$ を入れるが、流体は応力を**ひずみ速度**で結ぶ $\tau=\mu\,\partial u/\partial y$ を入れる。NSの粘性項 $\mu\nabla^2\mathbf{u}$ は「弾性平衡の構成則を“変位勾配→速度勾配”に置き換えた」流体版で、流れを止めれば（$\mathbf{u}\to0$）静的なつり合いに戻る。
- **🔥⚡ 拡散方程式の同型**: 圧力勾配を外して非定常にすると $\dfrac{\partial \mathbf{u}}{\partial t}=\nu\nabla^2\mathbf{u}$（動粘度 $\nu=\mu/\rho$）。これは熱伝導 $\dfrac{\partial T}{\partial t}=\alpha\nabla^2T$（熱拡散率 $\alpha$）や磁場拡散 $\dfrac{\partial \mathbf{B}}{\partial t}=\eta\nabla^2\mathbf{B}$ と**全く同じ拡散方程式**。$\nu,\ \alpha,\ \eta$ が同じ「拡散率」の役で、運動量・熱・磁場が同じ数学でならされていく。次ページ以降の[クエット](#/couette)・[ポアズイユ](#/poiseuille-plates)はこの拡散の定常解にあたる。

> **ポイント**: NSは結局 $m\mathbf{a}=\mathbf{F}$。左辺＝慣性、右辺＝圧力・粘性・重力、と暗記より分解で覚える。試験では「定常・完全発達・平行流」でどの項がなぜ消えるかを毎回言えるかが勝負。消した後に残る式は $\mu\,d^2u/dy^2=dp/dx$ の形ばかり。
