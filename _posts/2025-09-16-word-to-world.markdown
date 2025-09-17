---
layout: post
title: "From Words to Worlds: Dreaming of a Universal Language of Space-Time"
date: 2025-09-16 23:57:32 -0400
description: "In just a few years, large language models (LLMs) have transformed the AI landscape. From chatbots that write essays to systems that translate dozens of languages in real time, the field of natural language processing feels like it has blossomed into maturity. Text, with its neat sequence of tokens, has proven to be a wonderfully uniform substrate for machine learning. Give a model enough words, and it learns to reason, summarize, and even create. But what about the world beyond words, the world we move through, build on, and change every day?"
categories: [Machine Learning, Representation Learning]
tags: [Language Models, Universal Representation, Spatio-Temporal Data, AI]
---

In just a few years, large language models (LLMs) have transformed the AI landscape. From chatbots that write essays to systems that translate dozens of languages in real time, the field of natural language processing feels like it has blossomed into maturity. Text, with its neat sequence of tokens, has proven to be a wonderfully uniform substrate for machine learning. Give a model enough words, and it learns to reason, summarize, and even create. But what about the world beyond words, the world we move through, build on, and change every day?

## The Uneven Map of "Map AI"

When it comes to spatial and temporal data such as maps, mobility traces, satellite images, the progress is far less tidy.
We have excellent point solutions: routing apps, traffic forecasting, crop-yield estimators, wildfire monitors.
Yet the field lacks the shared foundation that NLP enjoys.
Datasets are fragmented, privacy concerns limit data sharing, and the problems themselves span wildly different scales.

Think about the challenges still wide open:

* Predicting city-scale traffic during an unexpected event.
* Updating a map in real time after a hurricane destroys infrastructure.
* Forecasting the spread of an epidemic using only anonymized mobility signals.
* Monitoring illegal deforestation from noisy satellite streams.
* Having a highly noisy GPS traces (a lot of spelling mistakes) and trying to figure out the actual path taken on a map and performing the target task well.

## A Question of Representation

In language, the breakthrough came from **representation**: words and sub-words as sequences of tokens.
Could we find an equally universal representation for the physical world?
One where, once the model has "read" enough of it, we can ask complex questions about traffic, climate, migration, and receive grounded answers?

That's the dream: a *language of space-time*.

## Sketching a Language of Space-Time

Imagine a representation $\mathcal{R}$ that treats **space and time as first-class citizens** and combines:

1. **Objects** – discrete entities like roads, buildings, rivers, or even people, each with geometry and attributes.
2. **Fields** – continuous measurements such as temperature, elevation, air quality.
3. **Events** – point occurrences anchored in space and time: an accident, a flood, a festival.
4. **Relations** – topological or metric links: adjacency, containment, causality.
5. **Dynamics** – how objects and fields evolve over time, capturing motion, growth, decay.

Think of $\mathcal{R}$ as a *typed spatio-temporal knowledge graph* where a city's road network, the shifting jet stream, and a person's walking trajectory all live in one coherent structure.

On top of this, we could define tasks just as NLP defines next-token prediction:

* **Prediction:** forecast future states of $\mathcal{R}$ (traffic, weather, population flows).
* **Reasoning:** answer complex spatial queries or infer causes of observed patterns.
* **Optimization:** search for interventions like rerouting traffic, allocating emergency resources that reshape $\mathcal{R}$ toward a goal.

## Just a Thought, for Now

This is only an idea, a sketch of what might be possible.
But if language models taught us anything, it's that a powerful, shared representation can ignite an entire field.
Perhaps one day we'll have a "universal geo-time model" that understands our planet as fluently as today's LLMs understand text.

I understand that the language is a symbolic one-dimensional representation, while the world is continuous and multi-dimensional.
Maybe even comparing the two is like comparing apples and oranges. But the success of LLMs makes me wonder if we can find a middle ground.

For now, it remains a dream I hope to explore and maybe, someday, help bring to life.

-- Ali
