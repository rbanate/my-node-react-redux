 export function authorsFormattedForDropdown(authors){
    return authors.map(author => {
    return {
      value: author._id,
      text: `${author.firstName} ${author.lastName}`
    };
  });
 }
