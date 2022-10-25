---
layout: default
title: Nos activités
permalink: /itineraires
comments: false
---


<section class="recent-posts">
    <div class="section-title">
        <h2 id="facile-accessible-à-tous"><span>سهل و في متناول الجميع</span></h2>
    </div>
    <div class="row listrecent">
 {% for activity in site.itineraries %}
 {% if activity.difficulty == 'سهل و في متناول الجميع'   %}
 {% include activitybox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>

<section class="recent-posts">
    <div class="section-title">
        <h2 id="facile"><span>سهل</span></h2>
    </div>
    <div class="row listrecent">
 {% for activity in site.itineraries %}
 {% if activity.difficulty == 'سهل'   %}
 {% include activitybox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>


