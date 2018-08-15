json.extract! comment, :id, :body, :user_id, :artist_id
json.createdAt comment.created_at.strftime("%a %b %d")
