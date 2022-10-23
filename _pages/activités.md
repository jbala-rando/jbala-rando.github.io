---
layout: default
title: Nos activités
permalink: /activités
comments: false
---

{% assign activitiesNatures = '' | split: '' %}
{% for activity in site.activities %}
{% assign activitiesNatures = activitiesNatures | concat: activity.activityNatures   %}
{% endfor %}

{% for activityNature in activitiesNatures %}

<section class="recent-posts">
    <div class="section-title">
        <h2 id="{{ activityNature | replace: " ","-" }}"><span>{{  activityNature }}</span></h2>
    </div>
    <div class="row listrecent">
 {% for activity in site.activities %}
 {% if activity.activityNatures contains activityNature   %}
 {% include activitybox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>

{% endfor %}



