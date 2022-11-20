---
layout: default
title: Nos activités
permalink: /itineraires
comments: false
---

{% for itinerarie in site.data.sorties %}
{{itinerarie["إسم الخرجة"]}}
{{itinerarie["مؤطر الخرجة"]}}
{{itinerarie["صعوبة المسار"]}}
{{itinerarie["موثق الخرجة"]}}
 
{% endfor %}


https://docs.google.com/forms/d/e/1FAIpQLSeM3vY1H5a1cSg4ewxsy8I8CHVK_7KCvr6C1KUrtSidxcaapg/viewform?usp=pp_url

<section class="recent-posts">
    <div class="section-title">
        <h2 id="facile"><span>سهل</span></h2>
    </div>
    <div class="row listrecent">
 {% for activity in site.itineraries %}
 {% if activity.difficulty == 'سهل'   %}
 {% include itinerarybox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>

<section class="recent-posts">
    <div class="section-title">
        <h2 id="facile"><span>سهل إلى متوسط</span></h2>
    </div>
    <div class="row listrecent">
 {% for activity in site.itineraries %}
 {% if activity.difficulty == 'سهل إلى متوسط'   %}
 {% include itinerarybox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>

<section class="recent-posts">
    <div class="section-title">
        <h2 id="facile"><span>متوسط </span></h2>
    </div>
    <div class="row listrecent">
 {% for activity in site.itineraries %}
 {% if activity.difficulty == 'متوسط'   %}
 {% include itinerarybox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>

<section class="recent-posts">
    <div class="section-title">
        <h2 id="facile"><span>  متوسط إلى صعب      </span></h2>
    </div>
    <div class="row listrecent">
 {% for activity in site.itineraries %}
 {% if activity.difficulty == 'متوسط إلى صعب'   %}
 {% include itinerarybox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>
 
 <section class="recent-posts">
    <div class="section-title">
        <h2 id="facile"><span>صعب </span></h2>
    </div>
    <div class="row listrecent">
 {% for activity in site.itineraries %}
 {% if activity.difficulty == 'صعب'   %}
 {% include itinerarybox.html %}
 {% endif %}
 {% endfor %} 
    </div>
</section>