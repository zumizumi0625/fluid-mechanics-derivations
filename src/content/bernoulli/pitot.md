---
id: pitot
section: bernoulli
order: 3
title: ピトー（静圧）管の流速式
formula: u = √(2Δp/ρ)
issue: 367
year: 2026
prereq: [total-static-dynamic]
---

# ピトー（静圧）管の流速式

> **ゴール**: 全圧孔と静圧孔の差圧 $\Delta p$ を測るだけで流速が $u = \sqrt{2\Delta p/\rho}$ で求まる、というピトー静圧管の原理を、前ページの「全圧＝静圧＋動圧」から再現できるようにする。

## 物理状況

ピトー静圧管は、先端の**全圧孔**（流れに正面）と側面の**静圧孔**（流れに平行）を1本にまとめた測定器。両者の圧力差をマノメータや差圧計で読むと、その差は動圧そのものになる。動圧は速度だけで決まるので、差圧から流速が逆算できる。

@@FIG:pitot-tube@@

## 設定

[[total-static-dynamic]]の結果を出発点にする。同一流線上で、

- 全圧孔（よどみ点）が感じる圧力 … 全圧 $p_t$
- 静圧孔が感じる圧力 … 静圧 $p$
- 差圧 … $\Delta p \equiv p_t - p$

流体密度 $\rho$、求めたい流速 $u$。

## ステップ1: 全圧 − 静圧 ＝ 動圧

[[total-static-dynamic]] より $p_t = p + \tfrac12\rho u^2$。移項して、

$$
p_t - p = \frac12\rho u^2
$$

## ステップ2: 差圧で書き直す

左辺はまさに測定値 $\Delta p$ なので、

$$
\Delta p = \frac12\rho u^2
$$

## ステップ3: $u$ について解く

両辺に $2/\rho$ を掛けて平方根を取る:

$$
u^2 = \frac{2\Delta p}{\rho} \quad\Longrightarrow\quad u = \sqrt{\frac{2\Delta p}{\rho}}
$$

## 結論

$$
\boxed{\; u = \sqrt{\frac{2\,\Delta p}{\rho}} = \sqrt{\frac{2\,(p_t - p)}{\rho}} \;}
$$

マノメータで液柱差 $h_m$ を読む場合、差圧は $\Delta p = (\rho_m - \rho)\,g\,h_m$（$\rho_m$ はマノメータ液の密度）。これを代入すれば液柱差から直接 $u$ が出る。

> **ポイント**: 原理は「動圧を測って速度に戻す」だけ。空気のように $\rho$ が小さいほど同じ速度でも $\Delta p$ が小さく、精密な差圧計がいる。実機では孔の位置による誤差を補正する係数 $C$ を掛け $u = C\sqrt{2\Delta p/\rho}$ とすることもある。
