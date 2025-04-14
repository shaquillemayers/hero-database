exports.handler = async (event) => {
  const { heroName } = event.queryStringParameters;
  const API_KEY = process.env.SUPERHERO_API_KEY;

  try {
    const response = await fetch(`https://www.superheroapi.com/api/${API_KEY}/search/${heroName}`);
    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong on the server." }),
    };
  }
};
