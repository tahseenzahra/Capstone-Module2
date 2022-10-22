const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RKHWm1KUzqGmx0UP3nkk/likes';
const BASE = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

// Get All Likes
const getLikes = async () => {
  const response = await fetch(`${URL}`);
  return response;
};

// Add Like
const addLike = async (id) => {
  const response = await fetch(`${URL}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: id
    })
  });
  return response.text();
};

export { getLikes, addLike };