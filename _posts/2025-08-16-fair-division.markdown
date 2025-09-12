---
layout: post
title: "Game Theory: Fair Division"
date: 2025-08-16 21:29:04 -0400
description: "I’ve always wanted to write about game theory but never did. Recently, I started flipping through my old game theory books and came across mechanism design. Today, I’ll mention something that I think you can also use in your life: division problems and their different variations."
categories: [Math, Game Theory]
tags: [Fair Division, Envy-Free, Cake-Cutting, Moving-Knife, Proportional Division]
---

## Introduction

I’ve always wanted to write about game theory but never did. Recently, I started flipping through my old game theory books and came across mechanism design. Today, I’ll mention something that I think you can also use in your life: division problems and their different variations.

You can google Game Theory, Alive[^alive], I would say that's a good book. Also it includes topics on Stable Matching, Voting, Auctions, Truthfulness, and more. But today, I want to focus on fair division.

## Cake-Cutting Problem

Let’s assume there is a cake we want to divide between two people. What do we do? What is the best way to divide it? Obviously, one person cuts and the other one picks. There is no way either of them would be upset: they have gotten at least $1/n$ of their valuation.

Let me give an example. I love the cherries on the cake and I’d say that’s the best part you can get. So I divide it so that one cherry is on one side and the other cherry is on the other side. Now I offer my friend to choose. If he has the same taste, he can get half of the best part and I will too; but if he doesn’t like cherries, he can choose whichever part makes him happier. So he will definitely get half or more of the part he like.

This gets a little bit tricky when it becomes $n \ge 3$. What should we do then so we can still guarantee fairness for any number of people, and what kind of procedure would work when everyone values the cake differently? **Think about it before jumping to the end of the post** 😛

Mathematically speaking, if we want to divide the continuous range $[0,1] \subset \mathbb{R}$ (the cake) and each of $n$ participants has a valuation function $v_i$ for the cake, if the following condition holds, we can say it is a fair division:

**Fair (proportional) division condition:** find a partition $(r_1,\dots,r_n)$ of $[0,1]$ such that

\begin{equation}
  v_i(r_i)\ \ge\ \frac{1}{n}\qquad \forall i\in\{1,\dots,n\},
\end{equation}

assuming $v_i([0,1])=1$.

## Envy-Free Division

In addition, we have a more restricted condition; it’s called envy-free division. This means that no one should be envious of another person’s share.

Mathematically speaking, we can express this as follows:
$$
v_i(r_i) \ge v_i(r_j) \quad \forall i,j \in [1,n].
$$

This guarantees a fair division; it is stricter than simple fair division.

But finding an envy-free division is more challenging. I will write about it in the next post.

## Simple Fair Division Algorithm for any $n$

Did you find the solution for the simple fair division for the $n$ people involved for the cake?

{% details **Moving-knife (proportional for any $n$)** (Click here to know more) %}

- Start with all $n$ players and the cake interval $[0,1]$. Place a knife at the left end and move it continuously to the right.
- While $k$ players remain:
  - As the knife moves, any player $i$ may call “stop” the first time the left-hand piece (from the current left boundary $L$ to knife position $x$) is worth exactly $1/k$ of the whole cake to them, i.e., $v_i([L,x])=1/k$.
  - Cut at $x$, give $[L,x]$ to that player, remove them from the game, set $L\leftarrow x$, and continue with $k-1$ players.
- When two players remain, use cut-and-choose on the remainder.
- **Guarantee:** each player receives a piece they value at least $1/n$, hence a fair (proportional) division.
{% enddetails %}

## References

[^alive]: [Game Theory, Alive](https://homes.cs.washington.edu/~karlin/GameTheoryBook.pdf)
