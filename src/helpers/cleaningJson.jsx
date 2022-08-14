export const cleanedArray = array =>
  array.map(({ title, poster_path: poster, vote_average: vote, id }) => ({
    title,
    poster,
    vote,
    id,
    watched: false,
  }));
