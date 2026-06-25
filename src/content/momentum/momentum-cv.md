---
id: momentum-cv
section: momentum
order: 1
title: 検査体積の運動量方程式（積分形）
formula: ΣF = ∮ ρu(u·n) dA
issue: 360
prereq: [continuity]
---

# 検査体積の運動量方程式（積分形）

> **ゴール**: ニュートンの第2法則を「空間に固定した検査体積」へ移すと $\displaystyle \sum\mathbf{F} = \frac{\partial}{\partial t}\int_{CV}\rho\mathbf{u}\,dV + \oint_{CS}\rho\mathbf{u}\,(\mathbf{u}\cdot\mathbf{n})\,dA$ になる、を自分で再現できる。定常なら左辺＝流出入の運動量フラックス。

## 物理状況

ニュートンの第2法則は「**物体（＝決まった粒子の集まり＝系）**の運動量の時間変化が外力に等しい」と言う。ところが流体では、同じ粒子を追いかけ続けるのは面倒で、むしろ**空間に固定した領域（検査体積 CV）**を流れが通り抜ける様子を見たい。そこで「系の追跡」を「検査体積の収支」へ翻訳する道具が**レイノルズ輸送定理**。検査面 $CS$ を通って運動量が持ち込まれ・持ち去られる、その正味が力になる。

@@FIG:momentum-cv@@

## 設定

出発点は**ニュートンの第2法則（運動量保存）**ひとつ。新しい力学は何も足さず、それを「決まった粒子の集まり（系）の追跡」から「空間に固定した検査体積の収支」へ翻訳するだけ、という方針をまず宣言しておく。

任意形状の検査体積 $CV$（境界＝検査面 $CS$）を空間に固定する。各点で密度 $\rho$、速度 $\mathbf{u}$。検査面の各微小面 $dA$ には**外向き単位法線** $\mathbf{n}$ を取る。$\mathbf{u}\cdot\mathbf{n}>0$ なら流出、$<0$ なら流入。$\sum\mathbf{F}$ は検査体積内の流体に働く外力の総和（圧力・重力・壁からの反力など）。

## ステップ1: 系に対するニュートンの第2法則

時刻 $t$ に検査体積と一致している流体（系）について、運動量 $\int_{sys}\rho\mathbf{u}\,dV$ の時間変化が外力に等しい:

$$
\sum\mathbf{F} = \frac{d}{dt}\left(\int_{sys}\rho\mathbf{u}\,dV\right)
$$

## ステップ2: レイノルズ輸送定理で検査体積へ移す

示量変数（系全体で積算される量）$B=$ 運動量、その単位質量あたり量 $b=\mathbf{u}$ に輸送定理を適用する。「系での時間変化」は「CV内での時間変化」＋「CSを通って正味で流出する分」に分解される:

$$
\frac{d}{dt}\int_{sys}\rho\mathbf{u}\,dV
= \frac{\partial}{\partial t}\int_{CV}\rho\mathbf{u}\,dV
+ \oint_{CS}\rho\mathbf{u}\,(\mathbf{u}\cdot\mathbf{n})\,dA
$$

第2項が**運動量フラックス**。$\rho(\mathbf{u}\cdot\mathbf{n})\,dA$ は面 $dA$ を単位時間に通る質量流量（スカラー）で、それに速度 $\mathbf{u}$ を掛けた $\mathbf{u}\,\big[\rho(\mathbf{u}\cdot\mathbf{n})\,dA\big]$ がその質量の運ぶ運動量（ベクトルのスカラー倍であって外積ではない）。

## ステップ3: 両者を等置（一般形）

ステップ1と2を結ぶと、検査体積の運動量方程式（一般形）:

$$
\sum\mathbf{F} = \frac{\partial}{\partial t}\int_{CV}\rho\mathbf{u}\,dV
+ \oint_{CS}\rho\mathbf{u}\,(\mathbf{u}\cdot\mathbf{n})\,dA
$$

左辺は力、右辺第1項は「CV内にたまっている運動量の変化（非定常項）」、第2項は「面を通って出ていく運動量」。

## ステップ4: 定常流に絞る

定常（時間に依らない）なら非定常項 $\partial/\partial t=0$ なので:

$$
\boxed{\;\sum\mathbf{F} = \oint_{CS}\rho\mathbf{u}\,(\mathbf{u}\cdot\mathbf{n})\,dA\;}
$$

## 結論

流入面・流出面で速度と密度が一様とみなせる「1入口1出口」の典型問題では、各面の質量流量 $\dot m = \rho|\mathbf{u}\cdot\mathbf{n}|A$ を使って積分が和になり:

$$
\boxed{\;\sum\mathbf{F} = \dot m_{out}\,\mathbf{u}_{out} - \dot m_{in}\,\mathbf{u}_{in}\;}
$$

質量保存（[連続の式](#/continuity)）より $\dot m_{in}=\dot m_{out}=\dot m=\rho Q$ なら $\sum\mathbf{F}=\dot m(\mathbf{u}_{out}-\mathbf{u}_{in})$。次ページ以降の噴流・ロータ・波は、すべてこの式の**ベクトル成分への適用**でしかない。

## つながり

- **🏗️ 力学**: これは質点のニュートン第2法則 $\dfrac{d\mathbf{p}}{dt}=\sum\mathbf{F}$ を、連続体・空間固定領域へ拡張した**場の版**そのもの。質点で「運動量の時間変化＝外力」だったものが、流体では「CV内の運動量変化＋面を通る正味流出＝外力」になるだけで、保存則の中身は変わらない。
- **🧱 材力**: 右辺の力 $\sum\mathbf{F}$ に含まれる面力（圧力・粘性応力）を応力テンソル $\sigma_{ij}$ で書くと $\oint_{CS}\boldsymbol{\sigma}\cdot\mathbf{n}\,dA$ となり、材力で物体のつり合いを「応力テンソル＋面積分」で立てる骨格と同型。そこに運動量フラックス $\oint_{CS}\rho\mathbf{u}(\mathbf{u}\cdot\mathbf{n})\,dA$ が加わったのが流体版で、流れを止めれば（フラックス0）材力のつり合い $\nabla\cdot\boldsymbol{\sigma}+\mathbf{f}=0$ に戻る。
- **🌀 流体内**: 質量流量 $\dot m=\rho Q$ は[連続の式](#/continuity)から来る。この先の[噴流の力](#/jet-plate)・[ロータ推力](#/rotor-thrust)・[浅水波](#/shallow-wave)は、すべてこの式を特定の面・成分に当てるだけ。

> **ポイント**: 詰まる原因はほぼ符号。$\mathbf{u}\cdot\mathbf{n}$ の正負（流出＋／流入−）と、求めたい「物体が流体に与える力」と「流体が物体に与える反力」の向きを取り違えないこと。力 $\sum\mathbf{F}$ には圧力・重力に加えて、検査面が壁に接する問題では**壁からの反力**が必ず入る。
