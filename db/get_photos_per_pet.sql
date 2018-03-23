SELECT * FROM photos 
WHERE profile_id = $1
ORDER BY timestamp DESC;