SELECT pr.name, pr.profile_photo, ph.id, ph.url, ph.profile_id, ph.timestamp, ph.caption FROM profiles pr
JOIN photos ph on pr.id = ph.profile_id
ORDER BY ph.timestamp DESC;