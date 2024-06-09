let pronouns = ["the", "our", "my", "la"];
let adjetives = ["great", "big", "last", "cueva"];
let noun = ["jogger", "racoon", "pizza", "Ofus", "delTio"];
let extensions = [".com", ".net", ".us", ".io"];

const names = [];

for (const pronoun of pronouns) {
  for (const adj of adjetives) {
    let thirdIndex = 0;
    while (thirdIndex < noun.length) {
      for (
        let fourthIndex = 0;
        fourthIndex < extensions.length;
        fourthIndex++
      ) {
        let domainName = pronoun + adj + noun[thirdIndex];
        if (domainName.endsWith(extensions[fourthIndex].replace(".", ""))) {
          domainName = domainName.slice(
            0,
            domainName.length - extensions[fourthIndex].replace(".", "").length
          );
        }
        names.push(`${domainName}${extensions[fourthIndex]}`);
      }
      thirdIndex++;
    }
  }
}

console.log("Generated Domain Names: ");
for (const name of names) {
  console.log(name);
}
