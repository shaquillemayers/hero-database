exports.handler = async (event) => {
  const { heroName } = event.queryStringParameters;
  const API_KEY = process.env.SUPERHERO_API_KEY;

  const response = await fetch(`https://www.superheroapi.com/api/${API_KEY}/search/${heroName}`);
  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
