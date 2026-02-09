---
layout: default
title: Events
permalink: /events/
---

<section class="page-hero">
  <div class="container">
    <h1>Events</h1>
    <p class="page-hero-subtitle">Drop-off dates, volunteer days, and donation drives.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    {% assign now = site.time | date: "%Y-%m-%d" %}
    {% assign sorted_events = site.events | sort: "date" %}
    {% assign has_upcoming = false %}
    {% assign has_past = false %}

    <h2>Upcoming Events</h2>
    <div class="events-grid">
      {% for event in sorted_events %}
        {% assign event_date = event.date | date: "%Y-%m-%d" %}
        {% if event_date >= now %}
        {% assign has_upcoming = true %}
        <article class="event-card">
          <div class="event-card-date">
            <span class="event-month">{{ event.date | date: "%b" }}</span>
            <span class="event-day">{{ event.date | date: "%d" }}</span>
          </div>
          <div class="event-card-content">
            <h3><a href="{{ event.url | relative_url }}">{{ event.title }}</a></h3>
            {% if event.location %}<p class="event-location">{{ event.location }}</p>{% endif %}
            {% if event.event_type %}<span class="event-type-badge">{{ event.event_type }}</span>{% endif %}
          </div>
        </article>
        {% endif %}
      {% endfor %}
    </div>
    {% unless has_upcoming %}
    <p style="text-align: center; color: var(--gray);">No upcoming events scheduled. Check back soon!</p>
    {% endunless %}
  </div>
</section>
