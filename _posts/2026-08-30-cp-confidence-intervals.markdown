---
layout: post
title: "Clopper-Pearson vs Blaker: Exact Confidence Intervals for Proportions"
date: 2026-08-30 21:00:00 -0500
description: "A deep dive into the differences between Clopper-Pearson and Blaker's exact confidence intervals for proportions, exploring their mathematical foundations and practical implications in machine learning."
categories: [Statistics]
tags: [Statistics, Confidence Intervals, Clopper-Pearson, Blaker]
---

On my day-to-day job, I am lucky to work with a lot of probability and statistics, and one of the concepts which we regularly see is that point estimates are not enough as a measure of performance in machine learning. For ML use cases, one of the interesting concepts is confidence intervals. For metrics which are proportional with y/n output (like pass rate, recall, precision), we can use Wilson or approximate with Normal. But as the sample size gets lower, or the point estimate concentrates around boundaries, the Normal distribution fails to approximate the correct metric distribution, so we have to opt for exact ones like Clopper-Pearson (CP) or Blaker's. But have you noticed that Blaker's is always a subset of Clopper-Pearson? Both use the exact distribution. What is the difference then?

### The Nature of Exactness and Over-Coverage

In binary classification, evaluating a metric on a finite dataset is equivalent to estimating an unknown parameter $p \in [0, 1]$ from $k$ successes in $n$ independent Bernoulli trials. The generative process is governed by the Binomial distribution:

$$X \sim \text{Binomial}(n, p)$$

where the probability mass function (PMF) is $P(X = x \mid p) = \binom{n}{x} p^x (1-p)^{n-x}$.

An interval $C(X) = [p_L, p_U]$ is defined as "exact" if it guarantees strict coverage for all possible true values of $p$:

$$\inf_{p \in [0,1]} P(p \in C(X) \mid p) \geq 1 - \alpha$$

Because the Binomial distribution is discrete, achieving exactly $1 - \alpha$ coverage everywhere is impossible. The cumulative probability forms a step function, forcing conservative over-coverage to maintain the strict lower bound. The divergence between exact methods stems from how they allocate this mathematical padding.

### Clopper-Pearson: The Equal-Tail Split

Clopper-Pearson enforces the error constraint symmetrically and independently. It demands that the probability of the observed outcome (or anything more extreme) in each tail strictly does not exceed $\alpha/2$.

Given $k$ successes, the bounds $[p_L, p_U]$ are defined by the roots of the tail cumulative distribution functions:

$$\sum_{i=k}^{n} \binom{n}{i} p_L^i (1-p_L)^{n-i} = \frac{\alpha}{2}$$

$$\sum_{i=0}^{k} \binom{n}{i} p_U^i (1-p_U)^{n-i} = \frac{\alpha}{2}$$

This rigid symmetric allocation means probability mass that falls below the $\alpha/2$ threshold on one side due to discrete jumps is permanently wasted. The result is severe over-coverage.

<div class="row">
    <div class="col-12 col-md-12 mx-auto d-block">
        {% include figure.liquid path="/assets/img/CIs/clopper_pearson_plot.png" class="img-fluid" caption="Clopper-Pearson exact confidence interval bounds ($n=20$, $\alpha=0.05$). The shaded region represents the conservative coverage space necessitated by the rigid, independent $\alpha/2$ allocation applied to each tail of the discrete Binomial distribution" %}
    </div>
</div>

### Blaker's Method: Combined-Tail Reallocation

Blaker's method removes the rigid independent $\alpha/2$ split. It inverts a unified two-sided test based on the minimum tail probability:

$$\gamma(x, p) = \min\Big( P(X \ge x \mid p), P(X \le x \mid p) \Big)$$

The combined p-value for the observation $k$ aggregates the probabilities of all outcomes $y$ at least as rare as $k$:

$$P_{\text{Blaker}}(k, p) = \sum_{y:\, \gamma(y, p) \le \gamma(k, p)} P(X = y \mid p)$$

The interval consists of all $p$ where $P_{\text{Blaker}}(k, p) > \alpha$.

### The Subset Proof

Blaker's formulation dynamically reallocates the unused error budget from the discrete jumps of the asymmetric tail to the opposite tail. Mathematically, the Blaker p-value is bounded from above by $2 \gamma(k,p)$, which is the exact test statistic inverted by Clopper-Pearson. Consequently:

$$C_{\text{Blaker}} \subseteq C_{\text{CP}}$$

Blaker tightens the interval strictly by optimizing the error allocation, reducing the conservative penalty of the discrete PMF without violating the exact $\geq 1-\alpha$ guarantee.

<div class="row">
    <div class="col-12 col-md-12 mx-auto d-block">
        {% include figure.liquid path="/assets/img/CIs/blakers_method_plot.png" class="img-fluid" caption="Blaker's method bounds overlaid against the Clopper-Pearson baseline space. The inner highlighted region demonstrates the dynamic error budget reallocation across both tails, visually proving the strict mathematical subset property $C_{\text{Blaker}} \subseteq C_{\text{CP}}$ through the elimination of unused conservative padding." %}
    </div>
</div>

* **Note on Computational Instability:** CP utilizes stable closed-form Beta distribution roots ($p_L = \text{Beta}^{-1}(\alpha/2; k, n-k+1)$). Blaker lacks closed-form inverses, requiring numerical root-finding. The discrete step-functions can trap these algorithms in local discontinuities, requiring pre-computed lookup tables for low-latency production deployment.