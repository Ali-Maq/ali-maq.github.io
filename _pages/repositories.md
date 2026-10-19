---
layout: page
permalink: /repositories/
title: repositories
description: Public implementations, experiments, and documentation.
nav: true
nav_order: 5
---

Explore my work on [GitHub](https://github.com/Ali-Maq). Each repository documents its own scope, dependencies, and limitations.

<div class="row">
{% for project in site.data.repositories.projects %}
  <div class="col-md-6 mb-4">
    <div class="card h-100 p-4">
      <h2 class="h5"><a href="https://github.com/{{ project.repo }}">{{ project.name }}</a></h2>
      <p>{{ project.description }}</p>
      <a href="https://github.com/{{ project.repo }}">View repository →</a>
    </div>
  </div>
{% endfor %}
</div>
