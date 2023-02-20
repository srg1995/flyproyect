export function FliesAdapter(flies) {
  const fliesAdapter = flies?.map((fly, index) => {
    let newFlies={}
    if (undefined !== fly) {
        newFlies = {
          id: fly.id,
          name: fly.name,
          type: fly.type,
          description: fly.descriptionOfFly,
          months: fly.months,
          size: fly.size,
          location: fly.location,
          image: fly.imageURL,
          hashtag: fly.hashtag,
        };
    }
    return newFlies;
  });


  return fliesAdapter;
}
